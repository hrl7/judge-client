import {createActions} from "redux-actions"

export const SET_PROBLEM = "SET_PROBLEM";
export const GET_PROBLEMS_REQUEST = "GET_PROBLEMS_REQUEST";
export const GET_PROBLEMS_SUCCESS = "GET_PROBLEMS_SUCCESS";
export const GET_PROBLEMS_FAILED = "GET_PROBLEMS_FAILED";

export const setProblems = createActions(SET_PROBLEM);
export const getProblems = createActions(GET_PROBLEMS_REQUEST);
export const onProblemsSuccess = createActions(GET_PROBLEMS_SUCCESS);
export const onProblemsFailed = createActions(GET_PROBLEMS_FAILED);

const InitialState = {
  list: [],
  current: null,
  loading: false,
  error: null,
};

export const problems = (state = InitialState, action) => {
  switch (action.type) {
    case SET_PROBLEM:
      return {...state, current: action.payload};
    case GET_PROBLEMS_REQUEST:
      return {...state, loading: true};
    case GET_PROBLEMS_SUCCESS:
      return {...state, loading: false, list: action.payload};
    case GET_PROBLEMS_FAILED:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};
