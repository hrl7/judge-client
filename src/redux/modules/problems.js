import {createAction} from "redux-actions"

export const SET_PROBLEM = "SET_PROBLEM";
export const GET_PROBLEMS_REQUEST = "GET_PROBLEMS_REQUEST";
export const GET_PROBLEMS_SUCCESS = "GET_PROBLEMS_SUCCESS";
export const GET_PROBLEMS_FAILED = "GET_PROBLEMS_FAILED";

export const CREATE_PROBLEMS_REQUEST = "CREATE_PROBLEMS_REQUEST";
export const CREATE_PROBLEMS_SUCCESS = "CREATE_PROBLEMS_SUCCESS";
export const CREATE_PROBLEMS_FAILED = "CREATE_PROBLEMS_FAILED";

export const setProblem = createAction(SET_PROBLEM);
export const getProblems = createAction(GET_PROBLEMS_REQUEST);
export const onGetProblemsSuccess = createAction(GET_PROBLEMS_SUCCESS);
export const onGetProblemsFailed = createAction(GET_PROBLEMS_FAILED);

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
