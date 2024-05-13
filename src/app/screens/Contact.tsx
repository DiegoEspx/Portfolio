import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <main className="flex items-center justify-center w-full h-full">
        <img src="../../assets/icons/Contact.png" alt="" />
        <div className="max-w-screen-lg w-full lg:px-24 flex flex-col items-center justify-center bg-blue-900 p-24 rounded-2xl shadow-xl">
            {/* Título de la sección */}
            <strong>
                <p className=" md:text-3xl lg:text-4xl text-white mb-8">
                    {t('contact')}  
                </p>   
            </strong>
            
            {/* Contenedor de información de contacto */}
            <div className="w-full p-16 rounded-lg grid grid-cols-2 gap-16 text-justify "
            style={{background:'#2A3F78'}}>
                {/* Texto a la izquierda */}
                <div className=' p-3'>
                    <p className="text-lg md:text-xl lg:text-1xl text-white  ">
                        {t('finalText')}
                    </p>
                </div>
                
                {/* Lista de información de contacto */}
                <ul className='p-7' >
                    <strong>
                        <li className="text-white text-lg">d.alejo.guerrero.e@gmail.com</li>
                        <li className="text-white text-lg mt-4">+57 312 - 726 - 1552</li>
                        <li className="text-white text-lg mt-4">Colombia - Pasto - Nariño</li>
                    </strong>
                    
                        {/* Botón de enviar mensaje */}
                    <button className=" mt-4 text-white px-8 py-4 items-center justify-center flex rounded-3xl shadow-2xl"
                    style={{background:'linear-gradient(180deg, #55E0FF 0%, #AD27FF 100%)'}}>
                        <strong>
                                Enviar Mensaje
                        </strong>
                        <img src="/enviar.png" alt="Enviar" />
                    </button>
                </ul>
                
            </div>
            
            
        </div>
        </main>
    );
};

export default Contact;