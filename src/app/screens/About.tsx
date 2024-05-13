import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <main className="flex items-center justify-center w-full h-full">
      <div className="max-w-screen-lg flex bg-blue-900 p-28 w-full">
        {/* Contenedor del texto */}
        <div className="w-1/2 pr-8">
            <h1 className="text-3xl md:text-5xl mb-5 p-3 text-gradient2">
              <strong>{t('about')}</strong>
            </h1>
          <div className="text-lg md:text-xl text-white text-justify overflow-y-auto" style={{ maxHeight: '300px', direction: 'rtl' }}>
            {t('textTwo')}
          </div>
        </div>
        {/* Contenedor de la imagen */}
        <div className="w-1/2 content-center ">
          <img src="../../assets/icons/logo.svg" className="w-full h-auto" alt="Logo" />
        </div>
      </div>
    </main>
  );
};

export default About;
