"use client";

export default function ModeSelector({ mode, setMode }) {
  return (
    <section style={{ marginTop: "2rem" }}>
      <h3>Signal Mode</h3>
      <select value={mode} onChange={(e) => setMode(e.target.value)} style={{ padding: "8px", fontSize: "16px" }}>
        <option value="live">Live Mode</option>
        <option value="otc">OTC Mode</option>
      </select>
    </section>
  );
}
