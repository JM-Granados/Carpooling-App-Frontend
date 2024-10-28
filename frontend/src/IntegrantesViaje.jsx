/**
 * @fileoverview Este archivo contiene el componente HomeGuest, que es la página principal para usuarios no autenticados.
 * Incluye una sección hero con una imagen de fondo y texto de bienvenida, así como un formulario de búsqueda para viajes.
 * Cada botón lleva solo a Login, Signup o Nosotros
 */

// Importaciones de React y otras librerías.
import * as React from 'react';
import axios from 'axios'; // Librería para realizar solicitudes HTTP, utilizada potencialmente en futuras operaciones de red.

// Importación de componentes y estilos locales.
import NavBar_Client from '../src/NavBar/NavBar-Client'; // Componente NavBar_Guest para la barra de navegación de usuarios no autenticados.
import './ActividadReciente.css'; // Estilos específicos para el componente HomeGuest.

// Importación de recursos gráficos.
import FlechaIngresar from '../../íconos/flecha ingresar.png'; // Icono de flecha para el botón de búsqueda.


/**
 * Función HomeGuest que renderiza la vista principal para usuarios no autenticados.
 * Esta función componente devuelve JSX que incluye una sección hero, campos de entrada para búsqueda de viajes, y una barra de navegación.
 * 
 * @returns {JSX.Element} Elemento JSX que representa la página principal para usuarios no autenticados.
 */

// Funcion que dibuja las estrellas y las colorea las que sean necesarias
const Rating = ({ rating }) => {
    return (
      <div>
        <div style={{ display: 'flex' }}>
          {/* Generamos 5 estrellas */}
          {[...Array(5)].map((star, index) => {
            return (
              
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={index < rating ? 'gold' : 'gray'}  // Si el índice es menor que la calificación, se pinta de dorado
                width="24px"
                height="24px"
                style={{ marginRight: '5px' }}  // Margen para separar las estrellas
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
    return (
        <div>
            {/* Barra de navegación para usuarios no autenticados */}
            <NavBar_Client />

            <div style={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '40px', marginTop: '40px' }}>Integrantes del Viaje</div> {/* Texto temporal */}

            {/* Contenedor principal para las cards y la flecha */}
            <div className="container mt-4 d-flex align-items-center justify-content-between">
                {/* Contenedor de las cards */}
                <div className="row flex-grow-1 justify-content-center">
                    {usuarios.map((usuario, index) => (
                        <div className="col-12 col-md-4 mb-3" key={index}>
                            <div className="card trip-card p-3">
                            
                            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Nombre:</div>
                            <div style={{ fontSize: '15px' }}>{usuario.nombre}</div>
                            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Telefono:</div>
                            <div style={{ fontSize: '15px' }}>{usuario.telefono}</div>
                            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Correo:</div>
                            <div style={{ fontSize: '15px' }}>{usuario.correo}</div>
                            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Cantidad de viajes:</div>
                            <div style={{ fontSize: '15px' }}>{usuario.viajesRealizados}</div>
                            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Clasificación:</div>
                            <Rating rating={usuario.stars} />
                            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Parada:</div>
                            <div style={{ fontSize: '15px' }}>{usuario.parada}</div>
                                <button className="btn btn-danger w-100 mt-2">Eliminar Viajero</button>
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

export default Integrantes;
