import React from 'react';
import './FotoComponent.css';

const FotoComponent = ({ foto }) => (
  <div className="foto">
    <img src={foto} alt="Foto" />
  </div>
);

export default FotoComponent;