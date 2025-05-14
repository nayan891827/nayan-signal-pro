"use client";
import { useAuth } from "@/lib/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchSignals } from "@/lib/firestore";
import { fetchTrendlines } from "@/lib/firestore";
import { fetchCandlestickPatterns } from "@/lib/firestore";
import { fetchChartPatterns } from "@/lib/firestore";

import ZonePanel from "@/components/ZonePanel";
import UserHeader from "@/components/UserHeader";
import ModeSelector from "@/components/ModeSelector";
import SignalPanel from "@/components/SignalPanel";
import TrendlinePanel from "@/components/TrendlinePanel";
import CandlestickPanel from "@/components/CandlestickPanel";
import ChartPatternPanel from "@/components/ChartPatternPanel";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [mode, setMode] = useState("live");
  const [signals, setSignals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trends, setTrends] = useState([]);
  const [candles, setCandles] = useState([]);
  const [chartPatterns, setChartPatterns] = useState([]);

  useEffect(() => {
  const loadCandles = async () => {
    const data = await fetchCandlestickPatterns(mode);
    setCandles(data);
  };
  if (user) loadCandles();
}, [mode, user]);

  useEffect(() => {
    if (user === undefined) return;
    if (!user) router.push("/");
  }, [user]);

useEffect(() => {
  const loadTrends = async () => {
    const trendData = await fetchTrendlines(mode);
    setTrends(trendData);
  };
  if (user) loadTrends();
}, [mode, user]);

useEffect(() => {
  const loadChartPatterns = async () => {
    const data = await fetchChartPatterns(mode);
    setChartPatterns(data);
  };
  if (user) loadChartPatterns();
}, [mode, user]);


  useEffect(() => {
    const loadSignals = async () => {
      try {
        setLoading(true);
        const data = await fetchSignals(mode);
        setSignals(data);
      } catch (error) {
        console.error("Error fetching signals:", error);
      } finally {
        setLoading(false);
      }
    };
    if (user) loadSignals();
  }, [mode, user]);

  if (user === undefined || loading) return <p>Loading...</p>;
  if (!user) return <p>Redirecting...</p>;

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <UserHeader user={user} logout={logout} />
      <ModeSelector mode={mode} setMode={setMode} />
      <SignalPanel signals={signals} />
      <ZonePanel />
      <TrendlinePanel trends={trends} />
      <CandlestickPanel patterns={candles} />
      <ChartPatternPanel patterns={chartPatterns} />
      
      <section style={{ marginTop: "2rem", background: "#f0f0f0", padding: "1rem", borderRadius: "6px" }}>
        <h3>Upcoming Features</h3>
        <ul>
          <li>Market News Analysis</li>
          <li>Pattern Auto Detection</li>
          <li>Backtesting Tools</li>
          <li>Personal Trade Journal</li>
        </ul>
      </section>
    </main>
  );
}
