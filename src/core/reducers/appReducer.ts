import { AppActionType } from '../actionTypes/appActions';


export interface IAppState {
    baseCurrency: string
    rates: any
    historicalRates: any
    supportedCurrencies: any
    convertCurrencies: any
    timeSeriesRates: any
}

const initialState: IAppState = {
    baseCurrency: 'USD',
    rates: {},
    historicalRates: {},
    supportedCurrencies: {},
    convertCurrencies: {},
    timeSeriesRates: {}
}

export default function appReducer(state = initialState, action: any) {
    switch (action.type) {
        case AppActionType.SET_BASE_CURRENCY:
            return {
                ...state,
                baseCurrency: action.payload
            }
        case AppActionType.SET_LATEST_RATES:
            return {
                ...state,
                rates: action.payload
            }
        case AppActionType.SET_HISTORICAL_RATES:
            return {
                ...state,
                historicalRates: action.payload
            }
        case AppActionType.SET_SUPPORTED_CURRENCIES:
            return {
                ...state,
                supportedCurrencies: action.payload
            }
        case AppActionType.SET_CONVERT_CURRENCIES:
            return {
                ...state,
                convertCurrencies: action.payload
            }
        case AppActionType.SET_TIME_SERIES_RATES:
            return {
                ...state,
                timeSeriesRates: action.payload
            }
        default:
            return state
    }
}

