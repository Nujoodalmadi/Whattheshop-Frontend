import React, { Component } from "react";

class ImgCard extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="carousel-item">
        <img
          src={product.images}
          className="img-thumbnail img-fluid"
          alt={product.name}
          data-toggle="modal"
          data-target="#exampleModalCenter"
          style={{ height: "350px", width: "400px" }}
        />
        <div className="carousel-caption d-none d-md-block" />
      </div>
    );
  }
}

export default ImgCard;
