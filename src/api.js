const ENDPOINT = "http://localhost:3000";
let HEADERS = {
  "Content-type": "application/json"
};

const setJwtToken = (token) => {
  HEADERS["Authorization"] = `Bearer ${token}`;
  sessionStorage.setItem("token", token);
};

export const loadJwtToken = () => {
  const token = sessionStorage.getItem('token')
  if (token) {
    setJwtToken(token);
  }
};

const handleResponse = async (response, onSuccess, onFailed) => {
  const res = await response.json();
  if (response.status >= 200 && response.status <= 201) {
    console.log(res);
    if (res.jwtToken) {
      setJwtToken(res.jwtToken);
    }
    return onSuccess(res);
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

export const getProblemList = () => {
  return fetch(`${ENDPOINT}/problems`, {
    headers: HEADERS,
  }).then(console.log)
}
