"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const AuthContext = createContext<any>({
  mail: "",
  isLoggedIn: false,
  id: "",
  setMail: () => {},
  setIsLoggedIn: () => {},
  setId: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [mail, setMail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    const ckeckUserIsLogin = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (user) {
        setId(user.id);
        setIsLoggedIn(true);
      } else {
        setId("");
        setIsLoggedIn(false);
      }
    };

    ckeckUserIsLogin();
  }, []);
  
  return (
    <AuthContext.Provider
      value={{ mail, setMail, isLoggedIn, setIsLoggedIn, id, setId }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UseGlobalContext = () => useContext(AuthContext);
