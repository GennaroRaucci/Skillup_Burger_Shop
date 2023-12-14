import React from 'react';
import { motion } from 'framer-motion';
import Popup from 'reactjs-popup';

const MenuCard = ({ itemNum, name, price, image, handler, delay = 0 }) => {
  
  return (
    <motion.div
      className="hamburger-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <main>
        <img src={image} alt={name} />
        <div className="info">
          <h3>{name}</h3>
          <p>Price: ₹{price}</p>
        </div>
        <div className="button-container">
          <Popup trigger={<button onClick={() => handler({itemNum})}>Aggiungi al carrello</button>}>
            <div style={{ color: 'black', transform: 'translate(0%,-500%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
              <span><i>Aggiunto al carrello! </i></span>
            </div>
          </Popup>
        </div>
      </main>
    </motion.div>
  );
};

export default MenuCard;
