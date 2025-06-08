import React, { useState } from 'react';

const Experience = () => {
  const [activeJob, setActiveJob] = useState(0);

  const jobs = [
    {
      company: 'Venture23',
      logo: 'venture23-logo',
      logoText: 'V23',
      title: 'Blockchain Engineer',
      date: 'September 2023 - Present',
      duties: [
        'Design and implement secure smart contracts for various blockchain platforms, ensuring gas optimization and security best practices',
        'Lead development teams of 3-5 engineers on complex blockchain projects, managing sprint planning and technical roadmaps',
        'Drive product strategy and feature prioritization for DeFi protocols and DAO applications',
        'Build end-to-end decentralized applications with focus on user experience and scalability',
        'Develop privacy-preserving applications using zero-knowledge proofs and advanced cryptographic techniques',
        'Implement blockchain solutions across multiple networks and protocols'
      ]
    },
    {
      company: 'iBriz.ai',
      logo: 'ibriz-logo',
      logoText: 'iB',
      title: 'Software Engineer',
      date: 'February 2020 - September 2023',
      duties: [
        'Developed robust web applications using modern frameworks and database technologies',
        'Managed product roadmaps for AI-powered applications, conducting market research and user feedback analysis',
        'Led cross-functional teams of 4-6 developers, coordinating between frontend, backend, and AI engineering teams',
        'Led integration of blockchain technologies into existing software infrastructure',
        'Improved application performance through code optimization, caching strategies, and database tuning',
        'Successfully migrated legacy systems to modern architectures and frameworks'
      ]
    },
    {
      company: 'Techflow Space',
      logo: 'techflow-logo',
      logoText: 'TF',
      title: 'Junior Developer',
      date: 'August 2019 - February 2020',
      duties: [
        'Created intelligent FAQ Bot for automated customer support and developed Tipping Bots integrated with smart contracts',
        'Worked extensively with Python datasets for data processing, analysis, and manipulation using pandas and numpy',
        'Built comprehensive data visualization dashboards and reports to present insights from complex datasets',
        'Implemented blockchain functionality in bot applications, enabling seamless cryptocurrency tipping mechanisms',
        'Developed automated data processing workflows for handling large-scale datasets'
      ]
    }
  ];

  return (
    <section id="experience">
      <div className="section-header">
        <h2>Where I've Worked</h2>
      </div>
      <div className="experience-container">
        <div className="job-tabs">
          {jobs.map((job, index) => (
            <button 
              key={index}
              className={`job-tab ${activeJob === index ? 'active' : ''}`}
              onClick={() => setActiveJob(index)}
            >
              <div className={`company-logo ${job.logo}`}>{job.logoText}</div>
              <span>{job.company}</span>
            </button>
          ))}
        </div>
        <div className="job-content">
          {jobs.map((job, index) => (
            <div 
              key={index}
              className={`job-panel ${activeJob === index ? 'active' : ''}`}
            >
              <h3 className="job-title">{job.title} <span className="job-company">@ {job.company}</span></h3>
              <p className="job-date">{job.date}</p>
              <ul className="job-duties">
                {job.duties.map((duty, dutyIndex) => (
                  <li key={dutyIndex}>{duty}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;