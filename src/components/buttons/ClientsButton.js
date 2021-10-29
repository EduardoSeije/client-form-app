import React from 'react'
import { Link } from 'react-router-dom';

export const ClientsButton = () => {
  return (
    <Link to='/clientlist'>
          <button type='button' className='clientsBtn btn btn-primary'>
            Clientes
          </button>
    </Link>
  );
};
