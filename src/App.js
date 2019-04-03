import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// import Register from "./Components/authentication/Register";
// Redux
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";

import NavBar from "./components/Navbar";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import Profile from "./components/Profile";
import ProductList from "./components/ProductsList";

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <div className="content-wrapper">
        <NavBar />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/list" component={ProductList} />
        </Switch>

        <div>
          <div>Welcome to Spill The Tea</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(actionCreators.fetchProducts())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(App);
