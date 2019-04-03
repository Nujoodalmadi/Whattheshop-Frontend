import React, { Component } from "react";
import { connect } from "react-redux";

class imgModel extends Component {
  render() {
    return (
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img
                src={product.img2}
                className="img-thumbnail img-fluid"
                alt={product.name}
                data-toggle="modal"
                data-target="#exampleModalCenter"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(imgModel);
