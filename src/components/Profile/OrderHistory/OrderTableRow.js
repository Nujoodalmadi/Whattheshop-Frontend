// React
import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

class OrderTableRow extends Component {
  render() {
    return (
      <ListGroup.Item className="d-flex flex-row justify-content-center ml-10">
        <div
          className="p-2 col-1 "
          id="order-row"
        />
        <div className="p-2 col-3 mr-5 row-item">
          {this.props.order.id}
        </div>
        <div className="p-2 col-4 row-item">
          {this.props.order.total}
        </div>
        <Link to={`/profile/history/${this.props.order.id}`}>
          <button id="order-button" className="brandcolor">
            <i
              className="ml-auto p-2 fas fa-plus"
              id="order-icon"
            />
            info
          </button>
        </Link>
      </ListGroup.Item>
    );
  }
}

export default OrderTableRow;
