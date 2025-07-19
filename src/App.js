import React, { useState } from "react";
import Login from "./Login";
import Vote from "./Vote";
import Results from "./Results";

function App() {
  const [voterId, setVoterId] = useState(null);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Secure Online Voting System (SOVS)</h1>
      {voterId ? (
        <>
          <Vote voterId={voterId} />
          <hr />
          <Results />
        </>
      ) : (
        <Login onLogin={setVoterId} />
      )}
    </div>
  );
}

export default App;
