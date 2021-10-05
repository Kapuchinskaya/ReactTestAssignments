import { useEffect, useState } from "react";
import { fetchData } from "./CurrencyRatesApi";
import { InputField } from "./InputField";
import { RateCounted } from "./RateCounted";
import { conversion_rates } from "./rates";
import { CurrencyField } from "./SelectField";

const ConvertorContainer = () => {
  const [defaultCurrency, setDefaultCurrency] = useState<string>("USD");
  const [amount, setAmount] = useState<number>(0);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [isCorrectNumber, setIsCorrectNumber] = useState<boolean>(true);
  const [firstCurrency, setFirstCurrency] = useState<string>(defaultCurrency);
  const [secondCurrency, setSecondCurrency] = useState<string>("");
  const [isButtonPushed, setButtonPushed] = useState<boolean>(false);
  const [data, setData] = useState<{ [key: string]: number } | undefined>();
  const [currencies, setCurrencies] = useState<string[]>([]);

  const getData = async () => {
    // const data = await fetchData();
    const data = conversion_rates; //TODO заменить на API
    setData(data);
    setCurrencies(Object.keys(data));
  };

  const getRate = (key: string) => {
    if (!data) return 1;
    return data[key];
  };

  const onDefaultCurrencyChange = (value: string) => {
    setDefaultCurrency(value);
    setFirstCurrency(value);
    if (isButtonPushed) setButtonPushed(false);
  };

  const onChange = (value: string) => {
    setButtonPushed(false);
    if (isNaN(+value) || +value > 1000000000 || +value <= 0) {
      setIsCorrectNumber(false);
    } else {
      setAmount(+value);
      setIsCorrectNumber(true);
    }
  };

  const onFirstCurrencyChange = (value: string) => {
    setFirstCurrency(value);
    if (isButtonPushed) setButtonPushed(false);
  };

  const onSecondCurrencyChange = (value: string) => {
    setSecondCurrency(value);
    if (isButtonPushed) setButtonPushed(false);
  };

  const bothCurrenciesCheck =
    !isButtonPushed || (isButtonPushed && firstCurrency && secondCurrency)
      ? true
      : false;

  const onCount = () => {
    const rate = getRate(secondCurrency);
    const rateOfFirst = getRate(firstCurrency); //TODO изменить запрос в API
    const convertedAmount =
      Math.round(((amount * rate) / rateOfFirst) * 100) / 100;
    setConvertedAmount(convertedAmount);
    setButtonPushed(true);
  };

  useEffect(() => {
    if (!data) {
      getData();
    }
  }, []);

  return (
    <div className="welcome-page">
      <h1>Welcome to Test Currency Converter</h1>
      <h2>Check live foreign currency exchange rates</h2>
      <div className="convertor-container">
        <div className="default-currency-row">
          <p className="select-box-title">Your currency</p>
          <CurrencyField
            value={defaultCurrency}
            isDefault={true}
            onChange={onDefaultCurrencyChange}
            options={currencies}
          />
        </div>
        <div className="convertor-select-boxes-row">
          <div className="convertor-select-boxes-item">
            <p className="select-box-title">Amount</p>
            <InputField onChange={onChange} />
          </div>
          <div className="convertor-select-boxes-item">
            <p className="select-box-title">From</p>
            <CurrencyField
              value={firstCurrency}
              isDefault={false}
              onChange={onFirstCurrencyChange}
              options={currencies}
            />
          </div>
          <div className="convertor-select-boxes-item">
            <p className="select-box-title">To</p>
            <CurrencyField
              value={secondCurrency}
              isDefault={false}
              onChange={onSecondCurrencyChange}
              options={currencies}
            />
          </div>
        </div>
        <div></div>
        <p
          className={`input-box-error ${
            isCorrectNumber ? "display-property-none" : ""
          }`}
        >
          Please enter a valid amount
        </p>
        <p
          className={`input-box-error ${
            bothCurrenciesCheck ? "display-property-none" : ""
          }`}
        >
          Please choose both currencies
        </p>
        <RateCounted
          amountToConvert={amount}
          convertedAmount={convertedAmount}
          isShown={bothCurrenciesCheck && isCorrectNumber && isButtonPushed}
          fromCurrency={firstCurrency}
          toCurrency={secondCurrency}
        />
        <button className="convert-button" onClick={onCount}>
          Convert
        </button>
      </div>
    </div>
  );
};

export { ConvertorContainer };
