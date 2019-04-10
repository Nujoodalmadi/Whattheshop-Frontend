// React
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";

// Action Functions
import * as actionCreators from "../../store/actions";

class ProductCard extends Component {
  handleAddClick = () => {
    this.props.addCart(this.props.product, 1);
  };
  render() {
    const product = this.props.product;

    return (
      <div className="card mx-3" onClick={() => this.props.getProduct(product)}>
        <div className="card border-light mb-3" style={{ maxWidth: "18rem" }}>
          <Link to={`/products/detail/${product.id}`}>
            <img
              src={product.images[0].image}
              className="card-img-top"
              id="top"
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
            <div className="card-text">
              Price: {product.price} SAR
              <footer className="blockquote-footer">
                {product.stock > 0 ? (
                  <div style={{ color: "green" }}>In Stock</div>
                ) : (
                  <div style={{ color: "red" }}>Out of Stock</div>
                )}
              </footer>
              <div className=" flex-row align-items-center" align="center">
                <button
                  onClick={this.handleAddClick}
                  className=" flex-row align-items-center"
                  align="center"
                  style={{
                    backgroundColor: "rgb(155, 166, 87)",
                    borderRadius: "50px",
                    width: "35px",
                    textAlign: "center",
                    color: "white",
                    border: "8px",
                    borderColor: "white"
                  }}
                >
                  <i
                    className=" fas fa-plus"
                    style={{
                      color: "white"
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProduct: product => dispatch(actionCreators.currentProduct(product)),
  addCart: (productObj, quantity) =>
    dispatch(actionCreators.addCart(productObj, quantity))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductCard);
