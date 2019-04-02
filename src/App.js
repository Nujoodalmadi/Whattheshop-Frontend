import React, { Component } from "react";


import "./App.css";
import NavBar from "./Components/NavBar";
import Profile from "./Components/Profile";

import Register from "./Components/authentication/Register";
// Redux
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";


class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (

      <div>
        <div className="App" />
        <NavBar />
        <Profile />
      <Register />
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
