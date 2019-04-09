// React
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// CSS File
import "./index.css";
// Components
import App from "./App";

// Store
import store from "./store";
import * as actionCreators from "./store/actions";
import * as serviceWorker from "./serviceWorker";
store.dispatch(actionCreators.checkForExpiredToken());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
