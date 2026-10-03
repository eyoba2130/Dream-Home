import { } from 'react'
import { BrowserRouter  } from 'react-router-dom';
import Header from './components/Header/Header'
import HeroSection from './components/Section1/Herosection'
import InfoSection from './components/Section2/InfoSection'
import WhyChooseUs from './components/Section3/WhyChooseUs'
import PopularResidences from './components/Section4/PopularResidence'
import TestimonialSection from './components/TestimonialSection/TestimonialSection'
import HelpSection from './components/HelpSection/HelpSection'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <BrowserRouter>
      
  
      <Header />
      <HeroSection />
      <InfoSection />
      <WhyChooseUs />
      <PopularResidences />
      <TestimonialSection />
      <HelpSection />
      <Footer />

      
    </BrowserRouter>
  )
}

export default App


