import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <main className="flex items-center justify-center w-full h-full">
      <div className="max-w-screen-lg flex flex-col-reverse md:flex-row bg-blue-900 p-8 md:p-28 ml-20">
        {/*Contenedor de la imagen*/}
        <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 md:pl-20">
          <img src="../../assets/icons/logo.svg" className="w-full h-auto" alt="Logo" />
        </div>
          {/*Contenedor del texto*/}
        <div className="w-full md:w-1/2 md:pr-20">
            {/*sobre mi*/}
          <h1 className="text-3xl md:text-5xl mb-5 p-3 text-gradient2">
            
            <strong>{t('about')}</strong>
          </h1>
          <div className="text-lg md:text-xl text-white text-justify overflow-y-auto xs:ml-12" style={{ maxHeight: '300px', direction: 'rtl' }}>
            {/*descripcion*/}
            {t('textTwo')}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
