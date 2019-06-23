import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import * as reducers from "./modules";
import {loaderMiddleware} from "./middlewares/loaderMiddleware";
import {authMiddleware} from "./middlewares/authMiddleware";
import {serverMiddleware} from "./middlewares/serverMiddleware";
import {jump} from "./modules/route";
import {setProblem} from "./modules/problems";

export const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    combineReducers(reducers),
    composeEnhancers(applyMiddleware(authMiddleware, loaderMiddleware, serverMiddleware)),
  );

  // check the path and go there
  let [path, selected] = window.location.pathname.slice(1).split("/");
  if (path === "problem") {
    if (selected) {
      store.dispatch(setProblem(Number(selected)));
    } else {
      path = "home";
    }
  }
  store.dispatch(jump(path));
  window.onpopstate = (e) => {
    store.dispatch(jump(e.state.route.path));
  };
  return store;
};
