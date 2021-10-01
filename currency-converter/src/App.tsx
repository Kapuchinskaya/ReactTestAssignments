import { useState } from "react";
import "./App.css";
import { CurrencyField } from "./Components/Currency";

const App = () => {
  const [secondCurrency, setSecondCurrency] = useState<string>("");

  const onSecondCurrencyChange = (value: string) => {
    setSecondCurrency(value);
  };

  return (
    <div className="welcome-page">
      <h1>Welcome to Test Currency Converter</h1>
      <h2>Check live foreign currency exchange rates</h2>
      <div className="convertor-container">
        <div className="default-currency-row">
          <p className="select-box-title">Your currency</p>
          <select className="select-box-amount default-currency-amount-select"></select>
        </div>
        <div className="convertor-select-boxes-row">
          <div className="convertor-select-boxes-item">
            <p className="select-box-title">Amount</p>
            <input className="select-box-amount"></input>
          </div>
          <div className="convertor-select-boxes-item">
            <p className="select-box-title">From</p>
            <CurrencyField
              value={secondCurrency}
              isDefault={false}
              onChange={onSecondCurrencyChange}
            />
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
};

export default App;
