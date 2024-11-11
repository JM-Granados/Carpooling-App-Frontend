/**
 * @fileoverview Este archivo contiene el componente HomeGuest, que es la página principal para usuarios no autenticados.
 * Incluye una sección hero con una imagen de fondo y texto de bienvenida, así como un formulario de búsqueda para viajes.
 * Cada botón lleva solo a Login, Signup o Nosotros
 */

// Importaciones de React y otras librerías.
import * as React from 'react';
import axios from 'axios'; // Librería para realizar solicitudes HTTP, utilizada potencialmente en futuras operaciones de red.

// Importación de componentes y estilos locales.
import NavBar_Client from '../NavBar/NavBar-Client'; // Componente NavBar_Guest para la barra de navegación de usuarios no autenticados.
import { Link } from 'react-router-dom'; // Componente Link para navegación SPA (Single Page Application).
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DateTimePickerTabs } from '@mui/x-date-pickers/DateTimePicker';
import Box from '@mui/material/Box';
import './ActividadReciente.css'; // Estilos específicos para el componente HomeGuest.

// Importación de recursos gráficos.

import FlechaIngresar from '../../../íconos/flecha ingresar.png'; // Icono de flecha para el botón de búsqueda.


/**
 * Función HomeGuest que renderiza la vista principal para usuarios no autenticados.
 * Esta función componente devuelve JSX que incluye una sección hero, campos de entrada para búsqueda de viajes, y una barra de navegación.
 * 
 * @returns {JSX.Element} Elemento JSX que representa la página principal para usuarios no autenticados.
 */


function ActividadCliente() {
    return (
        <div>
            {/* Barra de navegación para usuarios no autenticados */}
            <NavBar_Client />

            <div style={{ fontSize: '30px' }}>Actividad Reciente</div> {/* Texto temporal */}

            {/* Contenedor principal para las cards y la flecha */}
            <div className="container mt-4 d-flex align-items-center justify-content-between">
                {/* Contenedor de las cards */}
                <div className="row flex-grow-1 justify-content-center">
                    {[1, 2, 3].map((_, index) => (
                        <div className="col-12 col-md-4 mb-3" key={index}>
                            <div className="card trip-card p-3">
                            <div style={{ fontSize: '20px' }}>Conductor:</div>
                            <div style={{ fontSize: '15px' }}>*nombre conductor*</div>
                            <div style={{ fontSize: '20px' }}>Vehículo:</div>
                            <div style={{ fontSize: '15px' }}>*datos vehiculo*</div>
                            <div style={{ fontSize: '20px' }}>Inicio:</div>
                            <div style={{ fontSize: '15px' }}>*inicio viaje*</div>
                            <div style={{ fontSize: '20px' }}>Final:</div>
                            <div style={{ fontSize: '15px' }}>*final viaje*</div>
                            <div style={{ fontSize: '20px' }}>Cupos:</div>
                            <div style={{ fontSize: '15px' }}>*cantidad cupos*</div>
                            <div style={{ fontSize: '20px' }}>Fecha:</div>
                            <div style={{ fontSize: '15px' }}>*nformato fecha*</div>{/*creo que esto me toca*/}
                            <div style={{ fontSize: '20px' }}>Precio:</div>
                            <div style={{ fontSize: '15px' }}>*Precio Viaje*</div>
                                <button className="btn btn-danger w-100 mt-2">Ver Viaje</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Imagen de la flecha */}
                <div className="arrow-container ms-3">
                    <button className="arrow-button">
                        <img src={FlechaIngresar} alt="Flecha Ingresar" className="arrow-image" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ActividadCliente;