export default function FvgPanel({ fvgs }) {
  return (
    <section style={{ marginTop: "2rem", border: "1px solid #999", padding: "1rem", borderRadius: "6px" }}>
      <h3>Fair Value Gaps (FVG)</h3>
      {fvgs.length === 0 ? (
        <p style={{ fontStyle: "italic" }}>এই মুহূর্তে কোন FVG পাওয়া যায়নি</p>
      ) : (
        fvgs.map((fvg, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <p><strong>Type:</strong> {fvg.type}</p>
            <p><strong>Pair:</strong> {fvg.pair}</p>
            <p><strong>Gap Range:</strong> {fvg.range}</p>
            <p><strong>Time:</strong> {fvg.time}</p>
            <hr />
          </div>
        ))
      )}
    </section>
  );
}