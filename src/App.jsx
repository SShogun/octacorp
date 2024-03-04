import './App.css'
import Navbar from './Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Feedback from './components/Feedback'
import Team from './components/Team'
import {Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div className='h-screen w-[100vw] flex flex-col overflow-x-hidden bg-[#0e0e0e] text-white pb-10'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </div>
  )
}

export default App
