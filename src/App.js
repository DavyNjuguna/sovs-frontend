import './App.css';
import React, { useState } from 'react';
import Login from './components/Login';
import Vote from './components/Vote';
import Results from './components/Results';

function App() {
  const [nationalId, setNationalId] = useState('');
  const [hasVoted, setHasVoted] = useState(false);

  return (
    <div>
      <h1>SOVS: Secure Online Voting System</h1>
      {!nationalId ? (
        <Login onLogin={(id, voted) => {
          setNationalId(id);
          setHasVoted(voted);
        }} />
      ) : hasVoted ? (
        <Results />
      ) : (
        <Vote nationalId={nationalId} />
      )}
    </div>
  );
}

export default App;