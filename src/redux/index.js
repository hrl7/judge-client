import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import * as reducers from "./modules";
import {loaderMiddleware} from "./middlewares/loaderMiddleware";
import {authMiddleware} from "./middlewares/authMiddleware";

export const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    combineReducers(reducers),
    composeEnhancers(applyMiddleware(authMiddleware, loaderMiddleware))
  )
};
