import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import { Route, Routes } from 'react-router-dom'

function Pages() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:cuisine" element={<Cuisine />} />
    </Routes>
    </div>
  )
}

export default Pages;