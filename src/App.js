import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import PlaceToStay from './Pages/PlaceToStay'
import Layout from './container/Layout'

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="placetostay" element={<PlaceToStay />} />
            </Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;