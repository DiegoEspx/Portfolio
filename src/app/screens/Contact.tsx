import { useTranslation } from 'react-i18next';

const Contact = () => {
const { t } = useTranslation();

return (
    <main className="flex items-center justify-center w-full h-full " >
    <div className="max-w-screen-lg  flex items-center justify-center bg-blue-900 p-28 w-auto">
        <p className="text-lg mb-2">Información de contacto:</p>
        {/* Cuadro de información de contacto */}
        <div className="flex justify-between mb-4 bg-blue-300">
            <div>
                    {/* Texto a la izquierda */}
                <div className="w-1/2 pr-8">
                    <p className="text-lg md:text-xl text-white mt-4 text-justify">
                        {t('textOne')}
                    </p>
                </div>
                
                <div className="w-1/2"> </div>
                <ul className="list-disc pl-6">
                    <li>d.alejo.guerrero.e@gmail.com</li>
                    <li>+57 312-726-1552</li>
                    <li>Colombia-Pasto-Nariño</li>
                </ul>
            </div>
            {/* Botón de enviar mensaje */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
            Enviar mensaje
            <img src="/enviar.png" alt="Enviar" className="w-8 h-8" />
            </button>
        </div>
    </div>
    </main>
);
}


export default Contact;
