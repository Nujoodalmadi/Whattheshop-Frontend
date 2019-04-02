import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./error";

import productsReducer from "./productsReducer";
import productReducer from "./productReducer";

export default combineReducers({
  authReducer: authReducer,
  products: productsReducer,
  product: productReducer
});
