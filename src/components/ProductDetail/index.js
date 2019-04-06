// React
import React, { Component } from "react";
// Reduc
import { connect } from "react-redux";
// Action Functions
import * as actionCreators from "../../store/actions";

class ProductDetail extends Component {
  state = {
    quantity: 1
  };
  componentDidUpdate(prevProps) {
    this.props.refreshProduct(this.props.match.params.productID);

    console.log("prevProps=>", prevProps);
  }

  handleAddClick = () => {
    this.props.addCart(this.props.product, this.state.quantity);
    const newQuantity = this.state.quantity + 1;
    this.setState({ quantity: newQuantity });
  };

  handleRemoveClick = () => {
    this.props.removeFromCart(this.props.product.id);
    const newQuantity = this.state.quantity - 1;
    this.setState({ quantity: newQuantity });
  };

  render() {
    const product = this.props.product;
    let content = product ? (
      <div className="alert alert-light" role="alert">
        <div
          className="card mb-3"
          style={{ maxWidth: "1540px", height: "350px" }}
        >
          <div className="row no-gutters">
            <div className="col-md-7">
              <div className="bd-example">
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleCaptions"
                      data-slide-to="0"
                      className="active"
                    />
                    <li
                      data-target="#carouselExampleCaptions"
                      data-slide-to="1"
                    />
                    <li
                      data-target="#carouselExampleCaptions"
                      data-slide-to="2"
                    />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={product.img}
                        className="img-thumbnail img-fluid"
                        alt={product.name}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      />

                      <div className="carousel-caption d-none d-md-block" />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={product.img2}
                        className="img-thumbnail img-fluid"
                        alt={product.name}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      />

                      <div className="carousel-caption d-none d-md-block" />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={product.img3}
                        className="img-thumbnail img-fluid"
                        alt={product.name}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      />
                      <div className="carousel-caption d-none d-md-block" />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <div className="card-text">
                  <p> {product.price}</p>
                  <p> {product.description}</p>
                  <p>{product.stock}</p>
                </div>

                <p className="card-text">
                  <small className="text-muted">{product.stock}</small>
                </p>
                <button onClick={this.handleAddClick}>ADD</button>
                <input value={this.state.quantity - 1} />
                <button onClick={this.handleRemoveClick}>Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <p>Loading</p>
    );
    return content;
  }
}

const mapStateToProps = state => {
  return {
    product: state.products.currentProduct,
    products: state.products.products,
    cart: state.cartReducer.cart
  };
};

const mapDispatchToProps = dispatch => ({
  refreshProduct: productID =>
    dispatch(actionCreators.refreshCurrentProduct(productID)),
  addCart: (productObj, quantity) =>
    dispatch(actionCreators.addCart(productObj, quantity)),
  removeFromCart: productID =>
    dispatch(actionCreators.removeItemFromCart(productID))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
