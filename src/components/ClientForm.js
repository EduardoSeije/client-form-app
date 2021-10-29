import React from 'react'
import { useForm, useStep } from 'react-hooks-helper';
import { PersonalInfo } from './stepForm/PersonalInfo';
import { AddressInfo } from './stepForm/AddressInfo';
import { PersonalInfoII } from './stepForm/PersonalInfoII';

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

const steps = [
  {id : 'personalInfo'},
  {id : 'addressInfo'},
  {id : 'personalInfoII'},
  {id : 'review'}
];

export const ClientForm = () => {
  const [formData, setForm] = useForm(defaultData);

  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  // eslint-disable-next-line default-case
  switch(step.id) {
    case 'personalInfo':
      return <PersonalInfo {...props} />;
    case 'addressInfo':
      return <AddressInfo {...props} />
    case 'personalInfoII':
      return <PersonalInfoII {...props} />
  }  

  return (
    <div>
      <h1>Client Form</h1>
    </div>
  )
}
