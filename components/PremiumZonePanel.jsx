export default function PremiumZonePanel({ zones }) {
  return (
    <section style={{ marginTop: "2rem", border: "1px solid #ccc", padding: "1rem", borderRadius: "6px" }}>
      <h3>Premium/Discount Zones</h3>
      {zones.length === 0 ? (
        <p style={{ fontStyle: "italic" }}>No premium/discount zones available.</p>
      ) : (
        zones.map((zone, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <p><strong>Type:</strong> {zone.type}</p>
            <p><strong>Pair:</strong> {zone.pair}</p>
            <p><strong>Price:</strong> {zone.price}</p>
            <p><strong>Time:</strong> {zone.time}</p>
            <hr />
          </div>
        ))
      )}
    </section>
  );
}