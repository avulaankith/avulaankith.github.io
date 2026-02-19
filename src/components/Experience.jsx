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
    <div className="experience">
      <h1 ref={addToRefs} className="reveal">
        Experience
      </h1>
      <div ref={addToRefs} className="experience-item reveal">
        <div className="experience-image">
          <img src="images/August IT Logo.webp" alt="August IT" />
        </div>
        <div className="experience-content">
          <h3>Software Engineer - Data</h3>
          <h4>
            August IT | <em>April 2025 - Present</em>
          </h4>
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
          <h3>Software Engineer - Data</h3>
          <h4>
            Astrosoft Technologies | <em>January 2025 - April 2025</em>
          </h4>
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
          <h3>Research Assistant</h3>
          <h4>
            University of Texas Arlington |{" "}
            <em>September 2024 - January 2025</em>
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
            <li>
              Spearheaded the development of a sophisticated Retrieval-Augmented
              Generation (RAG) system designed to enhance the search and
              retrieval of complex college documentation, including academic
              records, research publications, and administrative files with
              PostgreSQL and API Gateway.
            </li>
            <li>
              Integrated LangChain with multiple college databases and content
              management systems, facilitating seamless and secure document
              access for faculty, administrative staff, and students.
            </li>
            <li>
              Implemented advanced natural language processing techniques to
              improve semantic search capabilities, enabling more accurate and
              context-aware document retrieval.
            </li>
            <li>
              Optimized the RAG system by fine-tuning large language models and
              embedding techniques, achieving a 40% reduction in document
              retrieval time and a 35% increase in search relevance accuracy.
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
        </div>
        {/* <p>Worked on developing and maintaining web applications using JavaScript and React.</p> */}
      </div>
      <div ref={addToRefs} className="experience-item reveal">
        <div className="experience-image">
          <img src="images/Samsung-Logo728_410.jpg" alt="Samsung" />
        </div>
        <div className="experience-content">
          <h3>Research Intern</h3>
          <h4>
            Samsung PRISM | <em>May 2021 - November 2021</em>
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
            <li>
              Developed an audio source separation model to isolate sound
              categories (vocals, music, drums, etc) from mixed audio tracks
              using Python, TensorFlow, UNets, Auto-Encoders, and Librosa
            </li>
            <li>
              Implemented Fourier Transforms to convert audio signals into
              spectrograms for frequency domain analysis and custom UNet-based
              extraction.
            </li>
            <li>
              Optimized model architecture, hyperparameters, and performance,
              achieving accurate separation of sound sources across diverse
              audio inputs.
            </li>
          </ul>
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
          <div className="company-links">
            <a
              className="company-link company-link--work"
              href="https://www.linkedin.com/company/ismrititek/?originalSubdomain=in"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/company/ismrititek
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
