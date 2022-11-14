import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import PlaceToStay from './Pages/PlaceToStay'




function App() {
  return (
    <div className="App">
      <Home />
      
      <PlaceToStay />
      hiaiofn;fwemf;lwel;f
    </div>
  );
}

export default App;


// <div className="App">
// <Router>
//   <Routes>
//     <Route index element={<Home />} />
//     <Route path="/place-to-stay" element={<PlaceToStay />} />
//   </Routes>
// </Router>
// </div>