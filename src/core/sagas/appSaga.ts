
import { put, takeEvery, all } from 'redux-saga/effects';
import { AppAction, convertCurrenciesFailure, convertCurrenciesSuccess, historicalRatesFailure, historicalRatesSuccess, latestRatesFailure, latestRatesSuccess, supportedCurrenciesFailure, supportedCurrenciesSuccess, timeSeriesRatesFailure, timeSeriesRatesSuccess } from '../actions/appActions';
import { latestRates, historicalRates, supportedCurrencies, convertCurrencies, timeSeriesRates } from '../service/api';
import { AppActionType } from '../actionTypes/appActions';

function* fetchLatestRates(action: AppAction) {
    try {
        const rates:[] = yield latestRates(action.payload);
        yield put(latestRatesSuccess(rates));
    } catch (e) {
        yield put(latestRatesFailure(e));
    }
}

function* fetchHistoricalRates(action: AppAction) {
    try {
        const rates:[] = yield historicalRates(action.payload.base, action.payload.date);
        yield put(historicalRatesSuccess(rates));
    } catch (e) {
        yield put(historicalRatesFailure(e));
    }
}

function* fetchSupportedCurrencies() {
    try {
        const currencies:[] = yield supportedCurrencies();
        yield put(supportedCurrenciesSuccess(currencies));
    } catch (e) {
        yield put(supportedCurrenciesFailure(e));
    }
}

function* fetchConvertCurrencies(action: AppAction) {
    try {
        const result:[] = yield convertCurrencies(action.payload.from, action.payload.to, action.payload.amount);
        yield put(convertCurrenciesSuccess(result));
    } catch (e) {
        yield put(convertCurrenciesFailure(e));
    }
}

function* fetchTimeSeriesRates(action: AppAction) {
    try {
        const result:[] = yield timeSeriesRates(action.payload.base, action.payload.start, action.payload.end);
        yield put(timeSeriesRatesSuccess(result));
    } catch (e) {
        yield put(timeSeriesRatesFailure(e));
    }
}

function* appSaga() {
    yield all([
        takeEvery(AppActionType.LATEST_RATES_REQUEST, fetchLatestRates),
        takeEvery(AppActionType.HISTORICAL_RATES_REQUEST, fetchHistoricalRates),
        takeEvery(AppActionType.SUPPORTED_CURRENCIES_REQUEST, fetchSupportedCurrencies),
        takeEvery(AppActionType.CONVERT_CURRENCIES_REQUEST, fetchConvertCurrencies),
        takeEvery(AppActionType.TIME_SERIES_RATES_REQUEST, fetchTimeSeriesRates)
    ]);
}

export default appSaga;



