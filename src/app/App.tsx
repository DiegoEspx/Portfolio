import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Header from './components/header';
import Home from './screens/Home';
import About from './screens/About';
import Projects from './screens/Projects';
import Skills from './screens/Skills';
import Contact from './screens/Contact';
import NotFound from './screens/NotFound';

function App() {
  return (
    <main className='flex flex-row w-screen h-screen bg-app-white font-roboto'>
      <Navbar />
      <section className='flex-1 grid grid-rows-[auto_1fr_auto]'>
        <Header />
        <section style={{background:'linear-gradient(180deg, #00104A 28%, #445D88 100%)'}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Sobre_mi' element={<About />} />
            <Route path='/Proyectos' element={<Projects />} />
            <Route path='/Habilidades' element={<Skills />} />
            <Route path='/Contacto' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </section>
        <section></section>
      </section>
    </main>
  );
}

export default App;