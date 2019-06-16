import {createAction} from "redux-actions";

export const JUMP = "JUMP";
export const jump = createAction(JUMP);

const InitialState = {
  path: sessionStorage.getItem('token') ? "home" : "sign_in"
};

export const route = (state = InitialState, action) => {
  switch (action.type) {
    case JUMP:
      return {...state, path: action.payload};
    default:
      return state;
  }
};
