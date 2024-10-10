import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Inicio from './components/inicio';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio />}/>
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App
