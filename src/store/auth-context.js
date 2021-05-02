import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  useEffect(() => {
    const storedUresLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUresLoggedInInformation) {
      setIsLoggedIn(true);
    }
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
