import {JUMP} from "../modules/route";
import {getCurrentUser} from "../modules/users";
import {getProblems} from "../modules/problems";


const makePath = (state, action) => {
  console.log(action.payload);
  if (action.payload === "problem") {
    return `/problem/${state.problems.current}`;
  }
  return action.payload;
}
export const loaderMiddleware = store => next => action => {
  const dispatch = store.dispatch;
  if (action.type !== JUMP) {
    return next(action);
  }

  const state = store.getState();
  if (action.payload !== state.route.path) {
    // eslint-disable-next-line
    history.pushState(state, action.payload, makePath(state, action));
  }

  switch (action.payload) {
    case 'home':
      dispatch(getCurrentUser());
      dispatch(getProblems());
      break;
    case 'problem': {
      dispatch(getCurrentUser());
      if (state.problems.list.length === 0) {
        dispatch(getProblems());
      }
      break;
    }
    default:
      break;
  }
  return next(action);
};
