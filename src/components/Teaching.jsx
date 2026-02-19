import { useRef, useEffect } from "react";
import "../App.css";

function Teaching() {
  const revealsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.1 },
    );

    // Capture the current value of revealsRef.current
    const currentRevealsRef = revealsRef.current;

    currentRevealsRef.forEach((reveal) => {
      observer.observe(reveal);
    });

    return () => {
      // Use the captured value in the cleanup function
      currentRevealsRef.forEach((reveal) => {
        observer.unobserve(reveal);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !revealsRef.current.includes(el)) {
      el.style.transitionDelay = `${Math.min(revealsRef.current.length * 70, 350)}ms`;
      revealsRef.current.push(el);
    }
  };
  return (
    <div className="teaching" aria-labelledby="teaching-heading">
      <h1 id="teaching-heading" ref={addToRefs} className="reveal">
        Teaching
      </h1>
      <div ref={addToRefs} className="teaching-item reveal">
        <div className="teaching-image">
          <img src="images/cseuta_logo.jpeg" alt="UTA" />
        </div>
        <div className="teaching-content">
          <h3>Graduate Teaching Assistant</h3>
          <h4>
            University of Texas Arlington | <em>August 2023 - May 2024</em>
          </h4>
          <div className="company-links">
            <a
              className="company-link company-link--teaching"
              href="https://www.uta.edu/"
              target="_blank"
              rel="noreferrer"
            >
              uta.edu
            </a>
          </div>
          <ul className="portfolio-li">
            <li>
              Graduate Teaching Assistant for the courses CSE 5311 - Design and
              Analysis of Algorithms (Fall 2023) and CSE 6332 - Cloud
              Computing and Big Data (Spring 2024).
            </li>
            <li>
              Facilitating classroom instruction, conducting thorough exam
              reviews, overseeing the grading process, and ensuring the proper
              proctoring of examinations. Additionally, organizing scheduled
              office hours to provide dedicated support to students on their
              projects and conducting sessions focused on clearing doubts and
              queries.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Teaching;
