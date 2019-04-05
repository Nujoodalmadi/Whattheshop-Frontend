// React
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";

// Action Functions
import * as asctionCreators from "../../store/actions";

class ProductCard extends Component {
  render() {
    const product = this.props.product;
    console.log("TCL: ProductCard -> render -> product", product);

    return (
      <Link to={`/products/detail/${product.id}`}>
        <div
          className="card mx-3"
          onClick={() => this.props.getProduct(product)}
        >
          <div className="card border-light mb-3" style={{ maxWidth: "18rem" }}>
            <img
              src={product.images[0].image}
              className="card-img-top"
              alt="..."
            />
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
        </div>
      </Link>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProduct: product => dispatch(asctionCreators.currentProduct(product))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductCard);
