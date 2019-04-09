// React
import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class CartRow extends Component {
  handleDecrease = () => {
    this.props.deleteCartItem(this.props.item.product.id);
  };
  render() {
    const Itemquantity = this.props.cart.find(
      item => item.product.id === this.props.item.product.id
    );
    return (
      <ListGroupItem>
        <ListGroup.Item className="d-flex flex-row align-items-center">
          <img
            src="https://pbs.twimg.com/profile_images/555038545446846464/ckLeRnHU.jpeg"
            height="100"
            width="100"
            alt="Avatar"
          />
          <div className="p-2 col-4" id="cart-row ">
            {this.props.item.product.name}
          </div>
          <div className="p-2 col-3 row-item">
            {this.props.item.product.price}
          </div>
          <div className="p-2 col-2 row-item">{Itemquantity.quantity}</div>
          <div className="p-2 row-item">
            {this.props.item.quantity * this.props.item.product.price}
          </div>

          <i
            onClick={this.handleDecrease}
            className="ml-auto p-2 far fa-trash-alt relative brandcolor"
          />

          <i
            onClick={() =>
              this.props.removeFromCart(this.props.item.product.id)
            }
            className="ml-auto p-2 fas fa-minus relative brandcolor"
          />
        </ListGroup.Item>
      </ListGroupItem>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart
  };
};

const mapDispatchToProps = dispatch => ({
  deleteCartItem: productID =>
    dispatch(actionCreators.deleteCartItem(productID)),
  removeFromCart: productID =>
    dispatch(actionCreators.removeItemFromCart(productID))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartRow);
