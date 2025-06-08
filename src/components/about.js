import React from 'react';
import profileImage from '../images/profile.png';

const About = () => {
  const technologies = [
    'Solidity',
    'Leo (Aleo)',
    'Move',
    'Zero-Knowledge Proofs',
    'Python',
    'Go',
    'React',
    'Node.js'
  ];

  return (
    <section id="about">
      <div className="section-header">
        <h2>About Me</h2>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Sudeep, a blockchain engineer and technical leader based in Kathmandu, Nepal. 
            I enjoy creating things that live on the internet, whether that be smart contracts, 
            decentralized applications, or anything in between.
          </p>
          <p>
            My journey into blockchain started during my time at iBriz.ai, where I led the integration 
            of blockchain technologies into existing software infrastructure. Fast-forward to today, 
            and I've had the privilege of working on privacy-preserving payment systems, DAO governance 
            protocols, and cross-chain bridges.
          </p>
          <p>
            My main focus these days is building accessible and inclusive products and digital experiences 
            for a variety of clients, with a particular interest in zero-knowledge proof applications 
            and privacy-first solutions.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="tech-list">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="about-image">
          <div className="img-wrapper">
            <img 
              src={profileImage}
              alt="Sudeep Bhandari" 
              className="profile-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='300' fill='%23112240'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%2364ffda' font-size='20' font-family='monospace'%3EProfile Photo%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;