import React ,{useState,useEffect} from 'react'
import AllProduct from '../Components/AllProduct'
import { Route, BrowserRouter ,Routes} from 'react-router-dom'   
import ViewCart from '../Components/ViewCart'
import Navbar from '../Components/Navbar'
import WishlistCart from '../Components/WishlistCart'
import DisplayNavbar from '../Components/DisplayNavbar'

function App() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  // Store cart and wishlist to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <div>
      <BrowserRouter>
     <DisplayNavbar cart={cart} wishlist={wishlist}/>
      <Routes>
        <Route path="/" element={<AllProduct cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist}/>}></Route>
        <Route path="/viewcart" element={<ViewCart cart={cart}/>}></Route>
        <Route path="/wishlist" element={<WishlistCart wishlist={wishlist} />}></Route>
      </Routes>
      </BrowserRouter>
    
  
    </div>
  )
}

export default App
