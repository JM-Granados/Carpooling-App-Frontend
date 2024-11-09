import React, { useState } from 'react';
import './IndicarParadaRegistro.css';

const IndicarParadaRegistro = ({ onClose }) => {
  const [lugar, setLugar] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleConfirm = () => {
    console.log("Lugar:", lugar);
    console.log("Descripción:", descripcion);
    onClose(); // Cierra el modal después de confirmar
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Indicar Parada </h2>

        <p className="reminder">
          Recuerda que el lugar de parada debe estar en la misma ruta que va a tomar el conductor o cercana
        </p>

        <div className="info-container">
          <label className="label">Lugar:</label>
          <input
            type="text"
            value={lugar}
            onChange={(e) => setLugar(e.target.value)}
            className="input"
            placeholder="Indica el lugar de la parada"
          />

          <label className="label">Descripción:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="input"
            placeholder="Agrega una descripción del lugar"
            rows="3"
          />
        </div>

        <button className="confirm-button" onClick={handleConfirm}>
          Confirmar suscripción al viaje
        </button>
        
        <button className="close-button" onClick={onClose}>Volver</button>
      </div>
    </div>
  );
};

export default IndicarParadaRegistro;
