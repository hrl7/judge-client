import * as API from "../../api";
import {JUMP} from "../modules/route";
import {onProblemsFailed, onProblemsSuccess} from "../modules/problems";

export const loaderMiddleware = store => next => action => {
  if (action.type !== JUMP) {
    return next(action);
  }

  switch (action.payload) {
    case 'home':
      API.getProblemList(onProblemsSuccess, onProblemsFailed)
        .then(store.dispatch);
      break;
    default:
      break;
  }
  return next(action);
};
