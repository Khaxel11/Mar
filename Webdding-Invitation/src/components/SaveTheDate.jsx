import { motion, AnimatePresence } from 'framer-motion';

const AnimatedImageSection = ({ imageSrc }) => {
  const particleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: [0, 1, 0],
      scale: [0.5, 1, 0.5],
      rotate: 360,
      backgroundColor: ["#ffff", "#B29566", "#FEDB37", "#febf37", "#B5EAD7", "#f0d18f"],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  };

  return (
    <section className="relative w-full h-[50vh] md:h-[100vh] flex flex-col justify-center items-center p-4 overflow-hidden">
      {Array.from({ length: 200 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full z-50"
          style={{
            width: `${Math.random() * 5 + 5}px`,
            height: `${Math.random() * 5 + 5}px`,
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            filter: 'blur(1px)',
          }}
          variants={particleVariants}
          initial="initial"
          animate="animate"
        />
      ))}

      <AnimatePresence>
        <motion.div
          className="absolute w-full h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <img src={imageSrc} alt="animated-section" className="shadow-lg w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default AnimatedImageSection;
