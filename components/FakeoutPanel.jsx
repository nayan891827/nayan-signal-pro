"use client";

export default function FakeoutPanel({ fakeouts }) {
  return (
    <section style={{ marginTop: "2rem", border: "1px solid #999", padding: "1rem", borderRadius: "6px" }}>
      <h3>Fakeout Zones</h3>
      {fakeouts.length === 0 ? (
        <p style={{ fontStyle: "italic" }}>এই জায়গায় ফেইকআউট শো করবে (Under Development)</p>
      ) : (
        fakeouts.map((fakeout, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <p><strong>Pair:</strong> {fakeout.pair}</p>
            <p><strong>Time:</strong> {fakeout.time}</p>
            <p><strong>Zone Type:</strong> {fakeout.zoneType}</p>
            <p><strong>Direction:</strong> {fakeout.direction}</p>
            <p><strong>Strength:</strong> {fakeout.strength}%</p>
            <hr />
          </div>
        ))
      )}
    </section>
  );
}