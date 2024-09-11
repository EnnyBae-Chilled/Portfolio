import React from 'react';
import './Projects.css';
import Profile from "../assets/profile-pic.png"
import Propel from "../assets/Propel.png";
import Weather from "../assets/weather-app.webp";
import Todo from "../assets/T0-do.png"
import Calculator from "../assets/calculator.png"

const projects = [
  {
    title: 'Portfolio',
    image: "", 
    description: 'A Personal Portfolio website to showcase all my details and projects at one place.',
    technologies: 'React.js | Git',
    githubLink: 'https://github.com/EnnyBae-Chilled/Portfolio',
    isProfile: true,
  },
  {
    title: 'Calculator',
    image: Calculator,
    description: 'A calculator app to perform basic and advanced mathematical operations.',
    technologies: ' HTML/CSS | Javascript | Git',
    githubLink: 'https://github.com/EnnyBae-Chilled/Calculator',
  },
  {
    title: 'To-Do List',
    image: Todo,
    description: 'A website enabling users to manage tasks, featuring motivational quotes and task management functions.',
    technologies: 'React.js | Git',
    githubLink: 'https://github.com/EnnyBae-Chilled/To-Do',
  },
  {
    title: 'Weather App',
    image: Weather,
    description: 'A web app using Avios and OpenWeatherMap API to fetch real-time weather data by city.',
    technologies: 'HTML/CSS | Javascript | Git',
    githubLink: 'https://github.com/EnnyBae-Chilled/Weather-App',
  }
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h2>Browse a few of my</h2>
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {project.isProfile ? (
              <div className="profile-card">
                <img src={Profile} alt={project.profileName} className="profile-image" />
                <h2>{project.profileName}</h2>
                <p>{project.profileRole}</p>
              </div>
            ) : (
              <img src={project.image} alt={project.title} className="project-image" />
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="technologies">{project.technologies}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-button">
              Github
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
