import React from 'react';
import "./ProjectCard.css"

function ProjectCard(props)  {
  return (
    <div className="project-card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">Vezi Proiectul</a>
    </div>
  );
};

export default ProjectCard;