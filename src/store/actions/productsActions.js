// API Requests
import axios from "axios";
// ActionTypes
import * as actionTypes from "./actionTypes";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

export const fetchProducts = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/api");
      const products = res.data;
      console.log("TCL: fetchProducts -> products", products);
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
      console.log("TCL: fetchCatogries -> categories", categories);
      dispatch({
        type: actionTypes.FETCH_CATEGORIES,
        payload: categories
      });
    } catch (error) {
      console.error("Somthing went wrong with ", error);
    }
  };
};

// export const fetchOrders = () => {
//   return async dispatch => {
//     try {
//       const res = await instance.get("api/orders");
//       const orders = res.data;
//       dispatch({
//         type: actionTypes.FETCH_ORDERS,
//         payload: orders
//       });
//     } catch (error) {
//       console.log("Something went wrong with ", error);
//     }
//   };
// };
export const currentProduct = currentProduct => ({
  type: actionTypes.SET_CURRENT_PRODUCT,
  payload: currentProduct
});

export const refreshCurrentProduct = productID => ({
  type: actionTypes.REFRESH_CURRENT_PRODUCT,
  payload: productID
});
