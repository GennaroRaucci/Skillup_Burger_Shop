import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../../styles/myDropdownMenu.scss';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Hai cliccato su: ${item}`);
  };

  return (
    <div className="dropdown-menu-container">
      <button onClick={toggleDropdown}>Menu</button>
      <ul className={`menu-items ${isOpen ? 'show' : ''}`}>
        <li onClick={() => handleItemClick('Login')}>
          <Link to="/login">Login</Link>
        </li>
        <li onClick={() => handleItemClick('Ordini')}>
          <Link to="/myOrder">Ordini</Link>
        </li>
        <li onClick={() => handleItemClick('Logout')}>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
