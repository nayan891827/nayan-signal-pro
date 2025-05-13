export default function TrendlinePanel({ trends }) {
  return (
    <section style={{ marginTop: "2rem", border: "1px solid #ccc", padding: "1rem", borderRadius: "6px" }}>
      <h3>Detected Trendlines</h3>
      {trends.length === 0 ? (
        <p style={{ fontStyle: "italic" }}>কোনো ট্রেন্ডলাইন পাওয়া যায়নি</p>
      ) : (
        trends.map((trend, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <p><strong>{trend.direction?.toUpperCase()}</strong></p>
            <p><strong>Start:</strong> {trend.startPrice}</p>
            <p><strong>End:</strong> {trend.endPrice}</p>
            <p><strong>Time:</strong> {trend.startTime} - {trend.endTime}</p>
            <hr />
          </div>
        ))
      )}
    </section>
  );
}