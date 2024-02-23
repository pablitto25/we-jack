import React, { useEffect, useState } from 'react';
import fondoDesktop from './assests/Web-en-construcción-jackery-desktop-sin-boton.jpg';
import fondoMobile from './assests/Web-en-construcción-jackery-sin-boton.jpg';
import './Mantenimient.css'
import { Link } from 'react-router-dom';

const Mantenimiento = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='containerHome'>
      <div className='containerMantenimientoBody'>
        {/* Imagen de fondo para dispositivos de escritorio */}
        <img className='fondo' src={fondoDesktop} alt="Fondo de Escritorio"/>

        {/* Imagen de fondo para dispositivos móviles */}
        <img className='fondo-mobile' src={fondoMobile} alt="Fondo Móvil"/>
      </div>
      </div>
  );
};

export default Mantenimiento;
