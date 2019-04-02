import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const setLoading = () => ({
  type: actionTypes.SET_PRODUCT_LOADING
});

export const fetchProductDetail = productID => {
  return async dispatch => {
    dispatch(setLoading());
    try {
      const res = await instance.get(`/api/${productID}/`);
      const product = res.data;

      dispatch({
        type: actionTypes.FETCH_PRODUCT_DETAIL,
        payload: product
      });
    } catch (error) {
      console.error("Something went wrong with ", error);
    }
  };
};

export const addProduct = (newproduct, closeModal) => {
  return async dispatch => {
    try {
      const res = await instance.post("/api/create/", newproduct);
      const product = res.data;
      dispatch({
        type: actionTypes.ADD_PRODUCT,
        payload: product
      });

      closeModal();
    } catch (err) {
      console.error("Your noob", err);
    }
  };
};

export const updateProduct = (productID, newproduct, closeModal) => {
  return async dispatch => {
    try {
      const res = await instance.put(`/api/${productID}/update/`, newproduct);
      const product = res.data;

      dispatch({
        type: actionTypes.UPDATE_PRODUCT,
        payload: product
      });

      closeModal();
    } catch (err) {
      console.error("Your noob", err);
    }
  };
};

export const deleteProduct = (productID, closeModal) => {
  return async dispatch => {
    try {
      const res = await instance.delete(`/api/${productID}/delete/`);
      const product = res.data;

      dispatch({
        type: actionTypes.DELETE_PRODUCT,
        payload: product
      });

      closeModal();
    } catch (err) {
      console.error("Your noob", err);
    }
  };
};
