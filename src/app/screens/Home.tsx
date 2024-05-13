import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col lg:flex-row items-center justify-center w-full h-full">
      <div className="md:px-12 lg:px-4 max-w-screen-lg xl:px-3 flex flex-col lg:flex-row items-center justify-center bg-blue-900 p-8 lg:p-24 mb-8 lg:mb-24"> {/* Tamaño fijo del cuadro azul y padding reducido */}
        {/* Texto a la izquierda */}
        <div className="w-full md:w-1/2 lg:w-1/2 pr-0 md:pr-8 lg:pr-16 mb-8 lg:mb-0">
          <h1 className="text-xl md:text-5xl text-app-light-background-2 text-gradient1 p-2">
            <strong>{t('home')}</strong>
          </h1>
    
          <p className="text-lg md:text-xl text-white mt-6 text-justify ">
            {t('textOne')}
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2"> {/* Oculta en pantallas pequeñas y muestra en pantallas medianas y más grandes */}
          <img src="../../assets/icons/logo.svg" className="w-full h-auto" alt="Logo" />
        </div>
      </div>
    </main>
  );
};

export default Home;
