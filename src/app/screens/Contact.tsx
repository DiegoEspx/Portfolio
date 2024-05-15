import { useTranslation } from 'react-i18next';
import { LuSendHorizonal } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { TbMapPin } from "react-icons/tb";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <main className="flex items-center justify-center w-full h-full p-4">
            <div className="max-w-screen-lg w-full lg:px-24 flex flex-col items-center justify-center fondoContact p-8 rounded-2xl shadow-xl">
                {/* Título de la sección */}
                <strong>
                    <p className="text-3xl md:text-4xl lg:text-5xl text-white mb-8 text-center">
                        {t('contact')}  
                    </p>   
                </strong>
                
                {/* Contenedor de información de contacto */}
                <div className="w-full p-6 md:p-14 rounded-lg flex flex-col gap-7" style={{background:'#2A3F78'}}>
                    {/* Texto a la izquierda */}
                    <div className="p-3">
                        <p className="text-lg md:text-xl lg:text-2xl text-white text-center">
                            {t('finalText')}
                        </p>
                    </div>
                    
                    {/* Lista de información de contacto */}
                    <ul className="p-3 text-center flex flex-col items-center gap-4">
                        <strong>
                            <li className="text-white text-lg md:text-xl lg:text-xl flex items-center gap-3">
                                <MdMailOutline style={{ fontSize: '28px' }} />
                                d.alejo.guerrero.e@gmail.com
                            </li>
                            <li className="text-white text-lg md:text-xl lg:text-xl flex items-center gap-3">
                                <FiPhoneCall style={{ fontSize: '24px' }} />
                                +57 312 - 726 - 1552
                            </li>
                            <li className="text-white text-lg md:text-xl lg:text-xl flex items-center gap-3">
                                <TbMapPin style={{ fontSize: '28px' }} />
                                Colombia - Pasto - Nariño
                            </li>
                        </strong>
                        
                        {/* Botón de enviar mensaje */}
                        <button className="mt-6 text-white px-6 md:px-8 py-3 md:py-4 flex items-center justify-center rounded-3xl shadow-2xl" style={{ background: 'linear-gradient(180deg, #55E0FF 0%, #AD27FF 100%)' }}>
                            <strong className='mr-3 text-xl'>
                                <a href="mailto:d.alejo.guerrero.e@gmail.com">Enviar Mensaje</a>
                            </strong>
                            <LuSendHorizonal style={{ fontSize: '26px' }}/>
                        </button>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Contact;
