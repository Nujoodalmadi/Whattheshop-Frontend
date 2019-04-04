import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

export const fetchProducts = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/api/");
      const products = res.data;
      dispatch({
        type: actionTypes.FETCH_PRODUCTS,
        payload: products
      });
    } catch (error) {
      console.error("Something went wrong with ", error);
    }
  };
};

export const fetchCatogries = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/api/category");
      const categories = res.data;
      dispatch({
        type: actionTypes.FETCH_CATEGORIES,
        payload: categories
      });
    } catch (error) {
      console.error("Somthing went wrong with ", error);
    }
  };
};
