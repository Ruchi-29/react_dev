import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactApp from './ReactApp';
import { hot } from "react-hot-loader";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MY REACT APP</h1>
        <ReactApp mode={props.mode}/>
      </header>
    </div>
  );
}

export default hot(module)(App);
