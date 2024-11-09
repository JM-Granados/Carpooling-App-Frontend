import React from 'react';
import './EmergenteViajeNoConfirmadoConductor.css';

const EmergenteViajeNoConfirmadoConductor = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>Volver</button>

        <h2>Viaje</h2>

        <div className="profile-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="64px" height="64px">
            <circle cx="12" cy="8" r="4" />
            <path d="M12 14c-4.4 0-8 1.8-8 4v2h16v-2c0-2.2-3.6-4-8-4z" />
          </svg>
        </div>

        <div className="info-container">
          <p><strong>Nombre:</strong> <span className="empty">[Nombre]</span></p>
          <p><strong>Vehículo:</strong> <span className="empty">[Vehículo]</span></p>
          <p><strong>Inicio:</strong> <span className="empty">[Inicio]</span></p>
          <p><strong>Final:</strong> <span className="empty">[Final]</span></p>
          <p><strong>Cuantos:</strong> <span className="empty">[Cantidad]</span></p>
          <p><strong>Cuando:</strong> <span className="empty">[Fecha y Hora]</span></p>
          <p><strong>Precio:</strong> <span className="empty">[Precio]</span></p>
          <p><strong>Ruta:</strong> 
           
          </p>
        </div>

        <button className="confirm-button">Confirmar Viaje</button>
      </div>
    </div>
  );
};

export default EmergenteViajeNoConfirmadoConductor;