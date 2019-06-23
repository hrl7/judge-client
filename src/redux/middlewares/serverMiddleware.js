import API from "../../api";
import {GET_CURRENT_USER, onGetCurrentUserFailed, onGetCurrentUserSuccess} from "../modules/users";
import {GET_PROBLEMS_REQUEST, onGetProblemsFailed, onGetProblemsSuccess} from "../modules/problems";

export const serverMiddleware = store => next => action => {
  const d = store.dispatch;

  switch (action.type) {
    case GET_CURRENT_USER:
      API.getCurrentUser(onGetCurrentUserSuccess, onGetCurrentUserFailed).then(d, d);
      break;
    case GET_PROBLEMS_REQUEST: {
      API.getProblemList(onGetProblemsSuccess, onGetProblemsFailed).then(d, d);
      break;
    }
    default:
      break;
  }
  return next(action);
};
