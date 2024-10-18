// Importaciones de React y otras librerías.
import { useState } from "react"; // useState es importado pero no se usa, considera removerlo si no es necesario.
import axios from 'axios'; // Axios es importado para realizar posibles solicitudes HTTP.

// Importación de componentes locales.
import React from 'react';
import dayjs from 'dayjs';
import NavBar_Guest from '../src/NavBar/NavBar-Guest'; // Import NavBar_Guest for guest navigation at the top of the page.
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';

// Definition of the functional component for the Login page.
function Login() {
    const today = dayjs();
    const yesterday = today.subtract(1, 'day');

    return (
        <div>
            <NavBar_Guest /> {/* Insert the guest navigation bar at the top of the page. */}
            <div>Login</div> {/* Temporary text */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    label="Select Date and Time"
                    value={yesterday}
                    onChange={() => {}}
                    renderInput={(params) => <TextField {...params} />}
                    disablePast
                    views={['year', 'month', 'day', 'hours', 'minutes']}
                />
            </LocalizationProvider>
        </div>
    );
}


// Exportación del componente HomeGuest para ser usado en otras partes de la aplicación.
export default Login;