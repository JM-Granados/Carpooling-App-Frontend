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
import { useState, useEffect } from 'react'; // Importación de useState para manejar el estado local del componente.
// Importación de recursos gráficos.

import FlechaIngresar from '../../../íconos/flecha ingresar.png'; // Icono de flecha para el botón de búsqueda.


/**
 * Función HomeGuest que renderiza la vista principal para usuarios no autenticados.
 * Esta función componente devuelve JSX que incluye una sección hero, campos de entrada para búsqueda de viajes, y una barra de navegación.
 * 
 * @returns {JSX.Element} Elemento JSX que representa la página principal para usuarios no autenticados.
 */

const API_URL = import.meta.env.VITE_API_URL; // Para Vite
const ActividadCliente = () => {
    // Estado para manejar mensajes de error.
    const [errorMessage, setErrorMessage] = useState("");
    const [fade, setFade] = useState(false);

    useEffect(() => {
        if (errorMessage && !fade) {
            setTimeout(() => {
                setFade(true); // Inicia la transición de difuminado
                setTimeout(() => {
                    setErrorMessage(""); // Limpia el mensaje después de que la transición termine
                    setFade(false); // Restablece el estado de fade para el próximo error
                }, 1000); // Este timeout debe coincidir con la duración de la transición CSS
            }, 5000); // Tiempo visible antes de comenzar a difuminar
        }
    }, [errorMessage, fade]);

    // Declaracion de instituciones
    const [containers, setContainers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContainers = async () => {
            setLoading(true); // Iniciar la carga
            try {
                const response = await axios.get(`${API_URL}/trips`);
                console.log(response)
                setContainers(response.data); // Guarda las instituciones en el estado
            } catch (error) {
                console.error("Error al cargar los viajes:", error);
                setErrorMessage(
                    "Error al cargar los viajes. Inténtalo de nuevo."
                );
            }
            setLoading(false); // Finalizar la carga
        };

        fetchContainers();
    }, []);

    if (loading) {
        return (
            <div>
                {/* Barra de navegación para usuarios no autenticados */}
                <NavBar_Client />

               
                <div className="container mt-4">
                    <div className="row justify-content-center mt-3">
                        {Array.from({ length: 3 }).map((_, index) => ( // Genera 3 placeholders
                            <div className="col-12 col-md-4 mb-3 mt-3" key={index}>
                                <div className="card trip-card p-3">
                                    <h5 className="card-title placeholder-glow">
                                        <span className="placeholder col-6"></span>
                                    </h5>
                                    <p className="card-text placeholder-glow">
                                        <span className="placeholder col-7"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-6"></span>
                                        <span className="placeholder col-8"></span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* Barra de navegación para usuarios no autenticados */}
            <NavBar_Client />

            

            {/* Contenedor principal para las cards y la flecha */}
            <div className="container mt-4 d-flex align-items-center justify-content-between">
                {/* Contenedor de las cards */}
                <div className="row justify-content-center mt-3">
                    {containers.map((container, index) => (
                        <div className="col-12 col-md-4 mb-3" key={index}>
                            <div className="card trip-card p-3">
                                {container.name}
                                <Link to="/PerfilConductor" className="btn btn-link text-danger p-0">Conductor: <span>{container.driver.name}</span></Link>
                                <p>Vehículo: {container.vehicle.brand} - {container.vehicle.license_plate}</p>
                                <p>Inicio: {container.starting_point.name}</p>
                                <p>Final: {container.finishing_point.name}</p>
                                <p>Cupos: {container.passenger_count}</p>
                                <p>Fecha: {container.departure_date}</p>
                                <p>Precio: {container.fare_per_person}</p>
                                <Link to="/EmergenteViajeNoConfirmadoViajero" className="btn btn-danger w-auto">Ver Viaje</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ActividadCliente;