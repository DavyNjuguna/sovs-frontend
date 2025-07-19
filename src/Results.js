import React, { useEffect, useState } from "react";

function Results() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://your-backend-url.onrender.com/results")
      .then(res => res.json())
      .then(data => setResults(data));
  }, []);

  return (
    <div>
      <h2>📊 Election Results</h2>
      {results.map(r => (
        <div key={r.candidate}>
          {r.candidate}: {r.votes} votes
        </div>
      ))}
    </div>
  );
}

export default Results;
