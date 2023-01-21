

export interface AppState {
    baseCurrency: string;
    latestRates: any;
    historicalRates: any;
    supportedCurrencies: any;
    convertCurrencies: any;
    timeSeriesRates: any;
}

export interface RootState {
    app: AppState;
}

