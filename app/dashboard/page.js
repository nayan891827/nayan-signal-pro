"use client";
import { useAuth } from "@/lib/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchSignals } from "@/lib/firestore";

import UserHeader from "@/components/UserHeader";
import ModeSelector from "@/components/ModeSelector";
import SignalPanel from "@/components/SignalPanel";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [mode, setMode] = useState("live");
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    if (user === undefined) return;
    if (!user) router.push("/");
  }, [user]);

  useEffect(() => {
    const loadSignals = async () => {
      const data = await fetchSignals(mode);
      setSignals(data);
    };
    if (user) loadSignals();
  }, [mode, user]);

  if (user === undefined) return <p>Loading authentication...</p>;
  if (!user) return <p>Redirecting...</p>;

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <UserHeader user={user} logout={logout} />
      <ModeSelector mode={mode} setMode={setMode} />
      <SignalPanel signals={signals} />

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