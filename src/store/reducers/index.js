// Combine
import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import ProfileReducer from "./profileResucer";

// Combining the reducers
export default combineReducers({
  authReducer: authReducer,
  profile: ProfileReducer,
  products: productsReducer,
  cartReducer: cartReducer
});
