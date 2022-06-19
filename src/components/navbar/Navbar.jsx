import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-secondary py-3">
      <div className="container-fluid">
        <div className='brand'>Male Fashion Shop</div>
        <div className='basket'><FiShoppingCart /></div>
      </div>
    </nav>
  );
}

export default Navbar;























