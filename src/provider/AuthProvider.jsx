import PropTypes from 'prop-types';
import { useMemo, useState, useContext, createContext } from 'react';

// Création du contexte
const AuthContext = createContext();

// Fournisseur pour encapsuler l'application avec le contexte
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
  });

  const setLoggedIn = (value) => {
    setIsLoggedIn(value);
    localStorage.setItem('isLoggedIn', JSON.stringify(value));
  };

  // Utiliser useMemo pour éviter les changements de valeur inutiles
  const authValue = useMemo(() => ({ isLoggedIn, setLoggedIn }), [isLoggedIn]);

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.any,
};

// Hook personnalisé pour utiliser le contexte d'authentification
export function useAuth() {
  return useContext(AuthContext);
}
