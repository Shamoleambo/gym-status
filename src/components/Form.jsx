import { useState } from 'react'
import { TypeAForm } from './forms/TypeAForm'
import { TypeBForm } from './forms/TypeBForm'
import { TypeCForm } from './forms/TypeCForm'
import { TypeDForm } from './forms/TypeDForm'
import { TypeEForm } from './forms/TypeEForm'

export function Form() {
  const [formType, setFormType] = useState('')

  let followingForm
  if (formType === 'A') followingForm = <TypeAForm />
  else if (formType === 'B') followingForm = <TypeBForm />
  else if (formType === 'C') followingForm = <TypeCForm />
  else if (formType === 'D') followingForm = <TypeDForm />
  else if (formType === 'E') followingForm = <TypeEForm />

  return (
    <form className='form'>
      <label htmlFor='exerciseType'>Choose Exercise Type</label>
      <select
        name='exercise'
        id='exerciseType'
        onChange={(e) => setFormType(e.target.value)}
      >
        <option value=''>--Please choose an option--</option>
        <option value='A'>A</option>
        <option value='B'>B</option>
        <option value='C'>C</option>
        <option value='D'>D</option>
        <option value='E'>E</option>
      </select>
      <label htmlFor="date">Date</label>
      <input type='date' />
      {followingForm}
      <button className='btn-form' type='submit'>
        Done
      </button>
    </form>
  )
}
