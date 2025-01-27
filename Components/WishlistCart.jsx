import React ,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import "../src/styles/Wishlist.css";
import DisplayNavbar from './DisplayNavbar';

function WishlistCart() {
    const Location = useLocation();
  const [wishlist,setWishlist] = useState(Location.state.wishlist);

  useEffect(() => {
      // When the cart is updated, save it to localStorage
      localStorage.setItem('cart', JSON.stringify(wishlist));
    }, [wishlist]);

  const RemoveCart = (id) => {
    const updatedCart = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedCart);
  }
  return (
    <div className="wishlist-container">
     
      <h1 className="wishlist-title">Your Wishlist</h1>
      <div className="wishlist-grid">
        {wishlist.map((product) => (
          <div key={product.id} className="wishlist-item">
            <img
              src={product.image || 'placeholder-image.jpg'} 
              alt={product.name}
              className="wishlist-item-image"
            />
              <div className="wishlist-item-details">
              <h3 className="wishlist-item-name">{product.name}</h3>
              <p className="wishlist-item-category">{product.category}</p>
              <p className="wishlist-item-price">Rs.{product.price}</p>
              <p className="wishlist-item-unit">{product.unit}</p>
              <button className="wishlist-remove-button" onClick={()=>RemoveCart(product.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default WishlistCart
