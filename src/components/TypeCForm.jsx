import { CardioFrom } from './CardioForm'
import { ExerciseForm } from './ExerciseForm'

export function TypeCForm() {
  return (
    <>
      <div className='form-control-exercise'>
        <h2>Type C</h2>
        <ExerciseForm name='Isobello' />
        <ExerciseForm name='Agachamento Alforriado' />
        <ExerciseForm name='Kiko, kiko! Ha! Ha! Ha!' />
      </div>
    </>
  )
}
