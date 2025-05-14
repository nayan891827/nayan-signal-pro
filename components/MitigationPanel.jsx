export default function MitigationPanel({ mitigations }) {
  return (
    <section style={{ marginTop: "2rem", border: "1px solid #ccc", padding: "1rem", borderRadius: "6px" }}>
      <h3>Mitigation & Entry Confirmations</h3>
      {mitigations.length === 0 ? (
        <p style={{ fontStyle: "italic" }}>No entry confirmations found.</p>
      ) : (
        mitigations.map((mitigation, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <p><strong>Pair:</strong> {mitigation.pair}</p>
            <p><strong>Direction:</strong> {mitigation.direction}</p>
            <p><strong>Entry Price:</strong> {mitigation.entryPrice}</p>
            <p><strong>Zone:</strong> {mitigation.zone}</p>
            <p><strong>Confidence:</strong> {mitigation.confidence}%</p>
            <p><strong>Time:</strong> {mitigation.time}</p>
            <hr />
          </div>
        ))
      )}
    </section>
  );
}