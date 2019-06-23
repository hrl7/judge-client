import {createAction} from "redux-actions";

export const GET_CURRENT_USER = "GET_CURRENT_USER_REQUEST";
export const GET_CURRENT_USER_SUCCESS = "GET_CURRENT_USER_SUCCESS";
export const GET_CURRENT_USER_FAILED = "GET_CURRENT_USER_FAILED";

export const getCurrentUser = createAction(GET_CURRENT_USER);
export const onGetCurrentUserSuccess = createAction(GET_CURRENT_USER_SUCCESS);
export const onGetCurrentUserFailed = createAction(GET_CURRENT_USER_FAILED);


const InitialState = {
  signedInUser: null,
};

export const users = (state = InitialState, action) => {
  switch(action.type) {
    case GET_CURRENT_USER_SUCCESS:
      return {...state, signedInUser: action.payload};
    default:
      return state;
  }
}
