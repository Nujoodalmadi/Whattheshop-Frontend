// React
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";

// Components
import NavBar from "./components/Navigation/Navbar";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import Profile from "./components/Profile";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import CartPage from "./components/Cart";
import OrdersHistory from "./components/Profile/OrderHistory/OrdersHistory";
import SpicificOrderTable from "./components/Profile/OrderHistory/SpicificOrderTable";
import ProfileUpdate from "./components/updateProfile";
class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.checkForToken();
  }
  componentDidUpdate() {
    if (this.props.user) {
      this.props.fetchProfile();
    }
  }
  render() {
    return (
      <div className="content-wrapper">
        <NavBar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/products/detail/:productID" component={ProductDetail} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />

          <Route
            path="/profile/history/:orderID"
            component={SpicificOrderTable}
          />
          <Route path="/profile/history" component={OrdersHistory} />
          <Route path="/profile" component={Profile} />
          <Route path="/update" component={ProfileUpdate} />
          <Route path="/products/:category?" component={ProductList} />
          <Route path="/cart" component={CartPage} />

          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(actionCreators.fetchProducts()),
    checkForToken: () => dispatch(actionCreators.checkForExpiredToken()),
    fetchProfile: () => dispatch(actionCreators.fetchProfile())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
