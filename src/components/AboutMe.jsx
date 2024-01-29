import React from 'react';

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
                Currently pursuing a Master of Science in Computer Science at the
                University of Texas Arlington, I have developed a strong foundation in
                programming languages such as C++, Java, and Python, as well as a
                range of technical skills and experience with technologies such as
                TensorFlow, PyTorch, Flask, Hadoop, Spark, and Git. During my studies,
                I have also completed several projects that have allowed me to apply
                my skills in practical settings, including developing an Audio Source
                separation model for the extraction of 4 different audio categories, a
                real-time facial emotion recognition system, and a traffic-aware
                scaling algorithm for the OpenFaaS platform.
            </p>
            <p>
                Outside of coding, I enjoy hiking, reading, and exploring new
                cuisines. I'm dedicated to continuous learning and improving my skills
                to contribute effectively to the world of technology.
            </p>
            <div class="social-links">
                <a href="mailto:ankithr005@gmail.com">
                    <img src="images/email-favicon.ico" alt="Email" />
                    Email
                </a>
                <a href="https://www.linkedin.com/in/avulaankith" target="_blank" rel="noreferrer">
                    <img src="images/linkedin-favicon.ico" alt="LinkedIn" />
                    LinkedIn
                </a>
                <a href="https://leetcode.com/ankithavula" target="_blank" rel="noreferrer">
                    <img src="images/leetcode-favicon.ico" alt="LeetCode" />
                    LeetCode
                </a>
                <a href="https://github.com/avulaankith" target="_blank" rel="noreferrer">
                    <img src="images/github-favicon.ico" alt="GitHub" />
                    GitHub
                </a>
            </div>
        </div>
    );
}

export default AboutMe;
