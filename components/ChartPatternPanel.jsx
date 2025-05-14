export default function ChartPatternPanel({ patterns }) {
  return (
    <section style={{ marginTop: "2rem", border: "1px solid #ccc", padding: "1rem", borderRadius: "6px" }}>
      <h3>Chart Patterns</h3>
      {patterns.length === 0 ? (
        <p style={{ fontStyle: "italic" }}>কোনো চার্ট প্যাটার্ন মেলেনি</p>
      ) : (
        patterns.map((pattern, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <p><strong>Pattern:</strong> {pattern.pattern}</p>
            <p><strong>Pair:</strong> {pattern.pair}</p>
            <p><strong>Time:</strong> {pattern.time}</p>
            <p><strong>Confidence:</strong> {pattern.confidence}%</p>
            <p><strong>Direction:</strong> {pattern.direction.toUpperCase()}</p>
            <hr />
          </div>
        ))
      )}
    </section>
  );
}