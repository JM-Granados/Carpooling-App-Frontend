/*Falta:
    1. Agregar datepicker
    2. Agregar imagen y "Conductor ->" "Viajero ->"

  Notas para demás desarrolladores:
    1. Pueden usar exactamente lo mismo que sale aquí. Deben cambiar lo del form hacia abajo
*/

/**
 * @fileoverview Este archivo contiene el componente HomeGuest, que es la página principal para usuarios no autenticados.
 * Incluye una sección hero con una imagen de fondo y texto de bienvenida, así como un formulario de búsqueda para viajes.
 */

// Importaciones de React y otras librerías.
import { useState } from "react"; // Hook useState de React, útil para manejar estado local.
import axios from 'axios'; // Librería para realizar solicitudes HTTP, utilizada potencialmente en futuras operaciones de red.

// Importación de componentes y estilos locales.
import NavBar_Guest from '../src/NavBar/NavBar-Guest'; // Componente NavBar_Guest para la barra de navegación de usuarios no autenticados.
import { Link } from 'react-router-dom'; // Componente Link para navegación SPA (Single Page Application).
import './HomeGuest.css'; // Estilos específicos para el componente HomeGuest.

// Importación de recursos gráficos.
import Carpool from '../../íconos/Carpool.png'; // Icono gráfico representativo del carpooling.
import DesdeHasta from '../../íconos/Desde-Hasta.png'; // Iconos para los campos de entrada de origen y destino.
import Calendar from '../../íconos/Calendar.png'; // Icono de calendario para el campo de fecha.

/**
 * Función HomeGuest que renderiza la vista principal para usuarios no autenticados.
 * Esta función componente devuelve JSX que incluye una sección hero, campos de entrada para búsqueda de viajes, y una barra de navegación.
 * 
 * @returns {JSX.Element} Elemento JSX que representa la página principal para usuarios no autenticados.
 */
function HomeGuest() {
    // Renderiza el componente HomeGuest con su estructura y contenido.
    return (
        <div>
            {/* Barra de navegación para usuarios no autenticados */}
            <NavBar_Guest />

            {/* Sección principal con imagen de fondo y mensaje de bienvenida */}
            <div className="hero-image text-center">
                <div className="content position-absolute mt-5 start-50 translate-middle">
                    <h1 className="Titulo">Conectando compañeros, reduciendo huellas</h1>
                </div>
            </div>

            {/* Contenedor para los campos de entrada de búsqueda de viajes */}
            <div className="container text-start mt-3">
                <div className="row">
                    {/* Itera a través de campos para origen, destino y fecha del viaje */}
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-2 mt-2">
                            <img src={DesdeHasta} alt="DesdeHasta" className="input-group-text" id="basic-addon1" height={40}/>
                            <input type="text" className="form-control custom-input-color" placeholder="Desde" aria-label="Desde" aria-describedby="basic-addon1" />
                            <div class="vr"></div>
                        </div>
                    </div>
                    <tbody class="table-group-divider"></tbody>
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-2 mt-2">
                            <img src={DesdeHasta} alt="DesdeHasta" className="input-group-text" id="basic-addon1" height={40}/>
                            <input type="text" className="form-control custom-input-color" placeholder="Hasta" aria-label="Hasta" aria-describedby="basic-addon1" />
                            <div class="vr"></div>
                        </div>
                    </div>
                    <tbody class="table-group-divider"></tbody>
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-2 mt-2">
                            <img src={Calendar} alt="Calendar" className="input-group-text" id="basic-addon1" height={40}/>
                            <input type="text" className="form-control custom-input-color" placeholder="¿Cuándo?" aria-label="¿Cuándo?" aria-describedby="basic-addon1" />
                            <Link to="/Login" className="btn btn-outline-secondary" type="button">Buscar viaje</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Exportación del componente HomeGuest para su uso en otras partes de la aplicación.
export default HomeGuest;

