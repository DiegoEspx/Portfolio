import { useState } from 'react';

const Skills = () => {
    // Estado para mantener el estado actual de la sección seleccionada
    const [selectedSection, setSelectedSection] = useState('frontend');

    // Función para cambiar la sección seleccionada
    const handleSectionChange = (section:string) => {
        setSelectedSection(section);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="max-w-screen-lg w-full fondoSkills p-20 rounded-xl shadow-md">
                <h1 className="text-5xl font-bold mb-12 text-center text-white">Mis Habilidades</h1>
                
                {/* Selector de secciones */}
                <div className="flex justify-center mb-14 ">
                    {/*Frontend boton*/}
                    <button
                        className={`mr-4 p-4 py-2 rounded-full focus:outline-none  ${selectedSection === 'frontend' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        onClick={() => handleSectionChange('frontend')}
                    >
                        <strong>Frontend</strong>
                    </button>
                    {/*Backend boton*/}
                    <button
                        className={`mr-4 px-4 py-2 rounded-full focus:outline-none ${selectedSection === 'backend' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        onClick={() => handleSectionChange('backend')}
                    >
                        <strong>Backend</strong>
                    </button>
                    {/*Otros boton*/}
                    <button
                        className={`px-4 py-2 rounded-full focus:outline-none ${selectedSection === 'otros' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        onClick={() => handleSectionChange('otros')}
                    >
                        <strong>Otros</strong>
                    </button>
                </div>
                {/* Contenido de la sección seleccionada */}
                {selectedSection === 'frontend' && (
                    <div>
                        <h2 className="text-xl font-bold mb-20 ml-16 text-white">Mis habilidades en Frontend:</h2>
                        <div className="flex flex-wrap mb-20 ml-16"
                        style={{background:''}}>
                            {/* Lista de habilidades en frontend */}
                            <span className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2 mb-2">HTML</span>
                            <span className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2 mb-2">CSS</span>
                            <span className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2 mb-2">JavaScript</span>
                        </div>
                    </div>
                )}
                {selectedSection === 'backend' && (
                    <div>
                        <h2 className="text-xl font-bold mb-20   ml-16 text-white">Mis habilidades en Backend:</h2>
                        <div className="flex flex-wrap mb-20 ml-16">
                            {/* Lista de habilidades en backend */}
                            <span className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2 mb-2">Node.js</span>
                            <span className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2 mb-2">Python</span>
                        </div>
                    </div>
                )}
                {selectedSection === 'otros' && (
                    <div>
                        <h2 className="text-xl font-bold mb-20 ml-16 text-white">Otras habilidades:</h2>
                        <div className="flex flex-wrap mb-20 ml-16">
                            {/* Lista de otras habilidades */}
                            <span className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2 mb-2 hover:bg-green-700">Git</span>
                            <span className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2 mb-2">SQL</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Skills;
