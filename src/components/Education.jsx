import { useRef, useEffect } from 'react';
import '../App.css'

function Education() {
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
    <div className="education">
      <h1 ref={addToRefs} className="reveal">Education</h1>
      <div ref={addToRefs} className="education-item reveal">
        <div className="education-image">
          <img src="images/orange-logo-on-blue.jpg" alt="UTA" />
        </div>
        <h3>Master of Science in Computer Science</h3>
        <h4>
          University of Texas Arlington | <em>August 2022 - May 2024</em>
        </h4>
        <p>
          Relevant coursework: Algorithms, Web Data Management, Cloud
          Computing and Big Data, Machine Learning, Data Mining, Software
          Engineering, Data Analysis and Modelling Techniques, Distributed
          Systems
        </p>
      </div>
      <div ref={addToRefs} className="education-item reveal">
        <div className="education-image2">
          <img src="images/Indian_Institute_of_Information_Technology_Design_and_Manufacturing_Kurnool_logo.png" alt="IIITDM Kurnool" />
        </div>
        <h3 id="IIITDM">Bachelor of Technology in Computer Engineering</h3>
        <h4>
          Indian Institute of Information Technology Design and Manufacturing
          Kurnool | <em>August 2018 - May 2022</em>
        </h4>
        <p>
          Relevant coursework: Data Structures and Algorithms, Object Oriented
          Programming, Operating Systems, Computer Networks, Pattern
          Recognition
        </p>
      </div>
    </div>
  );
}

export default Education;
