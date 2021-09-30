import React from "react";
import "./App.css";

function App() {
  return (
    <div className="welcome-page">
      <h1>Welcome to Test Currency Converter</h1>
      <h2>Check live foreign currency exchange rates</h2>
      <div className="convertor-container">
        <div className="convertor-select-boxes-row">
          <div className="convertor-select-boxes-item">
            <p className="select-box-title">Amount</p>
            <input className="select-box-amount"></input>
          </div>
          <div className="convertor-select-boxes-item">
            <p className="select-box-title">From</p>
            <select className="select-box-currency"></select>
          </div>
          <div className="convertor-select-boxes-item">
            <p className="select-box-title">To</p>
            <select className="select-box-currency"></select>
          </div>
        </div>
        <button className="convert-button">Convert</button>
      </div>
    </div>
  );
}

export default App;
