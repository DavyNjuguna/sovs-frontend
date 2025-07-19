import React, { useState, useEffect } from "react";

function Vote({ voterId }) {
  const [candidates, setCandidates] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    fetch("https://your-backend-url.onrender.com/candidates")
      .then(res => res.json())
      .then(data => setCandidates(data));
  }, []);

  const handleVote = async () => {
    if (!selected) return alert("Please select a candidate.");

    const res = await fetch("https://your-backend-url.onrender.com/vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ voter_id: voterId, candidate_id: selected })
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div>
      <h2>🗳️ Cast Your Vote</h2>
      {candidates.map((c) => (
        <div key={c.id}>
          <input
            type="radio"
            name="candidate"
            value={c.id}
            onChange={() => setSelected(c.id)}
          />
          {c.name}
        </div>
      ))}
      <button onClick={handleVote}>Submit Vote</button>
    </div>
  );
}

export default Vote;
