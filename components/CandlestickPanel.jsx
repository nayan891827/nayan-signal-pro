export default function CandlestickPanel({ patterns }) {
  return (
    <section style={{ marginTop: "2rem", border: "1px solid #ccc", padding: "1rem", borderRadius: "6px" }}>
      <h3>Candlestick Patterns</h3>
      {patterns.length === 0 ? (
        <p style={{ fontStyle: "italic" }}>কোনো ক্যান্ডেলস্টিক প্যাটার্ন পাওয়া যায়নি</p>
      ) : (
        patterns.map((candle, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <p><strong>Pattern:</strong> {candle.pattern}</p>
            <p><strong>Pair:</strong> {candle.pair}</p>
            <p><strong>Time:</strong> {candle.time}</p>
            <p><strong>Confidence:</strong> {candle.confidence}%</p>
            <p><strong>Direction:</strong> {candle.direction.toUpperCase()}</p>
            <hr />
          </div>
        ))
      )}
    </section>
  );
}