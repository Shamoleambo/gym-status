export function DaySquare({ score }) {
  let backgroundColor = 'grey'
  if (score === 3) backgroundColor = 'green'
  else if (score === 2) backgroundColor = 'orange'
  else if (score === 1) backgroundColor = 'red'
  return <div style={{ backgroundColor }} className='daySquare'></div>
}
