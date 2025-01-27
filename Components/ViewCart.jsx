import React, { useState,useEffect } from 'react'
import {useLocation,useNavigate} from 'react-router-dom';
import "../src/styles/viewcart.css";
import DisplayNavbar from './DisplayNavbar';

function ViewCart() {
   const Location=useLocation();
   const navigate=useNavigate();
  const [cart,setCart]=useState(Location.state.cart);

  useEffect(() => {
    // When the cart is updated, save it to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const RemoveCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };
  const IncrementCart=(id)=>{
    const UpdatedCart=cart.map((item)=>{
      if(item.id===id){
        return {
          ...item,"quantity":item.quantity+1 
        };
      }
        else
        { 
           return item;
          }
    })
    setCart(UpdatedCart);
  }
  const DecrementCart=(id)=>{
    const UpdatedCart=cart.map((item)=>{
      if(item.id===id){
        return {
          ...item,"quantity":item.quantity-1 
        };
      }
        else
        { 
           return item;
          }
    })
    setCart(UpdatedCart);
  }
const TotalAmount=cart.reduce((acc,item)=>acc+item.price*item.quantity,0);
// added
  return (
    <div className="container">
       <h1 className="wishlist-title">Your Cart</h1>
      <table border="1">
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Unit</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Action</th>   
            </tr>
            </thead>
            <tbody>
                {cart.map((data)=>{
                    return <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.category}</td>
                    <td>{data.price}</td>
                    <td>{data.unit}</td>
                    <td>{data.quantity}</td>
                    <td>{data.quantity*data.price}</td>
                    <td>
                    <button style={{color:"black",border:"1px solid black"}} 
                    onClick={()=>RemoveCart(data.id)}>Remove</button> 
                    <button style={{color:"black",border:"1px solid black"}} 
                    onClick={()=>IncrementCart(data.id)}>+</button> 
                    <button style={{color:"black",border:"1px solid black"}} 
                    onClick={()=>DecrementCart(data.id)}>-</button> 
                    </td>
                    </tr>
                })}
            </tbody>
      </table>
      <h2>Total Amount: {TotalAmount}</h2>
    </div>
  )
}

export default ViewCart
