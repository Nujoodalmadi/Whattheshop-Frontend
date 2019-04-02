import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// import Register from "./Components/authentication/Register";
// Redux
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";
import NavBar from "./Components/Navbar";
import Register from "./Components/Authentication/Register";
import Login from "./Components/Authentication/Login";
import Profile from "./Components/Profile";

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
        </Switch>
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
