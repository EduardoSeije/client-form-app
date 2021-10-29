import React from 'react'
import { Link } from 'react-router-dom'

export const HomeButton = () => {
  return (
    <Link to='/'>
      <button type='button' className='homeBtn btn btn-info'>
        Página inicial
      </button>
    </Link>
  );
};
