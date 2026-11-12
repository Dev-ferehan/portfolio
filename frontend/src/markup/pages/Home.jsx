import React from 'react'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import About from '../components/About/About.jsx'
import Skills from '../components/Skills/Skills.jsx'
import Resume from '../components/Resume/Resume.jsx'
import Services from '../components/Services/Services.jsx'
import Portfolio from '../components/Portfolio/Portfolio.jsx'
import Testimonial from '../components/Testimonial/Testimonial.jsx'
import Contact from '../components/Contact/Contact.jsx'
function Home() {
  return (
    <>
      <Header />
    <section id="hero" className="hero section dark-background">

      <div className="container text-center" data-aos="fade-up" data-aos-delay="100">
        <h2>Hi, I'm Ferehan!</h2>
        <p>I am a software engineer living in Ethiopia<br/></p>
        <a href="#about" className="btn-scroll" title="Scroll Down"><i className="bi bi-chevron-down"></i></a>
      </div>
    </section>
    <About/>
    <Skills/>
    <Resume/>
    <Services/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
      <Footer/>
    </>
  )
}

export default Home
