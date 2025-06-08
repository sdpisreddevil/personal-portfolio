import React from 'react';

const Contact = () => {
  const handleEmailClick = () => {
    window.open('mailto:bhandari.sudeep984@gmail.com');
  };

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <p>
        I'm currently looking for new opportunities and my inbox is always open. 
        Whether you have a question about blockchain development, want to collaborate 
        on a project, or just want to say hi, I'll try my best to get back to you!
      </p>
      <button onClick={handleEmailClick} className="cta-button">Say Hello</button>
    </section>
  );
};

export default Contact;