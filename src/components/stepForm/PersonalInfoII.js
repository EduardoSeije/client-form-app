import React, { useContext } from 'react'
import { ClientContext } from '../../Context/provider';
import { NewClientButton } from '../buttons/NewClientButton';

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

export const PersonalInfoII = ({ formData, setForm, navigation }) => {
  const { dataNasc, CPF, rendaMes } = formData;
  const { setClients } = useContext(ClientContext);
  const handleClick =  () => {
    let clientListTest = [];
    clientListTest.cliente = formData;
    setClients(clientListTest);
    formData = defaultData;
    navigation.go(0);
  };

  return (
    <form>
      <label htmlFor='dataNasc'>Data de nascimento</label>
      <input
        type='data'
        name='dataNasc'
        value={dataNasc}
        onChange={setForm}
        placeholder='dd/mm/aaaa'
      />
    <label htmlFor='CPF'>CPF</label>
      <input
        type='number'
        name='CPF'
        value={CPF}
        onChange={setForm}
        placeholder='Somente números'
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
      <NewClientButton />
    </form>
  )
}
