import { useState } from 'react'
import { ProgressCalendar } from './components/ProgressCalendar'
import { Header } from './components/Header'
import './App.css'

function App() {
  const [days, setDays] = useState([
    { date: '01/01/2001', note: 'bla-bla-bla', score: 3 },
    { date: '02/01/2001', note: 'bla-bla-ble', score: 2 },
    { date: '03/01/2001', note: 'bla-bla-bli', score: 1 },
    { date: '04/01/2001', note: 'bla-bla-blo', score: 2 },
    { date: '05/01/2001', note: 'bla-bla-blu', score: 2 },
    { date: '06/01/2001', note: 'ble-bla-bla', score: 3 },
    { date: '07/01/2001', note: 'bli-bla-bli', score: 3 },
    { date: '08/01/2001', note: 'blo-bla-bli', score: 1 },
    { date: '09/01/2001', note: 'blu-bla-bli', score: 1 },
  ])

  return (
    <>
      <Header />
      <ProgressCalendar days={days} />
    </>
  )
}

export default App
