// Importaciones de React y otras librerías.
import { useState, useEffect } from "react"; // useState es importado pero no se usa, considera removerlo si no es necesario.
import axios from "axios"; // Axios es importado para realizar posibles solicitudes HTTP.
import { Link, useHistory } from "react-router-dom"; // Importa Link de react-router-dom para la navegación sin recarga.

//Backend
const API_URL = import.meta.env.VITE_API_URL; // Para Vite

// Importación de componentes locales.
import "../Ingreso/Signup.css";

// Importación de componentes locales.
import NavBar_Guest from '../NavBar/NavBar-Guest'; // Importa el componente NavBar_Guest, la barra de navegación para usuarios no autenticados.
import NavBar_Client from '../NavBar/NavBar-Client'; // Importa el componente NavBar_Guest, la barra de navegación para usuarios no autenticados.
import NavBar_Driver from '../NavBar/NavBar-Driver'; // Importa el componente NavBar_Guest, la barra de navegación para usuarios no autenticados.
import NavBar_Admin from '../NavBar/NavBarAdmin'; // Importa el componente NavBar_Guest, la barra de navegación para usuarios no autenticados.
import NavBar_AdminXinst from '../NavBar/NavBarAdminXinst'; // Importa el componente NavBar_Guest, la barra de navegación para usuarios no autenticados.

const navBarComponents = {
    0: NavBar_Guest,
    1: NavBar_Client,
    4: NavBar_Driver,
    2: NavBar_Admin,
    3: NavBar_AdminXinst
};

const getNavBarComponent = (role) => {
    const Component = navBarComponents[role] || NavBar_Guest; // Retorna NavBarGuest como default si el rol no coincide
    return <Component />;
};

// Definición del componente funcional HomeGuest.
function Nosotros() {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));

    // Renderiza el componente HomeGuest.
    return (
        <div className="subfondoSignup text-start align-center mx-5">
            {user ? getNavBarComponent(user.user_type.id) : <NavBar_Guest />} {/* Inserta la barra de navegación para invitados en la parte superior de la página. */}
            <div className="CampoRE">
                <h1 className="RE mt-5">Nosotros y ayuda</h1>
            </div>

            <div class="nosotrosAyudaRow row">
                <div class="nosotrosAyudaCol col-4">
                    <div className="subtituloReg form-text-info text-start">Nosotros</div>
                    <div className="bienvenido mt-2 mb-3 text-justify">
                        {/* Input para correo electrónico con estilos específicos. */}
                        Bienvenidos a <strong>CarTec</strong>, una plataforma innovadora de carpooling desarrollada por estudiantes
                        de la Escuela de Computación del Instituto Tecnológico de Costa Rica. Nuestra aplicación está diseñada para facilitar viajes compartidos
                        seguros y eficientes dentro de las comunidades académicas y más allá.
                    </div>
                    <div class="accordion" id="Nosotros">
                        <div class="NosotrosAcordion accordion-item">
                            <button class="NosotrosAcordion accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Misión" aria-expanded="false" aria-controls="Misión">
                                <strong>Misión</strong>
                            </button>
                            <div id="Misión" class="accordion-collapse collapse collapsed" data-bs-parent="#Nosotros">
                                <div class="accordion-body text-justify ">
                                    Ofrecer una solución de transporte sostenible que mejore la calidad de vida en los campus y ciudades, proporcionando una plataforma
                                    segura y fácil de usar para la gestión de viajes compartidos.
                                </div>
                            </div>
                        </div>
                        <div class="NosotrosAcordion accordion-item">
                            <button class="NosotrosAcordion accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Vision" aria-expanded="false" aria-controls="Vision">
                                <strong>Visión</strong>
                            </button>
                            <div id="Vision" class="accordion-collapse collapse" data-bs-parent="#Nosotros">
                                <div class="accordion-body text-justify">
                                    Ser reconocidos como la principal aplicación de carpooling para instituciones educativas y organizaciones, liderando el camino hacia un
                                    futuro más verde y conectado.
                                </div>
                            </div>
                        </div>
                        <div class="NosotrosAcordion accordion-item">
                            <button class="NosotrosAcordion accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Historia" aria-expanded="false" aria-controls="Historia">
                                <strong> Historia</strong>
                            </button>
                            <div id="Historia" class="accordion-collapse collapse" data-bs-parent="#Nosotros">
                                <div class="accordion-body text-justify">
                                    Este proyecto fue iniciado por un grupo de estudiantes comprometidos con la sostenibilidad y la innovación tecnológica como parte del curso
                                    IC-4810 Administración de Proyectos. Nuestro objetivo era crear una herramienta que no solo facilitara el carpooling dentro de las instituciones
                                    sino que también promoviera la comunidad y la sostenibilidad ambiental.
                                </div>
                            </div>
                        </div>
                        <div class="NosotrosAcordion accordion-item">
                            <button class="NosotrosAcordion accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Equipo" aria-expanded="false" aria-controls="Equipo">
                                <strong>Equipo</strong>
                            </button>
                            <div id="Equipo" class="accordion-collapse collapse" data-bs-parent="#Nosotros">
                                <div class="accordion-body text-justify">
                                    El equipo está compuesto por estudiantes de diversas disciplinas dentro de la Escuela de Computación, guiados por la profesora <strong>Adriana Álvarez Figueroa</strong>.
                                    Cada miembro aporta su pasión y conocimientos técnicos para desarrollar una solución que impacte positivamente a nuestra comunidad.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col mt-2">
                    <div className="subtituloReg form-text-info text-start">Preguntas Frecuentes (FAQ)</div>
                    <div class="accordion mt-2 text-justify" id="Ayuda">
                        <div class="NosotrosAcordion accordion-item">
                            <button class="NosotrosAcordion accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#1" aria-expanded="true" aria-controls="1">
                                <strong>1. ¿Cómo puedo registrarme en la aplicación?</strong>
                            </button>
                            <div id="1" class="accordion-collapse collapse collapsed" data-bs-parent="#Ayuda">
                                <div class="accordion-body text-justify">
                                    Para registrarte, necesitas una identificación de una institución afiliada. Llena el formulario de registro en la interfaz de registro, proporcionando
                                    datos como tu nombre, correo electrónico institucional, y para ser conductor, después de haber iniciado sesión, hay una parte específica para eso llamada <strong>Convertirme en
                                        conductor</strong>.
                                </div>
                            </div>
                        </div>
                        <div class="NosotrosAcordion accordion-item">
                            <button class="NosotrosAcordion accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#2" aria-expanded="false" aria-controls="2">
                                <strong>2. ¿Cómo puedo solicitar un viaje?</strong>
                            </button>
                            <div id="2" class="accordion-collapse collapse" data-bs-parent="#Ayuda">
                                <div class="accordion-body text-justify">
                                    Siendo un usuario pasajero, selecciona la opción <strong>Solicitar viaje</strong>, ingresa tu destino y la hora a la que necesitas llegar. El sistema te mostrará las opciones de
                                    viaje disponibles que coincidan con tus necesidades.
                                </div>
                            </div>
                        </div>
                        <div class="NosotrosAcordion accordion-item">
                            <button class="NosotrosAcordion accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#3" aria-expanded="false" aria-controls="3">
                                <strong>3. ¿Qué debo hacer si quiero ser conductor?</strong>
                            </button>
                            <div id="3" class="accordion-collapse collapse" data-bs-parent="#Ayuda">
                                <div class="accordion-body text-justify">
                                    Si estás interesado en ser conductor, deberás registrar tu vehículo y licencia a través de la interfaz correspondiente en la aplicación, la cuál se encuentra presionando eñ botón <strong>Convertirme en condutor</strong>.
                                    Proporciona los detalles de tu vehículo, horarios disponibles y tarifas.
                                </div>
                            </div>
                        </div>
                        <div class="NosotrosAcordion accordion-item">
                            <button class="NosotrosAcordion accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#4" aria-expanded="false" aria-controls="4">
                                <strong>4. ¿Cómo puedo cancelar un viaje?</strong>
                            </button>
                            <div id="4" class="accordion-collapse collapse" data-bs-parent="#Ayuda">
                                <div class="accordion-body text-justify">
                                    Puedes cancelar un viaje accediendo a los detalles del viaje y seleccionando la opción de cancelación. Ten en cuenta que solo puedes cancelar antes de la hora de inicio del viaje.
                                </div>
                            </div>
                        </div>
                        <div class="NosotrosAcordion accordion-item">
                            <button class="NosotrosAcordion accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#5" aria-expanded="false" aria-controls="5">
                                <strong>5. ¿Cómo se maneja la seguridad en la aplicación?</strong>
                            </button>
                            <div id="5" class="accordion-collapse collapse" data-bs-parent="#Ayuda">
                                <div class="accordion-body text-justify">
                                    El sistema permite que solo miembros de instituciones afiliadas se registren y utilicen la aplicación, lo que ayuda a mantener un entorno de confianza. Además, los usuarios pueden
                                    calificar a otros usuarios luego de tener un viaje con ellos para promover un ambiente seguro y responsable.
                                </div>
                            </div>
                        </div>
                        <div class="NosotrosAcordion accordion-item">
                            <button class="NosotrosAcordion accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#6" aria-expanded="false" aria-controls="6">
                                <strong>6. ¿La aplicación tiene algún costo?</strong>
                            </button>
                            <div id="6" class="accordion-collapse collapse" data-bs-parent="#Ayuda">
                                <div class="accordion-body text-justify">
                                    El uso de la aplicación es gratuito, pero los costos del viaje son establecidos por el conductor y deben ser cubiertos por los pasajeros según lo acordado.
                                </div>
                            </div>
                        </div>
                        <div class="NosotrosAcordion accordion-item mb-5">
                            <button class="NosotrosAcordion accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#7" aria-expanded="false" aria-controls="7">
                                <strong>7. ¿Cómo puedo ver las estadísticas de mis viajes?</strong>
                            </button>
                            <div id="7" class="accordion-collapse collapse" data-bs-parent="#Ayuda">
                                <div class="accordion-body text-justify">
                                    Si eres un usuario administrador, puedes acceder a estadísticas detalladas desde tu interfaz de administrador. Si eres un pasajero o conductor, puedes ver el historial y detalles de tus viajes en tu perfil personal.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto mt-5 justify-content-center">
                <button
                    className="BotonIniciarSesion btn btn-primary border border-0 fw-bold justify-content-center mb-5"
                    type="button"
                    onClick={() => history.goBack()}
                >
                    Regresar
                </button>
            </div>
        </div>
    );
}

// Exportación del componente HomeGuest para ser usado en otras partes de la aplicación.
export default Nosotros;