import { } from 'react'
import { BrowserRouter  } from 'react-router-dom';
import Header from './components/Header/Header'
import HeroSection from './components/Section1/Herosection'
import InfoSection from './components/Section2/InfoSection'
import WhyChooseUs from './components/Section3/WhyChooseUs'
import PopularResidences from './components/Section4/PopularResidence'

function App() {

  return (
    <BrowserRouter>
      
  
      <Header />
      <HeroSection />
      <InfoSection />
      <WhyChooseUs />
      <PopularResidences />

      
    </BrowserRouter>
  )
}

export default App
