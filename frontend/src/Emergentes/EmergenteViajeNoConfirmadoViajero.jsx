import React from 'react';
import './EmergenteViajeNoConfirmadoConductor.css';
import { useHistory } from 'react-router-dom';

const EmergenteViajeNoConfirmadoConductor = ({ onClose }) => {

  const history = useHistory();

  const handleCancel = () => {
      history.push('/HomeClient');
  };

  const handleConfirm = () => {
      history.push('/indicarParadaRegistro');
  };

  const handleRedirect = () => {    
    history.push('/PerfilConductor');
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
          <button className="btn btn-link p-0" onClick={handleRedirect}>Nombre del conductor:</button>
          <p><strong>Vehículo:</strong> <span className="empty">[Vehículo]</span></p>
          <p><strong>Inicio:</strong> <span className="empty">[Inicio]</span></p>
          <p><strong>Final:</strong> <span className="empty">[Final]</span></p>
          <p><strong>Precio:</strong> <span className="empty">[Precio]</span></p>
          
           
          
        </div>
        
        <button className="confirm-button" onClick={handleConfirm}>Confirmar e Indicar Mi parada </button>
      </div>
    </div>
  );
};

export default EmergenteViajeNoConfirmadoConductor;
