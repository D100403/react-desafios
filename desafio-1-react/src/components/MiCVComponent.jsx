import React from 'react';
import FotoComponent from './FotoComponent.jsx';
import DatosPersonalesComponent from './DatosPersonalesComponent.jsx';
import EducacionComponent from './EducacionComponent.jsx';
import ExperienciaLaboralComponent from './ExperienciaLaboralComponent.jsx';
import './MiCVComponent.css';

const MiCVComponent = ({ datos }) => (
  <div className="mi-cv">
    <FotoComponent foto={datos.foto} />
    <DatosPersonalesComponent personales={datos.personales} />
    <EducacionComponent educacion={datos.educacion} />
    <ExperienciaLaboralComponent experiencias={datos.experiencias} />
  </div>
);

export default MiCVComponent;