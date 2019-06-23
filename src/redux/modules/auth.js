import { createAction } from "redux-actions";
export const SIGN_IN = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILED = "SIGN_IN_FAILED";
export const SIGN_UP = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILED = "SIGN_UP_FAILED";

export const SIGN_OUT = "SIGN_OUT";
export const UNAUTHORIZED = "UNAUTHORIZED";

export const signIn = createAction(SIGN_IN, (email, password) => ({email, password}));
export const signInSuccess = createAction(SIGN_IN_SUCCESS);
export const signInFailed = createAction(SIGN_IN_FAILED);
export const signUp = createAction(SIGN_UP, (email, password) => ({email, password}));
export const signUpSuccess = createAction(SIGN_UP_SUCCESS);
export const signUpFailed = createAction(SIGN_UP_FAILED);

export const signOut = createAction(SIGN_OUT);
export const onUnauthorized = createAction(UNAUTHORIZED);
