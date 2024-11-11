// Importaciones de React y otras librerías.
import { useState, useEffect } from "react"; // useState es importado pero no se usa, considera removerlo si no es necesario.
import axios from 'axios'; // Axios es importado para realizar posibles solicitudes HTTP.
import usePasswordToggle from "../ComponentsLogin/usePasswordToggle";
import { Link, useHistory } from 'react-router-dom'; // Importa Link de react-router-dom para la navegación sin recarga.

// Importación de componentes locales.
import React from 'react';

import './Login.css';

const API_URL = import.meta.env.VITE_API_URL; // Para Vite

import Logo from '../../../íconos/Logo.png'

// Definition of the functional component for the Login page.
function Login() {
    const history = useHistory();
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();

    // Declaración de estados para email y password usando el hook useState de React.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Estado para manejar mensajes de error.
    const [errorMessage, setErrorMessage] = useState('');
    const [fade, setFade] = useState(false);

    useEffect(() => {
        if (errorMessage && !fade) {
            setTimeout(() => {
                setFade(true); // Inicia la transición de difuminado
                setTimeout(() => {
                    setErrorMessage(''); // Limpia el mensaje después de que la transición termine
                    setFade(false); // Restablece el estado de fade para el próximo error
                }, 1000); // Este timeout debe coincidir con la duración de la transición CSS
            }, 5000); // Tiempo visible antes de comenzar a difuminar
        }
    }, [errorMessage, fade]);
    

    const handleSubmit = async (e) => {
        // para el integrador, pelle con este código, creo que debe de servir
        e.preventDefault();  // Previene la recarga de la página al enviar el formulario.
        setErrorMessage('');  // Limpia mensajes de error anteriores.

        const endpoint = `${API_URL}/users/login/`;  // URL del endpoint de login.

        try {
            // Intento de inicio de sesión usando axios para enviar una solicitud POST al servidor.
            const response = await axios.post(endpoint, { email, password });
            console.log(response)
            // Verifica si la respuesta del servidor indica un inicio de sesión exitoso.
            if (response.data) {
                // Guarda los datos del usuario en el almacenamiento local y redirige a la página Home.
                localStorage.setItem('user', JSON.stringify(response.data));
                console.log(response.data)
                switch(response.data.user_type.id) {
                    case 1:
                        history.push('/HomeClient');
                        break;
                    case 2:
                        history.push('/HomeAdmin');
                        break;
                    case 3:
                        history.push('/HomeAdminxInst');
                        break;
                    default:
                        history.push('/HomeDriver');
                }
            } else {
                // Si el mensaje no indica éxito, muestra un mensaje de error.
                setErrorMessage(response.data.message || 'Invalid login attempt.');
            }
        } catch (error) {
            // Captura errores de la solicitud y muestra un mensaje de error.
            if (error.response && error.response.data && error.response.data.detail) {
                // Asegúrate de capturar el mensaje 'detail' si está disponible.
                setErrorMessage(error.response.data.detail);
            } else {
                // Manejo de errores no específicos o problemas de red.
                setErrorMessage('An error occurred. Please try again.');
            }
        }
    }

    return (
        <div className="subfondoLogin container text-center align-center position-absolute top-50 start-50 translate-middle">
            <img src={Logo} alt="DesdeHasta" className="Logo mt-4" height={200} />

            <div className="CampoIN mt-4">
                <h1 className="IN">Iniciar sesión</h1>
            </div>

            <div className="CampoMensajeIn">
                <h1 className="MensajeIN fw-light">Por favor introduce tus credenciales para iniciar sesión.</h1>
            </div>

            <form className="form mx-5" onSubmit={handleSubmit}>
                {/* Div contenedor para el campo de correo electrónico. */}
                <div className="mb-4 mt-5 mx-5">
                    {/* Input para correo electrónico con estilos específicos. */}
                    <input
                        type="email"
                        name="email"
                        className="correoElectronico form-control bg-transparent rounded-2 text-white"
                        id="EmailLogin"
                        aria-describedby="emailHelp"
                        required
                        placeholder="Correo electrónico"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Div contenedor para el campo de contraseña. */}
                <div className="espacioPass mx-5 password-container d-grid">
                    {/* Input para contraseña con estilos específicos. */}
                    <input
                        type={PasswordInputType}
                        name="password"
                        className="space-password form-control bg-transparent rounded-2 text-white"
                        id="PasswordLogin"
                        aria-describedby="passwordHelp"
                        required
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="password-toogle-icon">
                        {ToggleIcon}
                    </span>
                </div>

                <div className="PassRec form-text text-start mt-3 mx-5" id="basic-addon4">
                    <Link to="/PassRecovery" className="PassRec">Olvidé mi contraseña.</Link>
                </div>

                <div class="d-grid gap-2 mt-4 mx-5">
                    <button class="BotonIniciarSesion btn btn-primary border border-0 fw-bold" type="submit">Iniciar sesión</button>
                </div>

                <div className="form-text text-start mt-4 mx-5 d-flex mb-5" id="basic-addon4">
                    <div className="mensaje form-text-info text-start">
                        No tienes cuenta?
                    </div>
                    <div className="Reg text-center mb-4" style={{flexGrow: 0.75}}>
                        <Link to="/Signup" className="Reg d-flex justify-content-center">Registrarse</Link>
                    </div>
                </div>

                {errorMessage && <div className={`alert alert-danger text-white bg-danger mt-5 text-center ${fade ? 'fade-out' : ''}`} >{errorMessage}</div>}

            </form >
        </div >
    );
}


// Exportación del componente HomeGuest para ser usado en otras partes de la aplicación.
export default Login;