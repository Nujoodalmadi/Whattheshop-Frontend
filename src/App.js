import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";

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
