import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import Nav from './Components/Nav';
import Description from './Components/Description.js';

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/description/:id" element={<Description />} />
      </Routes>
    </div>
  )
}

export default App