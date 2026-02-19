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
                <button
                    type="button"
                    className="topnav-brand"
                    onClick={handleHomeClick}
                    aria-label="Go to homepage"
                >
                    Ankith Reddy Avula
                </button>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                <a href="images/Ankith%20Reddy%20Avula.pdf" target="_blank" rel="noreferrer">Resume</a>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
                <button
                    className={`theme-toggle ${theme === 'dark' ? 'is-dark' : 'is-light'}`}
                    onClick={handleThemeToggle}
                    type="button"
                    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    <span className="theme-toggle-track" aria-hidden="true">
                        <span className="theme-toggle-glyph theme-toggle-glyph--sun">
                            <svg viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M12 3.6a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V4.6a1 1 0 0 1 1-1zm0 14.8a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1zM5.84 6.25a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.42L5.84 7.67a1 1 0 0 1 0-1.42zm9.85 9.85a1 1 0 0 1 1.41 0l1.06 1.07a1 1 0 1 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.42zM3.6 12a1 1 0 0 1 1-1h1.5a1 1 0 1 1 0 2H4.6a1 1 0 0 1-1-1zm14.8 0a1 1 0 0 1 1-1h1.5a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1zM6.9 16.1a1 1 0 0 1 1.41 1.42l-1.06 1.06a1 1 0 1 1-1.41-1.41l1.06-1.07zm9.85-9.85a1 1 0 0 1 1.41 1.42L17.1 8.73a1 1 0 1 1-1.41-1.42l1.06-1.06zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
                                />
                            </svg>
                        </span>
                        <span className="theme-toggle-glyph theme-toggle-glyph--moon">
                            <svg viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M14.94 2.6a1 1 0 0 1 .6 1.6A8 8 0 1 0 19.8 17.6a1 1 0 0 1 1.32 1.4A10 10 0 1 1 13.53 2.7a1 1 0 0 1 1.41-.1z"
                                />
                            </svg>
                        </span>
                        <span className="theme-toggle-thumb" />
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
