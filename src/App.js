import React from 'react'
import { BrowserRouter as Router, routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
import Home from './components/Home'
import About from './components/About';
import AboutNav from './components/About-nav';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home/>
        <About/>
        <AboutNav/>
        <Skills />
        <Projects />
        <Contact/>
        <Footer />
      </div>
    </Router>
  )
}

export default App;