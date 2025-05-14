export default function OrderBlockPanel({ orderBlocks }) {
  return (
    <section style={{ marginTop: "2rem", border: "1px solid #555", padding: "1rem", borderRadius: "6px" }}>
      <h3>Order Blocks</h3>
      {orderBlocks.length === 0 ? (
        <p style={{ fontStyle: "italic" }}>এই মুহূর্তে কোন Order Block পাওয়া যায়নি</p>
      ) : (
        orderBlocks.map((ob, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <p><strong>Type:</strong> {ob.type}</p>
            <p><strong>Pair:</strong> {ob.pair}</p>
            <p><strong>Zone:</strong> {ob.zone}</p>
            <p><strong>Time:</strong> {ob.time}</p>
            <hr />
          </div>
        ))
      )}
    </section>
  );
}