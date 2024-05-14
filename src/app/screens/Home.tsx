import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col md:max-w-screen lg:flex-row items-center justify-center w-full h-full">
      <div className=" fondoHome  md:flex-col max-w-screen-lg xl:px-32 flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-blue-800 to-blue-900 lg:p-16 lg:mb-20 rounded-lg shadow-2xl">
        {/* Texto a la izquierda */}
        <div className="w-full md:w-1/2 lg:w-1/2 pr-0 md:pr-8 lg:pr-16 mb-32 lg:mb-0 ">
          <h1 className="text-2xl md:text-5xl text-gradient1 font-bold mb-10 p-2 mt-5">{t('home')}</h1>
          <p className="text-lg md:text-xl text-white leading-relaxed text-justify mb-20">{t('textOne')}</p>
        </div>
        {/* Imagen a la derecha */}
        <div className="w-full md:w-1/2 lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('../assets/icons/home.png')` }}>
          
        </div>
      </div>
    </main>
  );
};

export default Home;
