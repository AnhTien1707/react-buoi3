import React, { Component } from "react";
import ModalProducts from "./ModalProducts.jsx";
import ProductsList from "./ProductsList.jsx";
import DataProducts from "../data/data.json";
import "./baiTapProps.css";
import ModalDetails from "./ModalDetailsProduct";

export default class BaitapProps extends Component {
  constructor(props){
    super(props);
    this.state = {
    cart : [],
    productDetails : [],
    }
  }
  addProduct = (productSelect) =>{
    let productCart = {
      id: productSelect.id,
      name: productSelect.name,
      image: productSelect.image,
      price: productSelect.price,
      quantity: productSelect.quantity,
      numberQuantity : 1,
    }
    var cartUpdate = [...this.state.cart];
    let index = cartUpdate.findIndex((index)=>index.id === productSelect.id)
    if(index !== -1){
      cartUpdate[index].numberQuantity += 1;
    }else{
      cartUpdate.push(productCart)
    }
    this.setState({
      cart :cartUpdate,
    })
  }

  removeProduct = (productSelect) =>{
    var cartUpdate = this.state.cart.filter(product=> product.id !== productSelect)

    this.setState({
      cart : cartUpdate,
    })
  }
  upDownQuantity = (id , upDown) =>{
   var cartUpdate = [...this.state.cart];
   console.log(cartUpdate)
    let index = cartUpdate.findIndex(product => product.id === id);
    if(upDown){
      cartUpdate[index].numberQuantity ++;
    }else{
      if(cartUpdate[index].numberQuantity > 1){
        cartUpdate[index].numberQuantity --;
      }
    }
    this.setState({
      cart:cartUpdate,
    })
  }
  details = (productDetails) =>{
    this.setState({
      productDetails:productDetails,
    })
  }

  render() {
    
    let quantityCart = this.state.cart.reduce((total,productCart , index)=>{
      return total += productCart.numberQuantity;
    },0)
    return (
      <div className="container">
        <h3 className="text-center ">Shoes Shop</h3>
        <div className="cart">
        <i class="fa-solid fa-cart-shopping"  data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          <span className="quality">{quantityCart}</span>
        </div>
        <ModalProducts removeProduct = {this.removeProduct} cart = {this.state.cart} upDownQuantity={this.upDownQuantity}/>
        <ProductsList details = {this.details} ArrProducts={DataProducts}  addProduct = {this.addProduct}/>
        <ModalDetails productDetails={this.state.productDetails}/>
      </div>
    );
  }
}
