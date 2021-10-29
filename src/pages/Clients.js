import React, { useContext, useState } from "react";
import { ClientContext } from "../Context/provider";
import { HomeButton } from "../components/buttons/HomeButton";

export const Clients = () => {
  const [isHidden, setIsHidden] = useState('true');
  const { clients } = useContext(ClientContext);
  let clientToMap = [clients];
  console.log(clientToMap);
  
  const handleToggle = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="clientsDiv">
      <h1 className="clientsHeader">Lista de Clientes</h1>
      {console.log(clientToMap)}
      {clientToMap.length === 1 ? <h1 className='noClientMsg'>Sem clientes cadastrados</h1>: clientToMap.map((cliente) => {
        return (
          <div>
            <button onClick={handleToggle} className='clientListBtn'>
              <h2 className="clientsName">{`${cliente.cliente.nome} ${cliente.cliente.sobrenome}`}</h2>
            </button>
            <div className={ isHidden ? 'clientsInfoHidden' : 'clientsInfoNotHidden'}>
              <p>{`${cliente.cliente.nome} ${cliente.cliente.sobrenome}`}</p>
              <p>{`E-mail: ${cliente.cliente.email}`}</p>
              <p>{`Telefone: ${cliente.cliente.telefone}`}</p>
              <p>{`Endereço: ${cliente.cliente.endereco1}`}</p>
              <p>{`Complemento: ${cliente.cliente.endereco2}`}</p>
              <p>{`CEP: ${cliente.cliente.cep}`}</p>
              <p>{`Data de Nascimento: ${cliente.cliente.dataNasc}`}</p>
              <p>{`CPF: ${cliente.cliente.cpf}`}</p>
              <p>{`Renda mensal: R$ ${cliente.cliente.rendaMes}`}</p>
            </div>
          </div>
        );
      })}
      <HomeButton />
    </div>
  );
};
