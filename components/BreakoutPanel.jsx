"use client";

import React from "react";

export default function BreakoutPanel({ breakouts }) {
  return (
    <section style={{ marginTop: "2rem", border: "1px solid #ccc", padding: "1rem", borderRadius: "6px" }}>
      <h3>Breakout Zones</h3>
      {breakouts.length === 0 ? (
        <p style={{ fontStyle: "italic" }}>কোনো ব্রেকআউট পাওয়া যায়নি</p>
      ) : (
        breakouts.map((item, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <p><strong>Pair:</strong> {item.pair}</p>
            <p><strong>Time:</strong> {item.time}</p>
            <p><strong>Zone Type:</strong> {item.zoneType}</p>
            <p><strong>Direction:</strong> {item.direction}</p>
            <p><strong>Strength:</strong> {item.strength}%</p>
            <hr />
          </div>
        ))
      )}
    </section>
  );
}