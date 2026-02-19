import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Header() {
    const navigate = useNavigate();
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const applyTheme = (nextTheme) => {
            setTheme(nextTheme);
            document.documentElement.setAttribute('data-theme', nextTheme);
        };

        if (storedTheme === 'light' || storedTheme === 'dark') {
            applyTheme(storedTheme);
        } else {
            applyTheme(mediaQuery.matches ? 'dark' : 'light');
        }

        const onSystemThemeChange = (event) => {
            if (!localStorage.getItem('theme')) {
                applyTheme(event.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', onSystemThemeChange);
        return () => mediaQuery.removeEventListener('change', onSystemThemeChange);
    }, []);

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleThemeToggle = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
    };

    return (
        <header>
            <div className="topnav">
                <h4 onClick={handleHomeClick}>Ankith Reddy Avula</h4>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                <a href="images/Ankith%20Reddy%20Avula.pdf" target="_blank" rel="noreferrer">Resume</a>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
                <button
                    className="theme-toggle"
                    onClick={handleThemeToggle}
                    type="button"
                    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    <span className="theme-toggle-icon" aria-hidden="true">
                        {theme === 'dark' ? (
                            <svg viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zm10.45 14.32l1.79 1.8 1.42-1.42-1.8-1.79-1.41 1.41zM1 13h3v-2H1v2zm19 0h3v-2h-3v2zM12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0-4h-1v3h2V1h-1zm0 19h-1v3h2v-3h-1zM4.96 19.54l1.8-1.79-1.42-1.41-1.79 1.79 1.41 1.41zm14.08-14.08l1.41-1.41-1.79-1.8-1.42 1.42 1.8 1.79z"
                                />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M12.74 2a9 9 0 1 0 9.26 9.26A7 7 0 0 1 12.74 2z"
                                />
                            </svg>
                        )}
                    </span>
                    <span className="theme-toggle-label">
                        {theme === 'dark' ? 'Light' : 'Dark'}
                    </span>
                </button>
                {/* <Link to="/">Home</Link>
                {/* <a href="/" className="active">Home</a> */}
                {/* <a href="resume_sde.pdf" target="_blank">Resume</a>
                <Link to="/projects">Projects</Link>  */}
            </div>
        </header>
    );
}

export default Header;
