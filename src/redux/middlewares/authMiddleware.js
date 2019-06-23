import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  signInFailed,
  signInSuccess,
  signUpFailed,
  signUpSuccess,
  UNAUTHORIZED
} from "../modules/auth";
import * as API from "../../api";
import {jump} from "../modules/route";

export const authMiddleware = store => next => action => {

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

    case UNAUTHORIZED:
      API.signOut();
      store.dispatch(jump("sign_in"));
      break;

    case SIGN_OUT:
      API.signOut();
      store.dispatch(jump("sign_in"));
      break;
    default:
      break;
  }
  return next(action);
};
