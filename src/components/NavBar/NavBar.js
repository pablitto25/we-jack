// NavBar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './assest/Logo jackery.svg';
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

import './NavBar.css';

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowsDimension] = useState({
    with: window.innerWidth,
    height: window.innerHeight,
  });

  const detecDimension = () => {
    setWindowsDimension({
      with: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detecDimension);
    windowDimension.with > 800 && setNavBarOpen(false);
    return () => {
      window.removeEventListener('resize', detecDimension);
    };
  }, [windowDimension]);

  const links = [
    { id: 1, link: "HOME" },
    { id: 2, link: "PRODUCTOS" },
    { id: 3, link: "BLOG" },
    { id: 4, link: "CONTACTO" },
  ];

  return (
    <div className={!navBarOpen ? 'navBar' : 'navOpen'}>
      {!navBarOpen && <img src={Logo} alt="Logo" className='logo' />}
      {!navBarOpen && windowDimension.with < 800 ? (
        <IoMenu size={50} onClick={() => setNavBarOpen(!navBarOpen)} />
      ) : (
        windowDimension.with < 800 && (
          <IoClose size={25} onClick={() => setNavBarOpen(!navBarOpen)} />
        )
      )}
      {navBarOpen || windowDimension.with > 800 ? (
        <ul className='linksConteiner'>
          {links.map((x) => (
            <div key={x.id}>
              <Link
                to={x.link}
                onClick={() => setNavBarOpen(false)}
                className='links'
              >
                {x.link}
              </Link>
            </div>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default NavBar;

