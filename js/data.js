/* Portfolio content and profile details. */
window.PORTFOLIO = {
  name: "Janarthanan R",
  email: "janapersonal01@gmail.com",
  phone: "+91 81225 99306",
  location: "Coimbatore, Tamil Nadu, India",
  social: [
    {key:"github", label:"GitHub", url:"https://github.com/Jana-01-js"},
    {key:"linkedin", label:"LinkedIn", url:"https://www.linkedin.com/in/janarthanan-rajan"},
    {key:"leetcode", label:"LeetCode", url:"https://leetcode.com/u/Janarthanan_01/"},
    {key:"instagram", label:"Instagram", url:"https://www.instagram.com/janaa__404"},
    {key:"whatsapp", label:"WhatsApp", url:"https://wa.me/918122599306"}
  ],
  visibility:{about:true,skills:true,projects:true,experience:true,education:true,certifications:true,agile:true,contact:true},
  profiles:{
    dev:{headline:"Software Developer | Full Stack Developer",resume:"resumes/resume-software-developer.pdf",
      intro:"I'm a Computer Science and Engineering student passionate about building practical software applications, intelligent systems, and technology-driven solutions.",
      about:["I'm a final-year Computer Science and Engineering student at SNS College of Technology, Coimbatore, graduating in 2027 with a CGPA of 7.98.","I build full-stack applications with React, Express.js, FastAPI and Flask, backed by MySQL, MongoDB and SQLite, and I'm comfortable with Data Structures, OOP and DBMS fundamentals.","I'm looking for software engineering roles where I can keep learning while shipping useful products."],
      terminal:`<span class="c">// api/auth.ts</span>\n<span class="k">const</span> token = jwt.sign(\n  { id: user.id, role: user.role },\n  process.env.JWT_SECRET\n);\n<span class="k">await</span> audit.log(<span class="s">"login"</span>, user.id);`,
      chips:["React","TypeScript","Express.js","FastAPI","MongoDB"],
      skills:{"Programming":["Python","JavaScript","TypeScript","SQL"],"Frontend":["React.js","React Router","HTML","CSS","Bootstrap","Tailwind CSS"],"Backend":["FastAPI","Flask","Express.js","REST APIs","JWT Authentication"],"Databases":["MySQL","MongoDB","SQLite"],"Computer Science":["Data Structures and Algorithms","Object-Oriented Programming","DBMS"],"Tools":["Git","GitHub","VS Code"]}},
    ai:{headline:"AI / Machine Learning Engineer",resume:"resumes/resume-ai-ml-engineer.pdf",
      intro:"I'm a Computer Science and Engineering student passionate about building practical software applications, intelligent systems, and technology-driven solutions.",
      about:["I'm a final-year Computer Science and Engineering student at SNS College of Technology, Coimbatore, graduating in 2027 with a CGPA of 7.98.","My AI/ML work covers machine learning fundamentals, retrieval-augmented generation with the Gemini API, and computer vision such as face detection and image recognition, served through Python APIs.","I'm looking for AI/ML roles where I can apply these skills to real problems."],
      terminal:`<span class="c"># rag/answer.py</span>\nchunks = retrieve(query, user.role)\nprompt = build_prompt(query, chunks)\nanswer = gemini.generate(prompt)\n<span class="k">return</span> answer, cite(chunks)`,
      chips:["RAG","Gemini API","Computer Vision","Python","Flask"],
      skills:{"Programming":["Python","SQL","JavaScript","TypeScript"],"AI / ML":["Machine Learning Fundamentals","Regression","Classification","Retrieval-Augmented Generation","Gemini API"],"Computer Vision":["Face Detection","Image Recognition"],"Backend and Data":["FastAPI","Flask","REST APIs","MySQL","MongoDB","SQLite","Power BI"],"Tools":["Jupyter Notebook","Google Colab","Git","GitHub","VS Code"]}}
  },
  typed:["Building Web Applications","Exploring Artificial Intelligence","Developing Intelligent Systems","Solving Real-World Problems"],
  stats:[{n:7.98,d:2,l:"CGPA"},{n:4,l:"Projects"},{n:2,l:"Internships"},{n:13,l:"Certificates"}],
  projects:[
   {title:"EnterpriseIQ",sub:"AI-Powered Enterprise Knowledge Management System Using RAG",profiles:["dev","ai"],tech:["React","TypeScript","Express.js","JWT","Gemini API"],
    desc:"A role-governed enterprise knowledge platform that lets employees search documents and receive AI-generated answers grounded in retrieved document passages.",
    features:["Retrieval-Augmented Generation","Document upload and indexing","Document chunking","Relevance-ranked search","Gemini API integration","JWT authentication","Bcrypt password hashing","Role-based access control (Admin, Manager, Employee)","Department-level filtering","Public, Department Only, Managers Only and Restricted document access","Source citations","Audit logging"],
    flow:["Upload document","Chunk and index","Rank by relevance","Check role and access","Gemini answer","Cited response"],github:"",demo:""},
   {title:"Cattle Scope",sub:"AI-Based Livestock Management",profiles:["dev","ai"],tech:["Python","FastAPI","Gemini Vision API","React","MongoDB"],
    desc:"A livestock management application that identifies cattle breeds and analyses disease classes from images.",
    features:["Identification of 12 cattle breeds","Analysis of 9 disease classes","Confidence scores","JWT authentication","Google OAuth","Prediction history","Analytics dashboard","PDF diagnostic reports"],github:"",demo:""},
   {title:"Smart Face Detection and Attendance System",sub:"Computer vision attendance",profiles:["dev","ai"],tech:["Python","Face Detection","Computer Vision"],
    desc:"A Python-based attendance application using face detection and computer vision techniques.",features:[],github:"",demo:""},
   {title:"AI Resume Analyzer",sub:"Resume skill coverage scoring",profiles:["ai"],tech:["Python","Flask","SQLite"],
    desc:"A web app that reads uploaded resumes and scores how well they cover technical skills.",
    features:["Resume upload","Technical skill extraction using keyword matching","ATS-style skill coverage scoring","User login"],github:"",demo:""}
  ],
  experience:[
   {role:"Machine Learning Intern",org:"Bytexl",when:"December 2025 – January 2026"},
   {role:"Python Intern",org:"Ascentz Technologies",when:"July 2024 – August 2024"}
  ],
  education:[
   {title:"B.E. Computer Science and Engineering",org:"SNS College of Technology, Coimbatore",when:"October 2023 – Present",note:"CGPA: 7.98"},
   {title:"Higher Secondary (HSC)",org:"Vivekam Matric Higher Secondary School",when:"2022–2023",note:"80%"},
   {title:"Secondary School (SSLC)",org:"Vivekam Matric Higher Secondary School",when:"2020–2021",note:"Pass (COVID-era assessment; percentage unavailable)"}
  ],
  certifications:[
   {title:"Google",org:"PrepInsta",note:"Issued 2 October 2026",file:"google.pdf"},
   {title:"Zoho",org:"PrepInsta",note:"Issued 2 October 2026",file:"zoho.pdf"},
   {title:"Fundamentals of Artificial Intelligence",org:"NPTEL (IIT Guwahati)",note:"65% · Jul–Oct 2026",file:"nptel-ai.pdf"},
   {title:"TSM-Technova 2026 National AI Innovation Challenge",org:"Participation · Coimbatore zonal round",note:"17 September 2026",file:"technova.pdf"},
   {title:"GitHub",org:"PrepInsta",note:"Issued 21 July 2026",file:"github.pdf"},
   {title:"Microsoft Azure Data Fundamentals (DP-900)",org:"Microsoft",note:"Issued 12 January 2026",file:"az-data.pdf"},
   {title:"Microsoft Azure AI Fundamentals (AI-900)",org:"Microsoft",note:"Issued 16 September 2025",file:"az-ai.pdf"},
   {title:"National Financial Literacy Quiz 2025",org:"NISM · SEBI · Participation",note:"2025",file:"nism.pdf"},
   {title:"Human Computer Interaction",org:"NPTEL (IIT Delhi)",note:"76% · Jan–Apr 2025",file:"hci.pdf"},
   {title:"Data Analytics",org:"PrepInsta",note:"Issued 6 December 2024",file:"analytics.pdf"},
   {title:"Data Science",org:"PrepInsta",note:"Issued 27 September 2024",file:"science.pdf"},
   {title:"Ethical Hacking",org:"PrepInsta",note:"Issued 14 June 2024",file:"hacking.pdf"},
   {title:"DSA in C",org:"PrepInsta",note:"Issued 6 May 2024",file:"dsa.pdf"}
  ],
  agile:["Agile Software Development","Scrum Framework","Sprint Planning","Daily Stand-ups","Sprint Reviews","Sprint Retrospectives","Product Backlog","User Stories","Iterative Development","Team Collaboration"]
};
