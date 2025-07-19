import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Results() {
  const [results, setResults] = useState({});

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/vote/results')
      .then(res => setResults(res.data));
  }, []);

  return (
    <div>
      <h2>Live Results</h2>
      {Object.entries(results).map(([name, count]) => (
        <p key={name}>{name}: {count} votes</p>
      ))}
    </div>
  );
}

export default Results;