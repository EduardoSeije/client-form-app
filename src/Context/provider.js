import React, { useState, createContext } from "react";

export const ClientContext = createContext()

const Provider = ({ children }) => {
  const [clients, setClients] = useState([]);

  const context = {
    clients,
    setClients,
  };

  return (
    <ClientContext.Provider value= { context }>
      { children }
    </ClientContext.Provider> 
  );
};

export default Provider;