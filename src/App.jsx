import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Inicio from './components/Inicio';
import Servicios from './components/servicios';
import Portfolio from './components/Portfolio';
import Contacto from './components/Contacto';
import Modulos from './components/Modulos';
import ScrollToTop from './components/scrollToTop.js';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/servicios' element={<Servicios />}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/modulos' element={<Modulos/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
