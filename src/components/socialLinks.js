import React from 'react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/sdpisreddevil',
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sdpbhandari/',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'X',
      url: 'https://x.com/sdp_bhandari',
      icon: "fab fa-x-twitter"
    }
  ];

  return (
    <>
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            title={link.name}
          >
            <i className={link.icon}></i>
          </a>
        ))}
      </div>
      <div className="email-link">
        <a href="mailto:bhandari.sudeep984@gmail.com" className="email-link-text">bhandari.sudeep984@gmail.com</a>
      </div>
    </>
  );
};

export default SocialLinks;