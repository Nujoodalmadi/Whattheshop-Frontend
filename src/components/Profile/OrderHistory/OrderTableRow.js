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
        <div className="p-2 col-1 " id="order-row">
          Date
        </div>
        <div className="p-2 col-3 mr-5 row-item">Order Number</div>
        <div className="p-2 col-4 row-item">Total Amount</div>
        {/* <Link to="profile/orders/orderID"> */}
        <button id="order-button" className="brandcolor">
          <i className="ml-auto p-2 fas fa-plus" id="order-icon" />
          info
        </button>
        {/* </Link> */}
      </ListGroup.Item>
    );
  }
}

export default OrderTableRow;
