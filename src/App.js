import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "Arial" }}>
      <header style={{ backgroundColor: "#1a1a2e", color: "white", padding: "1rem", borderRadius: "10px" }}>
        <h1>Secure Online Voting System (SOVS)</h1>
        <p>Welcome to the official SOVS portal</p>
      </header>

      <main style={{ marginTop: "2rem" }}>
        <section style={{ marginBottom: "1.5rem" }}>
          <h2>Vote for Your Favorite Candidate</h2>
          <p>Use your ID or OTP to log in securely and vote from anywhere.</p>
        </section>

        <section>
          <h3>Features:</h3>
          <ul>
            <li>✔️ Secure login via OTP or Voter ID</li>
            <li>✔️ Encrypted vote storage and verification</li>
            <li>✔️ Real-time result tallying</li>
            <li>✔️ Fraud detection and audit logging</li>
          </ul>
        </section>
      </main>

      <footer style={{ marginTop: "3rem", fontSize: "0.9rem", color: "#555" }}>
        &copy; {new Date().getFullYear()} SOVS - All rights reserved.
      </footer>
    </div>
  );
}

export default App;
