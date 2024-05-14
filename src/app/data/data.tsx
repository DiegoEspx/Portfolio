import iconLogo from './../../assets/icons/logo.svg';
import { FiHome } from "react-icons/fi";
import { FaRegFolderClosed } from "react-icons/fa6";
import { LuBrain } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

type NavItemType = {
  id: number;
  title: string;
  icon: JSX.Element;
  to: string;
};

type NavbarType = {
  logo: {
    title: string;
    icon: string;
  };
  nav: NavItemType[];
};

type LanguageType = {
  label: string;
  code: string;
};

export const dataNavbar = (navItem: number): NavbarType => ({
  logo: {
    title: 'Diego',
    icon: iconLogo,
  },
  nav: [
    {
      id: 1,
      title: 'Inicio',
      icon: (
        <FiHome
          className={navItem === 1 ? 'text-ap' : ''}
          style={{fontSize:'35px'}}
        />
      ),
      to: '/',
    },
    {
      id: 2,
      title: 'Sobre mi',
      icon: (
        <FaRegUser
          className={navItem === 2 ? 'text-app-primary' : ''}
          style={{ fontSize: '35px' }} 
        />
      ),
      to: '/Sobre_mi',
    },
    {
      id: 3,
      title: 'Proyectos',
      icon: (
        <FaRegFolderClosed
          className={navItem === 3 ? 'text-app-primary' : ''}
          style={{ fontSize: '35px' }}
        />
      ),
      to: '/Proyectos',
    },
    {
      id: 4,
      title: 'Habilidades',
      icon: (
        <LuBrain
          className={navItem === 4 ? 'text-app-primary' : ''}
          style={{ fontSize: '35px' }}
        />
      ),
      to: '/Habilidades',
    },
    {
      id: 5,
      title: 'Contacto',
      icon: (
        <FiMail
          className={navItem === 5 ? 'text-app-primary' : ''}
          style={{ fontSize: '35px' }}
        />
      ),
      to: '/Contacto',
    },
  ],
});
export const languageData = (): LanguageType[] => [
  { label: 'Español', code: 'es' },
  { label: 'Ingles', code: 'en' },
];
