import { useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      title: "UBCInsight",
      description:
        "A high-performance, scalable TypeScript backend application. Built with a modular architecture to ingest data feeds, parse query expressions, and analyze complex relational university datasets efficiently.",
      technologies: ["TypeScript", "Node.js", "REST API", "Mocha/Chai", "Git"],
      github: "https://github.com",
      demo: "#",
    },
    {
      title: "Journify AI",
      description:
        "Full-stack automated journaling dashboard integrated directly with generative language model APIs. Features stateful session management and prompt pipeline aggregations.",
      technologies: ["React", "Node.js", "Gemini API", "JavaScript", "CSS Grid"],
      github: "https://github.com",
      demo: "#",
    },
    {
      title: "Drag and Drop Scheduler",
      description:
        "Desktop calendar application built using pure Object-Oriented Design principles. Implements custom drag-and-drop mechanics and scheduling layouts via a desktop frame interface.",
      technologies: ["Java", "Java Swing", "OOP", "AWT Components"],
      github: "https://github.com",
      demo: "#",
    },
    {
      title: "Security Robot Tracker",
      description:
        "Embedded software pipeline featuring automated facial tracking and target monitoring. Built to bridge hardware signals with computer vision heuristics.",
      technologies: ["Python", "Raspberry Pi", "OpenCV", "Hardware Control"],
      github: "https://github.com",
      demo: "#",
    }
  ];

  // Dynamic filter processing block
  const filteredProjects = projects.filter((project) => {
    const query = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(query))
    );
  });

  return (
    <div className="projects-page-wrapper">
      <div className="projects-container">
        {/* Header Block */}
        <header className="projects-header">
          <h1 className="gradient-title">My Projects</h1>
          <p className="subtitle">
            A collection of projects I've built using various technologies and frameworks.
          </p>
        </header>

        {/* Pure SVG Inline Search Bar Component */}
        <div className="search-bar-wrapper">
          <div className="search-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for a project, technology, etc..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Dynamic Project Grid Layout */}
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="card-header">
                  <h3>{project.title}</h3>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="tech-tags-container">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="card-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link github">
                    GitHub
                  </a>
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="card-link demo">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No matches found for "{searchTerm}"</p>
            </div>
          )}
        </div>

        {/* External Subtitle Callout */}
        <footer className="additional-links">
          <p>
            You can check out the rest of my source repositories{" "}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              here
            </a>.
          </p>
        </footer>
      </div>
    </div>
  );
}