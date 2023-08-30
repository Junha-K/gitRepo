import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://unistar-backend.com/api/v1/';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [body, setBody] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_BASE_URL}auth/login/`, {email, password})
      .then(response => {
        console.log('Login success:', response.data);
      })
      .catch(error => {
        console.error('Login error:', error);
      });
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="email" placeholder="Email" onChange={handleEmail} />
        <input type="password" placeholder="Password" onChange={handlePassword} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function App() {
  
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
