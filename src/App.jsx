import React from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Doc from './pages/Doc'

function App() {
  return (
    <div>
      <Router>
        <Routes >
          <Route path='/' element={<Homepage/>} />
          <Route path='/verify/:entry' element={<Doc/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App