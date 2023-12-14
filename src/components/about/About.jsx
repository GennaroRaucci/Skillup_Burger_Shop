// Write all the code here
import React from 'react';
import founderImage from '../../assets/a.jpg';

const About = () => {
  return (
    <div className="about-us-page">

      <div className="header">
        <h1>About Us</h1>
      </div>

      <div className="container">
        
        <div className="shop-section">
          <h2>Il nostro Burger shop</h2>
          <p>Benvenuti nel cuore saporito di Burger Shop! Siamo un paradiso per gli amanti dei burger, dove la passione per il cibo delizioso si fonde con l'arte di creare hamburger eccezionali. Nel nostro accogliente ristorante, ogni morso è un'esperienza memorabile.</p>
        </div>

        <div className="founder-section">
          <h2>Maria Rossi</h2>
          <img src= {founderImage}  alt="Founder" />
          <p>Dietro la magia dei nostri burger c'è la visione audace di Maria Rossi, il cuore pulsante e l'anima di Burger Shop. Con una passione contagiosa per il cibo straordinario, Maria Rossi ha iniziato questa avventura con l'obiettivo di trasformare il concetto di "burger" in un'esperienza gastronomica indimenticabile.</p>
 
        </div>
      </div>

      <div className="footer">
        <p>&copy; 2023 Burger shop</p>
      </div>
    </div>
  );
};

export default About;