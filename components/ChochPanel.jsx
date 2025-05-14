export default function ChochPanel({ chochs }) {
  return (
    <section style={{ marginTop: "2rem", border: "1px solid #ccc", padding: "1rem", borderRadius: "6px" }}>
      <h3>Change of Character (CHoCH)</h3>
      {chochs.length === 0 ? (
        <p style={{ fontStyle: "italic" }}>এই মুহূর্তে কোন CHoCH ডেটা নেই</p>
      ) : (
        chochs.map((choch, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <p><strong>Type:</strong> {choch.type}</p>
            <p><strong>Pair:</strong> {choch.pair}</p>
            <p><strong>Time:</strong> {choch.time}</p>
            <hr />
          </div>
        ))
      )}
    </section>
  );
}