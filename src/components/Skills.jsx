// Skills.jsx
import { useRef, useEffect } from 'react';
import skills from './SkillsData'; // Adjust the path as needed
import '../App.css';

function Skills() {
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
    <div ref={addToRefs} className="skills reveal">
      <h1>Skills</h1>
      <div className="skills-section">
        {skills.map((skillRow, rowIndex) => (
          <ul key={rowIndex} className="skills-list">
            {skillRow.map((skill, index) => (
              <li key={index} className="skill-item">
                <img className='skill-icon' src={skill.imageSrc} alt={skill.name} />
                <div className="skill-tooltip">{skill.name}</div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Skills;
