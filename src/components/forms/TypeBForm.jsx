import { CardioFrom } from './mediumForms/CardioForm'
import { ExerciseForm } from './mediumForms/ExerciseForm'

export function TypeBForm() {
  return (
    <>
      <div className='form-control-exercise'>
        <h2>Type B</h2>
        <ExerciseForm name='Cebolas Laterais' />
        <ExerciseForm name='Cordópolis' />
        <ExerciseForm name='Jean Jacques Laterrral' />
        <CardioFrom />
      </div>
    </>
  )
}
