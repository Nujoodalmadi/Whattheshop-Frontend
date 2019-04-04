import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// import Register from "./Components/authentication/Register";
// Redux
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";

import NavBar from "./components/Navbar";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import Profile from "./components/Profile";
import ProductList from "./components/ProductsList";

import Home from "./components/Home";

import ProductDetail from "./components/ProductDetail";

import CartPage from "./components/Cart/CartPage";

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.checkForToken();
  }
  render() {
    return (
      <div className="content-wrapper">
        <NavBar />
        <Switch>
          <Route path="/home" component={Home} />

          <Route path="/products/:productID" component={ProductDetail} />

          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/products" component={ProductList} />
          <Route path="/cart" component={CartPage} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(actionCreators.fetchProducts()),
    checkForToken: () => dispatch(actionCreators.checkForExpiredToken())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(App);
