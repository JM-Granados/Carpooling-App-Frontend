import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';

// Importación de componentes y estilos locales.

import NavBarDriver from '../src/NavBar/NavBar-Driver'; // Componente NavBar_Guest para la barra de navegación de usuarios no autenticados.
import NavBarClient from '../src/NavBar/NavBar-Client'; // Componente NavBar_Guest para la barra de navegación de usuarios no autenticados.

import './PerfilConductor.css'; // Estilos específicos para el componente Perfil Conductor.
import './ActividadReciente.css'; // Estilos específicos para el componente Perfil Conductor.

// Importación de recursos gráficos.
import avatar from '../../íconos/perfil.png'
/**
 * Función HomeGuest que renderiza la vista principal para usuarios no autenticados.
 * Esta función componente devuelve JSX que incluye una sección hero, campos de entrada para búsqueda de viajes, y una barra de navegación.
 * 
 * @returns {JSX.Element} Elemento JSX que representa la página principal para usuarios no autenticados.
 */

function PerfilPrivado() {
    return (
        <div>
            {/* Barra de navegación para usuarios no autenticados */}

            <NavBarClient />
            <div style={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '40px', marginTop: '40px' }}>Perfil</div>

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
                    <div className="col-4 cuadroInfo">
                        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Nombre:</div>
                        <div style={{ fontSize: '15px' }}>*nombre usuario*</div>
                    </div>
                    <div className="col-4 cuadroInfo">
                        <div style={{ fontSize: '20px', fontWeight: 'bold'}}>Institución:</div>
                        <div style={{ fontSize: '15px' }}>*nombre institución*</div>
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

            <div className='ConteinerInfo'>
                {/* Contenedor de las cards */}
                <div className="row-12 containerAdaptable"  style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <div className="col-3 cuadroInfo">
                        <div style={{fontSize: '20px', fontWeight: 'bold' }}>Cumpleaños:</div>
                        <div style={{ fontSize: '15px' }}>*fecha cumpleaños*</div>
                    </div>
                    <div className="col-3 cuadroInfo">
                        <div style={{fontSize: '20px', fontWeight: 'bold' }}>Cédula:</div>
                        <div style={{ fontSize: '15px' }}>*numero cedula*</div>
                    </div>
                    <div className="col-3 cuadroInfo">
                        <div style={{fontSize: '20px', fontWeight: 'bold' }}>Licencia:</div>
                        <div style={{ fontSize: '15px' }}>*numero licencia*</div>
                    </div>
                    <div className="col-3 cuadroInfo">
                        <div style={{fontSize: '20px', fontWeight: 'bold' }}>Genero:</div>
                        <div style={{ fontSize: '15px' }}>*Genero*</div>
                    </div>

                </div>
            </div >
            <div class = "container-button">
            <button className="custom-button">Configuración</button>
            </div>
           
        </div>
    );
}

export default PerfilPrivado;
