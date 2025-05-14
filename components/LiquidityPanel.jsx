"use client";

export default function LiquidityPanel({ zones }) {
  return (
    <section style={{ marginTop: "2rem", border: "1px solid #aaa", padding: "1rem", borderRadius: "6px" }}>
      <h3>Liquidity Zones</h3>
      {zones.length === 0 ? (
        <p style={{ fontStyle: "italic" }}>এই জায়গায় Liquidity zone ডেটা শো করবে (Under Development)</p>
      ) : (
        zones.map((zone, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <p><strong>Pair:</strong> {zone.pair}</p>
            <p><strong>Time:</strong> {zone.time}</p>
            <p><strong>Zone Type:</strong> {zone.zoneType}</p>
            <p><strong>Strength:</strong> {zone.strength}%</p>
            <hr />
          </div>
        ))
      )}
    </section>
  );
}