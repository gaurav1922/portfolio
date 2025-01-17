import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    // Fetching the portfolio data from the backend API
    fetch('http://localhost:5000/api/portfolio')
      .then(response => response.json())
      .then(data => setPortfolioData(data));
  }, []);

  if (!portfolioData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{portfolioData.details.name}</h1>
        <p>{portfolioData.details.description}</p>
        
        {/* Resume download link */}
        <a href={`${portfolioData.resume.url}`} download>Download Resume</a>
        
        <section>
          <h2>Projects</h2>
          <ul>
            {portfolioData.projects.map(project => (
              <li key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>Technologies: {project.techStack.join(', ')}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">Project Link</a>
              </li>
            ))}
          </ul>
        </section>
        
        <section>
          <h2>Skills</h2>
          {portfolioData.skills.map((skillCategory, index) => (
            <div key={index}>
              <h3>{skillCategory.category}</h3>
              <ul>
                {skillCategory.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </header>
    </div>
  );
}

export default App;
