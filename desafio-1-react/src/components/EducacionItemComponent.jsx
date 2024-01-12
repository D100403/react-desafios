import React from 'react';

const EducacionItemComponent = ({ edu }) => (
  <div className="educacion-item">
    <h3>{edu.titulo}</h3>
    <p>{edu.institucion}</p>
    <p>{edu.año}</p>
  </div>
);

export default EducacionItemComponent;