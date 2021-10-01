import axios from "axios";

export const fetchData = async () => {
  debugger;
  const url =
    "http://api.exchangeratesapi.io/v1/latest?access_key=7782e6f0c967c4f3f7d1f29c003868b1&format=1";
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    console.error(error);
  }
};
