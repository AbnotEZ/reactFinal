import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import MiApi from './components/Miapi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MiApi />
    <Footer/>
    </>
  )
}

export default App
