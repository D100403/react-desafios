import React from 'react';
import ExperienciaComponent from './ExperienciaComponent.jsx';
import './ExperienciaLaboralComponent.css';

const ExperienciaLaboralComponent = ({ experiencias }) => (
  <div className="experiencia-laboral">
    {experiencias.map((exp, index) => (
      <ExperienciaComponent key={index} experiencia={exp} />
    ))}
  </div>
);

export default ExperienciaLaboralComponent;