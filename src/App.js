import React from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>Firebase Authentication Example</h1>
      <Register />
      <Login />
    </div>
  );
}

export default App;
