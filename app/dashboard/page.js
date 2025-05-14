"use client";
import { useAuth } from "@/lib/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchSignals } from "@/lib/firestore";
import { fetchTrendlines } from "@/lib/firestore";
import { fetchCandlestickPatterns } from "@/lib/firestore";
import { fetchChartPatterns } from "@/lib/firestore";
import { fetchBreakouts } from "@/lib/firestore";
import { fetchFakeouts } from "@/lib/firestore";
import { fetchLiquidityZones } from "@/lib/firestore";
import { fetchBOS } from "@/lib/firestore";
import { fetchChochs } from "@/lib/firestore";
import { fetchOrderBlocks } from "@/lib/firestore";
import { fetchFvgs } from "@/lib/firestore";
import { fetchPremiumZones } from "@/lib/firestore";
import { fetchMitigations } from "@/lib/firestore";


import ZonePanel from "@/components/ZonePanel";
import UserHeader from "@/components/UserHeader";
import ModeSelector from "@/components/ModeSelector";
import SignalPanel from "@/components/SignalPanel";
import TrendlinePanel from "@/components/TrendlinePanel";
import CandlestickPanel from "@/components/CandlestickPanel";
import ChartPatternPanel from "@/components/ChartPatternPanel";
import BreakoutPanel from "@/components/BreakoutPanel";
import FakeoutPanel from "@/components/FakeoutPanel";
import LiquidityPanel from "@/components/LiquidityPanel";
import BOSPanel from "@/components/BOSPanel";
import ChochPanel from "@/components/ChochPanel";
import OrderBlockPanel from "@/components/OrderBlockPanel";
import FvgPanel from "@/components/FvgPanel";
import PremiumZonePanel from "@/components/PremiumZonePanel";
import MitigationPanel from "@/components/MitigationPanel";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [mode, setMode] = useState("live");
  const [signals, setSignals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trends, setTrends] = useState([]);
  const [candles, setCandles] = useState([]);
  const [chartPatterns, setChartPatterns] = useState([]);
  const [breakouts, setBreakouts] = useState([]);
  const [fakeouts, setFakeouts] = useState([]);
  const [zones, setZones] = useState([]);
  const [bosSignals, setBosSignals] = useState([]);
  const [chochs, setChochs] = useState([]);
  const [orderBlocks, setOrderBlocks] = useState([])
  const [fvgs, setFvgs] = useState([]);
  const [premiumZones, setPremiumZones] = useState([]);
  const [mitigations, setMitigations] = useState([]);


  useEffect(() => {
  const loadMitigations = async () => {
    const data = await fetchMitigations(mode);
    setMitigations(data);
  };
  if (user) loadMitigations();
}, [mode, user]);


  useEffect(() => {
  const loadZones = async () => {
    const data = await fetchPremiumZones(mode);
    setPremiumZones(data);
  };
  if (user) loadZones();
}, [mode, user]);


  useEffect(() => {
  const loadFvgs = async () => {
    const data = await fetchFvgs(mode);
    setFvgs(data);
  };
  if (user) loadFvgs();
}, [mode, user]);

useEffect(() => {
  const loadOrderBlocks = async () => {
    const data = await fetchOrderBlocks(mode);
    setOrderBlocks(data);
  };
  if (user) loadOrderBlocks();
}, [mode, user]);


useEffect(() => {
  const loadChochs = async () => {
    const chochData = await fetchChochs(mode);
    setChochs(chochData);
  };
  if (user) loadChochs();
}, [mode, user]);


useEffect(() => {
  const loadBOS = async () => {
    const data = await fetchBOS(mode);
    setBosSignals(data);
  };
  if (user) loadBOS();
}, [mode, user]);

useEffect(() => {
  const loadLiquidity = async () => {
    const data = await fetchLiquidityZones(mode);
    setZones(data);
  };
  if (user) loadLiquidity();
}, [mode, user]);

  useEffect(() => {
  const loadFakeouts = async () => {
    const data = await fetchFakeouts(mode);
    setFakeouts(data);
  };
  if (user) loadFakeouts();
}, [mode, user]);

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
  const loadBreakouts = async () => {
    const data = await fetchBreakouts(mode);
    setBreakouts(data);
  };
  if (user) loadBreakouts();
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
      <BreakoutPanel breakouts={breakouts} />
      <FakeoutPanel fakeouts={fakeouts} />
      <LiquidityPanel zones={zones} />
      <BOSPanel bosData={bosSignals} />
      <ChochPanel chochs={chochs} />
      <OrderBlockPanel orderBlocks={orderBlocks} />
      <FvgPanel fvgs={fvgs} />
      <PremiumZonePanel zones={premiumZones} />
      <MitigationPanel mitigations={mitigations} />


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
