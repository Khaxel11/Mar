import { backgroundbottom, backgroundtop, circle } from '../assets';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Info = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="info" ref={ref} className="w-full h-auto flex flex-col justify-center items-center relative overflow-hidden bg-gray-100">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center space-y-8 z-10 px-6 md:px-12 py-16 bg-white bg-opacity-80 rounded-lg shadow-lg m-[2rem] flex flex-col justify-center items-center"
            >
                <div className="relative flex justify-center items-center text-gold">
                    <p className="absolute inset-0 flex justify-center items-center font-sign text-5xl sm:text-6xl font-bold">L&A</p>
                    <p className="absolute mt-20 flex justify-center items-center font-sign text-5xl sm:text-4xl">Luz y Arturo</p>
                    <img loading="lazy" src={circle} alt="" className="w-full h-auto" />
                </div>

                <div className="w-full sm:w-[60%] space-y-4 font-signature text-gray-600 mt-1 sm:mt-1 text-3xl md:text-5xl leading-10">
                    Cada familia tiene una historia,
                    la nuestra apenas comienza...
                </div>

                <div className="w-full sm:w-[60%] space-y-4 mt-9 sm:mt-7 leading-10 flex flex-col items-center justify-center">
                    <p className='font-signature text-3xl md:text-5xl text-gray-500'>Me complace invitarte este</p>
                    <p className='font-signature text-3xl md:text-5xl font-bold text-gold'>16 de Marzo de 2025</p>
                    {/* <img className='absolute w-[20rem] opacity-70' src={detail} alt="" />  */}
                </div>
                <div className="mt-8 text-center w-full">
                    <h1 className="text-xl md:text-3xl font-poppins text-gray-700">Con la bendición de nuestros padres</h1>
                </div>
                <div className="w-full grid grid-cols-2 gap-8 justify-items-center">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-signature text-gray-800">Padres de la Novia</h2>
                    </div>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-signature text-gray-950">Padres del Novio</h2>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-rosalie text-gray-700"><b>Guadalupe Castillo Rangel</b></h2>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-rosalie text-gray-700"><b>Carmen Dalila Sandoval Armenta</b></h2>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-rosalie text-gray-700"><b>Jesus Zamora Ozuna</b></h2>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-rosalie text-gray-700"><b>Santos Arturo Acuña Mendez</b></h2>
                    </div>
                </div>


                <div className='w-full font-signature flex justify-center items-center leading-4 sm:leading-10'>
                    <p className='text-center w-full sm:w-[80%] text-gold text-[1rem] sm:text-[40px]'>
                        Tan sólo podemos decir que nuestra vida
                        en estos momentos se encuentra completa
                        y estamos listos para compartir el resto de nuestros días juntos.
                    </p>
                </div>
            </motion.div>
            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-between">
                <motion.img
                    src={backgroundtop}
                    alt="bg-top"
                    className="w-full h-[50vh] object-cover"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1 }}
                />
                <motion.img
                    src={backgroundbottom}
                    alt="bg-bottom"
                    className="w-full h-[50vh] object-cover"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1 }}
                />
            </div>
        </section>
    );
};

export default Info;
