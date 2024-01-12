import React from 'react';
import EducacionItemComponent from './EducacionItemComponent.jsx';
import './EducacionComponent.css';

const EducacionComponent = ({ educacion }) => (
  <div className="educacion">
    {educacion.map((edu, index) => (
      <EducacionItemComponent key={index} edu={edu} />
    ))}
  </div>
);

export default EducacionComponent;