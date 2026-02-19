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
                    aria-pressed={theme === 'dark'}
                    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    <span className="theme-toggle-icon theme-toggle-icon--light" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.85" />
                            <path
                                d="M12 2.8v2.1M12 19.1v2.1M21.2 12h-2.1M4.9 12H2.8M18.5 5.5l-1.5 1.5M7 17l-1.5 1.5M18.5 18.5 17 17M7 7 5.5 5.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.85"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <span className="theme-toggle-icon theme-toggle-icon--dark" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                            <path
                                d="M21 12.8A8.8 8.8 0 1 1 11.2 3a7.1 7.1 0 0 0 9.8 9.8Z"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.9"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <circle cx="18.2" cy="6.2" r="1.1" fill="currentColor" />
                        </svg>
                    </span>
                    <span className="theme-toggle-thumb" aria-hidden="true">
                        {theme === 'dark' ? (
                            <svg viewBox="0 0 24 24">
                                <path
                                    d="M21 12.8A8.8 8.8 0 1 1 11.2 3a7.1 7.1 0 0 0 9.8 9.8Z"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.9"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <circle cx="18.2" cy="6.2" r="1.1" fill="currentColor" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.85" />
                                <path
                                    d="M12 2.8v2.1M12 19.1v2.1M21.2 12h-2.1M4.9 12H2.8M18.5 5.5l-1.5 1.5M7 17l-1.5 1.5M18.5 18.5 17 17M7 7 5.5 5.5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.85"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
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
