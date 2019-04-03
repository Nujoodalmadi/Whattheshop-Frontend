import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";
import NavBar from "./components/NavBar";

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <div>
        <NavBar />
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
