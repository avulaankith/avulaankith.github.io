import { useRef, useEffect } from 'react';
import ProjectItem from './ProjectItem';
import '../App.css';
import projects from './ProjectsData';

function Project() {
  const revealsRef = useRef([]);
  const featuredWorkTitles = [
    "TWITTER SENTIMENT ANALYSIS",
    "HIGHWAY LANE SEGMENTATION",
    "MULTI-LABEL CLASSIFICATION FOR LAND COVER DETECTION",
    "ATS Resume Scorer",
  ];
  const featuredWork = featuredWorkTitles
    .map((title) => projects.find((project) => project.title === title))
    .filter(Boolean);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.1 }
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
    <div className="portfolio">
      <h1 ref={addToRefs} className="reveal">Projects</h1>
      <div ref={addToRefs} className="featured-work reveal">
        <div className="featured-work-header">
          <h2>Featured Work</h2>
          <p>Selected projects with practical data + ML impact.</p>
        </div>
        <div className="featured-work-grid">
          {featuredWork.map((project) => (
            project.githubLink ? (
              <a
                key={project.title}
                className="featured-work-tile"
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
              >
                <span>{project.title}</span>
                <small>Open Repo ↗</small>
              </a>
            ) : (
              <div key={project.title} className="featured-work-tile is-static">
                <span>{project.title}</span>
                <small>Project summary available</small>
              </div>
            )
          ))}
        </div>
      </div>

      {projects.map((project, index) => (
        <div
          key={index}
          ref={addToRefs}
          className={`portfolio-item reveal${project.imageSrc ? "" : " no-image"}`}
        >
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            altText={project.altText}
            githubLink={project.githubLink}
            imageClass={project.imageClass}
          />
        </div>
      ))}


    </div>
  );
}

export default Project;
