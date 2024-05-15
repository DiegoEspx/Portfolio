import { useTranslation } from 'react-i18next';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col md:max-w-screen lg:flex-row items-center justify-center w-full h-full">
      <section className=" fondoHome md:flex-col max-w-screen-lg flex flex-col lg:flex-row items-center justify-center lg:p-20 mb-24 rounded-lg shadow-2xl">
        {/* Texto a la izquierda */}
        <div className="w-full md:w-1/2 md:pr-8 lg:pr-16 lg:mb-10">
          <h1 className="text-2xl md:text-5xl text-gradient1 font-bold mb-5 mt-5 p-2">{t('home')}</h1>
          <p className="text-lg md:text-xl text-white leading-relaxed text-justify mb-20">{t('textOne')}</p>  
          <div className='flex gap-10'>
            <a href="https://github.com/DiegoEspx" target="_blank" rel="noopener noreferrer"><BsGithub className='bg-black rounded-full text-white' style={{fontSize:'48px'}}/></a>
            <a href="https://www.linkedin.com/in/diego-espa%C3%B1a-9b801a1ab/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='bg-black text-white rounded-full' style={{fontSize:'48px'}}/></a>  
          </div>
        </div>
        {/* Imagen a la derecha */}
        <div className="w-full md:w-1/2 lg:w-1/2 bg-cover bg-center">
        </div>


      </section>
    </main>
  );
};

export default Home;
