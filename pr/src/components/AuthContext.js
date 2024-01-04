// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect (()=> {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      //console.log("user is logged in:", storedUser)
      setLoggedIn(true);
    }
    else{
     // console.log("user is not logged in")
    }
  },[]);

  const login = () => {
    setLoggedIn(true);

    //localStorage.setItem('user', JSON.stringify({username: 'admin'}));
  };

  const logout = () => {
   
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
