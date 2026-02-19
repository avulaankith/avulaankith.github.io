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
                <p>
                    &copy; {new Date().getFullYear()}{" "}
                    <button
                        type="button"
                        className="footer-name-button"
                        onClick={handleHomeClick}
                        aria-label="Go to homepage"
                    >
                        Ankith Reddy Avula
                    </button>
                    . All rights reserved.
                </p>
                {location.pathname === '/projects' && <SocialLinks />}
            </div>
        </footer>
    );
}

export default Footer;
