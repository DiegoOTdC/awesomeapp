import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Internet</h1>
        <p>^Logo turns the other way..</p>
        <h6>Imadethathappen(⌐■-■ </h6>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's learn about react :D
        </a>
      </header>
    </div>
  );
}

export default App;
