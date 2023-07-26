import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Doc from './pages/Doc'
import SearchDeath from './components/SearchDeath'
import Search from './components/SearchBirth'

function App() {



  return (
    <div>
      <Router>
        <Routes >
          <Route path='/' element={<Homepage/>} />
          <Route path='/verify/:entry' element={<Doc/>} />
          <Route path='/birth' element={<Search/>} />
          <Route path='/death' element={<SearchDeath/>} />
          <Route path='*' element={<Homepage/>} />
        </Routes>
      </Router>


    </div>
  )
}

export default App