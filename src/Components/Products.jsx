import React, { Component } from "react";
export default class Products extends Component {
  render() {
    const { product,detailProduct } = this.props;
    const { addProduct } = this.props;
    return (
      <div className="container">
        <div className="card" style={{ width: "18rem" }}>
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                fontSize: "18px",
              }}
            >
              {product.name}
            </h5>
            <p className="card-text">${product.price}</p>
            <button
              className="btn btn-danger"
              onClick={() => {
                addProduct(product);
              }}
            >
              Add To Cart
            </button>
            <button
              className="btn btn-primary mx-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
              onClick={() =>{
                detailProduct(product);
              }}
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}
