import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// import Register from "./Components/authentication/Register";
// Redux
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";
import NavBar from "./Components/NavBar";
import Register from "./Components/authentication/Register";
import Login from "./Components/authentication/Login";

// Components
import Navbar from "./components/Navbar";
import Register from "./components/Authentication/Register";

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
