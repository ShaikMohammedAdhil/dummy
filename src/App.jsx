import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ProcessTimeline from './components/process/ProcessTimeline';
import Footer from './components/footer/Footer';
import CallToAction from './components/CallToAction';
// Page components
import Services from './sections/Services'
import About from './sections/About'
import Careers from './pages/Careers'
import Contact from './sections/Contact'
import MainPage from './pages/MainPage'

function App() {
  return (
    <>
      <Navbar />
      <main className='pt-10'>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/services" element={<Services />} />
          <ProcessTimeline />
          <CallToAction />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
