import React from 'react'
import { ClientsButton } from '../components/buttons/ClientsButton';
import { NewClientButton } from '../components/buttons/NewClientButton';

export const Home = () => {
  return (
    <div className="text-xl">
      <h1 className='homeMessage'> Bem vindo(a) nossa págia de clientes </h1>
      <nav className='landingPageNav'>
        <NewClientButton className='newClientBtnHome'/>
        <ClientsButton className='clientsBtnHome'/>
      </nav>
    </div>
  );
};
 