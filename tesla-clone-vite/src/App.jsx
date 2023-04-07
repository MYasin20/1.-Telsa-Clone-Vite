import React, {useEffect} from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>        
  )
}

export default App
