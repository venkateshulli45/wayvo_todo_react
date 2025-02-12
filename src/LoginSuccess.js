import React from 'react';
import Logout from './Logout';
import Todo from './components/todo'; // Import the Todo component

function LoginSuccess() {
  return (
    <div>
      <h1>Login Successful</h1>
      <p>Welcome back!</p>
      <Logout />
      <Todo /> {/* Render the Todo application after successful login */}
    </div>
  );
}

export default LoginSuccess;
