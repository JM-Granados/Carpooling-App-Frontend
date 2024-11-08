import * as React from 'react';
import axios from 'axios'; // Librería para realizar solicitudes HTTP.

// Importación de componentes y estilos locales.
import NavBarAdmin from '../src/NavBar/NavBarAdmin';
import { Link } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DateTimePickerTabs } from '@mui/x-date-pickers/DateTimePicker';
import Box from '@mui/material/Box';
import './HomeAdmin.css';

// Importación de recursos gráficos.
import Carpool from '../../íconos/Carpool.png';
import DesdeHasta from '../../íconos/Desde-Hasta.png';
import Calendar from '../../íconos/Calendar.png';
import FlechaIngresar from '../../íconos/flecha ingresar.png';
import Arrow from '../../íconos/Arrow.png';
import viajes from '../../íconos/viajes.png';
import viajeros from '../../íconos/viajero.png';

/**
 * Función HomeAdmin que renderiza la vista principal para administradores.
 * Incluye estadísticas y gráficos, adaptados para ser responsive.
 */

// Configuración del tema global utilizando MUI.
const theme = createTheme({
  // ... (El resto de tu configuración del tema permanece igual)
});

function CustomTabs(props) {
  return (
    <React.Fragment>
      <DateTimePickerTabs {...props} />
      <Box sx={{ backgroundColor: '#E53F67', height: 5 }} />
    </React.Fragment>
  );
}

function HomeAdmin() {
  return (
    <div>
      {/* Barra de navegación para administradores */}
      <NavBarAdmin />
      <div style={{ fontSize: '30px' }}>Estadísticas Generales</div>

      {/* Contenedor principal para las tarjetas */}
      <div className="container4">
        {/* Fila de tarjetas principales */}
        <div className="row container3">
          <div className="col-12 col-sm-6 col-md-3 container2">
            <div className="row">
              <div className="col-4">
                <img src={viajes} className="card-img my-2" alt="imageviajes" />
              </div>
              <div className="col-8">
                <div className="row">
                  <div style={{ fontSize: '20px' }}>Viajes</div>
                </div>
                <div className="row">*Estadística de viajes propia*</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 container2">
            <div className="row">
              <div className="col-4">
                <img src={viajeros} className="card-img my-2" alt="imageviajeros" />
              </div>
              <div className="col-8">
                <div className="row">
                  <div style={{ fontSize: '20px' }}>Viajeros</div>
                </div>
                <div className="row">*Estadística de viajeros propia*</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 container2">
            <div className="row">
              <div className="col-4">
                <img src={viajeros} className="card-img my-2" alt="imageconductores" />
              </div>
              <div className="col-8">
                <div className="row">
                  <div style={{ fontSize: '20px' }}>Conductores</div>
                </div>
                <div className="row">*Estadística de conductores propia*</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 container2">
            <div className="row">
              <div className="col-4">
                <img src={viajeros} className="card-img my-2" alt="imageinstituciones" />
              </div>
              <div className="col-8">
                <div className="row">
                  <div style={{ fontSize: '20px' }}>Instituciones</div>
                </div>
                <div className="row">*Estadística de instituciones propia*</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secciones de estadísticas detalladas */}
      <div className="container4">
        <div className="row container3">
          <div className="col-12 col-md-6 container2">
            <h4>Top 5 usuarios con más viajes (conductor)</h4>
            <div className="row">
              <div className="col-12 col-sm-4">*gráfico*</div>
              <div className="col-12 col-sm-8">*estadística*</div>
            </div>
          </div>
          <div className="col-12 col-md-6 container2">
            <h4>Top 5 usuarios con más viajes (viajero)</h4>
            <div className="row">
              <div className="col-12 col-sm-4">*gráfico*</div>
              <div className="col-12 col-sm-8">*estadística*</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container4">
        <div className="row container3">
          <div className="col-12 col-md-6 container2">
            <h4>Top 5 instituciones con más viajes</h4>
            <div className="row">
              <div className="col-12 col-sm-4">*gráfico*</div>
              <div className="col-12 col-sm-8">*estadística*</div>
            </div>
          </div>
          <div className="col-12 col-md-6 container2">
            <h4>Top 5 instituciones con más usuarios</h4>
            <div className="row">
              <div className="col-12 col-sm-4">*gráfico*</div>
              <div className="col-12 col-sm-8">*estadística*</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container4">
        <div className="row container3">
          <div className="col-12 col-sm-6 col-md-3 container2">
            <div className="row">
              <div className="col-4">
                <img src={viajeros} className="card-img my-5" alt="imageviajeros" />
              </div>
              <div className="col-8">
                <div className="row">
                  <div style={{ fontSize: '20px' }}>Promedio de precios</div>
                </div>
                <div className="row">*Estadística de precios propia*</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 container2">
            <div className="row">
              <div className="col-4">
                <img src={viajeros} className="card-img my-5" alt="imageviajeros" />
              </div>
              <div className="col-8">
                <div className="row">
                  <div style={{ fontSize: '20px' }}>Porcentaje de viajes por género</div>
                </div>
                <div className="row">*Estadística de género propia*</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 container2">
            <div className="row">
              <div className="col-4">
                <img src={viajeros} className="card-img my-5" alt="imageconductores" />
              </div>
              <div className="col-8">
                <div className="row">
                  <div style={{ fontSize: '20px' }}>
                    Porcentaje de viajes completados en la última semana, mes y año
                  </div>
                </div>
                <div className="row">*Estadística de viajes completados*</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 container2">
            <div className="row">
              <div className="col-4">
                <img src={viajeros} className="card-img my-5" alt="imageinstituciones" />
              </div>
              <div className="col-8">
                <div className="row">
                  <div style={{ fontSize: '20px' }}>
                    Porcentaje de nuevos usuarios en la última semana, mes y año
                  </div>
                </div>
                <div className="row">*Estadística de nuevos usuarios*</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;

