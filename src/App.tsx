import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider, connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import CurrencyConverter from "./core/screens/currencyConverter";
import { store } from "./core/store/appStore";

interface AppProps {
  store: any;
}

const gueryClient = new QueryClient();

const App: React.FC<AppProps> = () => {
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
