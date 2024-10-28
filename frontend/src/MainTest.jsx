import React from 'react';
import PerfilDriver from './PerfilConductor';
import avatarP from '../../íconos/perfil.png';

import Integrantes from './IntegrantesViaje';
import PerfilDrivers from './EmergenteCalificarConductor';

// Simulando datos de una base de datos
const driverProfile = {
    nombre: "Juan Luis Perez",
    viajesRealizados: 55,
    correo: "juan.perez@correo.com",
    telefono: "12345678",
    stars: 3,
    avatar: '../../íconos/perfil.png' //no me quiere funcionar
  };

const driverProfileI = {
    nombre: "Juan Luis Perez",
    viajesRealizados: 55,
    correo: "juan.perez@correo.com",
    telefono: "12345678",
    stars: 3,
    parada: '../../íconos/perfil.png' //no me quiere funcionar
};


const driverProfiles = [
  {
      nombre: "Juan Luis Perez",
      viajesRealizados: 55,
      correo: "juan.perez@correo.com",
      telefono: "12345678",
      stars: 3,
      parada: '../../íconos/perfil.png'
  },
  {
      nombre: "Maria Gomez",
      viajesRealizados: 32,
      correo: "maria.gomez@correo.com",
      telefono: "87654321",
      stars: 4,
      parada: '../../íconos/perfil2.png'
  },
  {
      nombre: "Carlos Martinez",
      viajesRealizados: 20,
      correo: "carlos.martinez@correo.com",
      telefono: "12348765",
      stars: 5,
      parada: '../../íconos/perfil3.png'
  },
  {
    nombre: "Carlos Martinez",
    viajesRealizados: 20,
    correo: "carlos.martinez@correo.com",
    telefono: "12348765",
    stars: 5,
    parada: '../../íconos/perfil3.png'
}

];


//Esta funcion es encargada de enviar los datos 
//Es requerible que se haga de esta manera al ser pront la funcion que recibe los datos  
function test() {
  return (
    <div>
      <PerfilDrivers 
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
//--------------------------------------------------------------
/*
function test2() {
  return (
    <div>
      <Integrantes usuarios={driverProfiles} />
    </div>
  );
}

export default test2
*/
