
import { AppActionType } from '../actionTypes/appActions';

export interface ISetBaseCurrencyAction {
    type: AppActionType.SET_BASE_CURRENCY;
    payload: string;
}

export interface ISetLatestRatesAction {
    type: AppActionType.SET_LATEST_RATES;
    payload: any;
}

export interface ISetHistoricalRatesAction {
    type: AppActionType.SET_HISTORICAL_RATES;
    payload: any;
}

export interface ISetSupportedCurrenciesAction {
    type: AppActionType.SET_SUPPORTED_CURRENCIES;
    payload: any;
}

export interface ISetConvertCurrenciesAction {
    type: AppActionType.SET_CONVERT_CURRENCIES;
    payload: any;
}

export interface ISetTimeSeriesRatesAction {
    type: AppActionType.SET_TIME_SERIES_RATES;
    payload: any;
}

export type AppAction =
    ISetBaseCurrencyAction |
    ISetLatestRatesAction |
    ISetHistoricalRatesAction |
    ISetSupportedCurrenciesAction |
    ISetConvertCurrenciesAction |
    ISetTimeSeriesRatesAction;

export const setBaseCurrency = (payload: string): ISetBaseCurrencyAction => ({
    type: AppActionType.SET_BASE_CURRENCY,
    payload
});

export const setLatestRates = (payload: any): ISetLatestRatesAction => ({
    type: AppActionType.SET_LATEST_RATES,
    payload
});

export const setHistoricalRates = (payload: any): ISetHistoricalRatesAction => ({
    type: AppActionType.SET_HISTORICAL_RATES,
    payload
});

export const setSupportedCurrencies = (payload: any): ISetSupportedCurrenciesAction => ({
    type: AppActionType.SET_SUPPORTED_CURRENCIES,
    payload
});

export const setConvertCurrencies = (payload: any): ISetConvertCurrenciesAction => ({
    type: AppActionType.SET_CONVERT_CURRENCIES,
    payload
});

export const setTimeSeriesRates = (payload: any): ISetTimeSeriesRatesAction => ({
    type: AppActionType.SET_TIME_SERIES_RATES,
    payload
});

export const latestRatesRequest = () => ({
    type: AppActionType.LATEST_RATES_REQUEST
});

export const latestRatesSuccess = (payload: any) => ({
    type: AppActionType.LATEST_RATES_SUCCESS,
    payload
});

export const latestRatesFailure = (payload: any) => ({
    type: AppActionType.LATEST_RATES_FAILURE,
    payload
});

export const historicalRatesRequest = () => ({
    type: AppActionType.HISTORICAL_RATES_REQUEST
});

export const historicalRatesSuccess = (payload: any) => ({
    type: AppActionType.HISTORICAL_RATES_SUCCESS,
    payload
});

export const historicalRatesFailure = (payload: any) => ({
    type: AppActionType.HISTORICAL_RATES_FAILURE,
    payload
});

export const supportedCurrenciesRequest = () => ({
    type: AppActionType.SUPPORTED_CURRENCIES_REQUEST
});

export const supportedCurrenciesSuccess = (payload: any) => ({
    type: AppActionType.SUPPORTED_CURRENCIES_SUCCESS,
    payload
});

export const supportedCurrenciesFailure = (payload: any) => ({
    type: AppActionType.SUPPORTED_CURRENCIES_FAILURE,
    payload
});

export const convertCurrenciesRequest = () => ({
    type: AppActionType.CONVERT_CURRENCIES_REQUEST
});

export const convertCurrenciesSuccess = (payload: any) => ({
    type: AppActionType.CONVERT_CURRENCIES_SUCCESS,
    payload
});

export const convertCurrenciesFailure = (payload: any) => ({
    type: AppActionType.CONVERT_CURRENCIES_FAILURE,
    payload
});

export const timeSeriesRatesRequest = () => ({
    type: AppActionType.TIME_SERIES_RATES_REQUEST
});

export const timeSeriesRatesSuccess = (payload: any) => ({
    type: AppActionType.TIME_SERIES_RATES_SUCCESS,
    payload
});

export const timeSeriesRatesFailure = (payload: any) => ({
    type: AppActionType.TIME_SERIES_RATES_FAILURE,
    payload
});







