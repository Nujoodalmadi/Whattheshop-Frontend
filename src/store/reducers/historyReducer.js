// ActionTypes
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  history: [],
  currentOrder: []
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS_HISTORY:
      const currentUsersHistory = action.payload.filter(
        order => order.user === action.user
      );

      return {
        ...state,
        history: currentUsersHistory
      };
    case actionTypes.REFRESH_CURRENT_ORDER:
      let newOrder = state.history.find(order => {
        return order.id === +action.payload;
      });
      return {
        ...state,
        currentOrder: newOrder
      };

    case actionTypes.RESET_HISTORY:
      return {
        ...state,
        currentOrder: []
      };
    default:
      return state;
  }
};

export default historyReducer;
