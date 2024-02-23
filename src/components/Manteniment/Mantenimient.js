import React, { useEffect, useState } from 'react';
import fondoDesktop from './assests/Web-en-construcción-jackery-desktop.jpg';
import fondoMobile from './assests/Web-en-construcción-jackery-mobile.jpg';
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
        <Link to='https://jackery.mercadoshops.cl' target='_blank'><img className='fondo' src={fondoDesktop} alt="Fondo de Escritorio" /></Link>

        {/* Imagen de fondo para dispositivos móviles */}
        <Link to='https://jackery.mercadoshops.cl' target='_blank'><img className='fondo-mobile' src={fondoMobile} alt="Fondo Móvil" /></Link>
      </div>
      </div>
  );
};

export default Mantenimiento;
