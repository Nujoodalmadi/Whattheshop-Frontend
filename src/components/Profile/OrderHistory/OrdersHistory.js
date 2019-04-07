// React
import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import OrderTableRow from "../OrderHistory/OrderTableRow";

// Components
// import CartRow from "./CartRow";

class OrdersHistory extends Component {
  render() {
    return (
      <div
        className=" justify-content-center mt-5 "
        align="center"
        style={{ minWidth: "500px" }}
      >
        <Card className="w-75">
          <Card.Body style={{ textAlign: "center", height: "75px" }}>
            <Card.Title className="text-muted" style={{ fontSize: "25px" }}>
              Your Orders:
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item
              style={{ fontSize: "12px", fontWeight: "bold" }}
              className="d-flex flex-row justify-content-center"
            >
              <div className="p-2 col-1  ">DATE</div>
              <div className="p-2 col-3 mr-5 ">ORDER NUMBER</div>
              <div className="p-2 col-4 ">TOTAL AMOUNT</div>
            </ListGroup.Item>

            <OrderTableRow />
            <div className="p-2 d-flex" />
          </ListGroup>
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
)(OrdersHistory);
