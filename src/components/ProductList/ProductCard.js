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
  handleRemoveClick = () => {
    this.props.removeFromCart(this.props.product.id);
  };
  render() {
    const Itemquantity = this.props.cart.find(
      item => item.product.id === this.props.product.id
    );
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
            <div className="card-text" style={{ color: "#808080" }}>
              {product.price} SAR
              <footer className="blockquote-footer">
                {product.stock > 0 ? (
                  <div style={{ color: "green" }}>In Stock</div>
                ) : (
                  <div style={{ color: "red" }}>Out of Stock</div>
                )}

                {/* <div
                  className="  "
                  align="center"
                  style={{
                    backgroundColor: "rgb(155, 166, 87)",
                    height: "30px",
                    width: "18rem",
                    marginLeft: "-21px",
                    marginTop: "5px",
                    opacity: ".5",
                    borderRadius: "3px"
                  }}
                >
                  <div>
                    {Itemquantity && (
                      <i
                        onClick={this.handleRemoveClick}
                        className=" p-2 fas fa-minus"
                        style={{
                          color: "white",
                          position: "relative",
                          margin: "0px"
                        }}
                      />
                    )}
                    <input
                      style={{
                        border: "0px",
                        borderRadius: "50px",
                        backgroundColor: "rgb(155, 166, 87)",
                        width: "50px",
                        textAlign: "center",
                        color: "white"
                      }}
                      value={Itemquantity ? Itemquantity.quantity : 0}
                    />

                    <i
                      onClick={this.handleAddClick}
                      className=" fas fa-plus"
                      style={{
                        color: "white"
                      }}
                    />
                  </div>
                </div> */}
                <div className="  " align="center">
                  <div>
                    {Itemquantity && (
                      <i
                        onClick={this.handleRemoveClick}
                        className=" p-2 fas fa-minus"
                        style={{
                          color: "rgb(155, 166, 87)",
                          position: "relative",
                          margin: "0px"
                        }}
                      />
                    )}
                    <input
                      style={{
                        border: "0px",
                        borderRadius: "50px",

                        width: "50px",
                        textAlign: "center",
                        color: "rgb(155, 166, 87)"
                      }}
                      value={Itemquantity ? Itemquantity.quantity : 0}
                    />

                    <i
                      onClick={this.handleAddClick}
                      className=" fas fa-plus"
                      style={{
                        color: "rgb(155, 166, 87)"
                      }}
                    />
                  </div>
                </div>
              </footer>
              <div />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart
  };
};

const mapDispatchToProps = dispatch => ({
  getProduct: product => dispatch(actionCreators.currentProduct(product)),
  addCart: (productObj, quantity) =>
    dispatch(actionCreators.addCart(productObj, quantity)),
  removeFromCart: productID =>
    dispatch(actionCreators.removeItemFromCart(productID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);
