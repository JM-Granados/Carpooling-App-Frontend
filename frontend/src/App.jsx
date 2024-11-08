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
import HomeClient from './HomeClient';
import HomeDriver from './HomeDriver';
import HomeAdmin from './HomeAdmin';
import ActividadCliente from './ActividadCliente';
import ActividadConductor from './ActividadConductor';
import EmergenteCalificarConductor from './EmergenteCalificarConductor';
import EmergenteCalificarViajeros from './EmergenteCalificarViajeros';
import PerfilConductor from './PerfilConductor';
import PerfilPrivado from './PerfilPrivado';
import MainTest from './MainTest';
import IntegrantesViaje from './IntegrantesViaje';

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
          <Route path="/Login" component={Login} /> {/* Ruta para la página de inicio de sesión. */}
          <Route path="/Nosotros" component={Nosotros} /> {/* Ruta para la página sobre nosotros. */}
          <Route path="/PerfilViajero" component={PerfilViajero} /> {/* Ruta para la página del perfil del viajero. */}
          <Route path="/RegistrarVehiculo" component={RegistrarVehiculo} /> {/* Ruta para la página de registro de vehículos. */}
          <Route path="/RegistrarVehiculoLicencia" component={RegistrarVehiculoLicencia} /> {/* Ruta para la página de registro de licencia de vehículos. */}
          <Route path="/Signup" component={Signup} /> {/* Ruta para la página de registro de nuevos usuarios. */}
          <Route exact path="/HomeClient" component={HomeClient} /> {/* Ruta para la página principal de invitados. */}
          <Route exact path="/HomeDriver" component={HomeDriver} /> {/* Ruta para la página principal de invitados. */}
          <Route exact path="/HomeAdmin" component={HomeAdmin} /> {/* Ruta para la página principal de invitados. */}
          <Route exact path="/ActividadCliente" component={ActividadCliente} /> {/* Ruta para la página principal de invitados. */}
          <Route exact path="/ActividadConductor" component={ActividadConductor} /> {/* Ruta para la página principal de invitados. */}

          <Route exact path="/PerfilConductor" component={PerfilConductor} /> {/* Ruta para la página de perfil conductor. */}
          <Route exact path="/EmergenteCalificarConductor" component={EmergenteCalificarConductor} /> {/* Ruta para la página de perfil privado. */}   
          <Route exact path="/EmergenteCalificarViajeros" component={EmergenteCalificarViajeros} /> {/* Ruta para la página de perfil privado. */}       
          <Route path="/PerfilPrivado" component={PerfilPrivado} /> {/* Ruta para la página de perfil privado. */}

          <Route exact path="/IntegrantesViaje" component={IntegrantesViaje} /> {/* Ruta para la página de Integrantes de Viaje. */}
          <Route exact path="/MainTest" component={MainTest} /> {/* Ruta para la página de test. */}
          <Redirect to="/" /> {/* Redirige cualquier ruta no definida a la página principal. */}
        </Switch>
      </IonReactRouter>
    </IonApp>
  );
}

// Exporta el componente App para su uso en index.js u otros componentes de alto nivel.
export default App;

