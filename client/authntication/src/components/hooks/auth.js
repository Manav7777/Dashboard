import React, { useState, useContext, createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("User"));
  const [userName, setUserName] = useState(localStorage.getItem("Name"));
  const [userRole , setUserRole] = useState(localStorage.getItem('role'));
  const login = (user) => {
    localStorage.setItem("User", JSON.stringify(user));
    localStorage.setItem("Name", user.name);
    localStorage.setItem("role", user.role);
    console.log(JSON.stringify(user.name));
    setUser(user);
    setUserName(user.name);
    setUserRole(user.role);
  };
  const logout = () => {
    localStorage.removeItem("User");
    localStorage.removeItem("Name");
    localStorage.removeItem("role");

    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, userName,userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
