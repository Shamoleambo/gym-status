import { Score } from './Score'

export function CardioFrom() {
  return (
    <>
      <h3>Cardio</h3>
      <div className='form-control'>
        <label htmlFor='time'>Intense Time (minutes)</label>
        <input type='number' />
      </div>
      <Score />
    </>
  )
}
