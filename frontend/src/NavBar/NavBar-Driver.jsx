/*Notas para demás desarrolladores:
    1. Pueden usar exactamente lo mismo que sale aquí pero deben cambiar los items
    2. Dejé "Salir" para que puedan copiar y pegar. Pero se debe de quitar, ya no hay un salir más allá de la vista de invitado
    3. Recuerden también cambiar los permisos, es decir, quién puede ver qué navbar. El más importante es el adminXinst y el cliente
        porque son los únicos que pueden cambiar de vista cliente -> conductor, por lo que algunos item deben cambiar "convertirme en conductor" -> "Publicar viaje"
    4. El logo del usuario lo deben de cambiar por la foto de perfil
*/


/**
 * @fileoverview Este archivo contiene el componente NavBar-Guest, el objeto que será la barra de navegación para los invitados
 * Incluye: Solicitar viaje, Publicar viaje, Nosotros, Ingresar, Registrar y la imagen futura del usuario, la cual también lleva otras
 *      funciones.
 * Además, tiene una función que es únicamente para que sea responsive, eliminando todos los botones y solo dejando la imagen 
 *      de usuario junto con todos los botones dentro del dropdown
 * Notas para demás desarrolladores:
 *      1. Pueden usar exactamente lo mismo que sale aquí pero deben cambiar los items
 *      2. Dejé "Salir" para que puedan copiar y pegar. Pero se debe de quitar, ya no hay un salir más allá de la vista de invitado
 *      3. Recuerden también cambiar los permisos, es decir, quién puede ver qué navbar. El más importante es el adminXinst y el cliente
 *          porque son los únicos que pueden cambiar de vista cliente -> conductor, por lo que algunos item deben cambiar "convertirme en conductor" -> "Publicar viaje"
 *      4. El logo del usuario lo deben de cambiar por la foto de perfil
 */

/**
 * Importaciones de React y otras librerías.
 */
import React, { useState } from 'react';
import { Link, useHistory, useLocation  } from 'react-router-dom';
import axios from 'axios'; // Utilizado para realizar solicitudes HTTP.
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos de Bootstrap para diseño y respuesta.
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Funcionalidades de JavaScript de Bootstrap.
import Icon from '../../../íconos/Logo.png'; // Logo de la empresa usado en la barra de navegación.
import User_icon from '../../../íconos/perfil.png'; // Icono de usuario para opciones del menú.
import flecha from '../../../íconos/flecha ingresar azul.png'; // Icono de flecha usado en botones.
import './NavBar.css'; // Estilos específicos para la barra de navegación.

/**
 * NavComponent define un componente de barra de navegación para usuarios.
 * Incluye manejo de estado para controlar la visibilidad del menú desplegable en dispositivos móviles.
 */
const NavComponent = () => {
    const location = useLocation();
    const history = useHistory();
    // Estado para controlar la visibilidad del menú desplegable.
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Función para alternar la visibilidad del menú desplegable.
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const isActive = (path) => {
        return location.pathname === path;
    }
    
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('user'); // Ajusta esto según lo que necesites limpiar
        // localStorage.clear(); // Descomenta si necesitas limpiar todo el localStorage
        history.push('/'); // Redirige a la página de inicio o login
    };

    const navigateToHome = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            switch (user.user_type.id) {
                case 1: // Cliente
                    history.push('/HomeClient');
                    break;
                case 4: // Conductor
                    history.push('/HomeDriver');
                    break;
                case 2: // Administrador
                    history.push('/HomeAdmin');
                    break;
                case 3: // Admin Institucional
                    history.push('/HomeAdminXinst');
                    break;
                default:
                    history.push('/'); // Página de inicio para invitados o roles no definidos
            }
        } else {
            history.push('/'); // Redirecciona a la página de inicio para invitados si no hay usuario
        }
    };

    /**
     * Renderiza el componente de barra de navegación usando clases de Bootstrap para el diseño.
     * Incluye enlaces de navegación y un menú desplegable para perfiles de usuario.
     */
    return (
        /* Contenedor principal de la barra de navegación utilizando clases de Bootstrap para el diseño. */
        <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
            {/* 'container-fluid' permite que el contenido de la navbar se extienda de borde a borde, ocupando todo el ancho disponible. */}
            <div className="container-fluid">
                {/* Área del logo o nombre de la empresa en la barra de navegación, actúa como enlace a la página de inicio. */}
                <a className="navbar-brand" href="#" onClick={navigateToHome}>
                    {/* Imagen del logo, especificando una clase para estilos adicionales y fijando la altura a 40 píxeles. */}
                    <img src={Icon} alt="Logo" className="navbar-logo" height={40} />
                </a>
                {/* Botón de alternancia para dispositivos con pantallas pequeñas, controla la visibilidad del menú colapsable. */}
                <button className="navbar-toggler"
                    type="button"
                    onClick={toggleDropdown}
                    aria-expanded={isDropdownOpen}
                    aria-label="Toggle navigation">
                    <img src={User_icon} alt="User_icon" className='User_icon' height={30} />
                </button>
                <div className={`dropdown-menu${isDropdownOpen ? ' show' : ''} shadow-lg`} aria-expanded={isDropdownOpen}>
                    <li><Link to="/Login" className="dropdown-item">Ingresar</Link>                            </li>
                    <li>
                        <Link to="/Signup" className="dropdown-item">Registrarme</Link>
                    </li>
                    <li>
                        <Link to="/Login" className="dropdown-item">Solicitar viaje</Link>
                    </li>
                    <li>
                        <Link to="/Login" className="dropdown-item">Publicar viaje</Link>
                    </li>
                    <li>
                        <Link to="/Login" className="dropdown-item">Perfil</Link>
                    </li>
                    <li>
                        <Link to="/Login" className="dropdown-item">Mis vehículos</Link>
                    </li>
                    <li>
                        <Link to="/Login" className="dropdown-item">Actividad</Link>
                    </li>
                    <li>
                        <Link to="/Nosotros" className="dropdown-item">Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/Login" className="dropdown-item">Configuración</Link>
                    </li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li>
                        <Link to="/" className="dropdown-item">Salir</Link>
                    </li>
                </div>

                {/* Div contenedor para los elementos del menú que se mostrarán u ocultarán dependiendo del estado de 'collapse'. */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Lista de enlaces de navegación, 'me-auto' mueve los elementos hacia la izquierda y los margenes aseguran espacio adecuado. */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* Elementos individuales de la lista, representan diferentes páginas o secciones del sitio. */}
                        <li className="nav-item">
                            <Link to="/HomeDriver" className={`nav-link ${isActive('/HomeDriver') ? 'active' : ''}`} aria-current="page">
                                Publicar Viaje
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/RegistrarVehiculo" className={`nav-link ${isActive('/RegistrarVehiculo') ? 'active' : ''}`} aria-current="page">
                                Viaje Actual
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Nosotros" className={`nav-link ${isActive('/Nosotros') ? 'active' : ''}`} aria-current="page">
                                Nosotros
                            </Link>
                        </li>


                    </ul>
                    {/* Lista adicional para botones o acciones específicas como registro o ingreso. */}
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* Botón para 'Ingresar', con estilos Bootstrap para botones. */}
                            <Link to="/HomeClient" className={`btn btn-primary ${isActive('/HomeClient') ? 'active' : ''}`}>
                                Solicitar Viaje
                                {/* Imagen usada como icono dentro del botón, con rotación para efecto visual. */}
                                <img src={flecha} alt="flecha" className="flecha" height={20} style={{ marginLeft: '11px', transform: 'rotate(180deg)' }} />
                            </Link>
                        </li>

                        {/* Menú desplegable para opciones de usuario, mostrando un icono de usuario como indicador. */}
                        <li className="nav-item dropdown shadow-lg">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={User_icon} alt="User_icon" className="User_icon" height={35} />
                            </a>
                            {/* Elementos del menú desplegable para acciones adicionales del usuario. */}
                            <ul className="dropdown-menu shadow-lg">
                                <li><a className="dropdown-item" href="/PerfilPrivado">Perfil</a></li>
                                <li><a className="dropdown-item" href="/Login">Mis vehículos</a></li> {/*Esperar a añadirla*/}
                                <li><a className="dropdown-item" href="/ActividadConductor">Actividad</a></li>

                                <li><a className="dropdown-item" href="/Login">Configuración</a></li> {/*Esperar a añadirla*/}
                                <li><hr className="dropdown-divider"></hr></li>
                                <li>
                                    <a className="dropdown-item" href="/" onClick={handleLogout}>
                                        Salir
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}

// Exporta el componente para que pueda ser usado en otros lugares de la aplicación.
export default NavComponent;
