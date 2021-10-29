import React, { useContext } from 'react'
import { useForm } from 'react-hooks-helper';

import { ClientContext } from '../../Context/provider';

const defaultData = {
  nome: '',
  sobrenome: '',
  email: '',
  telefone: '',
  CEP: '',
  endereco1: '',
  endereco2:'',
  dataNasc:'',
  CPF: '',
  rendaMes: ''
};

export const PersonalInfoII = ({ formData }) => {
  const { dataNasc, CPF, rendaMes } = formData;
  const { clients, setClients } = useContext(ClientContext);
  const [setForm] = useForm([]);
  const clientsList = [];
  const handleClick =  () => {
    clientsList.push(formData)
    setForm(defaultData);
  };
  
  return (
    <form>
      <label htmlFor='dataNasc'>Data de nascimento</label>
      <input
        type='data'
        name='dataNasc'
        value={dataNasc}
        onChange={setForm}
        placeholder='Digite sua data de nascimento'
      />
    <label htmlFor='CPF'>CPF</label>
      <input
        type='number'
        name='CPF'
        value={CPF}
        onChange={setForm}
        placeholder='Digite seu CPF'
      />
      <label htmlFor='rendaMes'>Renda Mensal</label>
      <input
        type='number'
        name='rendaMes'
        value={rendaMes}
        onChange={setForm}
        placeholder='Digite sua renda mensal'
      />
       <button
        type='button'
        onClick={handleClick}
      >
        Salvar
      </button>
    </form>
  )
}
