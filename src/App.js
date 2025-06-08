import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Experience from './components/experience';
import Contact from './components/contact';
import SocialLinks from './components/socialLinks';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
      <SocialLinks />
    </div>
  );
}

export default App;