// Combine
import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";

// Combining the reducers
export default combineReducers({
  authReducer: authReducer,
  products: productsReducer
});
