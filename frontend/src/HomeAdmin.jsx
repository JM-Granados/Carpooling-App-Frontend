import * as React from 'react';
import axios from 'axios'; // Librería para realizar solicitudes HTTP, utilizada potencialmente en futuras operaciones de red.

// Importación de componentes y estilos locales.
import NavBarAdmin from '../src/NavBar/NavBarAdmin'; // Componente NavBar_Guest para la barra de navegación de usuarios no autenticados.
import { Link } from 'react-router-dom'; // Componente Link para navegación SPA (Single Page Application).
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DateTimePickerTabs } from '@mui/x-date-pickers/DateTimePicker';
import Box from '@mui/material/Box';
import './HomeAdmin.css'; // Estilos específicos para el componente HomeAdmin.

// Importación de recursos gráficos.
import Carpool from '../../íconos/Carpool.png'; // Icono gráfico representativo del carpooling.
import DesdeHasta from '../../íconos/Desde-Hasta.png'; // Iconos para los campos de entrada de origen y destino.
import Calendar from '../../íconos/Calendar.png'; // Icono de calendario para el campo de fecha.
import FlechaIngresar from '../../íconos/flecha ingresar.png'; // Icono de flecha para el botón de búsqueda.
import Arrow from '../../íconos/Arrow.png'
import viajes from '../../íconos/viajes.png'
import viajeros from '../../íconos/viajero.png'

/**
 * Función HomeGuest que renderiza la vista principal para usuarios no autenticados.
 * Esta función componente devuelve JSX que incluye una sección hero, campos de entrada para búsqueda de viajes, y una barra de navegación.
 * 
 * @returns {JSX.Element} Elemento JSX que representa la página principal para usuarios no autenticados.
 */


// Configura un tema global utilizando el método `createTheme` de MUI. Este es utilizado para personalizar los colores y formas del dateTimePicker
const theme = createTheme({
    components: {
        // Personaliza los estilos globales para el componente MuiTextField
        MuiTextField: {
            styleOverrides: {
                root: {
                    // Estiliza el input base de todos los TextField
                    '& .MuiInputBase-input': {
                        padding: '9px 19px', // Define el padding interno del input
                        color: '#FDFFFA', // Cambia el color del texto
                    },
                    // Estiliza la etiqueta (label) cuando el TextField está en su estado no contraído (no shrink)
                    '& .MuiInputLabel-outlined': {
                        transform: 'translate(12px, 10px) scale(1)',  // Ajusta esto para centrar cuando no está shrink

                    },
                    // Estiliza la raíz del componente cuando está delineado (outlined)
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '0px',// Elimina el radio del borde para bordes rectos
                        // Define estilos para el borde del input cuando se interactúa con él (hover o focus)
                        '&.MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent', // Borde transparente en estado normal
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline, &:focus-within .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#FDFFFA', // Cambia el color del borde a blanco en hover y focus
                        }
                    },
                    // Oculta la etiqueta cuando el TextField está en su estado contraído (shrink)
                    '& .MuiInputLabel-shrink': {
                        display: 'none',
                    },
                    // Estiliza el texto dentro del input
                    '& input': {
                        color: '#FDFFFA', // Cambia el color del texto
                    },
                    // Estiliza la etiqueta del input
                    '& label': {
                        color: '#FDFFFA', // Cambia el color del label
                        textAlign: 'center', // Centra el texto del label
                        '&.Mui-focused': {
                            color: '#FDFFFA', // Asegura que el color del label sea blanco al enfocar
                        }
                    }
                }
            }
        },
        // Otros componentes personalizados como MuiInputLabel y MuiOutlinedInput.
        MuiInputLabel: {
            styleOverrides: {
                outlined: {
                    // Mantiene el label en su posición original, evita que se mueva hacia el borde
                    transform: 'translate(14px, 20px) scale(1)', // Posición de la etiqueta no shrink.
                    '&.MuiInputLabel-shrink': {
                        transform: 'translate(14px, -6px) scale(0.75)',  // Ajusta la posición de la etiqueta cuando está shrink.
                        backgroundColor: '#3B4290', // Color de fondo para la etiqueta shrink para cubrir el notch.
                        padding: '0 4px' // Agrega padding alrededor de la etiqueta shrink.
                    }
                }
            }
        },
        // Personalización adicional para componentes como MuiOutlinedInput para manejar los estilos de borde.
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    // Oculta el borde cuando el componente no está enfocado ni en hover
                    '&:not(:hover):not(:focus-within) .MuiOutlinedInput-notchedOutline': {
                        border: 'none', // Remueve el borde cuando no está en hover o focus.
                    },
                    // Cuando el componente es enfocado o en hover, muestra el borde
                    '&:hover .MuiOutlinedInput-notchedOutline, &:focus-within .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#FDFFFA', // Define el color del borde en hover o focus.
                    }
                },
                notchedOutline: {
                    marginTop: '5px',
                    '& legend': {
                        display: 'none', // Oculta el elemento legend dentro del borde.
                    }
                }
            }
        },
        // Configuración de estilos específicos para el componente MuiInputBase.
        MuiInputBase: {
            styleOverrides: {
                root: {
                    // Elimina el padding derecho en todos los inputs que utilizan MuiOutlinedInput como base,
                    // haciendo que el texto y otros elementos dentro del input se extiendan completamente a la derecha.
                    '& .MuiOutlinedInput-root': {
                        paddingRight: '0px',
                    }
                }
            }
        },

        // Personalización del MuiPickersToolbar, utilizado en los componentes de selección de fechas y horas.
        MuiPickersToolbar: {
            styleOverrides: {
                root: {
                    // Establece un color de fondo consistente para la barra de herramientas de los selectores de fecha y hora,
                    // mejorando la coherencia visual en toda la aplicación.
                    backgroundColor: '#3B4290',
                }
            }
        },

        // Modificación de los estilos globales para la tipografía en el tema.
        MuiTypography: {
            styleOverrides: {
                root: {
                    // Cambia el color de texto predeterminado para todos los componentes de tipografía a blanco.
                    color: '#FDFFFA',
                },
                overline: {
                    // Fuerza el color del texto para elementos overline a blanco, asegurando visibilidad y coherencia.
                    color: '#FDFFFA !important',
                }
            }
        },

        // Ajustes de estilo para el texto dentro de la barra de herramientas de los pickers.
        MuiPickersToolbarText: {
            styleOverrides: {
                root: {
                    // Define el color de texto a blanco, importante para asegurar la visibilidad contra el fondo oscuro.
                    color: '#FDFFFA !important',
                    // Cambia el color de fondo al pasar el ratón por encima, proporcionando un feedback visual al usuario.
                    '&:hover': {
                        backgroundColor: '#353B82',
                    }
                }
            }
        },

        // Configuración de estilos para los componentes que utilizan MuiButtonBase como base.
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    // Establece un color de fondo uniforme para todos los botones, manteniendo la coherencia visual.
                    backgroundColor: '#3B4290',
                    // Define un efecto de hover, cambiando el color de fondo para mejorar la interactividad.
                    '&:hover': {
                        backgroundColor: '#353B82',
                    }
                }
            }
        },
        // Configuración de estilos para los iconos SVG utilizados en la aplicación.
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    // Cambia el color de relleno de todos los íconos SVG a un tono dorado, proporcionando un toque visual distinto.
                    fill: '#F6AB0F'
                }
            }
        },
    }
});
function CustomTabs(props) {
    return (
        // React.Fragment permite agrupar una lista de hijos sin agregar nodos extra al DOM.
        <React.Fragment>
            {/* DateTimePickerTabs es un componente de MUI que muestra las pestañas para cambiar entre seleccionar fecha y hora. 
                Se pasan todas las props recibidas al componente para mantener su funcionalidad y añadir personalización. */}
            <DateTimePickerTabs {...props} />
            {/* Box es un componente de MUI usado aquí como un contenedor que puede aplicar estilos.
                Se establece un fondo rojo (#E53F67) y una altura fija de 5px, actuando como una barra decorativa debajo de los tabs. */}
            <Box sx={{ backgroundColor: '#E53F67', height: 5 }} />
        </React.Fragment>
    );
}
function HomeAdmin() {
    return (

        <div>
            {/* Barra de navegación para usuarios no autenticados */}
            <NavBarAdmin />
            <div style={{ fontSize: '30px' }}>Estadísticas Generales</div> {/* Texto temporal */}


            {/* Contenedor principal para las cards y la flecha */}

            <div className='container4'>
                {/* Contenedor de las cards */}
                <div className="row-12 container3 ">
                    <div className="col-3 container2">
                        <div className='row'>
                            <div className='col'>
                                <img src={viajes} class="card-img my-5" alt="imageviajes" />
                            </div>
                            <div className='col'>
                                <div className='row'>
                                    <div style={{ fontSize: '20px' }}>Viajes</div>
                                </div>
                                <div className='row'>
                                    *Estadistica de viajes propia*
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 container2">
                        <div className='row'>
                            <div className='col'>
                                <img src={viajeros} class="card-img my-5" alt="imageviajeros" />
                            </div>
                            <div className='col'>
                                <div className='row'>
                                    <div style={{ fontSize: '20px' }}>Viajeros</div>
                                </div>
                                <div className='row'>
                                    *Estadistica de viajes propia*
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 container2">
                        <div className='row'>
                            <div className='col'>
                                <img src={viajeros} class="card-img my-5" alt="imageconductores" />
                            </div>
                            <div className='col'>
                                <div className='row'>
                                    <div style={{ fontSize: '20px' }}>Conductores</div>
                                </div>
                                <div className='row'>
                                    *Estadistica de viajes propia*
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 container2">
                        <div className='row'>
                            <div className='col'>
                                <img src={viajeros} class="card-img my-5" alt="imageinstituciones" />
                            </div>
                            <div className='col'>
                                <div className='row'>
                                    <div style={{ fontSize: '20px' }}>Instituciones</div>
                                </div>
                                <div className='row'>
                                    *Estadistica de viajes propia*
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
            <div className='container4'>
                {/* Contenedor de las cards */}
                <div className="row-12 container3 ">
                    <div className="col-6 container2">
                        <h4>
                            Top 5 usuarios con más viajes (conductor)
                        </h4>
                        <div className='row'>

                            <div className='col-4'>

                                *grafico*
                            </div>
                            <div className='col-8'>

                                *estadistica*
                            </div>
                        </div>

                    </div>
                    <div className="col-6 container2">
                        <h4>
                            Top 5 usuarios con más viajes (viajero)
                        </h4>
                        <div className='row'>

                            <div className='col-4'>

                                *grafico*
                            </div>
                            <div className='col-8'>

                                *estadistica*
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div className='container4'>
                {/* Contenedor de las cards */}
                <div className="row-12 container3 ">
                    <div className="col-6 container2">
                        <h4>
                            Top 5 instituciones con más viajes
                        </h4>
                        <div className='row'>

                            <div className='col-4'>

                                *grafico*
                            </div>
                            <div className='col-8'>

                                *estadistica*
                            </div>
                        </div>

                    </div>
                    <div className="col-6 container2">
                        <h4>
                            Top 5 instituciones con más usuarios
                        </h4>
                        <div className='row'>

                            <div className='col-4'>

                                *grafico*
                            </div>
                            <div className='col-8'>

                                *estadistica*
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className='container4'>
                {/* Contenedor de las cards */}
                <div className="row-12 container3 ">
                    <div className="col-3 container2">
                        <div className='row'>
                            <div className='col'>
                                <img src={viajeros} class="card-img my-5" alt="imageviajeros" />
                            </div>
                            <div className='col'>
                                <div className='row'>
                                    <div style={{ fontSize: '20px' }}>Promedio de precios</div>
                                </div>
                                <div className='row'>
                                    *Estadistica de viajes propia*
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 container2">
                        <div className='row'>
                            <div className='col'>
                                <img src={viajeros} class="card-img my-5" alt="imageviajeros" />
                            </div>
                            <div className='col'>
                                <div className='row'>
                                    <div style={{ fontSize: '20px' }}>Porcentaje de viajes por genero</div>
                                </div>
                                <div className='row'>
                                    *Estadistica de viajes propia*
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 container2">
                        <div className='row'>
                            <div className='col'>
                                <img src={viajeros} class="card-img my-5" alt="imageconductores" />
                            </div>
                            <div className='col'>
                                <div className='row'>
                                    <div style={{ fontSize: '20px' }}>Porcentaje de viajes completados en la última semana, mes y año</div>
                                </div>
                                <div className='row'>
                                    *Estadistica de viajes propia*
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 container2">
                        <div className='row'>
                            <div className='col'>
                                <img src={viajeros} class="card-img my-5" alt="imageinstituciones" />
                            </div>
                            <div className='col'>
                                <div className='row'>
                                    <div style={{ fontSize: '20px' }}>Porcentaje de nuevos usuarios de la última semana, mes y año</div>
                                </div>
                                <div className='row'>
                                    *Estadistica de viajes propia*
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default HomeAdmin;
