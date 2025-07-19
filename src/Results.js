import React, { useEffect, useState } from 'react';

function Results() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('https://sovs-backend.onrender.com/results')
      .then(res => res.json())
      .then(data => setResults(data));
  }, []);

  return (
    <div>
      <h2>Live Voting Results</h2>
      <ul>
        {results.map(result => (
          <li key={result.candidate}>{result.candidate}: {result.votes} votes</li>
        ))}
      </ul>
    </div>
  );
}

export default Results;

