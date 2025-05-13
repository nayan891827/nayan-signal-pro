// components/ZonePanel.jsx

"use client";
import React, { useEffect, useState } from "react";
import { detectSupportResistance } from "@/lib/zones";

// Dummy OHLC data (later replace with Firestore)
const dummyPriceData = [
  { time: "2025-05-13T12:00", high: 1.124, low: 1.121 },
  { time: "2025-05-13T12:01", high: 1.125, low: 1.122 },
  { time: "2025-05-13T12:02", high: 1.123, low: 1.1215 },
  { time: "2025-05-13T12:03", high: 1.126, low: 1.122 },
  { time: "2025-05-13T12:04", high: 1.124, low: 1.121 },
  { time: "2025-05-13T12:05", high: 1.127, low: 1.123 },
  { time: "2025-05-13T12:06", high: 1.125, low: 1.1217 },
  { time: "2025-05-13T12:07", high: 1.123, low: 1.1209 },
  { time: "2025-05-13T12:08", high: 1.126, low: 1.1222 },
  { time: "2025-05-13T12:09", high: 1.124, low: 1.1215 },
];

export default function ZonePanel() {
  const [zones, setZones] = useState([]);

  useEffect(() => {
    const results = detectSupportResistance(dummyPriceData);
    setZones(results);
  }, []);

  return (
    <section style={{ marginTop: "2rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "6px" }}>
      <h3>Detected Zones</h3>
      {zones.length === 0 ? (
        <p>No zones detected yet.</p>
      ) : (
        zones.map((zone, index) => (
          <div key={index} style={{ marginBottom: "1rem", background: zone.type === "support" ? "#e8f5e9" : "#ffebee", padding: "0.5rem", borderRadius: "4px" }}>
            <strong>{zone.type.toUpperCase()}</strong><br />
            {zone.type === "support" ? (
              <>
                Low: {zone.zoneLow.toFixed(4)} <br />
                High: {zone.zoneHigh.toFixed(4)}
              </>
            ) : (
              <>
                High: {zone.zoneHigh.toFixed(4)} <br />
                Low: {zone.zoneLow.toFixed(4)}
              </>
            )}
            <br />
            Time: {zone.time}
          </div>
        ))
      )}
    </section>
  );
}