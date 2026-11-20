function ProjectVisual({ project }) {
  const slug = project.slug;

  if (slug === "financial-data-platform") {
    return (
      <div
        className="project-visual project-visual--lakehouse"
        role="img"
        aria-label="Lakehouse layers: source data flows through landing, bronze, silver, and gold"
      >
        <div className="visual-source">
          <span className="visual-kicker">MULTIPLE SOURCES</span>
          <span className="source-stack">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="visual-layers">
          {["LANDING", "BRONZE", "SILVER", "GOLD"].map((layer, index) => (
            <div className={`lake-layer lake-layer--${index + 1}`} key={layer}>
              <span>{layer}</span>
              <i />
              <i />
              <i />
            </div>
          ))}
        </div>
        <div className="visual-output">
          <span className="visual-kicker">CONSUMERS</span>
          <span>SQL</span>
          <span>APIs</span>
          <span>ML</span>
        </div>
      </div>
    );
  }

  if (slug === "document-intelligence") {
    return (
      <div
        className="project-visual project-visual--rag"
        role="img"
        aria-label="RAG diagram: source documents are extracted, searched, and returned as a grounded answer with evidence"
      >
        <div className="rag-documents">
          <span className="visual-kicker">SOURCE DOCUMENTS</span>
          <div className="paper paper--one"><i /><i /><i /></div>
          <div className="paper paper--two"><i /><i /><i /></div>
          <div className="paper paper--three"><i /><i /></div>
        </div>
        <div className="visual-connector"><span /></div>
        <div className="rag-search">
          <span className="search-glass" />
          <strong>semantic</strong>
          <small>retrieval</small>
        </div>
        <div className="visual-connector"><span /></div>
        <div className="rag-answer">
          <span className="visual-kicker">GROUNDED ANSWER</span>
          <p>Relevant passage…</p>
          <span className="citation-pill">Source · p. 12</span>
        </div>
      </div>
    );
  }

  if (slug === "full-stack-financial-applications") {
    return (
      <div
        className="project-visual project-visual--stack"
        role="img"
        aria-label="Application layers: React user interface, API boundary, backend services, and governed data"
      >
        <div className="stack-labels">
          <span>CLIENT</span><span>CONTRACT</span><span>COMPUTE</span><span>STORAGE</span>
        </div>
        <div className="stack-layers">
          {[
            ["React", "UI"],
            ["REST API", "AUTH · VALIDATION"],
            ["Python services", "FUNCTIONS · BUSINESS LOGIC"],
            ["Data layer", "SQL · STORAGE · LAKEHOUSE"],
          ].map(([title, subtitle], index) => (
            <div className={`app-layer app-layer--${index + 1}`} key={title}>
              <span className="app-layer-dot" />
              <strong>{title}</strong>
              <small>{subtitle}</small>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slug === "secure-event-ingestion") {
    return (
      <div
        className="project-visual project-visual--events"
        role="img"
        aria-label="Event flow: authenticated upload enters storage, is queued and processed idempotently, then published or quarantined"
      >
        <div className="event-main">
          {["SFTP", "STORAGE", "EVENT", "WORKER"].map((step, index) => (
            <div className="event-step" key={step}>
              <span className={`event-node event-node--${index + 1}`}>{step}</span>
              {index < 3 && <span className="event-wire" />}
            </div>
          ))}
        </div>
        <div className="event-branches">
          <span className="branch-line" />
          <span className="branch-outcome branch-outcome--ok">VALID → publish</span>
          <span className="branch-outcome branch-outcome--hold">REVIEW → quarantine</span>
        </div>
        <span className="event-annotation">duplicate-safe · bounded retries</span>
      </div>
    );
  }

  if (slug === "ml-decision-systems") {
    return (
      <div
        className="project-visual project-visual--ml"
        role="img"
        aria-label="Classification evaluation: probability scores cross a decision threshold and produce a confusion matrix"
      >
        <div className="score-panel">
          <span className="visual-kicker">MODEL SCORES</span>
          {[0.91, 0.74, 0.58, 0.43, 0.27].map((score, index) => (
            <div className="score-row" key={score}>
              <span className={index < 3 ? "score-dot score-dot--positive" : "score-dot"} />
              <i><b style={{ width: `${score * 100}%` }} /></i>
              <small>{score.toFixed(2)}</small>
            </div>
          ))}
        </div>
        <div className="threshold-mark">
          <span>DECISION</span>
          <i />
          <strong>0.50</strong>
        </div>
        <div className="matrix-panel">
          <span className="visual-kicker">CONFUSION MATRIX</span>
          <div className="matrix-grid">
            <i>TP</i><i>FP</i><i>FN</i><i>TN</i>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "governed-ai-agents") {
    return (
      <div
        className="project-visual project-visual--agent"
        role="img"
        aria-label="Business question flows through metadata retrieval, SQL generation, validation and execution, then an answer"
      >
        <div className="agent-query">“Loan balance by servicer?”</div>
        <div className="agent-branches">
          <div className="agent-branch"><span>BUSINESS TERMS</span><i /></div>
          <div className="agent-branch"><span>METADATA</span><i /></div>
          <div className="agent-branch"><span>GENERATE SQL</span><i /></div>
        </div>
        <div className="agent-validator">
          <span className="validator-check">✓</span>
          <span><strong>Validate & execute</strong><small>schema check · governed query</small></span>
        </div>
        <div className="agent-execution">RESULT → ANSWER <span>↗</span></div>
      </div>
    );
  }

  return (
    <div
      className="project-visual project-visual--access"
      role="img"
      aria-label="Secure document access: an authenticated portal passes a resource-specific authorization check before private storage access"
    >
      <div className="access-user">
        <span className="user-avatar">U</span>
        <strong>Portal user</strong>
        <small>authenticated</small>
      </div>
      <div className="access-wire"><span /></div>
      <div className="access-gate">
        <span className="gate-shield">✓</span>
        <strong>Authorize</strong>
        <small>identity + resource</small>
      </div>
      <div className="access-wire"><span /></div>
      <div className="access-vault">
        <span className="vault-lock">▣</span>
        <strong>Private files</strong>
        <small>scoped access</small>
      </div>
    </div>
  );
}

export default ProjectVisual;
