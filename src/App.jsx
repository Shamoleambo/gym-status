import { useState } from 'react'
import { ProgressCalendar } from './components/ProgressCalendar'
import { Header } from './components/Header'
import './App.css'
import { Form } from './components/Form'

function App() {
  const [days, setDays] = useState([
    { id: 1, date: '01/01/2001', note: 'bla-bla-bla', score: 3 },
    { id: 2, date: '02/01/2001', note: 'bla-bla-ble', score: 2 },
    { id: 3, date: '03/01/2001', note: 'bla-bla-bli', score: 1 },
    { id: 4, date: '04/01/2001', note: 'bla-bla-blo', score: 2 },
    { id: 5, date: '05/01/2001', note: 'bla-bla-blu', score: 2 },
    { id: 6, date: '06/01/2001', note: 'ble-bla-bla', score: 3 },
    { id: 7, date: '07/01/2001', note: 'bli-bla-bli', score: 3 },
    { id: 8, date: '08/01/2001', note: 'blo-bla-bli', score: 1 },
    { id: 9, date: '09/01/2001', note: 'blu-bla-bli', score: 1 }
  ])

  const addDaySquare = () => {
    setDays((prevState) => [
      ...prevState,
      { id: 10, date: 'dummy', note: 'dummy', score: 0 }
    ])
  }

  return (
    <>
      <Header onAddDay={addDaySquare} />
      <ProgressCalendar days={days} />
      <Form />
    </>
  )
}

export default App
