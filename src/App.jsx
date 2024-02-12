import './App.css'
import { Routes,Route } from 'react-router-dom'
import Container from './Components/Container'
import Navbar from './Components/mini-components/Navbar'
import LocomotiveScroll from 'locomotive-scroll'

function App() {
  
  new LocomotiveScroll();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Container />} />
      </Routes>
    </>
  )
}

export default App
