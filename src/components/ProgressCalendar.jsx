export function ProgressCalendar ({days}) {
  return <div className="progressCalendar">
    {days.map(day => <div key={day.id} className="daySquare"></div>)}
  </div>
}
