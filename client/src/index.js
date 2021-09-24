import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore,applyMiddleware } from "redux";
import { contactReducer } from "./redux/reducers/contact-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

const middleware=[thunk]
const store = createStore(contactReducer, composeWithDevTools(
  applyMiddleware(...middleware),

));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
