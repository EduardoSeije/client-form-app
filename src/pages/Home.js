import React from 'react'
import { ClientsButton } from '../components/buttons/ClientsButton';
import { NewClientButton } from '../components/buttons/NewClientButton';
import { Contact } from '../components/contact/Contact';

export const Home = () => {
  return (
    <div className="text-xl">
      <h1 className='homeMessage'> Bem vindo(a) a nossa págia de clientes </h1>
      <nav className='landingPageNav'>
        <NewClientButton className='newClientBtnHome'/>
        <ClientsButton className='clientsBtnHome'/>
      </nav>
      <div className='contactDiv'>
        <Contact />
      </div>
    </div>
  );
};
 