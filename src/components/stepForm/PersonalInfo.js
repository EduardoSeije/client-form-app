import React from 'react';

export const PersonalInfo = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Informações pessoais</h1>
      <label htmlFor='nome'>Nome</label>
      <input type='text' name='nome 'placeholder='Digite seu nome' />
      <input type='text' placeholder='Digite seu sobrenome' />Sobrenome
      <input type='text' placeholder='Digite seu melhor e-mail' />E-mail
      <input type='tel'   placeholder='Digite seu telefone' />Telefone
    </div>
  )
}
