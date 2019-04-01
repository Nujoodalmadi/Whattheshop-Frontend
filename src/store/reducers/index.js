import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./error";

export default combineReducers({
  authReducer: authReducer,
  errorReducer: errorReducer
});
