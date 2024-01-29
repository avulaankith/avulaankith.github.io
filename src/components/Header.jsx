import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Header() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <header>
            <div className="topnav">
                <h4 onClick={handleHomeClick}>Ankith Reddy Avula</h4>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                <a href="resume_sde.pdf" target="_blank">Resume</a>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
                {/* <Link to="/">Home</Link>
                {/* <a href="/" className="active">Home</a> */}
                {/* <a href="resume_sde.pdf" target="_blank">Resume</a>
                <Link to="/projects">Projects</Link>  */}
            </div>
        </header>
    );
}

export default Header;
