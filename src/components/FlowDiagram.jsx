import { useState } from "react";

function FlowDiagram({ flow }) {
  const [selected, setSelected] = useState(null);
  return (
    <div className="flow-visual">
      <div className="flow-nodes" aria-label="Interactive system architecture">
        {flow.map(([title, description], index) => (
          <div className="flow-step" key={title}>
            <button
              className={
                selected === index ? "flow-node flow-node--active" : "flow-node"
              }
              type="button"
              aria-label={`${title}: ${description}`}
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
            >
              <span className="flow-index">0{index + 1}</span>
              <span>{title}</span>
            </button>
            {index < flow.length - 1 && (
              <span className="flow-arrow" aria-hidden="true">
                →
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="flow-caption" aria-live="polite">
        <span className="flow-caption-dot" />
        {selected === null
          ? "Select a component to inspect its role"
          : `${flow[selected][0]} — ${flow[selected][1]}`}
      </div>
    </div>
  );
}

export default FlowDiagram;
