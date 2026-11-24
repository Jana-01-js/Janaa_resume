(function () {
  "use strict";

  const portfolio = window.PORTFOLIO;
  if (!portfolio) {
    console.error("Portfolio content did not load.");
    return;
  }

  const $ = (selector, root = document) => root.querySelector(selector);
  const esc = value => String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));

  const navItems = [
    ["about", "About"],
    ["skills", "Toolkit"],
    ["projects", "Work"],
    ["experience", "Experience"],
    ["education", "Education"],
    ["certifications", "Credentials"],
    ["contact", "Contact"]
  ];

  let profile = "dev";
  let selectedSkill = "";
  let query = "";
  try {
    const savedProfile = localStorage.getItem("profile");
    if (savedProfile && portfolio.profiles[savedProfile]) profile = savedProfile;
  } catch (error) {
    console.warn("Could not read the saved portfolio profile.", error);
  }

  $("#nav-list").innerHTML = navItems
    .filter(([id]) => portfolio.visibility[id] !== false)
    .map(([id, label]) => `<li><a href="#${id}">${esc(label)}</a></li>`)
    .join("");

  Object.entries(portfolio.visibility).forEach(([id, visible]) => {
    const section = document.getElementById(id);
    if (section && !visible) section.hidden = true;
  });

  const socialMarkup = portfolio.social.map(item =>
    `<a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">${esc(item.label)} ↗</a>`
  ).join("");
  $("#social-links").innerHTML = socialMarkup;
  $("#contact-social-links").innerHTML = socialMarkup;

  $("#contact-email").textContent = portfolio.email;
  $("#contact-email").href = `mailto:${encodeURIComponent(portfolio.email)}`;
  $("#email-button").href = `mailto:${encodeURIComponent(portfolio.email)}`;
  $("#year").textContent = new Date().getFullYear();

  $("#stats").innerHTML = portfolio.stats.map(stat =>
    `<div class="stat"><strong>${esc(stat.n)}</strong><span>${esc(stat.l)}</span></div>`
  ).join("");

  $("#experience-list").innerHTML = portfolio.experience.map(item =>
    `<article class="timeline-item">
      <div class="timeline-date">${esc(item.when)}</div>
      <div><h3>${esc(item.role)}</h3><p class="timeline-org">${esc(item.org)}</p></div>
    </article>`
  ).join("");

  $("#education-list").innerHTML = portfolio.education.map(item =>
    `<article class="timeline-item">
      <div class="timeline-date">${esc(item.when)}</div>
      <div><h3>${esc(item.title)}</h3><p class="timeline-org">${esc(item.org)}</p><p class="timeline-note">${esc(item.note)}</p></div>
    </article>`
  ).join("");

  $("#certification-list").innerHTML = portfolio.certifications.map(item => {
    const file = `certificates/${encodeURIComponent(item.file)}`;
    return `<a class="credential" href="${file}" target="_blank" rel="noopener noreferrer">
      <span><h3>${esc(item.title)}</h3><p>${esc(item.org)} · ${esc(item.note)}</p></span>
      <span class="credential-open">VIEW PDF ↗</span>
    </a>`;
  }).join("");

  $("#agile-list").innerHTML = portfolio.agile.map(item =>
    `<span class="tag">${esc(item)}</span>`
  ).join("");

  function renderSkills() {
    const skills = portfolio.profiles[profile].skills;
    $("#skills-grid").innerHTML = Object.entries(skills).map(([category, items]) =>
      `<div class="skill-group">
        <h3>${esc(category)}</h3>
        <div class="skill-tags">${items.map(item =>
          `<button class="skill-tag" type="button" data-skill="${esc(item)}" aria-pressed="${selectedSkill === item}">${esc(item)}</button>`
        ).join("")}</div>
      </div>`
    ).join("");
  }

  function renderProjects() {
    const matching = portfolio.projects.filter(project => {
      const inProfile = project.profiles.includes(profile);
      const inSkill = !selectedSkill || project.tech.includes(selectedSkill);
      const searchable = `${project.title} ${project.sub} ${project.desc} ${project.tech.join(" ")}`.toLowerCase();
      return inProfile && inSkill && (!query || searchable.includes(query));
    });

    $("#project-grid").innerHTML = matching.map(project => {
      const originalIndex = portfolio.projects.indexOf(project) + 1;
      const features = project.features.slice(0, 4).map(feature => `<li>${esc(feature)}</li>`).join("");
      const techTags = project.tech.map(technology => `<span class="tag">${esc(technology)}</span>`).join("");
      const links = [
        project.github && `<a href="${esc(project.github)}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`,
        project.demo && `<a href="${esc(project.demo)}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>`
      ].filter(Boolean).join("");

      return `<article class="project-card">
        <div class="project-topline"><span class="project-number">PROJECT / ${String(originalIndex).padStart(2, "0")}</span><span>${esc(project.profiles.join(" + ").toUpperCase())}</span></div>
        <h3>${esc(project.title)}</h3>
        <p class="project-subtitle">${esc(project.sub)}</p>
        <p class="project-description">${esc(project.desc)}</p>
        ${features ? `<ul class="project-features">${features}</ul>` : ""}
        <div class="tag-list">${techTags}</div>
        ${links ? `<div class="project-links">${links}</div>` : ""}
      </article>`;
    }).join("");

    $("#empty-projects").hidden = matching.length > 0;
  }

  function renderProfile() {
    const details = portfolio.profiles[profile];
    $("#intro").textContent = details.intro;
    $("#headline").textContent = details.headline;
    $("#about-lead").textContent = details.about[0];
    $("#about-copy").innerHTML = details.about.slice(1).map(paragraph => `<p>${esc(paragraph)}</p>`).join("");
    $("#terminal").innerHTML = details.terminal;
    $("#resume-link").href = details.resume;
    $("#resume-link").setAttribute("download", "");

    const chips = details.chips.slice(0, 4);
    ["#chip-one", "#chip-two", "#chip-three", "#chip-four"].forEach((selector, index) => {
      $(selector).textContent = chips[index] || "";
      $(selector).hidden = !chips[index];
    });
    document.querySelectorAll("[data-profile]").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.profile === profile));
    });

    selectedSkill = "";
    $("#clear-filter").hidden = !query;
    renderSkills();
    renderProjects();
  }

  document.querySelectorAll("[data-profile]").forEach(button => {
    button.addEventListener("click", () => {
      if (button.dataset.profile === profile) return;
      profile = button.dataset.profile;
      try {
        localStorage.setItem("profile", profile);
      } catch (error) {
        console.warn("Could not save the selected portfolio profile.", error);
      }
      renderProfile();
    });
  });

  $("#skills-grid").addEventListener("click", event => {
    const button = event.target.closest("[data-skill]");
    if (!button) return;
    selectedSkill = selectedSkill === button.dataset.skill ? "" : button.dataset.skill;
    $("#clear-filter").hidden = !query && !selectedSkill;
    renderSkills();
    renderProjects();
    if (selectedSkill) $("#projects").scrollIntoView({ behavior: "smooth" });
  });

  $("#project-search").addEventListener("input", event => {
    query = event.target.value.trim().toLowerCase();
    $("#clear-filter").hidden = !query && !selectedSkill;
    renderProjects();
  });

  $("#clear-filter").addEventListener("click", () => {
    query = "";
    selectedSkill = "";
    $("#project-search").value = "";
    $("#clear-filter").hidden = true;
    renderSkills();
    renderProjects();
  });

  $("#copy-email").addEventListener("click", async () => {
    const status = $("#copy-status");
    try {
      await navigator.clipboard.writeText(portfolio.email);
      status.textContent = "Email copied to clipboard.";
    } catch (error) {
      status.textContent = "Copy unavailable. Use the email link above.";
      console.warn("Could not copy the contact email.", error);
    }
  });

  const menuButton = $("#menu-toggle");
  const nav = $("#nav");
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  });
  nav.addEventListener("click", event => {
    if (!event.target.closest("a")) return;
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
  });

  const root = document.documentElement;
  const themeButton = $("#theme-toggle");
  function applyTheme(theme) {
    root.dataset.theme = theme;
    themeButton.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }
  try {
    applyTheme(localStorage.getItem("theme") === "light" ? "light" : "dark");
  } catch (error) {
    applyTheme("dark");
    console.warn("Could not read the saved color theme.", error);
  }
  themeButton.addEventListener("click", () => {
    const theme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.warn("Could not save the selected color theme.", error);
    }
  });

  const progress = $("#progress");
  function updateScrollUI() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  }
  window.addEventListener("scroll", updateScrollUI, { passive: true });
  updateScrollUI();

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }), { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

    const activeObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".site-nav a").forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }), { rootMargin: "-45% 0px -48% 0px" });
    document.querySelectorAll("main section[id]").forEach(section => activeObserver.observe(section));
  } else {
    document.querySelectorAll(".reveal").forEach(element => element.classList.add("is-visible"));
  }

  renderProfile();
})();
