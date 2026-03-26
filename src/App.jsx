import { useState } from 'react'
import Navbar from './Component/Core/Navbar/Navbar'
import Home from './Component/Core/Home/Home'
import About from './Component/Core/About/About'
import Contact from './Component/Core/Contact/Contact'
import Footer from './Component/Core/Footer/Footer'
import Booking from './Component/Booking/Booking'
import Rooms from './Component/Rooms/Rooms'
import Details from './Component/Details/Details'
import Roombooking from './Component/Roombooking/Roombooking'
import './App.css'
import Gallery from './Component/Info/Gallery/Gallery'
import Faq from './Component/Info/Faq/Faq'
import Review from './Component/Info/Review/Review'
import ServicesGrid from "./Component/Services/ServicesGrid"
import ServicesGrid from "./Component/Services/ServicesGrid"



const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
      <Booking />
      <Rooms />
      <Details />
      <Roombooking />

      <Faq />
      <Gallery />
      <Review />
       <ServicesGrid/>
</>
  )
}

export default App
