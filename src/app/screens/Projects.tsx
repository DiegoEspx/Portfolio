import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();
    const projects = [
        {
            title: t('proyectTitle'),
            languages: ['Java'],
            description: t('textProjectOne'), // Solo pasamos la cadena de texto
            githubLink: 'https://github.com/DiegoEspx/Control-Recetas-Ingredientes-',
        },
        {
            title: 'Proyecto 2',
            description: 'Descripción del proyecto 2...',
            languages: ['Python', 'Django'],
            githubLink: 'url_del_repo_2',
        },
        // Agrega más proyectos aquí según sea necesario
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <main className="flex items-center justify-center w-full h-full">
            <div className="max-w-5xl mx-auto bg-white p-20 rounded-xl">
                <h1 className="text-5xl font-bold mb-8 text-center text-purple-900">
                    {t('proyect')}
                </h1>
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div key={index} className=" rounded-3xl overflow-hidden shadow-md">
                            <div className="p-20" style={{ background: 'linear-gradient(180deg, #55E0FF 0%, #AD27FF 100%)' }}>
                                <h1 className="text-4xl font-bold mb-4 text-gradient3">
                                    {project.title}
                                </h1>
                                <p className="text-lg mb-4 text-white">{project.description}</p>
                                <div className="items-center mt-16 grid grid-cols-2 col-span-10 "> {/* Contenedor de los lenguajes */}
                                    <div> {/* Contenedor de los lenguajes */}
                                        {project.languages.map((language, index) => (
                                            <span key={index} className="bg-purple-200 text-purple-800 px-3 py-1 rounded-md mr-2">{language}</span>
                                        ))}
                                    </div>
                                    <div className=' ml-52'> {/* Contenedor del botón de GitHub */}
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-purple-900 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors duration-300">
                                            <strong>GitHub</strong>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </main>
    );
};

export default Projects;
