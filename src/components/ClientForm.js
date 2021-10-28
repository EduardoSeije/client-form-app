import React from 'react'
import { useForm, useStep } from 'react-hooks-helper';
import { PersonalInfo } from './stepForm/PersonalInfo';
import { AddressInfo } from './stepForm/AddressInfo';
import { PersonalInfoII } from './stepForm/PersonalInfoII';

const defaultData = {
  Nome: '',
  Sobrenome: '',
  Email: '',
  Telefone: ''
}

const steps = [
  {id : 'personalInfo'},
  {id : 'addressInfo'},
  {id : 'personalInfoII'},
]

export const ClientForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  // eslint-disable-next-line default-case
  switch(step.id) {
    case 'personalInfo':
      return <PersonalInfo />;
    case 'addressInfo':
      return <AddressInfo />
    case 'personalInfoII':
      return <PersonalInfoII />
  }  

  return (
    <div>
      <h1>Client Form</h1>
    </div>
  )
}
