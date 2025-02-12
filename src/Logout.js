import React from 'react';
import { useHistory } from 'react-router-dom';

function Logout() {
  const history = useHistory();

  const handleLogout = () => {
    // Add your logout logic here
    // For example, clearing user session data
    history.push('/login');
  };

  return (
    <button onClick={handleLogout} className="App-logout-button">
      Logout
    </button>
  );
}

export default Logout;
