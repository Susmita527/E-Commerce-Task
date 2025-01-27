import React,{useState,useEffect} from 'react'
import Products from '../src/Product.json'
import { useNavigate } from "react-router-dom";
import "../src/styles/Allproduct.css";
import DisplayNavbar from './DisplayNavbar';



const AllProduct = ({ cart, setCart, wishlist, setWishlist }) =>{
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist'));
    
    if (storedCart) setCart(storedCart);
    if (storedWishlist) setWishlist(storedWishlist);
  }, [setCart, setWishlist]);

  const AddToCart =(product)=>{
    const existingProduct=cart.find((item)=>item.id==product.id);
    if(existingProduct){
      const updateCart=cart.map((item)=>{
        if(item.id===product.id)
        {
            return {
          ...item,"quantity":item.quantity+1 };
        }
        else
        { 
           return item;
          }
      });
      setCart(updateCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    else{
     const newCart= [...cart, {...product, "quantity": 1}];
     setCart(newCart);
     localStorage.setItem('cart', JSON.stringify(newCart));
    }
  }


  const AddToWishlist=(product)=>{
    const existingWishlistItem = wishlist.find((item) => item.id === product.id);
    if (existingWishlistItem==null) {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
      navigate('/wishlist', { state: { wishlist: updatedWishlist } });
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); 
    }
  };
  return (
    <div className="all-product-container">
    <div className="products-grid">
      {Products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image} 
            alt={product.name}
            className="product-image"
          />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price:Rs.{product.price}</p>
          <button onClick={() => AddToCart(product)} className="cart-btn">
            Add To Cart
          </button>
          <button onClick={() => AddToWishlist(product)} className="wishlist-btnn">
          ♥
          </button>
        </div>
      ))}
    </div>
  </div>
);
}

export default AllProduct
