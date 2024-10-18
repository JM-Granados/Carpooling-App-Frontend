/*Falta:
    1. Arreglar datepicker
    2. Agregar imagen y "Conductor ->" "Viajero ->"

  Notas para demás desarrolladores:
    1. Pueden usar exactamente lo mismo que sale aquí. Deben cambiar lo del form hacia abajo
*/

/**
 * @fileoverview Este archivo contiene el componente HomeGuest, que es la página principal para usuarios no autenticados.
 * Incluye una sección hero con una imagen de fondo y texto de bienvenida, así como un formulario de búsqueda para viajes.
 * Cada botón lleva solo a Login, Signup o Nosotros
 */

// Importaciones de React y otras librerías.
import * as React from 'react';
import axios from 'axios'; // Librería para realizar solicitudes HTTP, utilizada potencialmente en futuras operaciones de red.

// Importación de componentes y estilos locales.
import NavBar_Guest from '../src/NavBar/NavBar-Guest'; // Componente NavBar_Guest para la barra de navegación de usuarios no autenticados.
import { Link } from 'react-router-dom'; // Componente Link para navegación SPA (Single Page Application).
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DateTimePickerTabs } from '@mui/x-date-pickers/DateTimePicker';
import Box from '@mui/material/Box';
import './HomeGuest.css'; // Estilos específicos para el componente HomeGuest.

// Importación de recursos gráficos.
import Carpool from '../../íconos/Carpool.png'; // Icono gráfico representativo del carpooling.
import DesdeHasta from '../../íconos/Desde-Hasta.png'; // Iconos para los campos de entrada de origen y destino.
import Calendar from '../../íconos/Calendar.png'; // Icono de calendario para el campo de fecha.

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

        // Personalización de la apariencia del calendario de fechas.
        MuiDateCalendar: {
            styleOverrides: {
                root: {
                    // Establece el color de fondo y texto del calendario para mejorar la legibilidad y coherencia visual.
                    backgroundColor: '#3B4290',
                    color: '#FDFFFA',
                }
            }
        },

        // Ajustes para los labels de los días de la semana dentro del calendario.
        MuiDayCalendar: {
            styleOverrides: {
                weekDayLabel: {
                    // Asegura que el color de los labels de los días de la semana sea blanco para destacar sobre el fondo oscuro.
                    color: '#FDFFFA !important',
                }
            }
        },

        // Configuración de estilos para los días dentro de los componentes de selección de fecha.
        MuiPickersDay: {
            styleOverrides: {
                dayWithMargin: {
                    // Define el color de texto para los días con margen, asegurando que sean legibles.
                    color: '#FDFFFA'
                },
                root: {
                    // Estilos aplicados a todos los días en el componente picker.
                    '&.Mui-selected': {
                        // Estilo para los días seleccionados, utilizando un color de fondo rojo para resaltar la selección.
                        backgroundColor: '#E53F67',
                        '&:hover': {
                            // Color de fondo cuando se pasa el ratón por encima de un día seleccionado, haciendo que sea más oscuro.
                            backgroundColor: '#A73548',
                        }
                    },
                    '&:not(.Mui-selected)': {
                        // Define el color de borde para días no seleccionados para mantener la coherencia visual.
                        borderColor: '#F6AB0F',
                        '&:hover': {
                            // Establece un color de fondo al pasar el ratón por encima de días no seleccionados, para un feedback visual claro.
                            backgroundColor: '#353B82',
                        }
                    }
                }
            }
        },
        // Configuración para las acciones de los diálogos, usualmente botones en la parte inferior.
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    // Establece un color de fondo consistente para las acciones dentro de los diálogos, coherente con el tema general.
                    backgroundColor: '#3B4290',
                }
            }
        },

        // Personalización para todos los botones dentro de la aplicación.
        MuiButton: {
            styleOverrides: {
                root: {
                    // Color del texto de los botones para garantizar visibilidad.
                    color: '#F6AB0F',
                    '&:hover': {
                        // Define un cambio de color de fondo al pasar el ratón por encima para una retroalimentación visual intuitiva.
                        backgroundColor: '#353B82',
                    }
                }
            }
        },

        // Estilos para el reloj utilizado en los pickers de tiempo.
        MuiTimeClock: {
            styleOverrides: {
                root: {
                    // Asegura que el reloj se muestre con un fondo que se integra con el resto de la interfaz.
                    backgroundColor: '#3B4290',
                }
            }
        },

        // Ajustes para el componente de reloj.
        MuiClock: {
            styleOverrides: {
                squareMask: {
                    // Fondo para la máscara del reloj, garantizando que contraste con los elementos que se sobreponen.
                    backgroundColor: '#FDFFFA'
                }
            }
        },

        // Estilos para los switchers de flecha en los componentes de selección de fechas y tiempo.
        MuiPickersArrowSwitcher: {
            styleOverrides: {
                button: {
                    // Fondo transparente para los botones con flechas, manteniendo la interfaz limpia y minimalista.
                    backgroundColor: 'transparent',
                    '&:hover': {
                        // Cambio de color de fondo al pasar el ratón por encima para mejorar la interactividad.
                        backgroundColor: '#353B82',
                    }
                }
            }
        }
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


function HomeGuest() {
    // Renderiza el componente HomeGuest con su estructura y contenido.
    return (
        <div>
            {/* Barra de navegación para usuarios no autenticados */}
            <NavBar_Guest />

            {/* Sección principal con imagen de fondo y mensaje de bienvenida */}
            <div className="hero-image text-center">
                <div className="content position-absolute mt-5 start-50 translate-middle">
                    <h1 className="Titulo">Conectando compañeros, reduciendo huellas</h1>
                </div>
            </div>

            {/* Contenedor para los campos de entrada de búsqueda de viajes */} 
            <div className="container text-start mt-3">
                <div className="row">
                    {/* Campo de entrada para especificar el origen del viaje */}
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-2 mt-2">
                            <img src={DesdeHasta} alt="DesdeHasta" className="input-group-text" id="basic-addon1" height={40}/>
                            <input type="text" className="form-control custom-input-color" placeholder="Desde" aria-label="Desde" aria-describedby="basic-addon1" />
                            <div class="vr"></div>  {/* Visual divider */}
                        </div>
                    </div>
                    {/* Divisor visual */}
                    <tbody class="table-group-divider"></tbody>

                    {/* Campo de entrada para especificar el destino del viaje */}
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-2 mt-2">
                            <img src={DesdeHasta} alt="DesdeHasta" className="input-group-text" id="basic-addon1" height={40}/>
                            <input type="text" className="form-control custom-input-color" placeholder="Hasta" aria-label="Hasta" aria-describedby="basic-addon1" />
                            <div class="vr"></div>  {/* Visual divider */}
                        </div>
                    </div>
                    {/* Divisor visual */}
                    <tbody class="table-group-divider"></tbody>

                    {/* Campo de entrada para especificar la fecha del viaje */}
                    <div className="col-12 col-md-4">
                        <div className="input-group-date mb-2 mt-2">
                            <ThemeProvider theme={theme}>  {/* Aplica el tema personalizado */}
                                <LocalizationProvider dateAdapter={AdapterDayjs}>  {/* Proporciona la localización para el picker */}
                                    <img src={Calendar} alt="Calendar" className="input-group-text" id="basic-addon1" height={40}/>
                                    <MobileDateTimePicker 
                                        label="¿Cuándo?"
                                        slots={{ tabs: CustomTabs }}
                                        disablePast
                                    />
                                </LocalizationProvider>
                            </ThemeProvider>
                            <Link to="/Login" className="btn btn-outline-secondary" type="button">Buscar</Link>  {/* Botón para iniciar la búsqueda */}
                        </div>
                    </div>
                </div>
            </div>

            <div class="h-100 p-3 bg-primary rounded d-flex justify-content-center align-items-center">
                <div class="text-white text-center fs-1 fw-medium">
                    Inicia sesión para buscar o publicar viajes
                </div>
            </div>
        </div>
    );
}

// Exportación del componente HomeGuest para su uso en otras partes de la aplicación.
export default HomeGuest;

