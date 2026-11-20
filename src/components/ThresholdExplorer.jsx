import { useMemo, useState } from "react";

const syntheticExamples = [
  ...[0.91, 0.88, 0.82, 0.79, 0.76, 0.72, 0.69, 0.65, 0.63, 0.59, 0.57, 0.54, 0.51, 0.48, 0.45, 0.41, 0.36, 0.32, 0.27, 0.18].map(
    (score) => ({ score, actual: "positive" }),
  ),
  ...[0.85, 0.77, 0.68, 0.61, 0.58, 0.49, 0.44, 0.39, 0.34, 0.29, 0.25, 0.22, 0.18, 0.16, 0.14, 0.12, 0.09, 0.07, 0.04, 0.02].map(
    (score) => ({ score, actual: "negative" }),
  ),
];

function percent(value, total) {
  return total ? Math.round((value / total) * 100) : 0;
}

function ThresholdExplorer() {
  const [threshold, setThreshold] = useState(0.5);
  const metrics = useMemo(() => {
    const counts = { truePositive: 0, falsePositive: 0, trueNegative: 0, falseNegative: 0 };
    syntheticExamples.forEach(({ score, actual }) => {
      const predictedPositive = score >= threshold;
      if (actual === "positive" && predictedPositive) counts.truePositive += 1;
      else if (actual === "positive") counts.falseNegative += 1;
      else if (predictedPositive) counts.falsePositive += 1;
      else counts.trueNegative += 1;
    });
    return {
      ...counts,
      precision: percent(
        counts.truePositive,
        counts.truePositive + counts.falsePositive,
      ),
      recall: percent(
        counts.truePositive,
        counts.truePositive + counts.falseNegative,
      ),
      falsePositiveRate: percent(
        counts.falsePositive,
        counts.falsePositive + counts.trueNegative,
      ),
    };
  }, [threshold]);

  const bars = [
    ["Precision", metrics.precision, "mint"],
    ["Recall / TPR", metrics.recall, "indigo"],
    ["False positive rate", metrics.falsePositiveRate, "amber"],
  ];

  return (
    <section className="threshold-explorer" aria-labelledby="threshold-heading">
      <div className="threshold-heading">
        <div>
          <p className="eyebrow">Interactive illustration</p>
          <h2 id="threshold-heading">A threshold is a decision, not accuracy.</h2>
        </div>
        <span className="synthetic-badge">SYNTHETIC EXAMPLES</span>
      </div>
      <p className="threshold-description">
        Move the cutoff to see how predicted outcomes change across 40 made-up
        scores. These values do not represent a trained model or real financial
        records.
      </p>
      <div className="threshold-controls">
        <label htmlFor="decision-threshold">
          Decision threshold <strong>{Math.round(threshold * 100)}%</strong>
        </label>
        <input
          id="decision-threshold"
          type="range"
          min="0.1"
          max="0.9"
          step="0.05"
          value={threshold}
          onChange={(event) => setThreshold(Number(event.target.value))}
        />
        <div className="threshold-range-labels" aria-hidden="true">
          <span>10% · more positives flagged</span>
          <span>90% · fewer positives flagged</span>
        </div>
      </div>
      <div className="threshold-results">
        <div className="confusion-grid" aria-live="polite">
          <div>
            <span>True positives</span>
            <strong>{metrics.truePositive}</strong>
          </div>
          <div>
            <span>False positives</span>
            <strong>{metrics.falsePositive}</strong>
          </div>
          <div>
            <span>True negatives</span>
            <strong>{metrics.trueNegative}</strong>
          </div>
          <div>
            <span>False negatives</span>
            <strong>{metrics.falseNegative}</strong>
          </div>
        </div>
        <div className="threshold-metrics" aria-live="polite">
          {bars.map(([label, value, tone]) => (
            <div className="metric-row" key={label}>
              <div>
                <span>{label}</span>
                <strong>{value}%</strong>
              </div>
              <div
                className="metric-track"
                role="progressbar"
                aria-label={label}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={value}
              >
                <span
                  className={`metric-fill metric-fill--${tone}`}
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="threshold-footnote">
        The percentages above are metrics calculated from this synthetic
        illustration. A 90% threshold does not mean 90% model accuracy.
      </p>
    </section>
  );
}

export default ThresholdExplorer;
