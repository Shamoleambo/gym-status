import { Load } from './Load'
import { Repetitions } from './Repetitions'
import { Score } from './Score'

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
