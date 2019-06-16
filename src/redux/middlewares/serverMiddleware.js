import {SIGN_IN, SIGN_UP, signInFailed, signInSuccess, signUpFailed, signUpSuccess} from "../modules/auth";
import * as API from "../../api";
import {jump} from "../modules/route";

export const serverMiddleware = store => next => action => {
  console.log("middleware: ", action);

  switch (action.type) {
    case SIGN_IN:
      API.signIn(action.payload, signInSuccess, signInFailed)
        .then((action) => {
          store.dispatch(action);
          store.dispatch(jump("home"));
        })
        .catch(store.dispatch);
      break;
    case SIGN_UP:
      API.signUp(action.payload, signUpSuccess, signUpFailed)
        .then((action) => {
          store.dispatch(action);
          store.dispatch(jump("sign_in"));
        })
        .catch(store.dispatch);
      break;
    default:
      break;
  }
  return next(action);
};
