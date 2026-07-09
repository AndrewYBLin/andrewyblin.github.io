import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function useTypingEffect(words, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}

export default function Home() {
  const navigate = useNavigate();
  const typedRoles = ["Andrew Lin", "a UBC student", "a developer"];
  const dynamicText = useTypingEffect(typedRoles);

  const BoldUnderline = ({ children }) => (
    <span className="bold-underline">
      <span className="underline-text">{children}</span>
      <span className="underline-bar" aria-hidden="true" />
    </span>
  );

  const aboutPoints = [
    <>Computer Science & Biology @ <BoldUnderline>University of British Columbia</BoldUnderline></>,
    <>Interested in <BoldUnderline>web development &amp; AI/ML</BoldUnderline> and finding solutions to real problems</>,
    "Based out of Vancouver, passionate about building applications and data engineering"
  ];

  const previousExperience = [
    <>Built <BoldUnderline>UBCInsight</BoldUnderline>, a high-performance scalable TypeScript backend application</>,
    <>Co-developed <BoldUnderline>Journify AI</BoldUnderline>, a full-stack web application integrated with generative LLMs</>
  ];

  return (
    <div className="home-wrapper">
      <section className="about-section">
        <div className="hero-heading">
          <h1>
            Hi there! I'm <span className="dynamic-text">{dynamicText}</span>
            <span className="cursor">|</span>
          </h1>
        </div>

        {/* Clean, dependency-free raw SVG inline social matrix */}
        <div className="social-container">
          <a href="https://github.com/AndrewYBLin" target="_blank" rel="noreferrer" className="social-icon github-link" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/andrewyblin/" target="_blank" rel="noreferrer" className="social-icon linkedin-link" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="mailto:andrewyblin@gmail.com" className="social-icon email-link" title="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>

        <div className="content-lists">
          <div className="content-group">
            <h3 className="section-title">About me:</h3>
            <ul className="styled-list">
              {aboutPoints.map((point, index) => (
                <li key={index} className="list-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <span className="item-text">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="content-group">
            <h3 className="section-title">Previously I've:</h3>
            <ul className="styled-list">
              {previousExperience.map((experience, index) => (
                <li key={index} className="list-item" style={{ animationDelay: `${(index + 3) * 0.1}s` }}>
                  <span className="item-text">{experience}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="action-section">
        <button onClick={() => navigate("/projects")} className="fancy-btn">
          <span className="btn-text">See what else I've built</span>
          <span className="btn-arrow">→</span>
          <span className="fill-layer"></span>
        </button>
      </section>
    </div>
  );
}