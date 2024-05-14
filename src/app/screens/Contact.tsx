import { useTranslation } from 'react-i18next';
import { LuSendHorizonal } from "react-icons/lu";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <main className="flex items-center justify-center w-full h-full">
        <img src="../../assets/icons/Contact.png" alt="" />
        <div className="max-w-screen-lg w-full lg:px-24 flex flex-col items-center justify-center fondoContact p-20 rounded-2xl shadow-xl">
            {/* Título de la sección */}
            <strong>
                <p className=" md:text-3xl lg:text-5xl text-white mb-8">
                    {t('contact')}  
                </p>   
            </strong>
            
            {/* Contenedor de información de contacto */}
            <div className="w-full p-14 rounded-lg grid grid-cols-2 gap-7  "
            style={{background:'#2A3F78'}}>
                {/* Texto a la izquierda */}
                <div className=' p-3'>
                    <p className="text-lg md:text-xl lg:text-2xl text-white  ">
                        {t('finalText')}
                    </p>
                </div>
                
                {/* Lista de información de contacto */}
                <ul className="p-3 md:p-1 ml-10 mt-10 text-center ">
                    <strong>
                        <li className="text-white text-lg md:text-xl lg:text-xl">d.alejo.guerrero.e@gmail.com</li>
                        <li className="text-white text-lg md:text-xl lg:text-xl mt-4">+57 312 - 726 - 1552</li>
                        <li className="text-white text-lg md:text-xl lg:text-xl mt-4">Colombia - Pasto - Nariño</li>
                    </strong>
                    
                    {/* Botón de enviar mensaje */}
                    <button className=" ml-7 mt-10 text-white px-6 md:px-8 py-3 md:py-4 items-center justify-center flex rounded-3xl shadow-2xl " style={{ background: 'linear-gradient(180deg, #55E0FF 0%, #AD27FF 100%)' }}>
                        <strong className='mr-3 text-xl'>
                            <a href="mailto:d.alejo.guerrero.e@gmail.com">Enviar Mensaje</a>
                        </strong>
                        <LuSendHorizonal
                        style={{ fontSize: '26px' }}/>

                    </button>
                </ul>
                
            </div>
            
            
        </div>
        </main>
    );
};

export default Contact;