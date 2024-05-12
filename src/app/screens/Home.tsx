import { useTranslation } from 'react-i18next';


const Home = () => {
  const { t } = useTranslation();


  return (
    <main className="flex items-center justify-center w-full h-full " >
      <div className="max-w-screen-lg  flex items-center justify-center bg-blue-900 p-28 w-auto">
        {/* Texto a la izquierda */}
        <div className="w-1/2 pr-8">
          <strong>
            <h1 className="text-xl md:text-5xl p-5 text-app-light-background-2">
            {t('home')}
            </h1>
          </strong>
          <p className="text-lg md:text-xl text-white mt-4 text-justify">
            {t('textOne')}
          </p>
        </div>
        <div className="w-1/2">
          <img src="../../assets/icons/logo.svg" className="w-full h-auto" />
        </div>
      </div>
    </main>
    
  );

};

export default Home;