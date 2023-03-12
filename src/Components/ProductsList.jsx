import React, { Component } from "react";
import Products from "./Products.jsx";
export default class ProductsList extends Component {
  render() {
    const {addProduct} = this.props
    const { ArrProducts } = this.props;
    return (
      <div className="container">
        <div className="row">
        {ArrProducts.map((product, index) => {
          return (
            <div className="col-lg-4 my-4" key = {index}>
              <Products product={product} addProduct = {addProduct}/>
            </div>
          );
        })}
      </div>
      </div>
    );
  }
}
