"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { login, logout, auth } from "../lib/auth";

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <main style={{ padding: 50, fontFamily: 'sans-serif' }}>
      <h1>Nayan Signal Pro</h1>

      {user ? (
        <>
          <p>Welcome, {user.displayName}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login with Google</button>
      )}
    </main>
  );
}