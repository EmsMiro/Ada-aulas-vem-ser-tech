import React, { createContext, useState } from 'react';

// criando o contexto do user
export const UserContext = createContext();

//componente provedor de user
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // estado para armazenar os dados do usuário

  // função para definir os dados do usuário
  const updateUser = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
