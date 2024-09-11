import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 'Experienced', percentage: 100 },
    { name: 'CSS', level: 'Experienced', percentage: 100 },
    { name: 'Javascript', level: 'Intermediate', percentage: 75 },
    { name: 'Python', level: 'Experienced', percentage: 100 },
    { name: 'Git', level: 'Intermediate', percentage: 75 },
    { name: 'Bootstrap', level: 'Basic', percentage: 50 },
    { name: 'React', level: 'Basic', percentage: 50 },
  ];

  const certificates = [
    { name: 'Meta Introduction to Front-End Development', date: 'November 2023' },
    { name: 'Meta Programming with JavaScript', date: 'November 2023' },
    { name: 'AWS Academy Cloud Foundations', date: 'January 2024' },
    { name: 'IBM Getting Started with Threat Intelligence and Hunting', date: 'September 2023' },
    { name: 'CISCO Data Analytics Essentials', date: 'November 2023' },
    { name: 'IBM Professional Skills Build', date: 'January 2024' },
  ];

  return (
    <div className="skills-section">
      <h2 className="section-title">Explore My</h2>
      <h1 className="main-title">Skills</h1>
      <div className="skills-container">
        <div className="skills-column">
          <h3>Software Development</h3>
          <ul>
            {skills.map(skill => (
              <li key={skill.name}>
                <div className="skill-name">{skill.name}</div>
                <div className="battery-container" title={skill.level}>
                  <div className="battery-cathode"></div> {/* Battery cathode */}
                  <div className="battery">
                    <div className="battery-fill" style={{ width: `${skill.percentage}%` }}></div>
                    <div className="skill-level-text">{skill.level}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="skills-column">
          <h3>Relevant Skills & Certificates</h3>
          <ul>
            {certificates.map(cert => (
              <li key={cert.name}>
                <div className="skill-name">{cert.name}</div>
                <div className="date-range-container">
                  <span className="date-range">{cert.date}</span>
                </div>
                {/* <div className="battery-container" title={cert.date}>
                  <div className="battery">
                    <div className="battery-fill" style={{ width: `${cert.percentage}%` }}></div>
                    <div className="skill-level-text">{cert.level || cert.date}</div>
                  </div>
                </div> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
