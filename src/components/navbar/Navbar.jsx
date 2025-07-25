import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
<>
    <div className="navBar">
    <h1 className="logo">AA</h1>
    
      <div className='navBar-list'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Product">Products</Link>


    </div>
        <button id='Navbar-button'>  <Link to="/login">Login</Link></button>
    </div>
    </>
  );  
} 

export default Navbar;