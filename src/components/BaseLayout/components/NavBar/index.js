// Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
import { NavLink, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';


// Internals
import './index.css';


const Navbar = () => (
  <nav className="navbar">
    <div className="nav-links">
      <ul>
        <li><NavLink activeClassName="selected" className="nav-link" exact to="/">HOME</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/women">CHRISTMAS GIFTS</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/men">BIRTHDAY GIFTS</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/About">ABOUT US</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/login">LOGIN/SIGNUP</NavLink></li>
        
        
        
        
      </ul>
    </div>
    <div className="shopping-cart">
      <NavLink to="/cart"><Icon medium>shopping_cart</Icon></NavLink>
    </div>
  </nav>
);

export default Navbar;
