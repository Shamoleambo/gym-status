export function ProgressCalendar ({days}) {
  return <div className="progressCalendar">
    {days.map(day => <div key={day.date} className="daySquare"></div>)}
  </div>
}
