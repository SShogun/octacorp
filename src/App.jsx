import './App.css'
import Navbar from './Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Feedback from './components/Feedback'
import Team from './components/Team'
import Error from './Error'
import {Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div className='h-screen w-[100vw] flex flex-col overflow-x-hidden bg-[#0e0e0e] text-white pb-10'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} errorElement={<Error />} />
        <Route path='/about' element={<About />} errorElement={<Error />}/>
        <Route path='/projects' element={<Projects />} errorElement={<Error />}/>
        <Route path='/feedback' element={<Feedback />} errorElement={<Error />}/>
        <Route path='/team' element={<Team />} errorElement={<Error />}/>
      </Routes>
    </div>
  )
}

export default App
