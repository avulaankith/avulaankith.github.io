import { useRef, useEffect } from 'react';
import '../App.css'

function Experience() {
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
        <div className="experience">
            <h1 ref={addToRefs} className="reveal">Experience</h1>
            <div ref={addToRefs} className="experience-item reveal">
                <div className="experience-image">
                    <img src="images/Samsung-Logo728_410.jpg" alt="Samsung" />
                </div>
                <h3>Research Intern</h3>
                <h4>Samsung India | <em>May 2021 - November 2021</em></h4>
                <ul className="portfolio-li">
                    <li>
                        Developed an Audio Source separation model for extraction of 4
                        different audio categories from a given audio track using
                        TensorFlow, UNets, Auto-Encoders, and Librosa
                    </li>
                    <li>
                        Designed an Audio separation model which extracts the bass, drums,
                        vocals, and other category audios from the given audio file
                        implementing Fourier transforms
                    </li>
                    <li>
                        Deployed a model that generates separated audios of the above
                        categories with a mean absolute error(MAE) of 1.3733
                    </li>
                </ul>
                {/* <p>Worked on developing and maintaining web applications using JavaScript and React.</p> */}
            </div>
            <div ref={addToRefs} className="experience-item reveal">
                <div className="experience-image">
                    <img src="images/1551097732795.jpeg" alt="Ismriti" />
                </div>
                <h3>Data Science Intern</h3>
                <h4>Ismriti - IIT Kanpur | <em>June 2019 - July 2019</em></h4>
                <ul className="portfolio-li">
                    <li>
                        Developed a real-time facial emotion recognition system that
                        recognizes and classifies the live facial emotion of the user
                        using Python, CNN, TensorFlow, and OpenCV
                    </li>
                    <li>
                        Designed a model that classifies the user face emotion into 7
                        categories namely happy, sad, neutral, fear, angry, disgust, and
                        surprise
                    </li>
                    <li>
                        Implemented a model that classifies the live facial expression of
                        the user with an accuracy of 98%
                    </li>
                </ul>
                {/* <p>Collaborated with various clients to create custom websites and web applications.</p> */}
            </div>
        </div>
    );
}

export default Experience;
