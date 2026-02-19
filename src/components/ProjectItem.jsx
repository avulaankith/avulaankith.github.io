import PropTypes from 'prop-types';
import '../App.css';

const projectStacks = {
  "TWITTER SENTIMENT ANALYSIS": ["Python", "BERT", "TensorFlow", "LSTM", "Jupyter"],
  "HIGHWAY LANE SEGMENTATION": ["Python", "PyTorch", "U-Net", "Computer Vision"],
  "TRAFFIC AWARE SCALING OPTIMIZATION IN OPENFAAS": ["Python", "OpenFaaS", "Serverless", "Auto-scaling"],
  "MULTI-LABEL CLASSIFICATION FOR LAND COVER DETECTION": ["Python", "Transfer Learning", "CNN", "Satellite Data"],
  "NEURAL NETWORK FROM SCRATCH IMPLEMENTATION": ["Python", "NumPy", "TensorFlow", "Optimization"],
  "MULTI-THREADED FILE SYNC SYSTEM": ["Python", "RPC", "Multi-threading", "Client-Server"],
  "ATS Resume Scorer": ["Python", "Streamlit", "Gemini API", "PyPDF2"],
  "Sparse Matrix Multiplication Implementations in Big Data Environments": ["Hadoop", "Spark", "Pig", "Hive"],
  "Fault-Tolerant Implementation of Two-Phase Commit Protocol in Distributed Systems": ["Python", "XML-RPC", "Distributed Systems", "Fault Tolerance"],
  "NEIGHBOURHOOD ANALYSIS USING PYTHON": ["Python", "Data Analysis", "Geospatial", "Jupyter"],
  "OCULAR DISEASE DETECTION WEB APPLICATION": ["Python", "Flask", "PyTorch", "Transfer Learning"],
  "BLOGGING WEBSITE": ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  "ATTENDANCE TRACKER WEB APPLICATION": ["Web App", "CRUD", "Dashboard", "Role-based Access"],
  "PREMIER LEAGUE RESULT PREDICTION": ["Python", "Machine Learning", "Data Modeling"],
  "HEART FAILURE RATE PREDICTION": ["Python", "PyTorch", "Classification", "Healthcare ML"],
  "PyDTL: Decision Tree Learning & Random Forests Implementation in Python": ["Python", "Decision Trees", "Random Forests", "Ensemble Learning"],
  "Extended Nim Game Solver: Red and Blue Ball Edition with Minimax Algorithm using Alpha Beta Pruning": ["Python", "Minimax", "Alpha-Beta Pruning", "Game AI"],
  "Solving Eight Puzzle Problem using State Space Search": ["Python", "State Space Search", "A*", "Graph Search"],
  "Toy Search Engine": ["Python", "TF-IDF", "Cosine Similarity", "Information Retrieval"],
};

function ProjectItem({ title, description, imageSrc, altText, githubLink, imageClass, techStack }) {
  const stack = techStack && techStack.length ? techStack : projectStacks[title] || [];

  return (
    <>
      {imageSrc && (
        <div className={imageClass || "portfolio-image"}>
          <img src={imageSrc} alt={altText} />
        </div>
      )}
      <div className="portfolio-content">
        <h3>{title}</h3>
        {description && (
          <ul className='portfolio-li'>
            {description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
        {stack.length > 0 && (
          <ul className="project-tech-stack" aria-label={`${title} tech stack`}>
            {stack.map((tech) => (
              <li key={tech} className="project-tech-chip">
                {tech}
              </li>
            ))}
          </ul>
        )}
        {githubLink && <p><a href={githubLink} target="_blank" rel="noreferrer">View on GitHub</a></p>}
      </div>
    </>
  );
}

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string),
  imageSrc: PropTypes.string,
  altText: PropTypes.string,
  githubLink: PropTypes.string,
  imageClass: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectItem;
