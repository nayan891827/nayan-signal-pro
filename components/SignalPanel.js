"use client";

export default function SignalPanel({ signals }) {
  return (
    <section style={{ marginTop: "2rem", border: "1px solid #ccc", padding: "1rem", borderRadius: "6px" }}>
      <h3>Signal Panel</h3>
      {signals.length === 0 ? (
        <p style={{ fontStyle: "italic" }}>এই জায়গায় সিগন্যাল শো করবে (Under Development)</p>
      ) : (
        signals.map((signal, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <p><strong>Pair:</strong> {signal.pair}</p>
            <p><strong>Time:</strong> {signal.time}</p>
            <p><strong>Type:</strong> {signal.type}</p>
            <hr />
          </div>
        ))
      )}
    </section>
  );
}
