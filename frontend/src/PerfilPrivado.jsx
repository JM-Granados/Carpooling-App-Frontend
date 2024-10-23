import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';

// Importación de componentes y estilos locales.
import NavBarDriver from '../src/NavBar/NavBar-Driver'; // Componente NavBar_Guest para la barra de navegación de usuarios no autenticados.
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
            <NavBarDriver />
            <div style={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '40px', marginTop: '40px' }}>Perfil</div>

            <img src={avatar} alt="Foto del Conductor" style={{ width: '150px', height: '150px', marginTop: '10px', marginLeft: '550px' }} />

            {/* Contenedor principal para las cards y la flecha */}

            <div className='holaxd'>
                {/* Contenedor de las cards */}
                <div className="row-12 containerhola ">
                    <div className="col-4 hola">
                        <div style={{ fontSize: '20px' }}>Nombre:</div>
                        <div style={{ fontSize: '15px' }}>*nombre usuario*</div>
                    </div>
                    <div className="col-4 hola">
                        <div style={{ fontSize: '20px' }}>Institución:</div>
                        <div style={{ fontSize: '15px' }}>*nombre institución*</div>
                    </div>
                    <div className="col-4 hola">
                        <div style={{ fontSize: '20px' }}>Contacto:</div>
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

            <div className='holaxd'>
                {/* Contenedor de las cards */}
                <div className="row-12 containerhola ">
                    <div className="col-3 hola">
                        <div style={{ fontSize: '20px' }}>Cumpleaños:</div>
                        <div style={{ fontSize: '15px' }}>*fecha cumpleaños*</div>
                    </div>
                    <div className="col-3 hola">
                        <div style={{ fontSize: '20px' }}>Cédula:</div>
                        <div style={{ fontSize: '15px' }}>*numero cedula*</div>
                    </div>
                    <div className="col-3 hola">
                        <div style={{ fontSize: '20px' }}>Licencia:</div>
                        <div style={{ fontSize: '15px' }}>*numero licencia*</div>
                    </div>
                    <div className="col-3 hola">
                        <div style={{ fontSize: '20px' }}>Genero:</div>
                        <div style={{ fontSize: '15px' }}>*Genero*</div>
                    </div>

                </div>
            </div>
            <button className="btn btn-danger w-100 mt-2">Configuración</button>
        </div>
    );
}

export default PerfilPrivado;
