
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





