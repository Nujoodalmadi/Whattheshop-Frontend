// React
import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class SpicificOrderRow extends Component {
  render() {
    return (
      <ListGroupItem>
        <ListGroup.Item className="d-flex flex-row align-items-center">
          <div
            className="p-2 col-4"
            style={{ fontSize: "15px", padding: "20px" }}
          >
            description
          </div>
          <div className="p-2 col-3" style={{ fontSize: "13px" }}>
            price
          </div>
          <div className="p-2 col-2" style={{ fontSize: "13px" }}>
            quantity
          </div>
          <div className="p-2" style={{ fontSize: "13px" }}>
            subtotal
          </div>
        </ListGroup.Item>
      </ListGroupItem>
    );
  }
}

export default SpicificOrderRow;
