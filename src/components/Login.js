import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLogin }) {
  const [nationalId, setNationalId] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:5000/auth/login', { national_id: nationalId });
      setMessage(res.data.message);
      onLogin(nationalId, res.data.has_voted);
    } catch {
      setMessage('Login failed. Check National ID.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input value={nationalId} onChange={e => setNationalId(e.target.value)} placeholder="Enter National ID" />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default Login;