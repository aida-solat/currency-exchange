

export interface AppState {
    baseCurrency: string;
    latestRates: any;
    historicalRates: any;
    supportedCurrencies: any;
    convertCurrencies: any;
    timeSeriesRates: any;
    symbols: any;
}

export interface RootState {
    app: AppState;
}

