import { CardioFrom } from './CardioForm'
import { ExerciseForm } from './ExerciseForm'

export function TypeAForm() {
  return (
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
