import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CrearTurno } from './components/CrearTurno';
import { ListadoTurnos } from './components/ListadoTurnos';

function App() {
    const [turnos, setTurnos] = useState([]);

    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li><Link to="/">Crear Turno</Link></li>
                        <li><Link to="/listado">Listado de Turnos</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<CrearTurno turnos={turnos} setTurnos={setTurnos} />} />
                    <Route path="/listado" element={<ListadoTurnos turnos={turnos} setTurnos={setTurnos} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
