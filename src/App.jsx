// filepath: /Users/swadhinupadhyay/Documents/SVPCET/Clg-website/src/App.jsx
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className='min-h-screen overflow-x-hidden bg-zinc-200'>
        <Navbar />
      </div>
      <Footer />

    </>
  )
}

export default App