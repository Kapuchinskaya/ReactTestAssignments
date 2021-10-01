import { useEffect, useState } from "react";
import { fetchData } from "./CurrencyRatesApi";

interface CurrencyFieldProps {
  value: string;
  isDefault: boolean;
  defaultCurrency?: string;
  onChange: (value: string) => void;
}

const CurrencyField = ({
  value,
  isDefault,
  defaultCurrency,
  onChange,
}: CurrencyFieldProps) => {
  const [data, setData] = useState();

  const getData = async () => {
    const data = await fetchData();
    setData(data);
    debugger;
  };

  useEffect(() => {
    getData(), [];
  });

  return (
    <select
      className="select-box-currency"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="">
        {isDefault ? defaultCurrency : "Select currency"}
      </option>
      {/* {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))} */}
    </select>
  );
};

export { CurrencyField };
