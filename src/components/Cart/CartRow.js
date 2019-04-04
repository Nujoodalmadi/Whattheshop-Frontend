// React
import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class CartRow extends Component {
  render() {
    return (
      <ListGroupItem>
        <ListGroup.Item className="d-flex flex-row align-items-center">
          <img
            src="https://pbs.twimg.com/profile_images/555038545446846464/ckLeRnHU.jpeg"
            height="100"
            width="100"
            alt="Avatar"
          />
          <div
            className="p-2 col-4"
            style={{ fontSize: "15px", padding: "20px" }}
          >
            Cras justo odiof rfvmekr kmef
          </div>
          <div className="p-2 col-3" style={{ fontSize: "13px" }}>
            15SAR
          </div>
          <div className="p-2 col-2" style={{ fontSize: "13px" }}>
            5
          </div>
          <div className="p-2" style={{ fontSize: "13px" }}>
            75SAR
          </div>

          <i
            onClick={() => alert("hi")}
            className="ml-auto p-2 far fa-trash-alt"
            style={{ color: "rgb(155, 166, 87)", position: "relative" }}
          />
        </ListGroup.Item>
      </ListGroupItem>
    );
  }
}

export default CartRow;
