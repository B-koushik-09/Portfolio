import React, { useEffect, useState } from "react";
import "./App.css";
import profileImg from "./assets/photo.svg";
import eduImg from "./assets/edu.svg";
import certificateIcon from "./assets/certificate.svg";
import AOS from "aos";
import "aos/dist/aos.css";

// Skills Data grouped by categories
const skillsData = {
  "Programming Languages": ["C", "C++", "Java", "Python", "JavaScript"],

  "Web Technologies": [
    "HTML/CSS",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Flask",
    "MongoDB",
    "REST APIs",
    "Bootstrap"
  ],

  "Databases & Tools": [
    "MySQL",
    "Git",
    "GitHub",
    "VS Code"
  ],

  "AI & ML": [
    "CNN",
    "Transfer Learning",
    "Retrieval-Augmented Generation (RAG)",
    "LLM Integration"
  ],

  "Core Concepts": [
    "Data Structures & Algorithms",
    "OOPs",
    "Operating Systems",
    "Software Engineering"
  ],

  "Soft Skills": [
    "Quick Learner",
    "Time Management",
    "Problem Solving"
  ]
};

// Projects Data
const projectsData = [
  {
    title: "AI RAG Chatbot (Ongoing)",
    description:
      "Built a context-aware chatbot using a Retrieval-Augmented Generation pipeline with web scraping, embeddings, FAISS vector search, and LLM-based response generation to reduce hallucinations.",
    technologies: ["Python", "FAISS", "Ollama", "RAG", "LLM"],
    
  },
  {
    title: "Internship Platform",
    description:
      "Developed a full-stack MERN internship portal with authentication, profile management, applications, resume builder, subscription module, Razorpay integration, and RESTful APIs.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "REST APIs",
    ],
     github:"https://github.com/B-koushik-09/internarea",
  },
  {
    title: "Leaf Disease Detection",
    description:
      "Trained a CNN-based image classification model using transfer learning with preprocessing and augmentation, and integrated predictions with a simple frontend for image upload.",
    technologies: ["Python", "CNN", "Transfer Learning", "TensorFlow/Keras"],
     github:"https://github.com/B-koushik-09/agritech",
  },


  {
    title: "E-Waste Recycling Locator",
    description:
      "Connects users with certified e-waste centers with scheduled drop-off slots for efficient disposal.",
    technologies: ["HTML", "CSS", "JavaScript"],
     github:"https://github.com/B-koushik-09/E-waste-recyclers",
  },
  {
    title: "Weather Forecast Website",
    description:
      "Real-time weather forecasting app providing current conditions and forecasts based on user-input city or state.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

// Header Component with Responsive Menu
const Header = ({ scrollTo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleNavClick = (section) => {
    scrollTo(section.toLowerCase());
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h2 className="logo">&lt; B Koushik /&gt;</h2>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={handleMenuToggle}>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
        </div>

        {/* Navigation */}
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "Education", "Skills", "Projects", "Certificates", "Contact"].map(
            (sec) => (
              <button key={sec} onClick={() => handleNavClick(sec)}>
                {sec}
              </button>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

// Hero Section
const Hero = ({ scrollToSection }) => (
  <section id="home" className="hero">
    <div className="section-content hero-content">
      <div className="hero-left" data-aos="fade-right">
        <h2>Hi, I'm Koushik</h2>
        <h1>Transforming ideas into fast, accessible web apps.</h1>
        <p>
          Frontend developer using React & Vite — building responsive, maintainable
          interfaces and shipping production-ready features. Seeking internship/full-time
          roles in software development.
        </p>
        <div className="hero-buttons">
          <button className="btn" onClick={() => scrollToSection("projects")}>
            View Projects
          </button>
          <a href="/tpresume.pdf" className="btn" download>
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero-right" data-aos="fade-left">
        <img src={profileImg} alt="Koushik B" className="hero-image" />
      </div>
    </div>
  </section>
);

// Education Section
const Education = () => (
  <section id="education" className="education">
    <div className="section-content edu-content">
      <div className="edu-left" data-aos="fade-right">
        <h2>Education</h2>
        <div className="edu-card" data-aos="fade-up" data-aos-delay="100">
          <h3>B.Tech - Computer Science</h3>
          <p>VNRVJIET | 2024 - Present</p>
        </div>
        <div className="edu-card" data-aos="fade-up" data-aos-delay="200">
          <h3>Diploma</h3>
          <p>Nalgonda-Polytechnic College | 2021 - 2024</p>
        </div>
      </div>
      <div className="edu-right" data-aos="fade-left">
        <img src={eduImg} alt="Education Illustration" />
      </div>
    </div>
  </section>
);

// Skills Section
const Skills = () => (
  <section id="skills" className="skills">
    <div className="section-content">
      <h2 data-aos="fade-up">My Skills</h2>
      <div className="skills-categories">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skills-category" data-aos="fade-up">
            <h3>{category}</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill} className="skill-card">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Projects Section
const Projects = () => (
  <section id="projects" className="projects">
    <div className="section-content">
      <h2 data-aos="fade-up">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.title} className="project-card" data-aos="fade-up">
            <h3>{project.title}</h3>
            <span>{project.description}</span>
            <div className="tech-list">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                GitHub →
              </a>
            ) : (
              <span className="github-btn github-btn--na">No Repo</span>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Certificates Section
const certificatesData = [
  {
    title: "Microsoft Azure Internship – Emerging Technologies",
    issuer: "AICTE & Microsoft Elevate",
    year: "2026",
    link: "https://drive.google.com/file/d/1NWLdw1UmAX2ZGcJBKkU8f1Rmjnxnf79Z/view?usp=sharing",
  },
  {
    title: "Artificial Intelligence & Machine Learning – Course Completion",
    issuer: "AICTE & Microsoft Elevate",
    year: "2026",
    link: "https://drive.google.com/file/d/1V4SK9zcJuMX9BQn9ByLIQWglvuK3geS1/view?usp=sharing",
  },
  {
    title: "Diamond Coder – Data Structures & Algorithms",
    issuer: "Smart Interviews",
    year: "2025",
    link: "https://smartinterviews.in/certificate/7a8d4c79",
  },

  {
    title: "Programming Using C++",
    issuer: "Infosys Springboard",
    year: "2025",
    link: "https://drive.google.com/file/d/18m_rckBjIuAmSbZ45agoOJjGUmlJPxSB/view",
  },
  {
    title: "Java Fundamentals",
    issuer: "Infosys Springboard",
    year: "2024",
    link: "https://drive.google.com/file/d/1VNmuyqAiB3hP-smo0nAjBrSPVshVS7ty/view",
  },
];

const Certificates = () => (
  <section id="certificates" className="certificates">
    <div className="section-content certificates-content">
      <div className="certificates-left" data-aos="fade-right">
        <img src={certificateIcon} alt="Certificates Icon" className="certificates-section-icon" />
      </div>

      <div className="certificates-right" data-aos="fade-left">
        <h2>Certificates</h2>
        <div className="certificates-grid">
          {certificatesData.map((cert, index) => (
            <div key={index} className="certificate-card" data-aos="fade-up">
              <h3>{cert.title}</h3>
              <p>
                {cert.issuer} | {cert.year}
              </p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn">
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Contact Section
const Contact = () => (
  <section id="contact" className="contact">
    <h2 data-aos="fade-up">Contact Me</h2>
    <div className="contact-info">
      <div className="contact-card">
        <span>📧</span>
        <a href="mailto:koushikballa09@gmail.com">koushikballa09@gmail.com</a>
      </div>
      <div className="contact-card">
        <span>📞</span>
        <a href="tel:+919392858341">+91 9392858341</a>
      </div>
      <div className="contact-card">
        <span>💼</span>
        <a
          href="https://www.linkedin.com/in/koushik-balla-46799331b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div className="contact-card">
        <span>💻</span>
        <a href="https://github.com/B-koushik-09" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="footer">
    <p>&copy; 2025 &nbsp; Koushik B</p>
  </footer>
);

// Main App
const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="app">
      <Header scrollTo={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
