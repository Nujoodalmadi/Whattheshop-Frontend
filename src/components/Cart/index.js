// React
import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";

// Components
import CartRow from "./CartRow";

class CartPage extends Component {
  // componentDidUpdate(prevProps) {
  //   console.log(prevProps.cart.map(item => item.quantity));
  //   console.log(this.props.cart.map(item => item.quantity));

  // }

  render() {
    const cartRow = this.props.cart.map(item => (
      <CartRow key={item.product.id} item={item} />
    ));
    const mapTotal = this.props.cart.map(
      item => item.product.price * item.quantity
    );

    return (
      <div
        className=" justify-content-center mt-5"
        align="center"
        style={{ minWidth: "1200px" }}
      >
        <Card className="w-75">
          <Card.Body style={{ textAlign: "center", height: "75px" }}>
            <Card.Title className="text-muted" style={{ fontSize: "25px" }}>
              Your Cart
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item
              style={{ fontSize: "12px", fontWeight: "bold" }}
              className="d-flex flex-row"
            >
              <div className="p-2 col-5 mr-2 ">Item</div>
              <div className="p-2 col-3 mr-5 "> Price (each)</div>
              <div className="p-2 col-1 mr-3">Qty </div>
              <div className="p-2">Subtotal</div>
            </ListGroup.Item>

            {cartRow}
            <div className="p-2 d-flex">
              Total:{" "}
              {mapTotal.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
              }, 0)}
            </div>
          </ListGroup>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-light "
              style={{ color: "grey", margin: "10px" }}
            >
              Checkout
            </button>
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart
  };
};

export default connect(
  mapStateToProps,
  null
)(CartPage);
