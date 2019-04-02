import React, { Component } from "react";

import Register from "./components/Authentication/Register";
// Redux
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";

import Navbar from "./components/Navbar";

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <div className="content-wrapper">
        <Navbar />
        {/* <Register /> */}

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
