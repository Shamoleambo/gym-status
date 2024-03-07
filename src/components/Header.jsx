export function Header({ onAddDay }) {
  return (
    <header className='header'>
      <h1>Gym Status</h1>
      <button className='btn-add-day' onClick={onAddDay}>
        Add New Day
      </button>
    </header>
  )
}
