// Authentication
export { login, logout, signup, checkForExpiredToken } from "./authActions";

export {
  fetchProducts,
  fetchCatogries,
  // fetchOrders,
  currentProduct,
  refreshCurrentProduct
} from "./productsActions";

export {
  addCart,
  deleteCartItem,
  removeItemFromCart,
  emptyCart,
  createOrder
} from "./cartActions";

export {
  fetchOrdersHistory,
  refreshHistory,
  resetHistory
} from "./historyActions";

export { fetchProfile, updateProfile, emptyProfile } from "./profileActions";
