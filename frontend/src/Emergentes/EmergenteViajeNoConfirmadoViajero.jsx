import React from 'react';
import './EmergenteViajeNoConfirmadoConductor.css';
import { useHistory } from 'react-router-dom';

const EmergenteViajeNoConfirmadoConductor = ({ onClose }) => {

  const storedTripString = localStorage.getItem('selectedTrip');
  const storedTrip = storedTripString ? JSON.parse(storedTripString) : null;
  console.log(storedTrip);

  const history = useHistory();

  const handleCancel = () => {
      history.push('/HomeClient');
  };

  const handleConfirm = () => {
      history.push('/indicarParadaRegistro');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <button className="btn btn-secondary close-button1" onClick={handleCancel}>Buscar otro viaje</button>
        <h2>¿Desea confirmar este viaje?</h2>

        <div className="profile-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="64px" height="64px">
            <circle cx="12" cy="8" r="4" />
            <path d="M12 14c-4.4 0-8 1.8-8 4v2h16v-2c0-2.2-3.6-4-8-4z" />
          </svg>
        </div>

        <div className="info-container">
          <p>Nombre del conductor: {storedTrip.driver.name}</p>
          <p><strong>Vehículo:</strong> <span className="empty">{storedTrip.vehicle.brand} - {storedTrip.vehicle.license_plate}</span></p>
          <p><strong>Inicio:</strong> <span className="empty">{storedTrip.starting_point.name}</span></p>
          <p><strong>Final:</strong> <span className="empty">{storedTrip.finishing_point.name}</span></p>
          <p><strong>Precio:</strong> <span className="empty">{storedTrip.fare_per_person} colones</span></p>
          <p><strong>Fecha:</strong> <span className="empty">{storedTrip.departure_date} a las {storedTrip.departure_time}</span></p>
        
          
        </div>
        
        <button className="confirm-button" onClick={handleConfirm}>Confirmar e Indicar Mi parada </button>
      </div>
    </div>
  );
};

export default EmergenteViajeNoConfirmadoConductor;
