import React from 'react'
import HeroSection from '../components/HeroSection'
import { InfoSection } from '../components/InfoSection'
import Card from '../components/Cards/Cards'
import Footer from '../components/FooterSection/Footer'
import SubHero from '../components/HeroSection/SubHero'
import MiniFooter from '../components/FooterSection/MiniFooter'
export default function Landing() {
  return (
    <div>
      <HeroSection/>
      <InfoSection />
      <Card />
      <SubHero/>
      <Footer/>
      <MiniFooter />

    </div>
  )
}
