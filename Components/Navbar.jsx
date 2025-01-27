import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
            <li><NavLink to={'/'}>All Product</NavLink></li>
            <li><NavLink to={'/viewcart'}>View Cart</NavLink></li>
            <li><NavLink to={'/wishlist'}>View Wishlist</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
