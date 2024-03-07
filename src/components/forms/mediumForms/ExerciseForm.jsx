import { Load } from '../miniForms/Load'
import { Repetitions } from '../miniForms/Repetitions'
import { Score } from '../miniForms/Score'

export function ExerciseForm({ name }) {
  return (
    <div className='form-control-exercise'>
      <h3>{name}</h3>
      <Repetitions />
      <Load />
      <Score/>
    </div>
  )
}
