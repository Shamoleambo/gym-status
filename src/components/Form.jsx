import { useState } from 'react'
import { TypeAForm } from './typeForms/TypeAForm'
import { TypeBForm } from './typeForms/TypeBForm'
import { TypeCForm } from './typeForms/TypeCForm'
import { TypeDForm } from './typeForms/TypeDForm'
import { TypeEForm } from './typeForms/TypeEForm'

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
      {followingForm}
      <button className='btn-form' type='submit'>
        Done
      </button>
    </form>
  )
}
