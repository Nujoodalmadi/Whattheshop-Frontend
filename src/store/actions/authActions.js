// API Requests
import axios from "axios";
// Decrypt Token
import jwt_decode from "jwt-decode";
// ActionTypes
import * as actionTypes from "./actionTypes";

const setAuthToken = token => {
  if (token) {
    localStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `JWT ${token}`;
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};

export const checkForExpiredToken = () => {
  return dispatch => {
    // Get token
    const token = localStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;
      // Decode token and get user info
      const user = jwt_decode(token);
      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        setAuthToken(token);
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

export const login = (userData, history) => {
  return async dispatch => {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        userData
      );
      let user = await response.data;
      let decodeUser = jwt_decode(user.token);
      setAuthToken(user.token);
      dispatch(setCurrentUser(decodeUser));
      history.push("/home");
    } catch (error) {
      console.error(error);
    }
  };
};

export const signup = (userData, history) => {
  return async dispatch => {
    try {
      await axios.post("http://127.0.0.1:8000/api/register/", userData);

      dispatch(login(userData, history));
    } catch (error) {
      console.error(error);
    }
  };
};

export const logout = () => {
  setAuthToken();
  return setCurrentUser();
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});
