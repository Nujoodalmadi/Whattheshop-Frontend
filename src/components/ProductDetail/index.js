// React
import React, { Component } from "react";
// Reduc
import { connect } from "react-redux";
// Action Functions
import * as asctionCreators from "../../store/actions";

class ProductDetail extends Component {
  componentDidUpdate() {
    this.props.refreshProduct(this.props.match.params.productID);
  }

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
                        src={product.images[0].image}
                        className="img-thumbnail img-fluid"
                        alt={product.name}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      />

                      <div className="carousel-caption d-none d-md-block" />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={product.images[0].image}
                        className="img-thumbnail img-fluid"
                        alt={product.name}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      />

                      <div className="carousel-caption d-none d-md-block" />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={product.images[0].image}
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
    products: state.products.products
  };
};

const mapDispatchToProps = dispatch => ({
  refreshProduct: productID =>
    dispatch(asctionCreators.refreshCurrentProduct(productID))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
