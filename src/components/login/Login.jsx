import React, { useState} from 'react';
import { Link } from 'react-router-dom';

const AuthForm = () => {
  // Stati per gestire i dati del modulo
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Funzione per gestire la sottomissione del modulo
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegistering) {
      // Effettua la registrazione
      console.log('Effettua la registrazione con:', email, password);
    } else {
      // Effettua l'accesso
      console.log('Effettua l\'accesso con:', email, password);
    }

    // Resetta i campi del modulo
    setEmail('');
    setPassword('');
  };



  // Cambia tra le modalità di accesso e registrazione
  const toggleMode = () => {
    setIsRegistering((prev) => !prev);
  };

  const handleRememberMeChange = () => {
    setRememberMe((prev) => !prev);
  };

  return (
    <div className="auth-main-container">
      <div className="auth-form">
        <h1>{isRegistering ? 'Registrazione' : 'Accesso'}</h1>
        <form onSubmit={handleSubmit}>
            <label>
            <h5>Email:</h5>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </label>

            <label>
            <h5>Password:</h5>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </label>
            <Link to={`/me`}>
              <button type="submit">{isRegistering ? 'Registrati' : 'Accedi'}</button>           
            </Link>
        </form>
        <p>
            {isRegistering? 'Hai già un account?': 'Non hai ancora un account?'}
            <button type="button" onClick={toggleMode}>
            {isRegistering ? 'Accedi' : 'Registrati'}
            </button>
        </p>
        <p><button type="button">Password dimenticata?</button></p>
        {isRegistering ? null : (
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              Ricordami  
            </label>
          )}
        </div>
    </div>
  );
};

export default AuthForm;