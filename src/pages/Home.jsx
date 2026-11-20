import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  experience,
  profile,
  projects,
  publicProjects,
  skillGroups,
} from "../content/portfolio";
import SiteHeader from "../components/SiteHeader";
import ProjectVisual from "../components/ProjectVisual";
import { roleEvidence } from "../content/roleFit";


function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="section-heading" id={id}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" />
    </svg>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article
      className="project-card"
      style={{ "--card-index": index }}
      data-domain={project.category}
    >
      <div className="project-card-top">
        <span className="project-kind">
          {project.kind === "Professional experience"
            ? "Professional case study"
            : project.kind}
        </span>
        <span className="project-domain">{project.category}</span>
      </div>
      <ProjectVisual project={project} />
      <div className="project-card-content">
        <p className="project-status">{project.cardStatus}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <Link className="text-link" to={`/work/${project.slug}`}>
          Read case study <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

function RoleFit() {
  const [role, setRole] = useState("AI Engineer");
  const evidence = roleEvidence[role];
  const matches = evidence.highlights.map(({ key, reason }) => {
    const project = projects.find((item) => item.slug === key);
    const publicProject = publicProjects.find((item) => item.title === key);
    return {
      title: (project || publicProject).title,
      to: project ? `/work/${project.slug}` : `/?section=${publicProject.id || "public-work"}`,
      status: project ? project.cardStatus || project.status : publicProject.type,
      reason,
    };
  });

  return (
    <section className="fit-section section-wrap" id="fit" aria-labelledby="fit-title">
      <div className="fit-intro">
        <div className="section-heading">
          <p className="eyebrow">For hiring teams & curious collaborators</p>
          <h2 id="fit-title">Explore my fit</h2>
          <p className="section-description">Choose the role you’re hiring for. See what I bring, where I’ve applied it, and the work behind it.</p>
        </div>
        <a className="fit-resume-link" href={profile.resume} download="Ankith-Reddy-Avula-Resume.pdf">Download resume <span>PDF</span></a>
      </div>
      <div className="fit-panel">
        <div className="fit-controls">
          <p className="fit-control-label" id="fit-role-label">Choose a focus</p>
          <div className="fit-role-options" role="group" aria-labelledby="fit-role-label">
            {Object.keys(roleEvidence).map((option) => (
              <button key={option} type="button" aria-pressed={role === option} onClick={() => setRole(option)}>
                <span>{option}</span><span className="fit-selection" aria-hidden="true">{role === option ? "✓" : "+"}</span>
              </button>
            ))}
          </div>
          <div className="fit-profile-note">
            <span>Based in</span>
            <strong>{profile.location}</strong>
            <Link to="/?section=experience">View career timeline</Link>
          </div>
        </div>
        <div className="fit-results" aria-live="polite" aria-atomic="true">
          <p className="eyebrow">{role}</p>
          <h3>{evidence.headline}</h3>
          <p className="fit-summary">{evidence.summary}</p>
          <div className="fit-contribution">
            <h4>What I bring</h4>
            <ul>{evidence.strengths.map((strength) => <li key={strength}>{strength}</li>)}</ul>
          </div>
          <div className="tag-list fit-skills" aria-label="Relevant technologies">
            {evidence.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
          </div>
          <div className="fit-evidence-heading"><h4>See it in the work</h4><span>3 selected examples</span></div>
          <div className="fit-evidence-grid">
            {matches.map((project) => (
              <Link className="fit-evidence-card" key={project.title} to={project.to}>
                <span className="fit-evidence-status">{project.status}</span>
                <h5>{project.title}</h5>
                <p>{project.reason}</p>
                <span className="fit-evidence-action">Explore this work</span>
              </Link>
            ))}
          </div>
          <div className="fit-contact">
            <div><h4>Have a role or project in mind?</h4><p>Let’s talk about your team and the problem you’re solving.</p></div>
            <a className="button button--primary" href={`mailto:${profile.email}?subject=${encodeURIComponent(`${role} opportunity`)}`}>Start a conversation</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="section-wrap experience-section" id="experience">
      <SectionHeading
        eyebrow="Where I’ve worked"
        title="Experience built across systems and research"
        description="Experience building software, data platforms, and applied AI systems."
      />
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={item.company}>
            <div className="timeline-marker">
              {item.logo && <img src={item.logo} alt={`${item.company} logo`} loading="lazy" />}
            </div>
            <div className="timeline-card">
              <div className="timeline-heading">
                <div>
                  <p className="eyebrow">{item.dates}</p>
                  <h3>{item.company}</h3>
                  <p className="timeline-role">{item.role}</p>
                </div>
                <span className="timeline-note">{item.note}</span>
              </div>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {item.technologies && (
                <div className="tag-list" aria-label={`${item.company} technologies`}>
                  {item.technologies.map((technology) => (
                    <span className="tag" key={technology}>{technology}</span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PublicProjects() {
  return (
    <section className="section-wrap public-section" id="public-work">
      <SectionHeading
        eyebrow="Open source & personal work"
        title="Projects you can inspect"
        description="These are separate from professional client work. Repository contents were reviewed; notebook projects and source apps are not described as live services."
      />
      <div className="public-grid">
        {publicProjects.map((project) => (
          <article className="public-card" id={project.id} key={project.title}>
            <div className="public-image">
              {project.image ? (
                <img src={project.image} alt={project.imageAlt || ""} loading="lazy" style={project.imageFit ? { objectFit: project.imageFit } : undefined} />
              ) : (
                <div className="autobuilder-art" aria-hidden="true">
                  <span>{project.artLabels?.[0] || "RESEARCH"}</span>
                  <i />
                  <span>{project.artLabels?.[1] || "BUILD"}</span>
                  <i />
                  <span>{project.artLabels?.[2] || "EVALUATE"}</span>
                </div>
              )}
            </div>
            <div className="public-card-body">
              <p className="project-kind">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="public-details">{project.details}</p>
              {project.useCase && (
                <details className="public-use-case">
                  <summary>Explore the use case</summary>
                  {project.useCase.map((section) => (
                    <div key={section.heading}>
                      <h4>{section.heading}</h4>
                      <p>{section.body}</p>
                    </div>
                  ))}
                </details>
              )}
              <div className="tag-list">
                {project.stack.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a
                className="text-link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                Inspect repository <ArrowIcon />
              </a>
              {project.demoUrl && (
                <a className="text-link" href={project.demoUrl} target="_blank" rel="noreferrer">
                  Play Sandhi Ninja <ArrowIcon />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      <a
        className="text-link all-repos"
        href={profile.github}
        target="_blank"
        rel="noreferrer"
      >
        View all public repositories <ArrowIcon />
      </a>
    </section>
  );
}

function Home() {
  const location = useLocation();
  const [mode, setMode] = useState("all");

  useEffect(() => {
    const section = new URLSearchParams(location.search).get("section");
    if (!section) return;
    requestAnimationFrame(() =>
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }),
    );
  }, [location.search]);

  const visibleProjects = (
    mode === "all"
      ? projects
      : projects.filter((project) => project.mode.includes(mode))
  ).slice().sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("main-content")?.focus();
          document
            .getElementById("main-content")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex="-1">
        <section className="hero section-wrap" id="about">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" /> SOFTWARE ENGINEERING · APPLIED AI
            </p>
            <h1>
              Engineering reliable software.
              <br />
              <span>Building intelligent systems.</span>
            </h1>
            <p className="hero-intro">{profile.introduction}</p>
            <p className="hero-support">
              From backend APIs and cloud platforms to retrieval systems and
              machine learning—grounded in engineering fundamentals.
            </p>
            <div className="hero-actions">
              <Link className="button button--primary" to="/?section=work">
                Explore my work <ArrowIcon />
              </Link>
              <a
                className="button button--secondary"
                href={profile.resume}
                download="Ankith-Reddy-Avula-Resume.pdf"
              >
                Download resume
              </a>
              <Link className="button button--tertiary" to="/?section=fit">
                Explore my fit <ArrowIcon />
              </Link>
            </div>
            <div className="hero-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={`mailto:${profile.email}`}>Email</a>
              <span className="hero-location">{profile.location}, USA</span>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-orbit hero-orbit--outer" />
            <div className="hero-orbit hero-orbit--inner" />
            <div className="portrait-frame">
              <img
                src="/images/ankith-portrait-cutout.png"
                alt="Portrait of Ankith Reddy Avula"
                fetchPriority="high"
              />
            </div>
            <div className="floating-card floating-card--top">
              <span className="floating-card-icon">↗</span>
              <span>
                <strong>Software + AI</strong>
                <small>Engineering with evidence</small>
              </span>
            </div>
            <div className="floating-card floating-card--bottom">
              <span className="mini-bars" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </span>
              <span>
                <strong>Systems thinking</strong>
                <small>From request to reliable result</small>
              </span>
            </div>
            <div className="hero-coordinate" aria-hidden="true">
              38°58&apos; N / 77°25&apos; W
            </div>
          </div>
          <div className="hero-bottomline">
            <span>Backend · Cloud · Full stack · AI/ML</span>
            <Link to="/?section=work">
              Scroll to selected work <span>↓</span>
            </Link>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <SectionHeading
            eyebrow="Selected engineering work"
            title="Systems, not just demos."
            description="Selected work across August IT and Samsung, from enterprise data platforms and AI agents to audio machine learning. Explore the architecture, contributions, and engineering trade-offs behind each case study."
          />
          <div className="work-controls">
            <div className="mode-switch" role="group" aria-label="Filter work by discipline">
              {[
                ["all", "All engineering"],
                ["software", "Software engineering"],
                ["ai", "AI / ML engineering"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  className={mode === value ? "mode-active" : ""}
                  aria-pressed={mode === value}
                  onClick={() => setMode(value)}
                >
                  {label}
                </button>
              ))}
            </div>
            <span className="work-count">
              {visibleProjects.length} case studies
            </span>
          </div>
          <div className="project-grid" aria-live="polite">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="principles-section section-wrap">
          <SectionHeading
            eyebrow="How I think about engineering"
            title="Make the system understandable. Make failure survivable."
            description="The best solution is not the most elaborate one. It is the one whose behavior, boundaries, and failure modes are clear to the people who depend on it."
          />
          <div className="principle-grid">
            {[
              ["01", "Design the boundary", "Explicit APIs, data contracts, and authorization rules reduce ambiguity between components."],
              ["02", "Measure the real thing", "Separate retrieval quality from answer quality; separate a model score from the decision threshold."],
              ["03", "Expect retries", "Distributed workflows need idempotency, observable states, and recovery paths—not just a happy-path diagram."],
              ["04", "Keep claims grounded", "Show the evidence, label assumptions, and say when a deployment or metric still needs confirmation."],
            ].map(([number, title, description]) => (
              <article className="principle-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <RoleFit />
        <PublicProjects />
        <ExperienceSection />

        <section className="expertise-section section-wrap">
          <SectionHeading
            eyebrow="Technical toolkit"
            title="A practical, cross-stack foundation"
            description="Tools and technologies I use across professional work and independent projects."
          />
          <div className="expertise-grid">
            {skillGroups.map((group) => (
              <article className="expertise-card" key={group.name}>
                <h3>{group.name}</h3>
                <div className="tag-list">
                  {group.skills.map((skill) => (
                    <span className="tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="education-section section-wrap" id="education">
          <SectionHeading
            eyebrow="Education"
            title="Strong fundamentals, applied in practice."
          />
          <div className="education-grid">
            <article>
              <div className="education-card-heading">
                <img className="education-logo" src="/images/orange-logo-on-blue.jpg" alt="University of Texas at Arlington logo" loading="lazy" />
                <span className="education-date">2022 — 2024</span>
              </div>
              <h3>M.S. Computer Science</h3>
              <p>University of Texas at Arlington</p>
              <span className="education-detail">GPA 4.0 / 4.0</span>
            </article>
            <article>
              <div className="education-card-heading">
                <img className="education-logo" src="/images/Indian_Institute_of_Information_Technology_Design_and_Manufacturing_Kurnool_logo.png" alt="IIITDM Kurnool logo" loading="lazy" />
                <span className="education-date">2018 — 2022</span>
              </div>
              <h3>B.Tech. Computer Engineering</h3>
              <p>IIITDM Kurnool</p>
            </article>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <p className="eyebrow">Contact</p>
          <h2>Have a thoughtful problem to solve?</h2>
          <p>
            I’m interested in software engineering and AI roles where careful
            systems thinking meets real-world impact.
          </p>
          <div className="contact-actions">
            <a className="button button--primary" href={`mailto:${profile.email}`}>
              Start a conversation <ArrowIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </a>
          </div>
          <span className="contact-email">{profile.email}</span>
        </section>
      </main>
      <footer className="site-footer">
        <Link className="wordmark" to="/">
          <img className="wordmark-mark" src="/images/ankith-logo.svg" alt="" width="40" height="40" />
          <span>Ankith Reddy Avula</span>
        </Link>
        <p>Software engineering · Applied AI · Herndon, Virginia</p>
        <Link to="/?section=main-content">Back to top ↑</Link>
      </footer>
    </>
  );
}

export default Home;
