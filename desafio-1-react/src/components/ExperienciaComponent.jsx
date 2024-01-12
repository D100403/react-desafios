import React from 'react';

const ExperienciaComponent = ({ experiencia }) => (
  <div className="experiencia">
    <h3>{experiencia.empresa}</h3>
    <p>{experiencia.puesto}</p>
    <p>{experiencia.periodo}</p>
  </div>
);

export default ExperienciaComponent;