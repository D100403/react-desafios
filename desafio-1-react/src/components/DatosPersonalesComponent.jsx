import React from 'react';
import './DatosPersonalesComponent.css';

const DatosPersonalesComponent = ({ personales }) => (
  <div className="datos-personales">
    <h2>{personales.nombre}</h2>
    <p>{personales.email}</p>
    {/* Más datos personales... */}
  </div>
);

export default DatosPersonalesComponent;
