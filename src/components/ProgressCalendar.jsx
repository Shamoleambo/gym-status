import { DaySquare } from "./DaySquare";

export function ProgressCalendar ({days}) {
  return <div className="progressCalendar">
    {days.map(day => <DaySquare key={day.id} score={day.score} />)}
  </div>
}
