import React from 'react'
import { Link } from 'react-router-dom'

export const NewClientButton = () => {
  return (
    <Link to='/clientform' >
    <button type='button' className="newClientBtn btn btn-success me-md-2">
      + Cadastrar
    </button>
  </Link>
  )
}
