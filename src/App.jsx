 
import { useState } from 'react'
import './App.css'
import Booking from './Component/Booking/Booking'
import Rooms from './Component/Rooms/Rooms'
import Details from './Component/Details/Details'
import Roombooking from './Component/Roombooking/Roombooking'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <Booking />
    <Rooms />
    <Details />
    <Roombooking />

    </>
  )
}

export default App
