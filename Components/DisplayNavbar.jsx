import React from 'react'
import { useNavigate } from "react-router-dom";
import "../src/styles/navbar.css";

const DisplayNavbar = ({ cart, wishlist  }) => {
    const navigate = useNavigate();
    
    const handleViewCart = () => {
        navigate('/viewcart', { state: { cart } });
      };
      const handleViewWishlist = () => {
        navigate('/wishlist', { state: { wishlist } });
      };
  
    return (
      <nav className="navbar">
        <h1>React - Ecommerce</h1>
        <div>
          <button onClick={() => navigate('/')} className="home-button">
            Home
          </button>
          <button onClick={handleViewCart}  className="nav-btn">
          My Cart ({cart.length})
          </button>
          <button onClick={handleViewWishlist} className="nav-btn wishlist-btn">
          Wishlist ({wishlist.length})
          </button>
        </div>
      </nav>
    );
  };
  

export default DisplayNavbar
