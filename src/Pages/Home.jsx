import React from 'react'
import HeroSection from '../Components/HeroSection'
import Trusted from '../Components/Trusted'
import Services from '../Components/Services'


const Home = () => {
  const data = {
    name: 'HomePage',
  }
  return (
  <>
  <HeroSection mydata={data} />
  <Trusted/>
  <Services/>
  </>
  )
}

export default Home
