// Combine
import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";

// Combining the reducers
export default combineReducers({
  authReducer: authReducer,
  products: productsReducer,
  cartReducer: cartReducer
});
