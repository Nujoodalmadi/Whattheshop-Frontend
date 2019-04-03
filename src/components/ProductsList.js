import React, { Component } from "react";

// Redux
import { connect } from "react-redux";

// Components
import ProductCard from "./ProductCard";

class ProductList extends Component {
  render() {
    const products = this.props.products;

    const productCards = products.map(product => (
      <ProductCard key={product.name} product={product} />
    ));

    console.log(productCards);
    return (
      <div className="container my-4 ">
        <div className="row justify-content-md-center">{productCards}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  };
};
export default connect(mapStateToProps)(ProductList);
