import React from 'react'
import Navbar from '../layout/NavBar'
import AboutSection from '../sections/About'
import Experience from '../sections/Experience'
import SkillsSection from '../sections/Skills'
import DesignToolsSection from '../sections/Designtool'
import Education from '../sections/Education'
import CaseStudySlider from '../sections/Projects'
import ContactSection from '../sections/Contact'
const Home = () => {
  return (
    <div>
      <Navbar />
      <AboutSection />
      <Experience />
      <SkillsSection />
      <DesignToolsSection />
      <Education />
      <CaseStudySlider />
      <ContactSection/>
    </div>
  )
}

export default Home
