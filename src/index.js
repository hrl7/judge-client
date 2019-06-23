import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import API from "./api";
import {configureStore} from "./redux";
import {Provider} from "react-redux";

API.loadJwtToken();
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));


