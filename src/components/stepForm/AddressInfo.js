import React from 'react'

export const AddressInfo = ({formData, setForm, navigation}) => {
  const { CEP, endereco1, endereco2 } = formData;
  return (
    <form>
      <label htmlFor='CEP'>CEP</label>
      <input
        type='number'
        name='CEP'
        value={CEP}
        onChange={setForm}
        placeholder='Digite seu CEP'
      />
      <label htmlFor='endereco1'>Endereço 1</label>
      <input
        type='text'
        name='endereco1'
        value={endereco1}
        onChange={setForm}
        placeholder='Digite seu endereço'
      />
      <label htmlFor='endereco2'>Endereço 2</label>
      <input
        type='text'
        name='endereco2'
        value={endereco2}
        onChange={setForm}
        placeholder='Complemento'
      />
      <button
        type='button'
        onClick={ () => navigation.previous()}
      >
        Voltar
      </button>
      <button 
        type='button'
        onClick={ () => navigation.next() }
      >
        Próximo
      </button>
    </form>
  )
}
