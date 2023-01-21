import { AppActionType } from '../actionTypes/appActions';
import {AppState} from '../store/rootState';




const initialState: AppState = {
    baseCurrency: 'EUR',
    latestRates: {},
    historicalRates: {},
    supportedCurrencies: {},
    convertCurrencies: {},
    timeSeriesRates: {}
}

export default function appReducer(state = initialState, action: any) {
    switch (action.type) {
        case AppActionType.LATEST_RATES_SUCCESS:
            return {
                ...state,
                latestRates: action.payload
            };
        case AppActionType.HISTORICAL_RATES_SUCCESS:
            return {
                ...state,
                historicalRates: action.payload
            };
        case AppActionType.SUPPORTED_CURRENCIES_SUCCESS:
            return {
                ...state,
                supportedCurrencies: action.payload
            };
        case AppActionType.CONVERT_CURRENCIES_SUCCESS:
            return {
                ...state,
                convertCurrencies: action.payload
            };
        case AppActionType.TIME_SERIES_RATES_SUCCESS:
            return {
                ...state,
                timeSeriesRates: action.payload
            };
        default:
            return state;
        
    }
}

