import { API_URL } from "../constants/api";

export const latestRates = async (base: string) => {
  const response = await fetch(`${API_URL}/latest?base=${base}`);
  return response.json();
};

export const historicalRates = async (base: string, date: string) => {
    const response = await fetch(`${API_URL}/${date}?base=${base}`);
    return response.json();
};

export const supportedCurrencies = async () => {
    const response = await fetch(`${API_URL}/symbols`);
    return response.json();
};

export const convertCurrencies = async (from: string, to: string, amount: number) => {
    const response = await fetch(`${API_URL}/convert?from=${from}&to=${to}&amount=${amount}`);
    return response.json();
};

export const timeSeriesRates = async (base: string, start: string, end: string) => {
    const response = await fetch(`${API_URL}/timeseries?base=${base}&start_date=${start}&end_date=${end}`);
    return response.json();
};
