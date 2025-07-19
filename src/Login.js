import React, { useState } from "react";

function Login({ onLogin }) {
  const [voterId, setVoterId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://your-backend-url.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ voter_id: voterId })
    });

    const data = await res.json();

    if (data.success) {
      onLogin(voterId);
    } else {
      alert("Login failed: " + data.message);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🔐 Voter Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Voter ID"
          value={voterId}
          onChange={(e) => setVoterId(e.target.value)}
          required
        />
        <button type="submit" style={{ marginLeft: "1rem" }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
