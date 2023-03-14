import React, { Component } from "react";

export default class ModalDefailProduct extends Component {
  render() {
    const { productDetails} = this.props;

    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal2"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Details Product
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
              <div>
                  <div className="card" style={{ width: "100%" }}>
                    <img src={productDetails.image} className="card-img-top" alt="..."
                    />
                    <div className="card-body">
                      <h4 className="card-title">Name : {productDetails.name}</h4>
                      <h5 className="card-title">Adidas : {productDetails.alias}</h5>
                      <p className="card-text">
                      <b>Description:</b>{productDetails.description}
                      </p>
                    </div>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">ShortDescription : {productDetails.shortDescription}</li>
                      <li className="list-group-item">Quantity: {productDetails.quantity}</li>
                      <li className="list-group-item"><b>Price</b> : ${productDetails.price}</li>
                      
                    </ul>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
