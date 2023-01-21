import { RootState } from '../store/rootState';

export const getBaseCurrency = (state: RootState) => state.app.baseCurrency;
export const getLatestRates = (state: RootState) => state.app.latestRates;
export const getHistoricalRates = (state: RootState) => state.app.historicalRates;
export const getSupportedCurrencies = (state: RootState) => state.app.supportedCurrencies;
export const getConvertCurrencies = (state: RootState) => state.app.convertCurrencies;
export const getTimeSeriesRates = (state: RootState) => state.app.timeSeriesRates;
