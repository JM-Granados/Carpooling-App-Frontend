import React from 'react';
import './EmergenteDetalles.css';
import { Link, useHistory } from 'react-router-dom'; // Importa useHistory en lugar de useNavigate

const EmergenteDetalleConductor = ({ onClose, onCancel }) => {
    const history = useHistory(); // Inicializa el hook useHistory

    const handleCancel = () => {
        const confirmacion = window.confirm('¿Estás seguro de que deseas cancelar este viaje?');
        if (confirmacion) {
            history.push('/HomeDriver');
          
        } else {
            onCancel(); // Ejecuta la lógica para cancelar el viaje
            onClose(); // Cierra el modal si el usuario cancela
        }
      };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>Volver</button>

        <h2>Detalles del Viaje</h2>

        <div className="profile-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="64px" height="64px">
            <circle cx="12" cy="8" r="4" />
            <path d="M12 14c-4.4 0-8 1.8-8 4v2h16v-2c0-2.2-3.6-4-8-4z" />
          </svg>
        </div>

        <div className="info-container">
          <p><strong>Vehículo:</strong></p>
          <ul className="vehicle-details">
            <p><strong>Marca:</strong> <span className="empty">[Marca]</span></p>
            <p><strong>Modelo:</strong> <span className="empty">[Modelo]</span></p>
            <p><strong>Placa:</strong> <span className="empty">[Placa]</span></p>
          </ul>

          <Link to="/MainTest" className="btn btn-link p-0">Integrantes del viaje</Link>
          <p><strong>Inicio:</strong> <span className="empty">[Inicio]</span></p>
          <p><strong>Final:</strong> <span className="empty">[Final]</span></p>
          <p><strong>Máx. pasajeros:</strong> <span className="empty">[Cantidad]</span></p>
            
          <ul className="vehicle-details">
            <p><strong>Cuando:</strong></p>
            <p><strong>Fecha:</strong> <span className="empty">[Fecha]</span></p>
            <p><strong>Hora:</strong> <span className="empty">[Hora]</span></p>
          
            <p><strong>Precio:</strong> <span className="empty">[Precio]</span></p>
          </ul>
        </div>
        <div className="buttons-container">
          <button className="confirm-button">Confirmar Viaje</button>
          <button className="cancel-button" onClick={handleCancel}>Cancelar Viaje</button>
        </div>
      </div>
    </div>
  );
};

export default EmergenteDetalleConductor;