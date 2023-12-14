import React, { useState } from 'react';
import Menu from './Menu';

const Home = () => {
  const [mostraMenu, impostaMostraMenu] = useState(false);

  return (
    <div className="home-container">
      <p>Benvenuto nel paradiso degli hamburger</p>
      <h1>Burger Shop</h1>
      <button className="menu-button" onClick={() => impostaMostraMenu(!mostraMenu)}>
        {mostraMenu ? 'Chiudi' : 'Carta Menu'}
      </button>
      {mostraMenu && <Menu />}
    </div>
  );
};

export default Home;
