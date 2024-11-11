/**
 * @fileoverview Este archivo contiene el componente HomeGuest, que es la página principal para usuarios no autenticados.
 * Incluye una sección hero con una imagen de fondo y texto de bienvenida, así como un formulario de búsqueda para viajes.
 * Cada botón lleva solo a Login, Signup o Nosotros
 */

import * as React from 'react';
import { useState } from 'react'; // Importamos useState para manejar el estado de la paginación
import axios from 'axios'; // Librería para solicitudes HTTP

import NavBar_Client from '../NavBar/NavBar-Client'; // Componente NavBar_Client
import '../Actividad/ActividadReciente.css'; // Estilos específicos para el componente
import FlechaIngresar from '../../../íconos/flecha ingresar.png'; // Icono de flecha
import FlechaIngresar_atras from '../../../íconos/flecha ingresar_atras.png'; // Icono de flecha

const Rating = ({ rating }) => {
    return (
        <div>
            <div style={{ display: 'flex' }}>
                {[...Array(5)].map((star, index) => {
                    return (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={index < rating ? 'gold' : 'gray'}
                            width="24px"
                            height="24px"
                            style={{ marginRight: '5px' }}
                        >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    );
                })}
            </div>
        </div>
    );
};

function Integrantes({ usuarios }) {
    const [paginaActual, setPaginaActual] = useState(0); // Estado para manejar la página actual
    const integrantesPorPagina = 3; // Definimos cuántos integrantes mostrar por página
    const totalPaginas = Math.ceil(usuarios.length / integrantesPorPagina); // Calculamos el número total de páginas

    // Función para obtener los integrantes de la página actual
    const obtenerIntegrantesActuales = () => {
        const inicio = paginaActual * integrantesPorPagina;
        const fin = inicio + integrantesPorPagina;
        return usuarios.slice(inicio, fin);
    };

    // Función para avanzar a la siguiente página
    const avanzarPagina = () => {
        if (paginaActual < totalPaginas - 1) {
            setPaginaActual(paginaActual + 1);
        }
    };

    // Función para retroceder a la página anterior
    const retrocederPagina = () => {
        if (paginaActual > 0) {
            setPaginaActual(paginaActual - 1);
        }
    };

    // Función para eliminar un pasajero con confirmación
    const eliminarPasajero = (nombre) => {
        const confirmacion = window.confirm(`¿Estás seguro de que quieres eliminar al viajero ${nombre}?`);
        if (confirmacion) {
            // Aquí puedes agregar la lógica para eliminar el pasajero, por ejemplo:
            // hacer una solicitud HTTP para eliminar el pasajero del servidor o actualizar el estado local
            console.log(`Viajero ${nombre} eliminado.`);
        }
    };

    return (
        <div>
            <NavBar_Client />

            <div style={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '40px', marginTop: '40px' }}>Integrantes del Viaje</div>

            <div className="container mt-4 d-flex align-items-center justify-content-between">

                {/* Botón de flecha para retroceder */}
                <div className="arrow-container me-3">
                    <button className="arrow-button" onClick={retrocederPagina}>
                        <img src={FlechaIngresar_atras} alt="Flecha Ingresar_atras" className="arrow-image" />
                    </button>
                </div>

                {/* Contenedor de las cards */}
                <div className="row flex-grow-1 justify-content-center">
                    {obtenerIntegrantesActuales().map((usuario, index) => (
                        <div className="col-12 col-md-4 mb-3" key={index}>
                            <div className="card trip-card p-3">
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Nombre:</div>
                                <div style={{ fontSize: '15px' }}>{usuario.nombre}</div>
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Teléfono:</div>
                                <div style={{ fontSize: '15px' }}>{usuario.telefono}</div>
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Correo:</div>
                                <div style={{ fontSize: '15px' }}>{usuario.correo}</div>
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Cantidad de viajes:</div>
                                <div style={{ fontSize: '15px' }}>{usuario.viajesRealizados}</div>
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Clasificación:</div>
                                <Rating rating={usuario.stars} />
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Parada:</div>
                                <div style={{ fontSize: '15px' }}>Inicio: {usuario.inicio}</div>
                                <div style={{ fontSize: '15px' }}>Fin: {usuario.fin}</div>
                                
                                {/* Botón de eliminar con confirmación */}
                                <button className="btn btn-danger w-100 mt-2" onClick={() => eliminarPasajero(usuario.nombre)}>
                                    Eliminar Viajero
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botón de flecha para avanzar */}
                <div className="arrow-container ms-3">
                    <button className="arrow-button" onClick={avanzarPagina}>
                        <img src={FlechaIngresar} alt="Flecha Ingresar" className="arrow-image" />
                    </button>
                </div>

            </div>
        </div>
    );
}



export default Integrantes;




