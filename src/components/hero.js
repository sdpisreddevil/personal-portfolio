import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const nameRef = useRef(null);

  useEffect(() => {
    const typeWriter = (text, speed = 150) => {
      let i = 0;
      const type = () => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1));
          i++;
          setTimeout(type, speed);
        }
      };
      type();
    };

    setTimeout(() => {
      typeWriter('Sudeep Bhandari');
    }, 1000);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <h1 className="fade-in">Hi, my name is</h1>
      <h2 className="fade-in" ref={nameRef}>{displayText}</h2>
      <h3 className="fade-in">I build things for the blockchain.</h3>
      <p className="fade-in">
        I'm a blockchain engineer specializing in building exceptional decentralized applications. 
        Currently, I'm focused on building accessible, privacy-first solutions using zero-knowledge proofs 
        and leading innovative DeFi protocols at <span style={{color: 'var(--accent)'}}>Venture23</span>.
      </p>
      <a onClick={scrollToContact} className="cta-button fade-in">Get In Touch</a>
    </section>
  );
};

export default Hero;