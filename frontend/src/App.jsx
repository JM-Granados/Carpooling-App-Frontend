// Importaciones de módulos de React y librerías externas.
import { useState } from 'react'; // Importa useState para manejar el estado local dentro de los componentes, aunque no se usa en este fragmento.
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos CSS de Bootstrap para el diseño y la interfaz de usuario.
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa los scripts de Bootstrap para funcionalidades interactivas.
import { StrictMode } from 'react'; // StrictMode es una herramienta para señalar problemas potenciales en una aplicación.
import { IonApp, setupIonicReact, IonRouterOutlet } from '@ionic/react'; // Importa componentes específicos de Ionic para construir aplicaciones híbridas.
import { IonReactRouter } from '@ionic/react-router'; // Importa el componente de enrutamiento de Ionic adaptado para React.
import { Route, Redirect, Switch } from 'react-router-dom'; // Importa componentes de React Router para el manejo de rutas.

// Importación de componentes de vistas o páginas.
import HomeGuest from './Home/HomeGuest'; // Vista inicial para usuarios invitados.
import Login from './Ingreso/Login'; // Vista de inicio de sesión.
import Nosotros from './Nosotros/Nosotros'; // Vista sobre información del sistema.
import PerfilViajero from './Perfil/PerfilViajero'; // Vista del perfil de un viajero.
import RegistrarVehiculo from './Registros/RegistrarVehiculo'; // Vista para el registro de vehículos.
import RegistrarVehiculoLicencia from './Registros/RegistrarVehiculoLicencia'; // Vista para el registro de licencia de vehículos.
import Signup from './Ingreso/Signup'; // Vista para el registro de nuevos usuarios.
import PassRecovery from './Ingreso/PassRecovery'
import HomeClient from './Home/HomeClient';
import HomeDriver from './Home/HomeDriver';
import HomeAdmin from './Home/HomeAdmin';
import ActividadCliente from './Actividad/Actividad/ActividadCliente';
import ActividadConductor from './Actividad/Actividad/ActividadConductor';
import EmergenteCalificarConductor from './Emergentes/EmergenteCalificarConductor';
import EmergenteCalificarViajeros from './Emergentes/EmergenteCalificarViajeros';
import PerfilConductor from './Perfil/PerfilConductor';
import PerfilPrivado from './Perfil/PerfilPrivado';
import MainTest from './MainTest';
import IntegrantesViaje from './Integrantes/IntegrantesViaje';
import HomeAdminxInst from './Home/HomeAdminXinst';
import Instituciones from './Instituciones/Instituciones';
import RegistrarInstitucion from './Registros/RegistrarInstitucion';
import registrarAdminxInst from './Registros/RegistrarAdminxInst';
import IntegrantesxInst from './Estadisticas/IntegrantesxInst';
import EstadisticasxInst from './Estadisticas/EstadisticasXInst';
import EmergenteViajeNoConfirmadoConductor from './Emergentes/EmergenteViajeNoConfirmadoConductor';
import EmergenteViajeNoConfirmadoViajero from './Emergentes/EmergenteViajeNoConfirmadoViajero';
import IndicarParadaRegistro from './Registros/indicarParadaRegistro';

import EmergenteViajeNoConfirmadoViajero from './Emergentes/EmergenteViajeNoConfirmadoViajero'; 

import EmergenteDetalle from './Emergentes/EmergenteDetallesViaje';

// Configura Ionic React para este proyecto.
setupIonicReact();

/**
 * Función App que configura la aplicación con enrutamiento y páginas específicas.
 * Utiliza Ionic y React Router para una experiencia de app híbrida.
 * 
 * @returns {JSX.Element} La aplicación configurada envuelta en componentes de Ionic y React Router.
 */
function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <Switch>
          <Route exact path="/" component={HomeGuest} /> {/* Ruta para la página principal de invitados. */}
          <Route exact path="/Login" component={Login} /> {/* Ruta para la página de inicio de sesión. */}
          <Route exact path="/Nosotros" component={Nosotros} /> {/* Ruta para la página sobre nosotros. */}
          <Route exact path="/PerfilViajero" component={PerfilViajero} /> {/* Ruta para la página del perfil del viajero. */}
          <Route exact path="/RegistrarVehiculo" component={RegistrarVehiculo} /> {/* Ruta para la página de registro de vehículos. */}
          <Route exact path="/RegistrarVehiculoLicencia" component={RegistrarVehiculoLicencia} /> {/* Ruta para la página de registro de licencia de vehículos. */}
          <Route exact path="/Signup" component={Signup} /> {/* Ruta para la página de registro de nuevos usuarios. */}
          <Route exact path="/PassRecovery" component={PassRecovery} /> {/* Ruta para la página de registro de nuevos usuarios. */}
          <Route exact path="/HomeClient" component={HomeClient} /> {/* Ruta para la página principal de invitados. */}
          <Route exact path="/HomeDriver" component={HomeDriver} /> {/* Ruta para la página principal de invitados. */}
          <Route exact path="/HomeAdmin" component={HomeAdmin} /> {/* Ruta para la página principal de invitados. */}
          <Route exact path="/HomeAdminxInst" component={HomeAdminxInst} /> {/* Ruta para la página principal de invitados. */}
          <Route exact path="/ActividadCliente" component={ActividadCliente} /> {/* Ruta para la página principal de invitados. */}
          <Route exact path="/ActividadConductor" component={ActividadConductor} /> {/* Ruta para la página principal de invitados. */}
          <Route exact path ="/Instituciones" component={Instituciones} />
          <Route exact path ="/RegistrarInstitucion" component={RegistrarInstitucion} />
          <Route exact path ="/registrarAdminxInst" component={registrarAdminxInst} />|
          <Route exact path ="/IntegrantesxInst" component={IntegrantesxInst} />
          <Route exact path ="/EstadisticasxInst" component={EstadisticasxInst} />

          <Route exact path="/PerfilConductor" component={PerfilConductor} /> {/* Ruta para la página de perfil conductor. */}
          <Route exact path="/EmergenteCalificarConductor" component={EmergenteCalificarConductor} /> {/* Ruta para la página de perfil privado. */}   
          <Route exact path="/EmergenteCalificarViajeros" component={EmergenteCalificarViajeros} /> {/* Ruta para la página de perfil privado. */}       
          <Route path="/PerfilPrivado" component={PerfilPrivado} /> {/* Ruta para la página de perfil privado. */}
          <Route exact path="/EmergenteViajeNoConfirmadoConductor" component={EmergenteViajeNoConfirmadoConductor} /> {/* Ruta para la página de emergente de viaje no confirmado. */}
          <Route exact path="/IndicarParadaRegistro" component={IndicarParadaRegistro} /> {/* Ruta para la página de emergente de viaje no confirmado. */}
          <Route exact path="/EmergenteViajeNoConfirmadoViajero" component={EmergenteViajeNoConfirmadoViajero} /> {/* Ruta para la página de emergente de viaje no confirmado. */}
          <Route exact path="/IntegrantesViaje" component={IntegrantesViaje} /> {/* Ruta para la página de Integrantes de Viaje. */}
          <Route exact path="/MainTest" component={MainTest} /> {/* Ruta para la página de test. */}
          <Route exact path="/EmergenteDetalles" component={EmergenteDetalle} /> {/* Ruta para la página de perfil privado. */} 
          <Redirect to="/" /> {/* Redirige cualquier ruta no definida a la página principal. */}
        </Switch>
      </IonReactRouter>
    </IonApp>
  );
}

// Exporta el componente App para su uso en index.js u otros componentes de alto nivel.
export default App;

