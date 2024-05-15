import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <main className="flex items-center justify-center w-full h-full">
            <div className="max-w-screen-sm md:max-w-screen-xl p-4 md:p-32 ml-4 md:ml-48 mr-4 md:mr-32 rounded-2xl fondoAbout">
                {/* Contenedor del texto */}
                <div className="flex ml-20 lg:ml-10 flex-col items-center ">
                    {/* Sobre mi */}
                    <h1 className="text-2xl md:text-5xl mb-5 p-3 text-gradient2 text-center">
                        <strong>{t('about')}</strong>
                    </h1>
                    {/* Descripción */}
                    <div className="text-md md:text-2xl text-white text-justify ">
                        {t('textTwo')}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;
