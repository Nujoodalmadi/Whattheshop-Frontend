import React, { Component } from "react";
import * as actionCreators from "../../store/actions";
import { connect } from "react-redux";

class index extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    const orders = this.props.orders;
    console.log("TCL: index -> render -> orders", orders);
    return <div />;
  }
}

const mapStateToProps = state => ({
  orders: state.products.orders
});

const mapDispatchToProps = dispatch => ({
  fetchOrders: () => dispatch(actionCreators.fetchOrders())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
