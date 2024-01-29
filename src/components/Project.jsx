import { useRef, useEffect } from 'react';
import ProjectItem from './ProjectItem';
import '../App.css';
import projects from './ProjectsData';


function Project() {
  const revealsRef = useRef([]);

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
      revealsRef.current.push(el);
    }
  };


  return (
    <div className="portfolio">
      <h1 ref={addToRefs} className="reveal">Projects</h1>
      
      {projects.map((project, index) => (
        <div key={index} ref={addToRefs} className="portfolio-item reveal">
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
