import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1> Home Page </h1>
      <nav>
        <Link to='/clientform' >
          <button type='button'>
            Cadastrar novo cliente
          </button>
        </Link>
        <Link to='/clientslist'>
          <button type='button'>
            Lista de clientes
          </button>
        </Link>
      </nav>
    </div>
  );
};
 