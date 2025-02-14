import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AcknowledgmentsData } from './index';

const testimonials = new AcknowledgmentsData();

const Testimonial = ({ tipo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const list = tipo === 'padrinos' ? testimonials.godparents : testimonials.special;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [list]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + list.length) % list.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length);
  };

  return (
    <section id='testimonial' className={`w-full ${tipo === 'padrinos' ? ' h-[40vh] md:h-[50vh]' : 'h-[20vh] md:h-[20vh]'} flex flex-col justify-center items-center p-4 relative overflow-hidden `}>
      {tipo === 'padrinos' && (
        <p className="absolute z-10 top-10 md:top-16 font-signature text-4xl sm:text-6xl lg:text-7xl text-gold">
          Agradecimientos
        </p>
      )}
      <div className={`relative w-full flex justify-center items-center ${tipo === 'padrinos' ? 'mt-16 md:mt-20' : ''}`}>
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute p-4 md:p-6 rounded-lg text-center w-full flex items-center justify-center flex-col space-y-4 bg-white"
          >
            <h2 className="text-gold font-signature text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
              {list[currentIndex].title}
            </h2>
            <p className="font-weddingtwo text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl">
              {list[currentIndex].name}
            </p>
          </motion.div>
        </AnimatePresence>
        <div
          onClick={handlePrevious}
          className="absolute left-4 md:left-8 bg-transparent text-gold p-2 rounded-full text-2xl cursor-pointer hover:bg-gray-200"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          {'<'}
        </div>
        <div
          onClick={handleNext}
          className="absolute right-4 md:right-8 bg-transparent text-gold p-2 rounded-full text-2xl cursor-pointer hover:bg-gray-200"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          {'>'}
        </div>
      </div>
      
    </section>
  );
};

export default Testimonial;
