import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input type="file" accept="image/x-png,image/jpeg,image/gif" />
        <button>Learn React</button>
      </header>
    </div>
  );
}

export default App;
