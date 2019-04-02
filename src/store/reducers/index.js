import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./error";

import productsReducer from "./products";
import productReducer from "./product";

export default combineReducers({
<<<<<<< HEAD
  authReducer: authReducer,
  errorReducer: errorReducer
=======
  products: productsReducer,
  product: productReducer
>>>>>>> master
});
