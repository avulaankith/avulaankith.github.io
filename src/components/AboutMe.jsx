import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="about-me">
      <p className="eyebrow">Portfolio</p>
      <h1 id="hello">Building Production ML Systems</h1>
      <h3 id="hello2">Hi, I'm Ankith Reddy Avula</h3>
      <p>
        I am an ML Engineer with hands-on experience building production
        systems across cloud platforms. I also have strong Data Engineering
        expertise in pipelines, orchestration, and scalable data platforms. I
        enjoy turning complex data problems into reliable, scalable solutions
        that improve business outcomes.
      </p>
      <p>
        I hold an M.S. in Computer Science from the University of Texas at
        Arlington (GPA 4.0) and have worked across research and industry roles,
        including August IT, Astrosoft Technologies, and UTA. My experience
        spans end-to-end ML-focused development with strong data engineering:
        data ingestion, pipeline
        orchestration, model integration, semantic search/RAG systems, and
        production deployment.
      </p>
      <p>
        My core stack includes Python, SQL, Spark, TensorFlow, PyTorch,
        scikit-learn, MLflow, and modern web/backend tools. On cloud, I work
        with AWS (S3, SageMaker, Glue, Lambda) and Azure (Synapse, Data
        Factory, ADLS Gen2, AI Foundry, Functions, Web Apps). I am strongly
        interested in building intelligent data systems at scale and growing
        into high-impact Data Engineering and ML platform roles.
      </p>
      <div className="about-actions">
        <a href="images/Ankith%20Reddy%20Avula.pdf" target="_blank" rel="noreferrer">
          View Resume
        </a>
        <Link to="/projects">Explore Projects</Link>
      </div>
      <div className="social-links">
        <a href="mailto:ankithr005@gmail.com">
          <span className="social-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 3v9h16V8l-8 5-8-5zm8 3L4 6.5h16L12 11z"
              />
            </svg>
          </span>
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/avulaankith"
          target="_blank"
          rel="noreferrer"
        >
          <span className="social-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12zM5.5 9.75h2.88V19H5.5V9.75zm4.53 0h2.76v1.26h.04c.39-.73 1.33-1.5 2.74-1.5 2.93 0 3.47 1.93 3.47 4.44V19h-2.88v-4.45c0-1.06-.02-2.43-1.48-2.43-1.48 0-1.7 1.16-1.7 2.35V19h-2.95V9.75z"
              />
            </svg>
          </span>
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
          <span className="social-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.66-.21.66-.48v-1.7c-2.78.6-3.37-1.17-3.37-1.17-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.52 1.02 1.52 1.02.88 1.51 2.31 1.07 2.87.82.09-.64.35-1.07.63-1.32-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.44-1.28.1-2.66 0 0 .84-.27 2.75 1.02A9.59 9.59 0 0 1 12 6.85a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.41.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.85-2.33 4.69-4.56 4.94.36.31.68.93.68 1.87V21c0 .27.17.58.67.48A10 10 0 0 0 12 2z"
              />
            </svg>
          </span>
          GitHub
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
