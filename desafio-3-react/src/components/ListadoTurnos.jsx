import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ListadoTurnos = ({ turnos, setTurnos }) => {
  const [turnosAtendidos, setTurnosAtendidos] = useState([]);

  const handleAtenderTurno = (index) => {
      const newTurnos = [...turnos];
      const turnoAtendido = newTurnos.splice(index, 1)[0];
      turnoAtendido.fecha_atencion = new Date().toISOString();
      setTurnos(newTurnos);
      setTurnosAtendidos((prevTurnosAtendidos) => [...prevTurnosAtendidos, turnoAtendido]);
  };

  const handleFinalizarTurno = (index) => {
      const newTurnosAtendidos = [...turnosAtendidos];
      newTurnosAtendidos.splice(index, 1);
      setTurnosAtendidos(newTurnosAtendidos);
  };

  return (
      <div className='m-5'>
          <h1>Turnos pendientes</h1>
          {turnos.map((turno, index) => (
              <div key={index}>
                  <h2>Turno {index + 1}</h2>
                  <p className='fs-4'>Fecha del turno: {turno.fecha_turno}</p>
                  <p className='fs-4'>Tipo de turno: {turno.tipo_turno}</p>
                  <p className='fs-4'>Motivo: {turno.motivo}</p>
                  {turno.tipo_turno === 'oficial' && (
                      <>
                          <p className='fs-4'>Nombre: {turno.nombre}</p>
                          <p className='fs-4'>Apellido: {turno.apellido}</p>
                      </>
                  )}
                  {turno.tipo_turno === 'online' && (
                      <>
                          <p>Fecha programada: {turno.fecha_programada}</p>
                          <p>Fecha de finalización: {turno.fecha_finalizacion}</p>
                      </>
                  )}
                  <button onClick={() => handleAtenderTurno(index)} className='btn btn-primary mb-5'>Atender turno</button>
              </div>
          ))}
          <h1>Turnos atendidos</h1>
          {turnosAtendidos.map((turno, index) => (
              <div key={index}>
                  <h2>Turno {index + 1}</h2>
                  <p className='fs-4'>Fecha del turno: {turno.fecha_turno}</p>
                  <p className='fs-4'>Tipo de turno: {turno.tipo_turno}</p>
                  <p className='fs-4'>Motivo: {turno.motivo}</p>
                  {turno.tipo_turno === 'oficial' && (
                      <>
                          <p className='fs-4'>Nombre: {turno.nombre}</p>
                          <p className='fs-4'>Apellido: {turno.apellido}</p>
                      </>
                  )}
                  {turno.tipo_turno === 'online' && (
                      <>
                          <p>Fecha programada: {turno.fecha_programada}</p>
                          <p>Fecha de finalización: {turno.fecha_finalizacion}</p>
                      </>
                  )}
                  <button onClick={() => handleFinalizarTurno(index)} className='btn btn-primary mb-5'>Finalizar turno</button>
              </div>
          ))}
      </div>
  );
};