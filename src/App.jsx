import { useState } from 'react'
import './App.css'
import Gallery from './Component/Info/Gallery/Gallery'
import Faq from './Component/Info/Faq/Faq'
import Review from './Component/Info/Review/Review'
// import Gallerygrid from './Component/Gallery/Gallerygrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Faq />
      <Gallery />
      <Review />
    </>
  )
}

export default App
