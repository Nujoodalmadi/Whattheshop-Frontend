import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

const mapStateToProps = state => ({
  categories: state.categories
});
const mapDispatchToProps = dispatch => ({
  fetchCatogries: () => dispatch(actionCreators.fetchCatogries())
});

class index extends Component {
  componentDidMount() {
    this.props.fetchCatogries();
  }
  render() {
    const categories = this.props.categories;
    console.log("TCL: index -> render -> categories", categories);

    // const categoriesMap = categories.map(category => category.title);
    return <div>category</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
