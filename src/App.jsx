import React, { useEffect, useState } from 'react'
import AppNavbar from './components/Navbar'
import Hero from './components/Hero'
import Team from './components/Team'
import Projects from './components/Projects'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
    const hideTimer = setTimeout(() => setLoading(false), 2300);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, []);

  return (
    <>
      {loading && <LoadingScreen fadeOut={fadeOut} />}
      <div className="min-h-screen">
        <AppNavbar />
        <main>
          <Hero />
          <Team />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
