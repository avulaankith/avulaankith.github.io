import PropTypes from 'prop-types';
import '../App.css';

function ProjectItem({ title, description, imageSrc, altText, githubLink, imageClass }) {
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
  imageClass: PropTypes.string
};

export default ProjectItem;
