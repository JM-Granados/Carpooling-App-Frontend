import * as React from 'react';
import axios from 'axios'; // Librería para realizar solicitudes HTTP, utilizada potencialmente en futuras operaciones de red.

// Importación de componentes y estilos locales.
import NavBar_Client from '../NavBar/NavBar-Client'; // Componente NavBar_Guest para la barra de navegación de usuarios no autenticados.
import { Link } from 'react-router-dom'; // Componente Link para navegación SPA (Single Page Application).
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DateTimePickerTabs } from '@mui/x-date-pickers/DateTimePicker';
import Box from '@mui/material/Box';
import '../Home/HomeClient.css'; // Estilos específicos para el componente HomeGuest.

// Importación de recursos gráficos.
import Carpool from '../../../íconos/Carpool.png'; // Icono gráfico representativo del carpooling.
import DesdeHasta from '../../../íconos/Desde-Hasta.png'; // Iconos para los campos de entrada de origen y destino.
import Calendar from '../../../íconos/Calendar.png'; // Icono de calendario para el campo de fecha.
import FlechaIngresar from '../../../íconos/flecha ingresar.png'; // Icono de flecha para el botón de búsqueda.
import Arrow from '../../../íconos/Arrow.png'

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



function IntegrantesxInst() {
    return (
        <div>
            {/* Barra de navegación para usuarios no autenticados */}
            <NavBar_Client />
            <div style={{ fontSize: '30px' }}>Integrantes X *institución*</div>
            <div className="d-flex justify-content-center mt-3">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '400px' }} />
                    <button className="btn btn-primary" type="submit" style={{ backgroundColor: '#E53F67', borderColor: '#FDFFFA' }}>Buscar</button>
                </form>
            </div>

            {/* Contenedor principal para las cards y la flecha */}
            <div className="container mt-4 d-flex align-items-center justify-content-between">
                {/* Contenedor de las cards */}
                <div className="row flex-grow-1 justify-content-center">
                    {[1, 2, 3].map((_, index) => (
                        <div className="col-12 col-md-4 mb-3" key={index}>
                            <div className="card trip-card p-3">
                                <h6 className="text-danger">Nombre: <span>*Nombre*</span></h6>
                                <p>Administrador: *Nombre*</p>
                                <p>Correo: *Correo*</p>
                                <p>Genero: *Genero*</p>

                                <button className="btn btn-danger w-100 mt-2">Eliminar</button>
                            </div>
                        </div>
                    ))}
                </div>
                
                

                {/* Imagen de la flecha */}
                <div className="arrow-container ms-3">
                    <button className="arrow-button">
                        <img src={FlechaIngresar} alt="Flecha Ingresar" className="arrow-image" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default IntegrantesxInst;
