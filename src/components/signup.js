import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './signup.css'; 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    console.log('Signup submitted', { email, password });
    history.push('/login');
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Wayvo Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          
          <input
            type="email"
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>

          <input
            type="password"
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
