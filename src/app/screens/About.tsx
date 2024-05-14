import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <main className="flex items-center justify-center w-full h-full ">
            <div className="max-w-screen-lg flex flex-col-reverse md:flex-row p-8 md:p-28 ml-20 fondoAbout rounded-2xl">
                
                {/* Contenedor del texto */}
                <div className="w-full md:pr-20 flex flex-col justify-center items-center ml-20 ">
                    {/* Sobre mi */}
                    <h1 className="text-3xl md:text-5xl mb-5 p-3 text-gradient2 text-center">
                        <strong>{t('about')}</strong>
                    </h1>
                    <div className="text-lg md:text-xl text-white text-justify">
                        {/* Descripción */}
                        {t('textTwo')}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;
