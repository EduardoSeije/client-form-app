import React from 'react';

export const PersonalInfo = ({formData, setForm, navigation}) => {
  const {nome, sobrenome, email, telefone } = formData;
  return (
    <form>
      <h1>Informações pessoais</h1>
      <label htmlFor='nome'>Nome</label>
      <input
        type='text'
        name='nome'
        value={nome}
        onChange={setForm}
        placeholder='Digite seu nome' 
      />
      <label htmlFor='sobrenome'>Sobrenome</label>
      <input
        type='text'
        name='sobrenome'
        value={sobrenome}
        onChange={setForm}
        placeholder='Digite seu sobrenome'
      />
      <label htmlFor='email'>E-mail</label>
      <input
        type='text'
        name='email'
        value={email}
        onChange={setForm}
        placeholder='Digite seu melhor e-mail'
      />
      <label htmlFor='telefone'>Nome</label>
      <input
        type='tel'
        name='telefone'
        value={telefone}
        onChange={setForm}
        placeholder='Digite seu telefone'
      />
      <button
        type='button'
        onClick={() => navigation.next()}
      >
        Próximo
      </button>
    </form>
  )
}
