// Importaciones de React y otras librerías.
import { useState, useEffect } from "react"; // useState es importado pero no se usa, considera removerlo si no es necesario.
import axios from 'axios'; // Axios es importado para realizar posibles solicitudes HTTP.
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom para la navegación sin recarga.
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dayjs from 'dayjs';

// Importación de componentes locales.
import '../Ingreso/Signup.css';

// Definición del componente funcional HomeGuest.
function RegistrarVehiculo() {
    const minAgeDate = dayjs().subtract(17, 'year'); // Resta 16 años al año actual

    // Declaración de estados para email y password usando el hook useState de React.
    const [Placa, setPlaca] = useState("");
    const [year, setYear] = useState("");
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [capacidad, setCapacidad] = useState("");
    const [descrip, setDescrip] = useState("");
    const [licencia, setLicencia] = useState("");

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

    const theme = createTheme({
        components: {
            // Personaliza los estilos globales para el componente MuiTextField
            MuiTextField: {
                styleOverrides: {
                    root: {
                        width: '94.2%',
                        // Estiliza el input base de todos los TextField
                        '& .MuiInputBase-input': {
                            padding: '9px 19px', // Define el padding interno del input
                            color: '#FDFFFA', // Cambia el color del texto
                        },
                        // Estiliza la etiqueta (label) cuando el TextField está en su estado no contraído (no shrink)
                        '& .MuiInputLabel-outlined': {
                            transform: 'translate(12px, 15px) scale(1)',  // Ajusta esto para centrar cuando no está shrink

                        },
                        // Estiliza la raíz del componente cuando está delineado (outlined)
                        '& .MuiOutlinedInput-root': {
                            // Define estilos para el borde del input cuando se interactúa con él (hover o focus)
                            '&.MuiOutlinedInput-notchedOutline': {
                                borderColor: '#E53F67', // Borde transparente en estado normal
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline, &:focus-within .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#F6AB0F', // Cambia el color del borde a blanco en hover y focus
                            }
                        },
                        // Oculta la etiqueta cuando el TextField está en su estado contraído (shrink)
                        '& .MuiInputLabel-shrink': {
                            display: 'none',
                        },
                        // Estiliza el texto dentro del input
                        '& input': {
                            color: '#FDFFFA', // Cambia el color del texto
                            transform: 'translate(-5px, 8px) scale(1)',
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
            // Personalización adicional para componentes como MuiOutlinedInput para manejar los estilos de borde.
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        borderColor: '#E53F67',
                        // Cuando el componente es enfocado o en hover, muestra el borde
                        '&:hover .MuiOutlinedInput-notchedOutline, &:focus-within .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#E53F67', // Define el color del borde en hover o focus.
                        }
                    },
                    notchedOutline: {
                        '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#F6AB0F',
                        },
                        '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#F6AB0F',
                        },
                        borderColor: '#E53F67',
                        borderWidth: '2px',
                        borderRadius: '0.375rem',
                        height: '3.5rem',
                        marginTop: '5px',
                        '& legend': {
                            display: 'none', // Oculta el elemento legend dentro del borde
                        },
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
                        fill: '#F6AB0F',
                        transform: 'translate(0px, 8px) scale(1)',
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Limpia el mensaje de error

        const endpoint = ``;  // URL del endpoint de signup.

        try {
            const response = await axios.post(endpoint, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'  // Esta línea es importante para el correcto manejo del FormData
                }
            });

            // Verifica si la respuesta del servidor indica un registro exitoso.
            if (response.data.message === "User registered successfully") {
                //navigate('/Login'); // O redirige a la pantalla de login, según lo que necesites.
            } else {
                // Si el mensaje no indica éxito, muestra un mensaje de error.
                setErrorMessage(response.data.message);
            }
        } catch (error) {
            // Captura errores de la solicitud y muestra un mensaje de error.
            setErrorMessage(error.response?.data.error || 'An error occurred.');
        }
    }

    // Renderiza el componente HomeGuest.
    return (
        <div className="subfondoSignup text-start align-center mx-5">
            <div className="CampoRE">
                <h1 className="RE">Registro de vehículo</h1>
            </div>

            <div className="CampoMensajeRe">
                <h1 className="MensajeRe fw-light mt-3">Por favor introduce los datos de tu vehículo y licencia.</h1>
            </div>

            <form className="form" onSubmit={handleSubmit}>
                <div class="row">
                    <div class="col">
                        <div className="subtituloReg form-text-info text-start">
                            Vehículo
                        </div>
                        <div className="mt-2">
                            {/* Input para correo electrónico con estilos específicos. */}
                            <input
                                type="number"
                                name="placaRegistro"
                                className="campos form-control bg-transparent rounded-2 text-white"
                                aria-describedby="PlacaHelp"
                                required
                                placeholder="Placa"
                                onChange={(e) => setPlaca(e.target.value)}
                                min={0}
                            />
                        </div>
                    </div>
                    <div class="col mt-2">
                        <div className="mt-5">
                            {/* Input para correo electrónico con estilos específicos. */}
                            <ThemeProvider theme={theme}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        className="camposYear"
                                        views={['year']}
                                        label="Selecciona un año"
                                        required
                                        onChange={setYear}
                                        renderInput={(params) => <TextField {...params} />}
                                        maxDate={dayjs().add(1, 'year')}  // Configura el máximo como el próximo año
                                    />
                                </LocalizationProvider>
                            </ThemeProvider>
                        </div>
                    </div>
                    <div class="col mt-5">
                        <div className="mt-2">
                            {/* Input para correo electrónico con estilos específicos. */}
                            <select
                                className="camposSelect form-select"
                                name="marcaRegistro"
                                aria-describedby="marcaHelp"
                                required
                                onChange={(e) => setMarca(e.target.value)}
                            >
                                <option className="opcionesInst" selected disabled value="">Selecciona tu marca de vehículo</option>
                                <option className="opcionesInst">Toyota</option>
                                <option className="opcionesInst">Nissan</option>
                                <option className="opcionesInst">Tesla</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <div className="mt-4">
                            {/* Input para correo electrónico con estilos específicos. */}
                            <select
                                className="camposSelect form-select"
                                name="modeloRegistro"
                                aria-describedby="modeloHelp"
                                required
                                onChange={(e) => setModelo(e.target.value)}
                            >
                                <option className="opcionesInst" selected disabled value="">Selecciona tu modelo de vehículo</option>
                                <option className="opcionesInst">Toyota</option>
                                <option className="opcionesInst">Nissan</option>
                                <option className="opcionesInst">Tesla</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-8">
                        <div className="mt-4">
                            {/* Input para correo electrónico con estilos específicos. */}
                            <textarea
                                class="campos form-control "
                                rows="3"
                                required
                                placeholder="Descripción"
                                onChange={(e) => setDescrip(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div class="col-4">
                        <div className="mt-4">
                            {/* Input para correo electrónico con estilos específicos. */}
                            <input
                                type="number"
                                name="CapacidadRegistro"
                                className="campos form-control bg-transparent rounded-2 text-white"
                                aria-describedby="CapacidadHelp"
                                required
                                placeholder="Capacidad"
                                onChange={(e) => setCapacidad(e.target.value)}
                                min={2}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div class="col-4">
                        <div className="subtituloReg form-text-info text-start mt-4">
                            Licencia
                        </div>
                        <div className="mt-2 mb-5">
                            {/* Input para correo electrónico con estilos específicos. */}
                            <ThemeProvider theme={theme}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        className="campos"
                                        label="Selecciona tu fecha de nacimiento"
                                        onChange={setLicencia} // Actualiza el estado cuando cambia la fecha
                                        renderInput={(params) => <TextField {...params} required />}
                                        required
                                        maxDate={minAgeDate}
                                    />
                                </LocalizationProvider>
                            </ThemeProvider>
                        </div>
                    </div>
                </div>

                <div class="d-grid gap-2 col-6 mx-auto mt-5">
                    <button class="BotonIniciarSesion btn btn-primary border border-0 fw-bold" type="button">Registrar</button>
                </div>

                {errorMessage && <div className={`alert alert-danger text-white bg-danger mt-5 text-center ${fade ? 'fade-out' : ''}`} >{errorMessage}</div>}
            </form>
        </div>
    );
}

// Exportación del componente HomeGuest para ser usado en otras partes de la aplicación.
export default RegistrarVehiculo;