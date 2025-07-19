import React, { useState, useEffect } from 'react';

function Vote() {
  const [candidates, setCandidates] = useState([]);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    fetch('https://sovs-backend.onrender.com/candidates')
      .then(res => res.json())
      .then(data => setCandidates(data));
  }, []);

  const handleVote = async () => {
    const voterId = localStorage.getItem('voter_id');
    if (!voterId || !selected) return alert('Please login and select a candidate.');

    const response = await fetch('https://sovs-backend.onrender.com/vote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ voter_id: voterId, candidate_id: selected })
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div>
      <h2>Cast Your Vote</h2>
      <select onChange={(e) => setSelected(e.target.value)}>
        <option value="">Select candidate</option>
        {candidates.map(c => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      <button onClick={handleVote}>Vote</button>
    </div>
  );
}

export default Vote;