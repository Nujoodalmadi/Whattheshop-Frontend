import React, { Component } from "react";

class ProductCard extends Component {
  render() {
    const product = this.props.product;

    return (
      <div className="card border-light mb-3" style={{ maxWidth: "18rem" }}>
        <img src={product.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            Price: {product.price} SAR
            <footer className="blockquote-footer">
              {product.stock > 0 ? (
                <div style={{ color: "green" }}>In Stock</div>
              ) : (
                <div style={{ color: "red" }}>Out of Stock</div>
              )}
            </footer>
          </p>
        </div>
      </div>
    );
  }
}

export default ProductCard;