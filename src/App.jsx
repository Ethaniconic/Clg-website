// filepath: /Users/swadhinupadhyay/Documents/SVPCET/Clg-website/src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Magazines from './components/Magazines'
import Events from './components/Events'
import Contact from './components/Contact'

const App = () => {
  return (
    <Router>
      <div className='min-h-screen overflow-x-hidden bg-zinc-200 flex flex-col'>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/magazines" element={<Magazines />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App