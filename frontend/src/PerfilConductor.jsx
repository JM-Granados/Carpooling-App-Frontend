import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';

// Importación de componentes y estilos locales.
import NavBarDriver from '../src/NavBar/NavBar-Driver'; // Componente NavBar_Guest para la barra de navegación de usuarios no autenticados.
import './PerfilConductor.css'; // Estilos específicos para el componente Perfil Conductor.

// Importación de recursos gráficos.
import avatar from '../../íconos/perfil.png'
/**
 * Función HomeGuest que renderiza la vista principal para usuarios no autenticados.
 * Esta función componente devuelve JSX que incluye una sección hero, campos de entrada para búsqueda de viajes, y una barra de navegación.
 * 
 * @returns {JSX.Element} Elemento JSX que representa la página principal para usuarios no autenticados.
 */


// Componente de calificación
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
        <p>Calificación: {rating} de 5</p>
      </div>
    );
  };



function perfilDriver() {
    return (
        <div>
            {/* Barra de navegación para usuarios no autenticados */}
            <NavBarDriver />
            <div style={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '40px', marginTop: '40px' }}>Perfil Conductor</div>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto', padding: '20px' }}>
                <img 
                    src={avatar} 
                    alt="Foto del Conductor" 
                    style={{ 
                        width: '150px',  /* Ancho fijo de la imagen */
                        height: '150px', /* Alto fijo de la imagen */
                        objectFit: 'cover', /* Ajusta la imagen dentro del contenedor sin deformarse */
                        borderRadius: '50%', /* Si quieres que la imagen sea redonda, puedes usar esto */
                    }} 
                />
            </div>



            <div className='ConteinerInfo'>
                {/* Contenedor de las cards */}
                <div className="row-12 containerAdaptable" style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <div className="col-4 cuadroInfo" >
                        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Nombre:</div>
                        <div style={{ fontSize: '15px' }}>*nombre usuario*</div>
                    </div>
                    <div className="col-4 cuadroInfo">
                        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Viajes Realizados:</div>
                        <div style={{ fontSize: '15px' }}>*55*</div>
                    </div>
                    <div className="col-4 cuadroInfo">
                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Contacto:</div>
                        <div className='row'>
                            <div className='col-3'>
                                Correo:
                            </div>
                            <div className='col-5'>
                                *Información del correo*
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-3'>
                                Telefono:
                            </div>
                            <div className='col-5'>
                                *número telefono*
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='ConteinerInfo '>
                {/* Contenedor de las cards */}
                <div className="row-12 containerAdaptable"  style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <div className="col-4 cuadroInfo" >
                        <h4>Calificaciones</h4>
                        
                        <Rating rating={5} /> {/*se envia a rating un int (1-5) de estrellas que tiene el conductor*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default perfilDriver;