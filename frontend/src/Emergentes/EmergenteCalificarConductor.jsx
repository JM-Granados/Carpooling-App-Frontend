import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
 
// Importación de componentes y estilos locales.
import NavBarDriver from '../NavBar/NavBar-Driver'; // Componente NavBar_Guest para la barra de navegación de usuarios no autenticados.
import './EmergenteCalificarConductor.css'; // Estilos específicos para el componente Perfil Conductor.

// Importación de recursos gráficos.

/**
 * Función HomeGuest que renderiza la vista principal para usuarios no autenticados.
 * Esta función componente devuelve JSX que incluye una sección hero, campos de entrada para búsqueda de viajes, y una barra de navegación.
 * 
 * @returns {JSX.Element} Elemento JSX que representa la página principal para usuarios no autenticados.
 */


const Rating = ({ rating = 0, onRatingChange, onClose }) => {
    const [hoveredStars, setHoveredStars] = useState(0); // Estado para hover
    const [selectedRating, setSelectedRating] = useState(rating); // Estado para la calificación seleccionada
  
    const handleMouseEnter = (index) => setHoveredStars(index); // Actualiza el hover
    const handleMouseLeave = () => setHoveredStars(0); // Restaura cuando el mouse sale
    const handleClick = (index) => {
      setSelectedRating(index); // Guarda la calificación seleccionada
      if (onRatingChange) onRatingChange(index); // Notifica el cambio de calificación
      if (onClose) onClose(); // Cierra el modal al seleccionar
    };
  
    return (
      <div>
        <div style={{ display: 'flex' }}>
          {[...Array(5)].map((_, index) => {
            const starIndex = index + 1; // Para comenzar en 1 en lugar de 0
            return (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={
                  starIndex <= (hoveredStars || selectedRating) ? 'gold' : 'gray'
                } // Cambia el color según el hover o la selección
                width="24px"
                height="24px"
                style={{ marginRight: '5px', cursor: 'pointer' }}
                onMouseEnter={() => handleMouseEnter(starIndex)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(starIndex)}
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            );
          })}
        </div>
        <p>Calificación: {selectedRating} de 5</p>
      </div>
    );
};
  



function EmergenteCalificarConductor({ nombre, viajesRealizados, correo, telefono, stars, avatar }) {
  
  //Esto permite que la pantalla emergente se muestre y que cuando se califique se cierre la app
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calificacion, setCalificacion] = useState(0); // Estado para la calificación seleccionada

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleRatingChange = (newRating) => {
    setCalificacion(newRating); // Actualiza la calificación seleccionada
  };

  return (
    <div>
      <NavBarDriver />
      <button onClick={openModal} style={{ margin: '20px', padding: '10px' }}>
        Calificar Conductor
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>Omitir</button>

            <h2>Resumen Viaje</h2>

            <img src={avatar} alt="Foto del conductor" className="profile-image" />

            <div className="info-container">
              <p><strong>Nombre:</strong> {nombre}</p>
              <p><strong>Viajes Realizados:</strong> {viajesRealizados}</p>
              <p><strong>Correo:</strong> {correo}</p>
              <p><strong>Teléfono:</strong> {telefono}</p>
            </div>

            <div className="rating-container">
              <h4>Calificar</h4>
              <Rating 
                rating={calificacion} 
                onRatingChange={handleRatingChange} 
                onClose={closeModal} // Pasamos la función para cerrar el modal
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default EmergenteCalificarConductor;