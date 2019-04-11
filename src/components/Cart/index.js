// React
import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";

// Components
import CartRow from "./CartRow";

// Action Functions
import * as actionCreators from "../../store/actions";

class CartPage extends Component {
  state = {
    res: false
  };
  handleClick = async orders => {
    if (this.props.user) {
      await this.props.createOrder(orders);
      if (this.props.response[0] === true) {
        this.props.emptyCart();
        this.setState({ res: true });
        return window.location.assign(this.props.link);
      } else {
        this.setState({ res: true });
      }
    } else {
      return this.props.history.push("/login");
    }
  };

  render() {
    const cartRow = this.props.cart.map(item => (
      <CartRow key={item.product.id} item={item} />
    ));
    const mapTotal = this.props.cart.map(
      item => item.product.price * item.quantity
    );
    const orders_list = this.props.cart.map(item => ({
      product: item.product.id,
      quantity: item.quantity
    }));

    return (
      <div>
        {this.state.res && (
          <div class="alert alert-danger" role="alert">
            <ul>
              {this.props.response.map((value, index) => {
                return <li key={index}>{value}</li>;
              })}
            </ul>
          </div>
        )}
        <div className=" justify-content-center mt-5" align="center">
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
                onClick={() => this.handleClick(orders_list)}
              >
                Checkout
              </button>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart,
    response: state.cartReducer.response,
    link: state.cartReducer.link,
    user: state.authReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createOrder: orders => dispatch(actionCreators.createOrder(orders)),
    emptyCart: () => dispatch(actionCreators.emptyCart())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
