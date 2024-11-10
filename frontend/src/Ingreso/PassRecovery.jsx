// Importaciones de React y otras librerías.
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom para la navegación sin recarga.

// Importación de componentes locales.
import React from 'react';

import './Login.css';

import Logo from '../../../íconos/Logo.png'

// Definition of the functional component for the Login page.
function Login() {

    return (
        <div className="subfondoLogin container text-center align-center position-absolute top-50 start-50 translate-middle">
            <img src={Logo} alt="DesdeHasta" className="Logo mt-4" height={200} />

            <div className="CampoIN mt-4">
                <h1 className="IN">Iniciar sesión</h1>
            </div>

            <div className="CampoMensajeIn">
                <h1 className="MensajeIN fw-light mt-5">
                    Te recordamos que el proceso de recuperación de contraseña se hace directamente con la institución a 
                    la que perteneces.
                </h1>
            </div>

            <form className="form mx-5">
                <div class="d-grid gap-2 mt-5 mx-5 mb-5">
                    <Link to="/Login" class="BotonIniciarSesion btn btn-primary border border-0 fw-bold" type="button">Regresar</Link>
                </div>
            </form >
        </div >
    );
}


// Exportación del componente HomeGuest para ser usado en otras partes de la aplicación.
export default Login;