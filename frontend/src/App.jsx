import { } from 'react'
import { BrowserRouter  } from 'react-router-dom';
import Header from './components/Header/Header'
import HeroSection from './components/Section1/Herosection'

function App() {

  return (
    <BrowserRouter>
      
  
      <Header />
      <HeroSection />

      
    </BrowserRouter>
  )
}

export default App
