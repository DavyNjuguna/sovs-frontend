import React, { useState } from 'react';
import axios from 'axios';

function Vote({ nationalId }) {
  const [message, setMessage] = useState('');

  const vote = async (candidateId) => {
    try {
      await axios.post('http://127.0.0.1:5000/vote/cast', {
        national_id: nationalId,
        candidate_id: candidateId
      });
      setMessage('Vote cast successfully!');
    } catch {
      setMessage('You have already voted or an error occurred.');
    }
  };

  return (
    <div>
      <h2>Cast Your Vote</h2>
      {[1, 2, 3].map(id => (
        <button key={id} onClick={() => vote(id)}>Vote for Candidate {id}</button>
      ))}
      <p>{message}</p>
    </div>
  );
}

export default Vote;