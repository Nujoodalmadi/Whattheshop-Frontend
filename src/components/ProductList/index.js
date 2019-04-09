// React
import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
// Components
import ProductCard from "./ProductCard";

class ProductList extends Component {
  render() {
    let categoryName = this.props.match.params.category;


    let productCards = [];
    if (categoryName) {
      let products = this.props.products;
      productCards = products
        .filter(product =>
          product.categories.find(
            category =>
              category.title.replace(/\s/g, "").toLowerCase() === categoryName
          )
        )
        .map(product => <ProductCard key={product.name} product={product} />);
    } else {
      let products = this.props.products;

      productCards = products.map(product => (
        <ProductCard key={product.name} product={product} />
      ));
    }

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
