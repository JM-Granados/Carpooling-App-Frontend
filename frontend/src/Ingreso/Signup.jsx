// Importaciones de React y otras librerías.
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import dayjs from "dayjs";

//Backend
const API_URL = import.meta.env.VITE_API_URL; // Para Vite

// Importación de componentes locales.
import "./Signup.css";

// Definición del componente funcional HomeGuest.
function Signup() {
  const minAgeDate = dayjs().subtract(16, "year"); // Resta 16 años al año actual

  // Declaración de estados para email y password usando el hook useState de React.
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [firstLastName, setFirstLastName] = useState("");
  const [secondLastName, setSecondLastName] = useState("");
  const [institution, setInstitution] = useState("");
  const [id, setId] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");

  // Declaracion de instituciones
  const [institutions, setInstitutions] = useState([]);

  // Estado para manejar mensajes de error.
  const [errorMessage, setErrorMessage] = useState("");
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        const response = await axios.get(`${API_URL}/institutions`);
        setInstitutions(response.data); // Guarda las instituciones en el estado
      } catch (error) {
        console.error("Error al cargar las instituciones:", error);
        setErrorMessage(
          "Error al cargar las instituciones. Inténtalo de nuevo."
        );
      }
    };

    fetchInstitutions();
  }, []);

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

  const theme = createTheme({
    components: {
      // Personaliza los estilos globales para el componente MuiTextField
      MuiTextField: {
        styleOverrides: {
          root: {
            width: "94.2%",
            // Estiliza el input base de todos los TextField
            "& .MuiInputBase-input": {
              padding: "9px 19px", // Define el padding interno del input
              color: "#FDFFFA", // Cambia el color del texto
            },
            // Estiliza la etiqueta (label) cuando el TextField está en su estado no contraído (no shrink)
            "& .MuiInputLabel-outlined": {
              transform: "translate(12px, 15px) scale(1)", // Ajusta esto para centrar cuando no está shrink
            },
            // Estiliza la raíz del componente cuando está delineado (outlined)
            "& .MuiOutlinedInput-root": {
              // Define estilos para el borde del input cuando se interactúa con él (hover o focus)
              "&.MuiOutlinedInput-notchedOutline": {
                borderColor: "#E53F67", // Borde transparente en estado normal
              },
              "&:hover .MuiOutlinedInput-notchedOutline, &:focus-within .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#F6AB0F", // Cambia el color del borde a blanco en hover y focus
                },
            },
            // Oculta la etiqueta cuando el TextField está en su estado contraído (shrink)
            "& .MuiInputLabel-shrink": {
              display: "none",
            },
            // Estiliza el texto dentro del input
            "& input": {
              color: "#FDFFFA", // Cambia el color del texto
              transform: "translate(-5px, 8px) scale(1)",
            },
            // Estiliza la etiqueta del input
            "& label": {
              color: "#FDFFFA", // Cambia el color del label
              textAlign: "center", // Centra el texto del label
              "&.Mui-focused": {
                color: "#FDFFFA", // Asegura que el color del label sea blanco al enfocar
              },
            },
          },
        },
      },
      // Personalización adicional para componentes como MuiOutlinedInput para manejar los estilos de borde.
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderColor: "#E53F67",
            // Cuando el componente es enfocado o en hover, muestra el borde
            "&:hover .MuiOutlinedInput-notchedOutline, &:focus-within .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#E53F67", // Define el color del borde en hover o focus.
              },
          },
          notchedOutline: {
            "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#F6AB0F",
            },
            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#F6AB0F",
              },
            borderColor: "#E53F67",
            borderWidth: "2px",
            borderRadius: "0.375rem",
            height: "3.5rem",
            marginTop: "5px",
            "& legend": {
              display: "none", // Oculta el elemento legend dentro del borde
            },
          },
        },
      },
      // Configuración de estilos específicos para el componente MuiInputBase.
      MuiInputBase: {
        styleOverrides: {
          root: {
            // Elimina el padding derecho en todos los inputs que utilizan MuiOutlinedInput como base,
            // haciendo que el texto y otros elementos dentro del input se extiendan completamente a la derecha.
            "& .MuiOutlinedInput-root": {
              paddingRight: "0px",
            },
          },
        },
      },

      // Personalización del MuiPickersToolbar, utilizado en los componentes de selección de fechas y horas.
      MuiPickersToolbar: {
        styleOverrides: {
          root: {
            // Establece un color de fondo consistente para la barra de herramientas de los selectores de fecha y hora,
            // mejorando la coherencia visual en toda la aplicación.
            backgroundColor: "#3B4290",
          },
        },
      },

      // Modificación de los estilos globales para la tipografía en el tema.
      MuiTypography: {
        styleOverrides: {
          root: {
            // Cambia el color de texto predeterminado para todos los componentes de tipografía a blanco.
            color: "#FDFFFA",
          },
          overline: {
            // Fuerza el color del texto para elementos overline a blanco, asegurando visibilidad y coherencia.
            color: "#FDFFFA !important",
          },
        },
      },

      // Ajustes de estilo para el texto dentro de la barra de herramientas de los pickers.
      MuiPickersToolbarText: {
        styleOverrides: {
          root: {
            // Define el color de texto a blanco, importante para asegurar la visibilidad contra el fondo oscuro.
            color: "#FDFFFA !important",
            // Cambia el color de fondo al pasar el ratón por encima, proporcionando un feedback visual al usuario.
            "&:hover": {
              backgroundColor: "#353B82",
            },
          },
        },
      },

      // Configuración de estilos para los componentes que utilizan MuiButtonBase como base.
      MuiButtonBase: {
        styleOverrides: {
          root: {
            // Define un efecto de hover, cambiando el color de fondo para mejorar la interactividad.
            "&:hover": {
              backgroundColor: "#353B82",
            },
          },
        },
      },
      // Configuración de estilos para los iconos SVG utilizados en la aplicación.
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            // Cambia el color de relleno de todos los íconos SVG a un tono dorado, proporcionando un toque visual distinto.
            fill: "#F6AB0F",
            transform: "translate(0px, 8px) scale(1)",
          },
        },
      },

      // Personalización de la apariencia del calendario de fechas.
      MuiDateCalendar: {
        styleOverrides: {
          root: {
            // Establece el color de fondo y texto del calendario para mejorar la legibilidad y coherencia visual.
            backgroundColor: "#3B4290",
            color: "#FDFFFA",
          },
        },
      },

      // Ajustes para los labels de los días de la semana dentro del calendario.
      MuiDayCalendar: {
        styleOverrides: {
          weekDayLabel: {
            // Asegura que el color de los labels de los días de la semana sea blanco para destacar sobre el fondo oscuro.
            color: "#FDFFFA !important",
          },
        },
      },

      // Configuración de estilos para los días dentro de los componentes de selección de fecha.
      MuiPickersDay: {
        styleOverrides: {
          dayWithMargin: {
            // Define el color de texto para los días con margen, asegurando que sean legibles.
            color: "#FDFFFA",
          },
          root: {
            // Estilos aplicados a todos los días en el componente picker.
            "&.Mui-selected": {
              // Estilo para los días seleccionados, utilizando un color de fondo rojo para resaltar la selección.
              backgroundColor: "#E53F67",
              "&:hover": {
                // Color de fondo cuando se pasa el ratón por encima de un día seleccionado, haciendo que sea más oscuro.
                backgroundColor: "#A73548",
              },
            },
            "&:not(.Mui-selected)": {
              // Define el color de borde para días no seleccionados para mantener la coherencia visual.
              borderColor: "#F6AB0F",
              "&:hover": {
                // Establece un color de fondo al pasar el ratón por encima de días no seleccionados, para un feedback visual claro.
                backgroundColor: "#353B82",
              },
            },
          },
        },
      },
      // Configuración para las acciones de los diálogos, usualmente botones en la parte inferior.
      MuiDialogActions: {
        styleOverrides: {
          root: {
            // Establece un color de fondo consistente para las acciones dentro de los diálogos, coherente con el tema general.
            backgroundColor: "#3B4290",
          },
        },
      },

      // Personalización para todos los botones dentro de la aplicación.
      MuiButton: {
        styleOverrides: {
          root: {
            // Color del texto de los botones para garantizar visibilidad.
            color: "#F6AB0F",
            "&:hover": {
              // Define un cambio de color de fondo al pasar el ratón por encima para una retroalimentación visual intuitiva.
              backgroundColor: "#353B82",
            },
          },
        },
      },

      // Estilos para el reloj utilizado en los pickers de tiempo.
      MuiTimeClock: {
        styleOverrides: {
          root: {
            // Asegura que el reloj se muestre con un fondo que se integra con el resto de la interfaz.
            backgroundColor: "#3B4290",
          },
        },
      },

      // Ajustes para el componente de reloj.
      MuiClock: {
        styleOverrides: {
          squareMask: {
            // Fondo para la máscara del reloj, garantizando que contraste con los elementos que se sobreponen.
            backgroundColor: "#FDFFFA",
          },
        },
      },

      // Estilos para los switchers de flecha en los componentes de selección de fechas y tiempo.
      MuiPickersArrowSwitcher: {
        styleOverrides: {
          button: {
            // Fondo transparente para los botones con flechas, manteniendo la interfaz limpia y minimalista.
            backgroundColor: "transparent",
            "&:hover": {
              // Cambio de color de fondo al pasar el ratón por encima para mejorar la interactividad.
              backgroundColor: "#353B82",
            },
          },
        },
      },
    },
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
        <Box sx={{ backgroundColor: "#E53F67", height: 5 }} />
      </React.Fragment>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Limpia el mensaje de error

    const endpoint = `${API_URL}/users/register`; // URL del endpoint de signup.

    // Crear el objeto formData con todos los campos requeridos
    const formData = {
      first_name: firstName,
      first_surname: firstLastName,
      identification: id,
      second_name: secondName,
      second_surname: secondLastName,
      institutional_email: email,
      phone_number: number,
      birth_date: birthdate,
      gender_id: parseInt(gender), // Asegúrate de enviar el ID numérico del género
      user_type_id: 1, // Coloca aquí el ID predeterminado para el tipo de usuario
      institution_id: parseInt(institution), // Asegúrate de enviar el ID numérico de la institución
      date_registered: new Date().toISOString().split("T")[0], // Fecha de registro actual
      rating: 0, // Valor inicial de rating
      total_ratings: 0, // Total inicial de ratings
    };

    try {
      const response = await axios.post(endpoint, formData, {
        headers: {
          "Content-Type": "application/json", // Esta línea es importante para el correcto manejo del FormData
        },
      });
      console.log(response.data)
      // Verifica si la respuesta del servidor indica un registro exitoso.
      if (response.data.message === "User registered successfully") {
        //navigate('/Login'); // O redirige a la pantalla de login, según lo que necesites.
      } else {
        // Si el mensaje no indica éxito, muestra un mensaje de error.
        setErrorMessage(response.data.message);
      }
      
    } catch (error) {
      // Captura errores de la solicitud y muestra un mensaje de error.
      setErrorMessage(error.response?.data.error || "An error occurred.");
    }
  };

  // Renderiza el componente HomeGuest.
  return (
    <div className="subfondoSignup text-start align-center mx-5">
      <div className="CampoRE">
        <h1 className="RE">Registro</h1>
      </div>

      <div className="CampoMensajeRe">
        <h1 className="MensajeRe fw-light mt-3">
          Por favor introduce tus datos para registrate. Recuerda que debes
          fromar parte de una institución válida para poder registrarte
          exitosamente.
        </h1>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div class="regRow row">
          <div class="col">
            <div className="subtituloReg form-text-info text-start">Nombre</div>
            <div className="mt-2">
              {/* Input para correo electrónico con estilos específicos. */}
              <input
                type="text"
                name="fNameRegistro"
                className="campos form-control bg-transparent rounded-2 text-white"
                aria-describedby="nameHelp"
                required
                placeholder="Primer nombre"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div class="col mt-2">
            <div className="mt-5">
              {/* Input para correo electrónico con estilos específicos. */}
              <input
                type="text"
                name="sNameRegistro"
                className="campos form-control bg-transparent rounded-2 text-white"
                id="Registro"
                aria-describedby="nameHelp"
                required
                placeholder="Segundo nombre"
                onChange={(e) => setSecondName(e.target.value)}
              />
            </div>
          </div>
          <div class="col">
            <div className="subtituloReg form-text-info text-start ms-4">
              Institución
            </div>
            <div className="mt-2 ms-4">
              {/* Input para correo electrónico con estilos específicos. */}
              <select
                className="camposSelect form-select"
                name="institucionRegistro"
                aria-describedby="institucionHelp"
                required
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
              >
                <option className="opcionesInst" disabled value="">
                  Selecciona tu institución
                </option>
                {institutions.map((institution) => (
                  <option className="opcionesInst" key={institution.id} value={institution.id}>
                    {institution.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <div className="mt-4">
              {/* Input para correo electrónico con estilos específicos. */}
              <input
                type="text"
                name="fLNameRegistro"
                className="campos form-control bg-transparent rounded-2 text-white"
                aria-describedby="fLNameHelp"
                required
                placeholder="Primer apellido"
                onChange={(e) => setFirstLastName(e.target.value)}
              />
            </div>
          </div>
          <div class="col-4">
            <div className="mt-4">
              {/* Input para correo electrónico con estilos específicos. */}
              <input
                type="text"
                name="sLNameRegistro"
                className="campos form-control bg-transparent rounded-2 text-white"
                id="EmailLogin"
                aria-describedby="sLNameHelp"
                required
                placeholder="Segundo apellido"
                onChange={(e) => setSecondLastName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div className="mt-4 mb-3">
              {/* Input para correo electrónico con estilos específicos. */}
              <input
                type="number"
                name="idRegistro"
                className="campos form-control bg-transparent rounded-2 text-white"
                aria-describedby="idHelp"
                required
                placeholder="Cédula"
                onChange={(e) => setId(e.target.value)}
                min="0"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div className="subtituloReg form-text-info text-start">
              Contacto
            </div>
            <div className="mt-2">
              {/* Input para correo electrónico con estilos específicos. */}
              <input
                type="number"
                name="celularRegistro"
                className="campos form-control bg-transparent rounded-2 text-white"
                aria-describedby="celularHelp"
                required
                placeholder="Número de teléfono"
                onChange={(e) => setNumber(e.target.value)}
                min="0"
              />
            </div>
          </div>
          <div class="col mt-2">
            <div className="mt-5">
              {/* Input para correo electrónico con estilos específicos. */}
              <input
                type="email"
                name="emailRegistro"
                className="campos form-control bg-transparent rounded-2 text-white"
                id="EmailLogin"
                aria-describedby="emailHelp"
                required
                placeholder="Correo electrónico"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div class="col">
            <div className="subtituloReg form-text-info text-start ms-4">
              Fecha de nacimiento
            </div>
            <div className="mt-2">
              <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    className="campos ms-4"
                    label="Selecciona tu fecha de nacimiento"
                    onChange={setBirthdate} // Actualiza el estado cuando cambia la fecha
                    renderInput={(params) => <TextField {...params} required />}
                    required
                    maxDate={minAgeDate}
                  />
                </LocalizationProvider>
              </ThemeProvider>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div className="subtituloReg form-text-info text-start mt-3">
              Género
            </div>
            <div className="mt-2">
              {/* Input para correo electrónico con estilos específicos. */}
              <select
                className="camposSelect form-select"
                name="gender"
                aria-describedby="genderHelp"
                required
                onChange={(e) => setGender(e.target.value)}
              >
                <option className="opcionesInst" selected disabled value="">
                  Selecciona tu género
                </option>
                <option className="opcionesInst" value="1">Hombre</option>
                <option className="opcionesInst" value="2">Mujer</option>
                <option className="opcionesInst" value="3">Otro...</option>
              </select>
            </div>
          </div>
        </div>

        <div class="d-grid gap-2 mt-5 justify-content-center">
          <button
            class="BotonIniciarSesion btn btn-primary border border-0 fw-bold"
            type="submit"
          >
            Registrarse
          </button>
          <div
            className="form-text text-start mt-2 d-flex mb-3"
            id="basic-addon4"
          >
            <div className="mensaje form-text-info text-start">
              No tienes cuenta?
            </div>
            <div className="Reg text-center" style={{ flexGrow: 0.78 }}>
              <Link to="/Login" className="Reg d-flex justify-content-center">
                Iniciar sesión
              </Link>
            </div>
          </div>
        </div>

        {errorMessage && (
          <div
            className={`alert alert-danger text-white bg-danger text-center ${
              fade ? "fade-out" : ""
            }`}
          >
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
}

// Exportación del componente HomeGuest para ser usado en otras partes de la aplicación.
export default Signup;
