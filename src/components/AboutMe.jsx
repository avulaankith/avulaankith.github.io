import React from "react";

function AboutMe() {
  return (
    <div className="about-me">
      <h1 id="hello">Hello</h1>
      <h3 id="hello2">Here's who I am & what I do</h3>
      <p>
        Hi, I'm Ankith Reddy Avula. I'm an aspiring developer with a keen
        interest in creating meaningful and innovative projects. I love to
        explore new technologies and leverage them to build exciting
        applications.
      </p>
      <p>
        I hold a Master of Science in Computer Science from the University of
        Texas Arlington with a GPA of 4.0. I'm proficient in C, C++, Java,
        Python, R, SQL, and Scala, and have expertise in TensorFlow, PyTorch,
        Hadoop, Spark, and workflow orchestration. I also have hands-on
        experience with AWS, building infrastructure using services like S3,
        EC2, Redshift, and Lambda. I've worked on diverse projects, including an
        Audio Source Separation model, a real-time facial emotion recognition
        system, and a traffic-aware scaling algorithm for OpenFaaS.
        Additionally, I designed data pipelines, conducted sentiment analysis,
        and performed large-scale linear regression using Spark. With a passion
        for continuous learning and problem-solving, I aim to contribute to
        innovative solutions that make a positive impact.
      </p>
      <p>
        Outside of coding, I enjoy hiking, reading, and exploring new cuisines.
        I'm dedicated to continuous learning and improving my skills to
        contribute effectively to the world of technology.
      </p>
      <div class="social-links">
        <a href="mailto:ankithr005@gmail.com">
          <img src="images/email-favicon.ico" alt="Email" />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/avulaankith"
          target="_blank"
          rel="noreferrer"
        >
          <img src="images/linkedin-favicon.ico" alt="LinkedIn" />
          LinkedIn
        </a>
        {/* <a href="https://leetcode.com/ankithavula" target="_blank" rel="noreferrer">
                    <img src="images/leetcode-favicon.ico" alt="LeetCode" />
                    LeetCode
                </a> */}
        <a
          href="https://github.com/avulaankith"
          target="_blank"
          rel="noreferrer"
        >
          <img src="images/github-favicon.ico" alt="GitHub" />
          GitHub
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
