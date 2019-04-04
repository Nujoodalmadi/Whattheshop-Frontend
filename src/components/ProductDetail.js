import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/index";

class ProductDetail extends Component {
  componentDidMount() {
    this.props.getproduct(this.props.match.params.productID);
  }
  render() {
    const product = this.props.product;

    return (
      <div class="alert alert-light" role="alert">
        <div
          class="card mb-3"
          style={{ "max-width": "1540px", height: "350px" }}
        >
          <div class="row no-gutters">
            <div class="col-md-7">
              <div class="bd-example">
                <div
                  id="carouselExampleCaptions"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#carouselExampleCaptions"
                      data-slide-to="0"
                      class="active"
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
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={product.img}
                        className="img-thumbnail img-fluid"
                        alt={product.name}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      />

                      <div class="carousel-caption d-none d-md-block" />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={product.img2}
                        className="img-thumbnail img-fluid"
                        alt={product.name}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      />

                      <div class="carousel-caption d-none d-md-block" />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={product.img3}
                        className="img-thumbnail img-fluid"
                        alt={product.name}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      />
                      <div class="carousel-caption d-none d-md-block" />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text">
                  <p> {product.price}</p>
                  <p> {product.description}</p>
                  <p>{product.stock}</p>
                </p>
                <p class="card-text">
                  <small class="text-muted">{product.stock}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product.product
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getproduct: productID =>
      dispatch(actionCreators.fetchProductDetail(productID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);

//   <div>
//     <div class="alert alert-light" role="alert">
//       <h3>{product.name}</h3>
//       <h3>{product.price}</h3>
//       <h3>{product.description}</h3>
//       <h3>{product.stock}</h3>
//       <img
//         src={product.img}
//         className="img-thumbnail img-fluid"
//         alt={product.name}
//       />
//       <img
//         src={product.img2}
//         className="img-thumbnail img-fluid"
//         alt={product.name}
//       />
//       <img
//         src={product.img3}
//         className="img-thumbnail img-fluid"
//         alt={product.name}
//       />
//     </div>
//   </div>
