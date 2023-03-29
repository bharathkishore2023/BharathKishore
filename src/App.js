import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualifications from './components/qualifications/Qualifications';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
// import Projects from './components/projects/Projects';

const App = () => {
  return (
    <div>
      <Header />
      <main className='main'>
      <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
         <Testimonials />
        <Contact /> 
        
      </main>
      <Footer />
      <ScrollUp /> 
    </div>
  );
};

export default App;
