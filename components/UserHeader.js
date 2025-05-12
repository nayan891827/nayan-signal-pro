"use client";

export default function UserHeader({ user, logout }) {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <h2>Welcome, {user.displayName || "User"}!</h2>
        <p>{user.email}</p>
      </div>
      <button
        onClick={logout}
        style={{
          padding: "8px 16px",
          background: "#d33",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </header>
  );
}