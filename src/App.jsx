import { useState } from 'react'
import './App.css'
import Navbar from './Component/Core/Navbar/Navbar'
import Home from './Component/Core/Home/Home'
import About from './Component/Core/About/About'
import Contact from './Component/Core/Contact/Contact'
import Footer from './Component/Core/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       <Home/>
       <About/>
       <Contact/>
       <Footer/>
    </>
  )
}

export default App
