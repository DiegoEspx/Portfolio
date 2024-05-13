import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col lg:flex-row items-center justify-center w-full h-full">
      <div className="md:px-12 lg:px-4 max-w-screen-lg xl:px-32 flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-blue-800 to-blue-900 p-8 lg:p-16 mb-8 lg:mb-16 rounded-lg shadow-2xl">
        {/* Texto a la izquierda */}
        <div className="w-full md:w-1/2 lg:w-1/2 pr-0 md:pr-8 lg:pr-16 mb-8 lg:mb-0">
          
          <h1 className="text-2xl md:text-5xl text-gradient1 font-bold mb-4 p-2">{t('home')}</h1>
          <p className="text-lg md:text-xl text-white leading-relaxed text-justify">{t('textOne')}</p>
        </div>
        {/* Imagen a la derecha */}
        <div className="w-full md:w-1/2 lg:w-1/2">
          <img src="../../assets/icons/logo.svg" className="w-full h-auto rounded-lg" alt="Logo" />
        </div>
      </div>
    </main>
  );
};

export default Home;
