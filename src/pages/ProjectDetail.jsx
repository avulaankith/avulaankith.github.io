import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import FlowDiagram from "../components/FlowDiagram";
import SiteHeader from "../components/SiteHeader";
import ThresholdExplorer from "../components/ThresholdExplorer";

function ProjectDetail({ projects }) {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!project) {
    return (
      <>
        <SiteHeader />
        <main className="detail-not-found section-wrap">
          <p className="eyebrow">Case study not found</p>
          <h1>This project isn’t in the portfolio.</h1>
          <Link className="button button--primary" to="/?section=work">
            Browse all work
          </Link>
        </main>
      </>
    );
  }

  const related = projects
    .filter(
      (item) =>
        item.slug !== project.slug &&
        item.mode.some((mode) => project.mode.includes(mode)),
    )
    .slice(0, 3);
  const problemSection = project.sections.find((section) =>
    section.heading.toLowerCase().includes("problem"),
  );
  const detailSections = [
    ...(problemSection ? [problemSection] : []),
    { heading: "Requirements and constraints", body: project.requirements },
    { heading: "My contribution", body: project.contribution },
    ...project.sections.filter((section) => section !== problemSection),
    { heading: "Alternatives and trade-offs", body: project.tradeoffs },
    { heading: "Lessons learned", body: project.lessons },
  ];

  return (
    <>
      <a
        className="skip-link"
        href="#case-study"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("case-study")?.focus();
          document
            .getElementById("case-study")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Skip to case study
      </a>
      <SiteHeader />
      <main id="case-study" className="case-study section-wrap" tabIndex="-1">
        <Link className="back-link" to="/?section=work">
          <span aria-hidden="true">←</span> All selected work
        </Link>
        <header className="case-hero">
          <div>
            <p className="eyebrow">
              {project.kind} <span className="eyebrow-divider">/</span>{" "}
              {project.category}
            </p>
            <h1>{project.title}</h1>
            <p className="case-summary">{project.summary}</p>
            <p className="case-status">{project.status}</p>
          </div>
          <div className="case-index">
            <span>CASE STUDY</span>
            <strong>{String(projects.indexOf(project) + 1).padStart(2, "0")}</strong>
            <small>OF {String(projects.length).padStart(2, "0")}</small>
          </div>
        </header>

        <div className="case-meta">
          <div>
            <span>Context</span>
            <strong>{project.kind}</strong>
          </div>
          <div>
            <span>Disclosure</span>
            <strong>Sanitized summary</strong>
          </div>
          <div>
            <span>Evidence basis</span>
            <strong>Resume / supplied project brief</strong>
          </div>
        </div>

        <section className="case-architecture">
          <div className="case-section-heading">
            <p className="eyebrow">System view</p>
            <h2>How the pieces fit together</h2>
            <p>
              Conceptual flow for explaining the engineering problem. Select a
              component to see its role; this is not a customer-specific
              deployment diagram.
            </p>
          </div>
          <FlowDiagram flow={project.flow} />
        </section>

        {project.slug === "ml-decision-systems" && <ThresholdExplorer />}

        {project.syntheticExample && (
          <section className="sql-example" aria-labelledby="sql-example-title">
            <p className="eyebrow">Illustrative walkthrough · synthetic data</p>
            <h2 id="sql-example-title">“What was the outstanding loan balance by servicer at the end of last quarter?”</h2>
            <p>I use the following made-up definitions, views, and values to illustrate the workflow. These are not Farmer Mac data or internal schema details.</p>
            <ol>
              <li><strong>Resolve the metric.</strong> For this example, I define outstanding loan balance as the sum of unpaid principal in USD at a quarter-end snapshot. I fix the example question date at October 15, 2026, so “last quarter” ends September 30, 2026.</li>
              <li><strong>Identify the data.</strong> The illustrative metadata maps the metric to <code>loan_balance_snapshot</code> and the servicer name to <code>servicer_directory</code>, joined on <code>servicer_id</code>. The assumed snapshot grain is one row per loan per date.</li>
              <li><strong>Generate, validate, execute.</strong> I illustrate a query that filters the snapshot date, joins the servicer directory, and sums unpaid principal by servicer. The workflow checks the query against the selected schema before governed execution.</li>
            </ol>
            <div className="sql-example-table">
              <table>
                <caption>Synthetic query result · September 30, 2026 · USD</caption>
                <thead><tr><th scope="col">Servicer</th><th scope="col">Outstanding loan balance</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Example Servicer A</th><td>$12,500,000</td></tr>
                  <tr><th scope="row">Example Servicer B</th><td>$8,250,000</td></tr>
                  <tr><th scope="row">Example Servicer C</th><td>$4,750,000</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>Illustrative answer:</strong> At September 30, 2026, outstanding loan balances were $12.50 million for Example Servicer A, $8.25 million for B, and $4.75 million for C—a total of $25.50 million across these synthetic records.</p>
          </section>
        )}

        <div className="case-content-grid">
          <aside className="case-sidebar">
            <p className="eyebrow">Technology</p>
            <div className="tag-list">
              {project.stack.map((technology) => (
                <span className="tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
            {project.metric && (
              <div className="metric-note">
                <span>Reported outcome</span>
                <strong>{project.metric}</strong>
              </div>
            )}
          </aside>
          <div className="case-sections">
            <p className="case-description">{project.description}</p>
            {detailSections.map((section, index) => (
              <section className="case-section" key={section.heading}>
                <span className="case-section-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                </div>
              </section>
            ))}
          </div>
        </div>

        <section className="related-work">
          <div className="related-heading">
            <div>
              <p className="eyebrow">Continue exploring</p>
              <h2>Related case studies</h2>
            </div>
            <Link className="text-link" to="/?section=work">
              All projects <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="related-grid">
            {related.map((item) => (
              <Link
                className="related-card"
                key={item.slug}
                to={`/work/${item.slug}`}
              >
                <span>{item.category}</span>
                <strong>{item.title}</strong>
                <span className="related-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <Link className="wordmark" to="/">
          <span className="wordmark-mark">A</span>
          <span>Ankith Reddy Avula</span>
        </Link>
        <p>Software engineering · Applied AI · Herndon, Virginia</p>
        <Link to="/?section=contact">Get in touch</Link>
      </footer>
    </>
  );
}

export default ProjectDetail;
