import React, { useContext } from 'react'
import { ClientContext } from '../Context/provider';
import { HomeButton } from '../components/buttons/HomeButton';

export const Clients = () => {
  const { clients } = useContext(ClientContext);
  let clientToMap = [clients];
  
  return (
    <div>
      <h1>Lista de Clientes</h1>
      {console.log(clientToMap)}
      {clientToMap.map((cliente) => {
        return (
          <h2>{`${cliente.cliente.nome} ${cliente.cliente.sobrenome}`}</h2>
        )
      })}
      <HomeButton />
    </div>
  );
};
