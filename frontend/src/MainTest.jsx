import React from 'react';
import PerfilDriver from './PerfilConductor';
import avatarP from '../../íconos/perfil.png';

// Simulando datos de una base de datos
const driverProfile = {
    nombre: "Juan Luis Perez",
    viajesRealizados: 55,
    correo: "juan.perez@correo.com",
    telefono: "12345678",
    stars: 3,
    avatar: '../../íconos/perfil.png' //no me quiere funcionar
  };

//Esta funcion es encargada de enviar los datos 
//Es requerible que se haga de esta manera al ser pront la funcion que recibe los datos  
function test() {
  return (
    <div>
      <PerfilDriver 
        nombre= {driverProfile.nombre} 
        viajesRealizados={driverProfile.viajesRealizados} 
        correo={driverProfile.correo}  
        telefono={driverProfile.telefono} 
        stars={driverProfile.stars}  
        avatar={avatarP} 
      />
    </div>
  );
}

export default test;