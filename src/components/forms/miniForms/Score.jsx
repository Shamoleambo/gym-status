export function Score() {
  return (
    <div className='form-control'>
      <label htmlFor='score'>Score</label>
      <select name='score' id='score'>
        <option value='3'>Good</option>
        <option value='2'>Ok</option>
        <option value='1'>Bad</option>
      </select>
    </div>
  )
}
