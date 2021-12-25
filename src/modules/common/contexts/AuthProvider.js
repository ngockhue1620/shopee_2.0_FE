import React from "react";
import { useEffect, createContext, useContext } from "react";
import { useState } from "react";
import { useShopeeApiClient } from "../../shopee/hooks/useShopeeApiClient";
import useAsync from "../hooks/useAsync";
import jwt_decode from "jwt-decode";

const AuthContext = createContext({
  user: null,
  setUser: (user) => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`useAuth must be called inside an AuthProvider`);
  }
  return context;
};

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const api = useShopeeApiClient();

  // const currentUser = useAsync(async () => {
  //   const result = await api.getCurrentUser();

  //   if (result) {
  //     setUser(result);
  //   }
  // });

  const contextValue = {
    user,
    setUser,
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setUser(jwt_decode(token).user)
    }
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
