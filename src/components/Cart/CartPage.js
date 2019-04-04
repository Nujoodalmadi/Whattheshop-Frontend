import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import CartRow from "./CartRow";

class CartPage extends Component {
  render() {
    return (
      <div
        className=" justify-content-center mt-5"
        align="center"
        style={{ minWidth: "960px" }}
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

            <CartRow />
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

export default CartPage;
