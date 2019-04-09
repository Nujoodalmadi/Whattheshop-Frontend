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
        <div className="card border-light mb-3" id="card-border">
          <Link to={`/products/detail/${product.id}`}>
            <img
              src={product.images[0].image}
              className="card-img-top"
              alt="..."
            />
          </Link>
          <div className="card-body">
            <Link className="brandcolor" to={`/products/detail/${product.id}`}>
              <h5 className="card-title">{product.name}</h5>
            </Link>
            <div className="card-text">
              {product.price} SAR
              <footer className="blockquote-footer">
                {product.stock > 0 ? (
                  <div className="in-stock">In Stock</div>
                ) : (
                  <div className="out-stock">Out of Stock</div>
                )}
                <button
                  onClick={this.handleAddClick}
                  className=" flex-row align-items-center"
                  align="center"
                  id="add-cart"
                >
                  <i
                    className=" fas fa-plus"
                    style={{
                      color: "rgb(155, 166, 87)"
                    }}
                  />
                </button>
              </footer>
              <div className=" flex-row align-items-center" align="center" />
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
