// React
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";

// Action Functions
import * as actionCreators from "../../store/actions";

class ProductCard extends Component {
  render() {
    const product = this.props.product;
    console.log("TCL: ProductCard -> render -> product", product);

    return (
      <div className="card mx-3" onClick={() => this.props.getProduct(product)}>
        <div className="card border-light mb-3" style={{ maxWidth: "18rem" }}>
          <Link to={`/products/detail/${product.id}`}>
            <img
              src={product.images[0].image}
              className="card-img-top"
              alt="..."
            />
          </Link>
          <div className="card-body">
            <Link
              to={`/products/detail/${product.id}`}
              style={{ color: "rgb(155, 166, 87)" }}
            >
              <h5 className="card-title">{product.name}</h5>
            </Link>
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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProduct: product => dispatch(actionCreators.currentProduct(product))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductCard);
