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
                        className={`mr-4 p-4 py-2 rounded-full focus:outline-none  ${selectedSection === 'frontend' ? 'bg-gradient text-white' : 'bg-gray-300'}`}
                        onClick={() => handleSectionChange('frontend')}
                    >
                        <strong>Frontend</strong>
                    </button>
                    {/*Backend boton*/}
                    <button
                        className={`mr-4 px-4 py-2 rounded-full focus:outline-none ${selectedSection === 'backend' ? 'bg-gradient text-white' : 'bg-gray-300'}`}
                        onClick={() => handleSectionChange('backend')}
                    >
                        <strong>Backend</strong>
                    </button>
                    {/*Otros boton*/}
                    <button
                        className={`px-4 py-2 rounded-full focus:outline-none ${selectedSection === 'otros' ? 'bg-gradient text-white' : 'bg-gray-300'}`}
                        onClick={() => handleSectionChange('otros')}
                    >
                        <strong>Otros</strong>
                    </button>
                </div>
                {/* Contenido de la sección seleccionada */}
                {selectedSection === 'frontend' && (
                    <div>
                        <h2 className="text-xl font-bold mb-20 ml-16 text-white">Mis habilidades en Frontend:</h2>
                        <div className="flex flex-wrap mb-20 ml-16">
                            {/* Lista de habilidades en frontend */}
                            <span style={{background:'#a050b4'}} className=" text-white px-4 py-2 rounded-full mr-2 mb-2"><strong>HTML</strong></span>
                            <span style={{background:'#a050b4'}} className=" text-white px-4 py-2 rounded-full mr-2 mb-2"><strong>CSS</strong></span>
                            <span style={{background:'#a050b4'}} className=" text-white px-4 py-2 rounded-full mr-2 mb-2"><strong>JavaScript</strong></span>
                        </div>
                    </div>
                )}
                {selectedSection === 'backend' && (
                    <div>
                        <h2 className="text-xl font-bold mb-20   ml-16 text-white">Mis habilidades en Backend:</h2>
                        <div className="flex flex-wrap mb-20 ml-16">
                            {/* Lista de habilidades en backend */}
                            <span style={{background:'#a050b4'}} className="text-white px-4 py-2 rounded-full mr-2 mb-2"><strong>Node.js</strong></span>
                            <span style={{background:'#a050b4'}} className="text-white px-4 py-2 rounded-full mr-2 mb-2"><strong>Python</strong></span>
                        </div>
                    </div>
                )}
                {selectedSection === 'otros' && (
                    <div>
                        <h2 className="text-xl font-bold mb-20 ml-16 text-white">Otras habilidades:</h2>
                        <div className="flex flex-wrap mb-20 ml-16">
                            {/* Lista de otras habilidades */}
                            <span style={{background:'#a050b4'}} className=" text-white px-4 py-2 rounded-full mr-2 mb-2"><strong>Git</strong></span>
                            <span style={{background:'#a050b4'}} className=" text-white px-4 py-2 rounded-full mr-2 mb-2"><strong>SQL</strong></span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Skills;
