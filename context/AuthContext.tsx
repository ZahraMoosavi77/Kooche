"use client";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext<any>({
  // mail: "",
  // isLoggedIn: false,
  // id: "",
  // setMail,
  // setIsLoggedIn,
  // setId,
  // token: '',
  // userInfos: null,
  // login: () => {},
  // logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [mail, setMail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState("");
  return (
    <AuthContext.Provider
      value={{ mail, setMail, isLoggedIn, setIsLoggedIn, id, setId }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AuthContext);
