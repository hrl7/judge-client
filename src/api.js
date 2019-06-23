import {onUnauthorized} from "./redux/modules/auth";

const ENDPOINT = "http://localhost:3000";
let HEADERS = {
  "Content-type": "application/json"
};

const setJwtToken = (token) => {
  HEADERS["Authorization"] = `Bearer ${token}`;
  sessionStorage.setItem("token", token);
};

const removeJwtToken = () => {
  delete HEADERS["Authorization"];
  sessionStorage.removeItem("token");
};

const loadJwtToken = () => {
  const token = sessionStorage.getItem('token');
  if (token) {
    setJwtToken(token);
  }
};

const handleResponse = async (response, onSuccess, onFailed) => {
  if (!(onSuccess instanceof Function)) {
    console.error("onSuccess is not a function");
    console.log("onSuccess: ", onSuccess);
    console.trace()
  }
  if (!(onFailed instanceof Function)) {
    console.error("onFailed is not a function");
    console.log("onFailed: ", onFailed);
    console.trace()
  }
  const res = await response.json();
  if ([200, 201, 304].includes(response.status)) {
    if (res.jwtToken) {
      setJwtToken(res.jwtToken);
    }
    return Promise.resolve(onSuccess(res));
  } else if (response.status === 401) {
    return Promise.reject(onUnauthorized(res));
  } else {
    return Promise.reject(onFailed(res));
  }
};

// @payload {email, password}
export const signUp = async (payload, onSuccess, onFailed) => {
  const resp = await fetch(`${ENDPOINT}/user/sign_up`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(payload)
  })
  return handleResponse(resp, onSuccess, onFailed);
};


// @payload {email, password}
export const signIn = async (payload, onSuccess, onFailed) => {
  const resp = await fetch(`${ENDPOINT}/user/sign_in`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(payload)
  });
  return handleResponse(resp, onSuccess, onFailed);
};

export const signOut = () => removeJwtToken();

const getProblemList = async (onSuccess, onFailed) => {
  const resp = await fetch(`${ENDPOINT}/problems`, {
    headers: HEADERS,
  });
  return handleResponse(resp, onSuccess, onFailed);
};

const getCurrentUser = async (onSuccess, onFailed) => {
  const resp = await fetch(`${ENDPOINT}/user/me`, {
    headers: HEADERS,
  });
  return handleResponse(resp, onSuccess, onFailed);
};


const API = {
  getProblemList,
  getCurrentUser,
  loadJwtToken
}

export default API;
