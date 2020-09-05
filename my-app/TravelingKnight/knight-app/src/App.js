import React from 'react';
import logo from './logo.svg';
import Knight from './Knight';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Knight />
    </div>
  );
}

export default App;
