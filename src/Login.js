import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [voterId, setVoterId] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!voterId.trim()) return alert('Please enter your Voter ID');

    try {
      const response = await fetch('https://sovs-backend.onrender.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ voter_id: voterId })
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('voter_id', voterId);
        navigate('/vote');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      alert('Error connecting to server');
    }
  };

  return (
    <div>
      <h2>Login to Vote</h2>
      <input
        type="text"
        placeholder="Enter your Voter ID"
        value={voterId}
        onChange={(e) => setVoterId(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
