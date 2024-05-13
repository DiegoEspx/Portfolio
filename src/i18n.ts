import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
lng: 'es',
fallbackLng: 'es',
interpolation: {
    escapeValue: false,
},
resources: {
    en: {
    translation: {
        /*Home*/
        home: 'Hello i am Diego',
        textOne: 'I am a software engineering student, I am passionate about algorithms and sports. I focus on software architecture, project management, programming and interface design.',
        
        /*About me*/
        about: 'About Me',
        textTwo: "Hello, nice to meet you, I'm Diego España.I love algorithms, everything based on programming, I like to learn, I love to discover new languages, put them into practice. Creating page layouts always caught my attention, the Frontend was the first thing I put into practice on this journey. I am also focused on the topic of software architecture, creating projects, analyzing them, looking for problems and correcting them also seems very interesting to me. In the end I always like to try new things, keep progressing with what I'm learning, so that in the end I can combine everything in an ascending way and thus be able to apply it in the workplace."
        ,
        //Project
        proyect:'My Projects',
        proyectTitle: 'Mercedario Restaurant',
        textProjectOne: 'Code to add, edit, delete, calculate prices, for ingredients and recipes handled by the restaurant (inventory).'
        ,
        //Contact
        contact: 'CONTACT',
        finalText: "Thank you for taking the time to get here. If you think I can be of use to your team or if you simply have any questions, do not hesitate to contact me. I'm here to help you in any way I can."
    },
    },
    es: {
    translation: {
        /*Home*/
        home: 'Hola Soy Diego',
        textOne: 'Soy estudiante de ingeniería de software, me apasiona la algoritmia y el deporte. \n Me enfoco en arquitectura de software, dirección de proyectos, programación y diseño de interfaces.',
        
        /*About me*/
        about: 'Sobre Mi',
        textTwo: 'Hola, un placer conocerte, soy Diego España. Me encanta la algoritmia, todo en base a programación me gusta aprender, me encanta ir descubriendo nuevos lenguajes, ponerlos en practica. \n Crear diseños de paginas siempre me llamo la atención, el Frontend fue lo primero que puse en practica en esta travesía. \n También estoy enfocado en el tema de la arquitectura de software, crear proyectos, analizarlos, buscar problemas y corregirlos también me parece muy interesante. \n Al final me gusta siempre intentar nuevas cosas, seguir progresando con lo que estoy aprendiendo, para al final poder combinar todo de una manera ascendente y asi poder aplicarlo en el ámbito laboral.'
        ,
        //Project
        proyect:'Mis Proyectos',
        proyectTitle:'Restaurante Mercedario',
        textProjectOne:'Codigo para agregar, editar, eliminar, calcular precios, para ingredientes y recetas que maneje el restaurante (inventario).',
        //Contact
        contact: 'CONTACTO',
        finalText: 'Gracias por tomarte el tiempo de llegar hasta aquí. Si consideras que puedo ser de utilidad para tu equipo o si simplemente tienes alguna pregunta, no dudes en contactarme. Estoy aquí para ayudarte en todo lo que pueda.'
    },
    }, 
},
});

export default i18n;