import { CardioFrom } from './mediumForms/CardioForm'
import { ExerciseForm } from './mediumForms/ExerciseForm'
import { Repetitions } from './miniForms/Repetitions'
import { Score } from './miniForms/Score'

export function TypeDForm() {
  return (
    <>
      <div className='form-control-exercise'>
        <h2>Type D</h2>
        <ExerciseForm name='Puxação' />
        <ExerciseForm name='Rosquelha' />
        <ExerciseForm name='Roscolina' />
        <div className='form-control-exercise'>
          <h3>Ahoy!</h3>
          <Repetitions />
          <Score />
        </div>
      </div>
    </>
  )
}
