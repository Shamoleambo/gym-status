import { useState } from 'react'
import { ExerciseForm } from './ExerciseForm'
import { CardioFrom } from './CardioForm'

export function Form() {
  const [formType, setFormType] = useState('')

  let followingForm
  if (formType === 'A') {
    followingForm = (
      <>
        <div className='form-control-exercise'>
          <h2>Type A</h2>
          <ExerciseForm name='Trapézio' />
          <ExerciseForm name='Bíceps' />
          <ExerciseForm name='Abdominal' />
          <CardioFrom />
        </div>
      </>
    )
  }

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
