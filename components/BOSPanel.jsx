// components/BOSPanel.jsx
export default function BOSPanel({ bosData = [] }) {
  return (
    <section style={{ marginTop: "2rem", border: "1px solid #aaa", padding: "1rem", borderRadius: "8px" }}>
      <h3 style={{ marginBottom: "1rem" }}>Break of Structure (BOS)</h3>
      {bosData.length === 0 ? (
        <p style={{ fontStyle: "italic" }}>এই জায়গায় BOS সিগন্যাল দেখাবে (Under Development)</p>
      ) : (
        bosData.map((bos, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <p><strong>Type:</strong> {bos.type}</p>
            <p><strong>Pair:</strong> {bos.pair}</p>
            <p><strong>Time:</strong> {bos.time}</p>
            <hr />
          </div>
        ))
      )}
    </section>
  );
}