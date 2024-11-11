import React, { useState } from 'react';
import './IndicarParadaRegistro.css';
import { useHistory } from 'react-router-dom';

const IndicarParadaRegistro = ({ onClose }) => {
  const [lugar, setLugar] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const history = useHistory();

  const handleConfirm = () => {
    console.log("Lugar:", lugar);
    console.log("Descripción:", descripcion);
    onClose(); // Cierra el modal después de confirmar
  };

  const handleCancel = () => {
    history.push('/EmergenteViajeNoConfirmadoViajero');
};

const handleRedirect = () => {
    history.push('/HomeClient');
};

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Indicar Parada </h2>

        <p className="reminder">
          Recuerda que el lugar de parada debe estar en la misma ruta que va a tomar el conductor o cercana
        </p>

        <div className="info-container text-white">
          <label className="label">Lugar:</label>
          <input
            type="text"
            value={lugar}
            onChange={(e) => setLugar(e.target.value)}
            className="input text-white"
            placeholder="Indica el lugar de la parada"
          />

          <label className="label">Descripción:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="input text-white"
            placeholder="Agrega una descripción del lugar"
            rows="3"
          />
        </div>

        <button className="confirm-button" onClick={handleRedirect}>
          Confirmar suscripción al viaje
        </button>
        
        
        <button className="close-button" onClick={handleCancel}>Volver</button>
      </div>
    </div>
  );
};

export default IndicarParadaRegistro;
