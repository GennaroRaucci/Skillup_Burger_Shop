import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/myNavbar.scss';
import DropdownMenu from './DropdownMenu';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contatti</Link></li>
        <li><Link to="/about">Informazioni</Link></li>
        <li><Link to="/cart">Carrello</Link></li>
      </ul>
      <DropdownMenu />
    </nav>
  );
};

export default Navbar;