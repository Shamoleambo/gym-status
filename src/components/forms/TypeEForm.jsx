import { CardioFrom } from './mediumForms/CardioForm'
import { ExerciseForm } from './mediumForms/ExerciseForm'

export function TypeEForm() {
  return (
    <>
      <div className='form-control-exercise'>
        <h2>Type E</h2>
        <ExerciseForm name='Empurramento' />
        <ExerciseForm name='SusPeito' />
        <ExerciseForm name='Code Veronica - Claire Redfield' />
      </div>
    </>
  )
}
