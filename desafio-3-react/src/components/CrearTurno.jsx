import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CrearTurno = ({ setTurnos }) => {
  const [turno, setTurno] = useState({
      fecha_turno: '',
      tipo_turno: '',
      motivo: '',
      nombre: '',
      apellido: '',
      fecha_programada: '',
      fecha_finalizacion: ''
  });

  const handleChange = (e) => {
      setTurno({ ...turno, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      setTurnos(prevTurnos => [...prevTurnos, turno]);
  };

    return (
        <form onSubmit={handleSubmit} className='m-5'>
            <label className='mb-5 fs-4'>
                Fecha del turno:
                <input type="date" name="fecha_turno" onChange={handleChange} required/>
            </label>
            <br/>
            <label className='mb-5 fs-4'>
                Tipo de turno:
                <select name="tipo_turno" onChange={handleChange} required>
                    <option value="">Selecciona un tipo de turno</option>
                    <option value="caja">Caja</option>
                    <option value="oficial">Oficial</option>
                    <option value="online">Online</option>
                </select>
            </label>
            <br/>
            <label className='mb-5 fs-4'>
                Motivo:
                <textarea name="motivo" onChange={handleChange} required/>
            </label>
            <br/>
            {turno.tipo_turno === 'oficial' && (
                <>
                    <label className='mb-5fs-4'>
                        Nombre:
                        <input type="text" name="nombre" onChange={handleChange} required/>
                    </label>
                    <br/>
                    <label className='fs-4'>
                        Apellido:
                        <input type="text" name="apellido" onChange={handleChange} required/>
                    </label>
                </>
            )}
            <br/>
            {turno.tipo_turno === 'online' && (
                <>
                    <label className='mb-5 fs-4'>
                        Fecha y hora programada del turno:
                        <input type="datetime-local" name="fecha_programada" onChange={handleChange} required/>
                    </label>
                    <br/>
                    <label className='fs-4'>
                        Fecha y hora de finalización:
                        <input type="datetime-local" name="fecha_finalizacion" onChange={handleChange} required/>
                    </label>
                </>
            )}
            <br/>
            <button type="submit" className='btn btn-primary ms-5'>Crear turno</button>
        </form>
    );
};