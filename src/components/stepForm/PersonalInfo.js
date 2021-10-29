import React from 'react';
import { ClientsButton } from '../buttons/ClientsButton';
import { HomeButton } from '../buttons/HomeButton';

export const PersonalInfo = ({formData, setForm, navigation}) => {
  const {nome, sobrenome, email, telefone } = formData;
  
  return (
    <form className='personalInfoForm'>
      <h1 className='personalInfoHeader'>Informações pessoais</h1>
      <label htmlFor='nome' className='nameLabel'>Nome</label>
      <input
        type='text'
        name='nome'
        className='nameInput'
        value={nome}
        onChange={setForm}
        placeholder='  Digite seu nome' 
      />
      
      <label htmlFor='sobrenome' className='lastNameLabel'>Sobrenome</label>
      <input
        type='text'
        name='sobrenome'
        className='lastNameInput'
        value={sobrenome}
        onChange={setForm}
        placeholder='  Digite seu sobrenome'
      />
      <label htmlFor='email' className='emailLabel'>E-mail</label>
      <input
        type='text'
        name='email'
        className='emailInput'
        value={email}
        onChange={setForm}
        placeholder='  Digite seu melhor e-mail'
      />
      <label htmlFor='telefone' className='phoneLabel'>Telefone</label>
      <input
        type='tel'
        name='telefone'
        className='phoneInput'
        value={telefone}
        onChange={setForm}
        placeholder='  0xx-xxxxx-xxxx'
      />
      <div className='personalInfoBtns'>
        <ClientsButton />
        <HomeButton />        
        <button
          type='button'
          onClick={() => navigation.next()}
          className='nextBtn btn btn-success'
        >
          Próximo
        </button>
      </div>
    </form>
  )
}
