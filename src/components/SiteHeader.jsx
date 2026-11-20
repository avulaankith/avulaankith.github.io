import { useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../content/portfolio";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" />
    </svg>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const items = [
    ["Work", "work"],
    ["Experience", "experience"],
    ["About", "about"],
    ["Contact", "contact"],
  ];

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="wordmark" to="/" aria-label="Ankith Reddy Avula home">
          <span className="wordmark-mark">A</span>
          <span>Ankith Reddy Avula</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav-links nav-links--open" : "nav-links"}>
          {items.map(([label, section]) => (
            <Link
              key={section}
              to={`/?section=${section}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            className="nav-resume"
            href={profile.resume}
            download="Ankith-Reddy-Avula-Resume.pdf"
          >
            Resume <ArrowIcon />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
