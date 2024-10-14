// Importa las dependencias necesarias para el componente.
import React from 'react'; // Importa React para poder utilizar JSX y los Hooks de React.
import axios from 'axios'; // Importa axios para hacer solicitudes HTTP si es necesario en el futuro.
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap para estilizar el componente.
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa los scripts de Bootstrap para funcionalidades como el dropdown en navbar.
import Icon from '../../../íconos/Logo.png'; // Importa el icono/logo que se usará en la barra de navegación.
import User_icon from '../../../íconos/perfil.png' // Importa el icono del usuario que se usará en la barra de navegación.
import flecha from '../../../íconos/flecha ingresar azul.png'
import menu from '../../../íconos/menu.png'

// Define el componente funcional NavComponent.
const NavComponent = () => {
    // Renderiza el componente.
    return (
        /* Contenedor principal de la barra de navegación utilizando clases de Bootstrap para el diseño. */
        <nav className="navbar navbar-expand-lg navbar-custom">
            {/* 'container-fluid' permite que el contenido de la navbar se extienda de borde a borde, ocupando todo el ancho disponible. */}
            <div className="container-fluid">
                {/* Área del logo o nombre de la empresa en la barra de navegación, actúa como enlace a la página de inicio. */}
                <a className="navbar-brand" href="#">
                    {/* Imagen del logo, especificando una clase para estilos adicionales y fijando la altura a 40 píxeles. */}
                    <img src={Icon} alt="Logo" className="navbar-logo" height={40}/>
                </a>
                {/* Botón de alternancia para dispositivos con pantallas pequeñas, controla la visibilidad del menú colapsable. */}
                <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse" // Esta propiedad indica que el botón controla un elemento colapsable.
                        data-bs-target="#navbarSupportedContent" // Se refiere al ID del menú que este botón controlará.
                        aria-controls="navbarSupportedContent" // Mejora la accesibilidad indicando qué elemento este botón controla.
                        aria-expanded="false" // Estado inicial del menú, 'false' indica que está colapsado.
                        aria-label="Toggle navigation"> {/* Descripción para lectores de pantalla. */}
                    <img src={menu} alt="menu" className='menu' height={30}/> {/* Icono estilizado del botón, típicamente líneas horizontales. */}
                </button>
    
                {/* Div contenedor para los elementos del menú que se mostrarán u ocultarán dependiendo del estado de 'collapse'. */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Lista de enlaces de navegación, 'me-auto' mueve los elementos hacia la izquierda y los margenes aseguran espacio adecuado. */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* Elementos individuales de la lista, representan diferentes páginas o secciones del sitio. */}
                        <li className="nav-item">
                            {/* Enlace destacado como activo, indicando la página actual. */}
                            <a className="nav-link active" aria-current="page">Solicitar viaje</a>
                        </li>
                        {/* Otro elemento de navegación para 'Publicar viaje'. */}
                        <li className="nav-item">
                            <a className="nav-link" href="#">Publicar viaje</a>
                        </li>
                        {/* Enlace a la página 'Nosotros'. */}
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                    </ul>
                    {/* Lista adicional para botones o acciones específicas como registro o ingreso. */}
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* Botón para 'Ingresar', con estilos Bootstrap para botones. */}
                            <button type="button" className="btn btn-primary">
                                Ingresar
                                {/* Imagen usada como icono dentro del botón, con rotación para efecto visual. */}
                                <img src={flecha} alt="flecha" className="flecha" height={20} style={{marginLeft: '11px', transform: 'rotate(180deg)'}}/>
                            </button>
                        </li>
                        <li className="nav-item">
                            {/* Botón para 'Registrarme', estilizado como un botón con borde pero sin fondo. */}
                            <button type="button" className="btn btn-outline-light">Registrarme</button>
                        </li>
                        {/* Menú desplegable para opciones de usuario, mostrando un icono de usuario como indicador. */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={User_icon} alt="User_icon" className="User_icon" height={40}/>
                            </a>
                            {/* Elementos del menú desplegable para acciones adicionales del usuario. */}
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Perfil</a></li>
                                <li><a className="dropdown-item" href="#">Mis vehículos</a></li>
                                <li><a className="dropdown-item" href="#">Actividad</a></li>
                                <li><a className="dropdown-item" href="#">Ayuda</a></li>
                                <li><a className="dropdown-item" href="#">Configuración</a></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><a className="dropdown-item" href="#">Salir</a></li>
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
