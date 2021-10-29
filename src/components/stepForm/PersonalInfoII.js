import React, { useContext } from 'react'
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
    <form className='personalInfoIIForm'>
      <h1 className='personalInfoIIHeader'>Informações pessoais II</h1>
      <label htmlFor='dataNasc' className='birthDateLabel'>Data de nascimento</label>
      <input
        type='data'
        name='dataNasc'
        className='birthDateInput'
        value={dataNasc}
        onChange={setForm}
        placeholder='  dd/mm/aaaa'
      />
    <label htmlFor='CPF' className='cpfLabel'>CPF</label>
      <input
        type='number'
        name='CPF'
        className='cpfInput'
        value={CPF}
        onChange={setForm}
        placeholder='  Somente números'
      />
      <label htmlFor='rendaMes' className='proftLabel'>Renda Mensal</label>
      <input
        type='number'
        name='rendaMes'
        className='proftInput'
        value={rendaMes}
        onChange={setForm}
        placeholder='  Digite sua renda mensal'
      />
       <button
        type='button'
        onClick={handleClick}
        className='saveBtn btn btn-success'
      >
        Salvar
      </button>
    </form>
  )
}
