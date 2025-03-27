import { useRef, useEffect } from "react";
import "../App.css";

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
      <h1 ref={addToRefs} className="reveal">
        Experience
      </h1>
      <div ref={addToRefs} className="experience-item reveal">
        <div className="experience-image">
          <img src="images/orange-logo-on-blue.jpg" alt="UTA" />
        </div>
        <h3>Research Assistant</h3>
        <h4>
          University of Texas Arlington | <em>September 2024 - January 2025</em>
        </h4>
        <ul className="portfolio-li">
          <li>
            Designed and deployed an interactive React.js dashboard for academic
            data visualization, integrating REST APIs and Chart.js/Recharts to
            provide real-time insights into student performance, research
            publications, and funding trends for faculty and administrators.
          </li>
          <li>
            Modernized a legacy PHP website into a responsive, high-performance
            React.js application with Tailwind CSS and reusable components,
            reducing page load time by 50% and improving SEO and content
            management efficiency.
          </li>
          <li>
            Built custom React Hooks and implemented a Storybook component
            library, optimizing UI state management, real-time data filtering,
            and accelerating future UI development by 30%, enhancing user
            experience and developer productivity.
          </li>
          {/* <li>
            Implement basic linear algebra operations on Apache Spark using the
            DataFrames API, where block operations will run on NVIDIA GPUs using
            NVIDIA RAPIDS.
          </li>
          <li>
            Implement the same linear algebra operations to run on NVIDIA GPUs
            without using NVIDIA RAPIDS, with block operations hand-written in
            C++.
          </li>
          <li>
            Compare the performance of these implementations with existing ones
            written using the Spark Core API and DataFrames.
          </li>
          <li>
            Conducted study on Efficient Matrix Multiplication implementation
            using NVIDIA Rapids library in Spark, Pyspark and SparkSQL.
          </li> */}
        </ul>
        {/* <p>Worked on developing and maintaining web applications using JavaScript and React.</p> */}
      </div>
      <div ref={addToRefs} className="experience-item reveal">
        <div className="experience-image">
          <img src="images/Samsung-Logo728_410.jpg" alt="Samsung" />
        </div>
        <h3>Research Intern</h3>
        <h4>
          Samsung | <em>May 2021 - November 2021</em>
        </h4>
        <ul className="portfolio-li">
          <li>
            Developed an audio source separation model to isolate sound
            categories (vocals, music, drums, etc) from mixed audio tracks using
            Python, TensorFlow, UNets, Auto-Encoders, and Librosa
          </li>
          <li>
            Implemented Fourier Transforms to convert audio signals into
            spectrograms for frequency domain analysis and custom UNet-based
            extraction.
          </li>
          <li>
            Optimized model architecture, hyperparameters, and performance,
            achieving accurate separation of sound sources across diverse audio
            inputs.
          </li>
        </ul>
        {/* <p>Worked on developing and maintaining web applications using JavaScript and React.</p> */}
      </div>
      <div ref={addToRefs} className="experience-item reveal">
        <div className="experience-image">
          <img src="images/1551097732795.jpeg" alt="Ismriti" />
        </div>
        <h3>Data Science Intern</h3>
        <h4>
          Ismriti - IIT Kanpur | <em>June 2019 - July 2019</em>
        </h4>
        <ul className="portfolio-li">
          <li>
            Developed a real-time facial emotion recognition system that
            recognizes and classifies the live facial emotion of the user using
            Python, CNN, TensorFlow, and OpenCV
          </li>
          <li>
            Solved the data scarcity and class imbalance problem by augumenting
            the data, dataset creation and increasing the size of samples which
            have very less representation among other classes to make the model
            unbiased.
          </li>
          <li>
            Integrated the model with OpenCV for dynamic, real-time emotion
            detection, optimizing for real-world scenarios with improved
            performance and precision.
          </li>
        </ul>
        {/* <p>Collaborated with various clients to create custom websites and web applications.</p> */}
      </div>
    </div>
  );
}

export default Experience;
