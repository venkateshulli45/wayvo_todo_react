import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';
import LoginSuccess from './components/todo';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/login-success" component={LoginSuccess} />
          {/* Add other routes here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
