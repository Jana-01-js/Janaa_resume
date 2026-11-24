# Janarthanan R — Portfolio

A responsive, static portfolio built with HTML, CSS and vanilla JavaScript. No build step or package installation is required.

## Project structure

```text
index.html          page structure and metadata
css/style.css       responsive visual design
js/app.js           portfolio rendering and interactions
js/data.js          profile, project, education and credential content
assets/             optional images and other static assets
certificates/       certificate PDFs linked from the portfolio
resumes/            downloadable software and AI/ML resumes
```

## Update portfolio content

Edit `js/data.js` to update profile details, social links, skills, projects, experience, education, credentials or section visibility. Add certificate PDFs to `certificates/` and reference their filenames in the `certifications` list. Keep the two resume PDFs in `resumes/` with the filenames already referenced by each profile.

Project GitHub and demo links are displayed only when a real URL is supplied in the project data.

## Run locally

From this directory, start a static server:

```powershell
py -m http.server 8000
```

Then open <http://localhost:8000>.

## Publish with GitHub Pages

1. Use the `Janaa_resume` repository under `Jana-01-js`.
2. Push this folder's contents to the repository's `main` branch.
3. In repository **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`, and save.
4. The site should be available at <https://jana-01-js.github.io/Janaa_resume/>.

This folder must be initialized as a Git repository and connected to the correct GitHub remote before it can be pushed.
