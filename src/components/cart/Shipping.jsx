import React, { useState } from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';

const Shipping = () => {
  const countries = Country.getAllCountries();
  const [selectedCountry, setSelectedCountry] = useState("");  
  const [selectedState, setSelectedState] = useState(""); 
  const [states, setStates] = useState([]);  

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setSelectedCountry(countryCode);

    if (countryCode) {
      const countryStates = State.getStatesOfCountry(countryCode);
      setStates(countryStates);
      setSelectedState(""); 
    } else {
      setStates([]); 
    }
  };

  return (
    <section className="shipping">
      <main>
        <h1>DETTAGLI ORDINE</h1>
        <form>
          <div>
            <label>Via/piazza N°</label>
            <input type="text" placeholder="inserisci l'indirizzo" />
          </div>
          <div>
            <label>Città</label>
            <input type="text" placeholder="inserisci città" />
          </div>
          <div>
            <label>CAP</label>
            <input type="number" placeholder="inserisci cap" />
          </div>
          <div>
            <label>Stato</label>
            <select value={selectedCountry} onChange={handleCountryChange}>
              <option value="">scegli paese</option>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Regione</label>
            <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
              <option value="">scegli regione</option>
              {states.map((state) => (
                <option key={state.isoCode} value={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Numero di telefono</label>
            <input type="tel" placeholder="inserisci il numero" />
          </div>
          <Popup trigger={<button type="button">Conferma Ordine</button>} position="right center">
            <div style={{ color: "green", position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>Ordine inviato</div>
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
