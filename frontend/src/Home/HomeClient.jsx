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
import NavBar_Client from '../NavBar/NavBar-Client'; // Componente NavBar_Guest para la barra de navegación de usuarios no autenticados.
import { Link } from 'react-router-dom'; // Componente Link para navegación SPA (Single Page Application).
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DateTimePickerTabs } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import './HomeClient.css'; // Estilos específicos para el componente HomeGuest.

// Importación de recursos gráficos.
import Carpool from '../../../íconos/Carpool.png'; // Icono gráfico representativo del carpooling.
import DesdeHasta from '../../../íconos/Desde-Hasta.png'; // Iconos para los campos de entrada de origen y destino.
import Calendar from '../../../íconos/Calendar.png'; // Icono de calendario para el campo de fecha.
import CarpoolImagen from '../../../íconos/CarpoolImagen.png' // Imagen sobre carpooling. Hay que arreglarla (mal cortado el borde)
import Arrow from '../../../íconos/Arrow.png'
import FlechaIngresar from '../../../íconos/Flecha Ingresar.png'; // Icono de flecha para indicar la dirección de la acción.
import { useState, useEffect } from 'react'; // Importación de useState para manejar el estado local del componente.

/**
 * Función HomeGuest que renderiza la vista principal para usuarios no autenticados.
 * Esta función componente devuelve JSX que incluye una sección hero, campos de entrada para búsqueda de viajes, y una barra de navegación.
 * 
 * @returns {JSX.Element} Elemento JSX que representa la página principal para usuarios no autenticados.
 */

//Backend
const API_URL = import.meta.env.VITE_API_URL; // Para Vite


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

const HomeClient = () => {
    const [startingPoint, setStartingPoint] = useState("");
    const [finishingPoint, setFinishingPoint] = useState("");
    const [departureDate, setDepartureDate] = useState(new Date());
    const [filteredTrips, setFilteredTrips] = useState([]);
    const [isFiltering, setIsFiltering] = useState(false);


    // Estado para manejar mensajes de error.
    const [errorMessage, setErrorMessage] = useState("");
    const [fade, setFade] = useState(false);

    useEffect(() => {
        if (errorMessage && !fade) {
            setTimeout(() => {
                setFade(true); // Inicia la transición de difuminado
                setTimeout(() => {
                    setErrorMessage(""); // Limpia el mensaje después de que la transición termine
                    setFade(false); // Restablece el estado de fade para el próximo error
                }, 1000); // Este timeout debe coincidir con la duración de la transición CSS
            }, 5000); // Tiempo visible antes de comenzar a difuminar
        }
    }, [errorMessage, fade]);

    const handleConductorClick = (trip) => {
        // Guardar los datos del viaje en localStorage
        localStorage.setItem('selectedTrip', JSON.stringify(trip));
    };

    // Declaracion de instituciones
    const [containers, setContainers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContainers = async () => {
            setLoading(true); // Iniciar la carga
            try {
                const response = await axios.get(`${API_URL}/trips`);
                console.log(response)
                setContainers(response.data); // Guarda las instituciones en el estado
            } catch (error) {
                console.error("Error al cargar los viajes:", error);
                setErrorMessage(
                    "Error al cargar los viajes. Inténtalo de nuevo."
                );
            }
            setLoading(false); // Finalizar la carga
        };

        fetchContainers();
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSearchParams(prev => ({ ...prev, [name]: value }));
    };

    const handleDateChange = (newValue) => {
        setSearchParams(prev => ({ ...prev, date: newValue }));
    };

    const searchTrips = async () => {
        setIsFiltering(true); // Activa el modo filtrado
        const params = {};
        if (startingPoint) params.starting_point = startingPoint;
        if (finishingPoint) params.finishing_point = finishingPoint;
        if (departureDate) {
            // Asegura que la fecha esté en formato ISO 8601
            params.departure_date = dayjs(departureDate).toISOString();
        }
        console.log(params);
        try {
            const response = await axios.get(`${API_URL}/trips/search`, { params });
            setFilteredTrips(response.data);
            console.log('Trips found:', response.data);
            if (response.data.length === 0) {
                setErrorMessage("No se encontraron viajes con los criterios especificados.");
            }
        } catch (error) {
            console.error("Error al buscar viajes:", error);
            setErrorMessage("Error al buscar viajes. Inténtalo de nuevo.");
        }
        setIsFiltering(false); // Desactiva el modo filtrado
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        searchTrips();
    };

    if (loading) {
        return (
            <div>
                {/* Barra de navegación para usuarios no autenticados */}
                <NavBar_Client />

                {/* Sección principal con imagen de fondo y mensaje de bienvenida */}
                <div className="hero-image text-center">
                    <div className="content position-absolute mt-5 start-50 translate-middle">
                        <h1 className="Titulo">Conectando compañeros, reduciendo huellas</h1>
                    </div>
                </div>

                {/* Contenedor para los campos de entrada de búsqueda de viajes */}
                <div className="container text-start mt-3">
                    <div className="row mx-1">
                        <div className="col-12 col-md-4">
                            <div className="input-group mb-2 mt-2">
                                <img src={DesdeHasta} alt="DesdeHasta" className="input-group-text" height={40} />
                                <input type="text" className="form-control custom-input-color" placeholder="Desde" />
                                <div className="vr"></div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="input-group mb-2 mt-2">
                                <img src={DesdeHasta} alt="DesdeHasta" className="input-group-text" height={40} />
                                <input type="text" className="form-control custom-input-color" placeholder="Hasta" />
                                <div className="vr"></div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="input-group-date mb-2 mt-2">
                                <ThemeProvider theme={theme}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <img src={Calendar} alt="Calendar" className="input-group-text" height={40} />
                                        <MobileDateTimePicker label="¿Cuándo?" disablePast />
                                    </LocalizationProvider>
                                </ThemeProvider>
                                <div className="btn btn-outline-secondary">Buscar</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="row justify-content-center mt-3">
                        {Array.from({ length: 3 }).map((_, index) => ( // Genera 3 placeholders
                            <div className="col-12 col-md-4 mb-3 mt-3" key={index}>
                                <div className="card trip-card p-3">
                                    <h5 className="card-title placeholder-glow">
                                        <span className="placeholder col-6"></span>
                                    </h5>
                                    <p className="card-text placeholder-glow">
                                        <span className="placeholder col-7"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-6"></span>
                                        <span className="placeholder col-8"></span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* Barra de navegación para usuarios no autenticados */}
            <NavBar_Client />

            {/* Sección principal con imagen de fondo y mensaje de bienvenida */}
            <div className="hero-image text-center">
                <div className="content position-absolute mt-5 start-50 translate-middle">
                    <h1 className="Titulo">Conectando compañeros, reduciendo huellas</h1>
                </div>
            </div>

            {/* Contenedor para los campos de entrada de búsqueda de viajes */}
            <div className="container text-start mt-3">
                <div className="row mx-1">
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-2 mt-2">
                            <img src={DesdeHasta} alt="DesdeHasta" className="input-group-text" height={40} />
                            <input
                                type="text"
                                className="form-control custom-input-color"
                                placeholder="Desde"
                                onChange={(e) => setStartingPoint(e.target.value)}
                            />
                            <div className="vr"></div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="input-group mb-2 mt-2">
                            <img src={DesdeHasta} alt="DesdeHasta" className="input-group-text" height={40} />
                            <input
                                type="text"
                                className="form-control custom-input-color"
                                placeholder="Hasta"
                                onChange={(e) => setFinishingPoint(e.target.value)}
                            />
                            <div className="vr"></div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="input-group-date mb-2 mt-2">
                            <ThemeProvider theme={theme}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <img src={Calendar} alt="Calendar" className="input-group-text" height={40} />
                                    <MobileDateTimePicker
                                        label="¿Cuándo?"
                                        disablePast
                                        onChange={(newValue) => {
                                            setDepartureDate(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </ThemeProvider>
                            <div className="btn btn-outline-secondary" onClick={handleSubmit} type="submit" >Buscar</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contenedor principal para las cards y la flecha */}
            <div className="container mt-4 d-flex align-items-center justify-content-between">
                <div className="row justify-content-center mt-3">
                    {(isFiltering ? filteredTrips : containers).map((trip, index) => (
                        <div className="col-12 col-md-4 mb-3" key={index}>
                            <div className="card trip-card p-3">
                                <div>{trip.name}</div>
                                <Link to="/PerfilConductor" className="btn btn-link text-danger p-0" onClick={() => handleConductorClick(trip)}>
                                    Conductor: <span>{trip.driver.name}</span>
                                </Link>
                                <p>Vehículo: {trip.vehicle.brand} - {trip.vehicle.license_plate}</p>
                                <p>Inicio: {trip.starting_point.name}</p>
                                <p>Final: {trip.finishing_point.name}</p>
                                <p>Cupos: {trip.passenger_count}</p>
                                <p>Fecha: {trip.departure_date}</p>
                                <p>Precio: {trip.fare_per_person}</p>
                                <Link to="/EmergenteViajeNoConfirmadoViajero" className="btn btn-danger w-auto">Ver Viaje</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div >
    );
}

export default HomeClient;


