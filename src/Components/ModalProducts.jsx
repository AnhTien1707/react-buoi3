import React, { Component } from 'react'

export default class ModalProducts extends Component {
  render() {
    const { cart , removeProduct,upDownQuantity } = this.props;

    return (

      <div>
        <div className="modal fade bd-example-modal-lg" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content" style={{
              
            }}>
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Product</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody className='tBody'>
                    {cart.map((productCart , index) =>{
                      return (
                        <tr key={index}>
                          <td>{productCart.id}</td>
                          <td>{productCart.name}</td>
                          <td><img src={productCart.image} widt = {50} height ={50} ></img></td>
                          <td>${productCart.price}</td>
                          
                          <td>
                          <button onClick={() => upDownQuantity(productCart.id,false)} style={{
                            outline : "none",
                            border :"none",
                            margin : "0px 4px",
                          }}>
                          <i class="fa-solid fa-arrow-left"></i>
                          </button>
                          {productCart.numberQuantity}
                          <button onClick={() => upDownQuantity(productCart.id,true)}
                          style={{
                            outline : "none",
                            border :"none",
                            margin : "0px 4px",
                            
                          }}>
                          <i class="fa-solid fa-arrow-right"></i>
                          </button>
                          </td>
                    
                          <td>${productCart.price * productCart.numberQuantity}</td>
                          <td><button className='btn btn-danger'onClick={()=>{
                            removeProduct(productCart.id)
                          }}>Remove</button></td>
                        </tr>
                        
                      )
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                    <td colSpan={5}></td>
                    <td>Total</td>
                    <td>
                      {this.props.cart.reduce((total ,totalProduct,index) =>{
                        return total += totalProduct.price * totalProduct.numberQuantity
                      },0)}
                    </td>
                    </tr>
                   
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger">Order</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancle</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
}
