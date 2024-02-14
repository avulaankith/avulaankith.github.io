import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import SocialLinks from './SocialLinks';

function Footer() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} <span style={{ color: 'rgb(0, 0, 0)', cursor: 'pointer' }} onClick={handleHomeClick}>Ankith Reddy Avula</span>. All rights reserved.</p>
                {location.pathname === '/projects' && <SocialLinks />}
            </div>
        </footer>
    );
}

export default Footer;
