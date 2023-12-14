import React, { useState } from 'react';

const Contatti = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);

  const gestisciInvio = () => {
    setName('');
    setEmail('');
    setMessage('');

    setPopupVisible(true);

    setTimeout(() => {
      setPopupVisible(false);
    }, 1000);
  };

  return (
    <div className="contatti-main-container">
      <div className="contatti-container">
        
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
    
        <label htmlFor="messaggio">Messaggio:</label>
        <textarea
          id="messaggio"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />


      <button className="invia-button" onClick={gestisciInvio}>
        Invia
      </button>

      {isPopupVisible && (
        <div className="popup">
          <p>Inviato correttamente</p>
        </div>
      )}

      </div>
    </div>
  );
};

export default Contatti;
