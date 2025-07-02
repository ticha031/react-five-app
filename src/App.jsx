import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import BmiCalculator from './screens/BmiCalculator'
import SumNumber from './screens/SumNumber'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<BmiCalculator />} />
        <Route path="/sum" element={<SumNumber />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App