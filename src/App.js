import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";
import Category from "./Components/Category";
import NavBar from "./Components/NavBar";

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    // this.props.fetchCatogries();
  }
  render() {
    return (
      <div>
        <NavBar />
        <Category />

        <div>Welcome to Spill The Tea</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(actionCreators.fetchProducts()),
    fetchCatogries: () => dispatch(actionCreators.fetchCatogries())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(App);
