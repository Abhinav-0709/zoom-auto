import React, { useEffect } from 'react';
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import './App.css'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import { Element } from 'react-scroll';
import Navbar from './components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,      // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Navbar />

      <main>
        <Element name="home">
          <Hero />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="services">
          <Services />
        </Element>
        <Element name="testimonials">
          <Testimonials />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Footer />
      </main>
    </>
  )
}

export default App
