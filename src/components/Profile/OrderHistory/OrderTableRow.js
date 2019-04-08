// React
import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

class OrderTableRow extends Component {
  handleDecrease = () => {
    this.props.deleteCartItem(this.props.item.product.id);
  };
  render() {
    return (
      <ListGroup.Item className="d-flex flex-row justify-content-center ml-10">
        <div
          className="p-2 col-1 "
          style={{ fontSize: "15px", padding: "20px", marginLeft: "55px" }}
        >
          date
        </div>
        <div className="p-2 col-3 mr-5" style={{ fontSize: "13px" }}>
          order number
        </div>
        <div className="p-2 col-4 " style={{ fontSize: "13px" }}>
          total amount
        </div>
        {/* <Link to="profile/orders/orderID"> */}
        <button
          style={{
            backgroundColor: "rgb(155, 166, 87)",
            width: "70px",
            fontSize: "15px",
            borderRadius: "50px",
            color: "white",
            border: "0px",
            padding: "0px"
          }}
        >
          <i
            className="ml-auto p-2 fas fa-plus"
            style={{
              color: "white",
              position: "relative"
            }}
          />
          info
        </button>
        {/* </Link> */}
      </ListGroup.Item>
    );
  }
}

export default OrderTableRow;
