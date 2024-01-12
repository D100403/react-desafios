import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './FechaValidaComponent.css';

function FechaValidaComponent() {
  const [fecha, setFecha] = useState('');
  const [esValida, setEsValida] = useState(false);
  const diaRef = useRef(null);
  const mesRef = useRef(null);
  const anioRef = useRef(null);

  function validarFecha() {
    const dia = parseInt(diaRef.current.value);
    const mes = parseInt(mesRef.current.value);
    const anio = parseInt(anioRef.current.value);

    if (dia >= 1 && dia <= 31 && mes >= 1 && mes <= 12 && anio >= 1900 && anio <= 2099) {
      if (mes === 2) {
        if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
          setEsValida(dia <= 29);
        } else {
          setEsValida(dia <= 28);
        }
      } else if ([4, 6, 9, 11].includes(mes)) {
        setEsValida(dia <= 30);
      } else {
        setEsValida(true);
      }
    } else {
      setEsValida(false);
    }
  }

  function handleFechaChange(event) {
    setFecha(event.target.value);
  }

  return (
    <div>
      <div className="mt-5 mb-5">
        <label htmlFor="dia">Día:</label>
        <input type="number" id="dia" ref={diaRef} />
      </div>
      <div className= "mb-5">
        <label htmlFor="mes">Mes:</label>
        <input type="number" id="mes" ref={mesRef} />
      </div>
      <div className=" mb-5">
        <label htmlFor="anio">Año:</label>
        <input type="number" id="anio" ref={anioRef} />
        </div>
      <div className='container '>
        <button type="button" className='btn btn-primary mb-5' onClick={validarFecha}>Validar</button>
        {esValida ? (
          <p className='valido'>La fecha es válida.</p>
        ) : (
          <p className='invalido'>La fecha no es válida.</p>
        )}
      </div>
    </div>
  );
}

export default FechaValidaComponent;