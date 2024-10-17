// Importaciones de React y otras librerías.
import { useState } from "react"; // useState es importado pero no se usa, considera removerlo si no es necesario.
import axios from 'axios'; // Axios es importado para realizar posibles solicitudes HTTP.

// Importación de componentes locales.
import NavBar_Guest from '../src/NavBar/NavBar-Guest'; // Importa el componente NavBar_Guest, la barra de navegación para usuarios no autenticados.

// Definición del componente funcional HomeGuest.
function Nosotros() {
    // Renderiza el componente HomeGuest.
    return (
        <div>
            <NavBar_Guest /> {/* Inserta la barra de navegación para invitados en la parte superior de la página. */}
            Nosotros {/* Texto temporal*/}
        </div>
    );
}

// Exportación del componente HomeGuest para ser usado en otras partes de la aplicación.
export default Nosotros;