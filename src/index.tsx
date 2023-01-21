import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import appReducers from "./core/reducers/appReducer";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer: appReducers,
  devTools: true,
});

const root = document.getElementById("root");

createRoot(root!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
