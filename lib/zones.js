// lib/zones.js

export function detectSupportResistance(priceData) {
  const supportZones = [];
  const resistanceZones = [];

  for (let i = 2; i < priceData.length - 2; i++) {
    const curr = priceData[i];

    // Check for swing low (support)
    if (
      curr.low < priceData[i - 1].low &&
      curr.low < priceData[i - 2].low &&
      curr.low < priceData[i + 1].low &&
      curr.low < priceData[i + 2].low
    ) {
      supportZones.push({
        type: "support",
        zoneLow: curr.low,
        zoneHigh: curr.low + 0.0010,
        time: curr.time,
      });
    }

    // Check for swing high (resistance)
    if (
      curr.high > priceData[i - 1].high &&
      curr.high > priceData[i - 2].high &&
      curr.high > priceData[i + 1].high &&
      curr.high > priceData[i + 2].high
    ) {
      resistanceZones.push({
        type: "resistance",
        zoneHigh: curr.high,
        zoneLow: curr.high - 0.0010,
        time: curr.time,
      });
    }
  }

  return [...supportZones, ...resistanceZones];
}