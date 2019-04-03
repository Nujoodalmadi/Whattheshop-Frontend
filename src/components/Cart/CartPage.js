import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import CartRow from "./CartRow";

class CartPage extends Component {
  render() {
    return (
      <div>
        <Card className=" d-flex flex-column text-center  w-75 d-flex justify-content-center mt-5 ml-5">
          <Card.Body>
            <Card.Title className="text-muted">Your Cart</Card.Title>
            <ListGroup className="text-left" variant="flush">
              <ListGroup.Item
                style={{ fontSize: "12px", fontWeight: "bold" }}
                className="d-flex flex-row"
              >
                <div className="p-2 col-5 ml-3">Item</div>
                <div className="p-2 col-3 mr-2"> Price (each)</div>
                <div className="p-2 col-1">Qty </div>
                <div className="p-2">Subtotal</div>
              </ListGroup.Item>

              {/* Row starts here */}
              <CartRow />
              <CartRow />
              <CartRow />
            </ListGroup>
            <button
              type="submit"
              className="btn btn-light "
              style={{ color: "grey", marginTop: "10px" }}
            >
              Checkout
            </button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CartPage;
