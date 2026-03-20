import React from 'react'
import AppNavbar from './components/Navbar'
import Hero from './components/Hero'
import Team from './components/Team'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <AppNavbar />
      <main>
        <Hero />
        <Team />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
