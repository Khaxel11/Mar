import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { marker, hour, place, mail } from '../assets'; 
import Map from './Map'
const urlmap = "https://maps.app.goo.gl/hzA4Hvhk9FuL8QFB6";
const Placement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section id='placement' className='w-full h-screen flex justify-center items-center relative overflow-hidden'>
      <div className='absolute w-full h-full top-0 left-0'>
        <img src={place} alt="bg-top" className='w-full h-[100vh]  ' />
        
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, rotate: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50, rotate: isVisible ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className={`relative w-[80%] max-w-[800px]
          rounded-tr-[5px] rounded-tl-[45px] rounded-bl-[5px] rounded-br-[45px] 
          p-[20px] bg-gold-gradient bg-cover bg-center shadow-lg`}
      >
        <div className='relative bg-white rounded-[10px] p-[20px]'>
          <h1 className='text-center font-bold text-[30px] md:text-[50px] lg:text-[50px] font-weddingtwo'>Hacienda</h1>
          <h1 className='text-center font-bold text-[50px] md:text-[80px] lg:text-[80px] font-sign text-gold'>El Palmar</h1>
          <h2 className='text-center font-extrabold text-sm sm:text-xl font-poppins'>Salón de Eventos</h2>
          <p className='text-center mt-1 flex justify-center items-center font-bold font-poppins'>
            <img src={marker} alt="marker" className='w-[20px] sm:w-[32px] mr-2' />
           Carretera Bacobampo - Buaysiacobe, 85224 Etchojoa,Son.
          </p>
          <div className='text-center mt-4 flex justify-center items-center font-bold font-poppins'>
            <img src={hour} alt="hour" className='w-[20px] sm:w-[32px] mr-2' />
            <p>16 Marzo 2025, 21:30</p>
          </div>
          
          <p className='text-center mt-2 font-mandala text-[20px] sm:text-[30px] flex items-center justify-center'>
            <img src={mail} alt="regalo" className='w-[20px] sm:w-[32px] mr-2' />
            Regalo Colectivo
          </p>
          <p className='text-center mt-2'>
          <button type="button" onClick={()=>{
            window.open(urlmap)
          }} className="mt-2 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Ver en Mapa</button>
            <Map/>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Placement;
