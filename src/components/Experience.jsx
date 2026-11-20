import { useRef, useEffect } from "react";
import "../App.css";
import { experience } from "../content/portfolio";

function Experience() {
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
    <div className="experience" aria-labelledby="experience-heading">
      <h1 id="experience-heading" ref={addToRefs} className="reveal">
        Experience
      </h1>
      <div ref={addToRefs} className="experience-item reveal">
        <div className="experience-image">
          <img src="images/August IT Logo.webp" alt="August IT" />
        </div>
        <div className="experience-content">
          <h3>{experience[0].role}</h3>
          <h4>
            August IT | <em>April 2025 - Present</em>
          </h4>
          <ul className="portfolio-li">
            {experience[0].bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
          <div className="tag-list" aria-label="August IT technologies">
            {experience[0].technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
          </div>
          <div className="company-links">
            <a
              className="company-link company-link--work"
              href="https://www.august-it.net/"
              target="_blank"
              rel="noreferrer"
            >
              august-it.net
            </a>
          </div>
        </div>
      </div>
      <div ref={addToRefs} className="experience-item reveal">
        <div className="experience-image">
          <img
            src="images/Astrosoft Technologies Logo.jpeg"
            alt="Astrosoft Technologies"
          />
        </div>
        <div className="experience-content">
          <h3>{experience[1].role}</h3>
          <h4>
            Astrosoft Technologies | <em>January 2025 - April 2025</em>
          </h4>
          <ul className="portfolio-li">
            {experience[1].bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
          <div className="tag-list" aria-label="Astrosoft Technologies technologies">
            {experience[1].technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
          </div>
          <div className="company-links">
            <a
              className="company-link company-link--work"
              href="https://www.astrosofttech.com/"
              target="_blank"
              rel="noreferrer"
            >
              astrosofttech.com
            </a>
          </div>
        </div>
        {/* <p>Worked on developing and maintaining web applications using JavaScript and React.</p> */}
      </div>
      <div ref={addToRefs} className="experience-item reveal">
        <div className="experience-image">
          <img src="images/cseuta_logo.jpeg" alt="UTA" />
        </div>
        <div className="experience-content">
          <h3>{experience[2].role}</h3>
          <h4>
            {experience[2].company} | <em>{experience[2].dates}</em>
          </h4>
          <div className="company-links">
            <a
              className="company-link company-link--work"
              href="https://www.uta.edu/"
              target="_blank"
              rel="noreferrer"
            >
              uta.edu
            </a>
          </div>
          <ul className="portfolio-li">
            {experience[2].bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
          <div className="tag-list" aria-label={`${experience[2].company} technologies`}>
            {experience[2].technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
          </div>
        </div>
        {/* <p>Worked on developing and maintaining web applications using JavaScript and React.</p> */}
      </div>
      <div ref={addToRefs} className="experience-item reveal">
        <div className="experience-image">
          <img src="images/Samsung-Logo728_410.jpg" alt="Samsung" />
        </div>
        <div className="experience-content">
          <h3>{experience[3].role}</h3>
          <h4>
            {experience[3].company} | <em>{experience[3].dates}</em>
          </h4>
          <div className="company-links">
            <a
              className="company-link company-link--work"
              href="https://www.samsungprism.com/"
              target="_blank"
              rel="noreferrer"
            >
              samsungprism.com
            </a>
          </div>
          <ul className="portfolio-li">
            {experience[3].bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
          <div className="tag-list" aria-label={`${experience[3].company} technologies`}>
            {experience[3].technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
          </div>
        </div>
        {/* <p>Worked on developing and maintaining web applications using JavaScript and React.</p> */}
      </div>
      <div ref={addToRefs} className="experience-item reveal">
        <div className="experience-image">
          <img src="images/1551097732795.jpeg" alt="Ismriti" />
        </div>
        <div className="experience-content">
          <h3>Data Science Intern</h3>
          <h4>
            Ismriti - IIT Kanpur | <em>June 2019 - July 2019</em>
          </h4>
          <p className="experience-impact">
            Impact: Developed a real-time emotion recognition prototype with
            CNNs and improved class balance robustness.
          </p>
          <div className="company-links">
            <a
              className="company-link company-link--work"
              href="https://www.linkedin.com/company/ismrititek/?originalSubdomain=in"
              target="_blank"
              rel="noreferrer"
            >
              ismrititek
            </a>
          </div>
          <ul className="portfolio-li">
            <li>
              Developed a real-time facial emotion recognition system that
              recognizes and classifies the live facial emotion of the user
              using Python, CNN, TensorFlow, and OpenCV
            </li>
            <li>
              Solved the data scarcity and class imbalance problem by
              augumenting the data, dataset creation and increasing the size of
              samples which have very less representation among other classes to
              make the model unbiased.
            </li>
            <li>
              Integrated the model with OpenCV for dynamic, real-time emotion
              detection, optimizing for real-world scenarios with improved
              performance and precision.
            </li>
          </ul>
        </div>
        {/* <p>Collaborated with various clients to create custom websites and web applications.</p> */}
      </div>
    </div>
  );
}

export default Experience;
