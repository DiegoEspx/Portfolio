import { useState } from 'react';
import { Link } from 'react-router-dom';
import { dataNavbar } from '../data/data';
import React from 'react';

const Navbar = () => {
  const [position, setPosition] = useState<'bottom' | 'left'>('bottom');
  const [navItem, setNavItem] = useState<number>(1); // Estado para mantener el ítem de navegación activo
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  const handleNavClick = (navItem: number) => {
    setNavItem(navItem); // Actualizar el ítem de navegación activo
    setPosition(navItem === 1 ? 'bottom' : 'left');
  };

  const handleMouseEnter = (buttonId: number) => {
    setHoveredButton(buttonId);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const navbarData = dataNavbar(navItem);

  return (
    <nav className={`fixed ${position === 'bottom' ? 'bottom-0 left-0 right-0 flex-row' : 'left-0 top-0 bottom-0 flex-col'} p-3 flex items-center justify-center z-10 text-2xl bg-black`} style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
      <div className={`flex gap-5 ${position === 'bottom' ? 'flex-row' : 'flex-col'}`}>
        {navbarData.nav.map(item => (
          <Link
          
            key={item.id}
            to={item.to}
            className={`w-14 h-14 rounded-full flex items-center justify-center text-black focus:outline-none ${position === 'left' && item.id !== 1 ? 'mb-4' : ''}`}
            style={{
              background: 'linear-gradient(180deg, #86B8DB 50%, #C6B5EE 90%)',
              transition: 'transform 0.3s ease, color 0.3s ease',
              transform: hoveredButton === item.id ? 'scale(1.4)' : 'scale(1.1)',
              fontSize: '33px'
            }}
            onClick={() => handleNavClick(item.id)}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            {React.cloneElement(item.icon, {
              style: {
                color: hoveredButton === item.id ? '#ffffff' : '#000000', // Cambiar el color del icono cuando el cursor está sobre él
              },
            })}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
