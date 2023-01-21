import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "bootstrap/dist/css/bootstrap.min.css";
import rootReducer from "./core/reducers/rootReducer";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import CurrencyConverter from "./core/screens/currencyConverter";

interface AppProps {
  store: any;
}

const gueryClient = new QueryClient();

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

const App: React.FC<AppProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={gueryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<CurrencyConverter />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
};

const mapStateToProps = (state: any) => {
  return {
    store: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
