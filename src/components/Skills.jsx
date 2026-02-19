// Skills.jsx
import { useRef, useEffect, useState } from "react";
import skills from './SkillsData'; // Adjust the path as needed
import "../App.css";

function SkillIcon({ skill }) {
  const [hasError, setHasError] = useState(false);
  const label = skill.altText || skill.name;

  if (hasError) {
    return (
      <div className="skill-icon-fallback" aria-label={label} role="img">
        {skill.name}
      </div>
    );
  }

  return (
    <img
      className="skill-icon"
      src={skill.imageSrc}
      alt={label}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}

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
      el.style.transitionDelay = `${Math.min(revealsRef.current.length * 70, 350)}ms`;
      revealsRef.current.push(el);
    }
  };

  return (
    <div ref={addToRefs} className="skills reveal" aria-labelledby="skills-heading">
      <h1 id="skills-heading">Skills</h1>
      <div className="skills-section">
        {skills.map((group) => {
          const featuredSet = new Set(group.featured || []);
          const featuredSkills = group.skills.filter((skill) => featuredSet.has(skill.name));
          const secondarySkills = group.skills.filter((skill) => !featuredSet.has(skill.name));
          const orderedSkills = [...featuredSkills, ...secondarySkills];

          return (
            <section
              key={group.title}
              className={`skills-group ${group.type === "cloud" ? "skills-group--cloud" : ""}`}
            >
              <header className="skills-group-header">
                <h2>
                  {group.type === "cloud" && group.iconSrc ? (
                    <span
                      className={`cloud-chip ${group.title === "AWS" ? "cloud-chip--aws" : ""}`}
                      aria-hidden="true"
                    >
                      <img src={group.iconSrc} alt={group.iconAlt || group.title} />
                    </span>
                  ) : group.type === "cloud" ? (
                    <span className="cloud-chip" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M7.8 18a4.8 4.8 0 0 1-.35-9.58A6.2 6.2 0 0 1 19 10.25a3.9 3.9 0 1 1-.35 7.75H7.8Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  ) : null}
                  {group.title}
                </h2>
                {group.subtitle ? <p>{group.subtitle}</p> : null}
              </header>

              <ul className="skills-chip-list">
                {orderedSkills.map((skill) => (
                  <li
                    key={skill.name}
                    className={`skill-chip ${featuredSet.has(skill.name) ? "skill-chip--featured" : ""}`}
                  >
                    <SkillIcon skill={skill} />
                    <span className="skill-label">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
