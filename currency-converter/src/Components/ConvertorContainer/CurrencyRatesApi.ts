import axios from "axios";
import { useEffect } from "react";
import { conversion_rates } from "./rates";

interface CurrencyData {
  data: {
    conversion_rates: { [key: string]: string };
  };
}

export const fetchData = async () => {
  const url =
    "https://v6.exchangerate-api.com/v6/d4e4e5e460436684793a7065/latest/USD";
  // "http://api.exchangeratesapi.io/v1/latest?access_key=7782e6f0c967c4f3f7d1f29c003868b1&format=1";
  try {
    const result: CurrencyData = await axios.get(url);
    console.log(result.data.conversion_rates);
    return result.data.conversion_rates;
  } catch (error) {
    console.error(error);
  }
};
