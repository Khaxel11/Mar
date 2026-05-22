import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function WelcomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadResources = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLoading(false);
    };
    loadResources();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-rose-100 text-rose-400">
        Cargando...
      </div>
    );
  }

  const particles = Array.from({ length: 25 });

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-pink-200 to-rose-300 px-6">

      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: "110vh",
            opacity: [0, 1, 0],
            x: [0, Math.random() * 50 - 25]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          className="absolute w-2 h-2 bg-white/70 rounded-full blur-[1px]"
          style={{ left: `${Math.random() * 100}%` }}
        />
      ))}

      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-white/30 rounded-full blur-3xl"
      />

      <motion.div
  initial={{ opacity: 0, y: 60, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1 }}
  whileHover={{ scale: 1.02 }}
  className="relative z-10 max-w-xl w-full"
>

  <div className="relative backdrop-blur-2xl bg-white/50 border border-white/60 rounded-[2rem] shadow-[0_25px_80px_rgba(244,114,182,0.25)] p-10 text-center overflow-hidden">

    <motion.div
      animate={{ opacity: [0, 0.4, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.6),transparent_40%)]"
    />

    <motion.div
      animate={{ opacity: [0, 0.3, 0] }}
      transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.5),transparent_50%)]"
    />

    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-4xl font-semibold text-rose-500 tracking-wide mb-6"
    >
      Para mi Mareita ♥
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="text-rose-900/80 mb-4 leading-relaxed"
    >
      Por si algún día quieres volver a este lugar, aquí te dejo algo para ti.
    </motion.p>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
      className="text-rose-900/80 mb-4 leading-relaxed"
    >
      Un espacio donde guardaré pequeñas cosas para ti, para nosotros.
    </motion.p>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="text-rose-900/80 mb-4 leading-relaxed"
    >
      Aquí encontrarás recuerdos, secretos, sorpresas... todo lo que quiero compartir contigo.
    </motion.p>

    <motion.p
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5 }}
      className="mt-6 text-rose-500 font-medium tracking-wide"
    >
      Te amo mucho, Mareita. Gracias por ser mi compañera, mi amor. Este es solo el comienzo de nuestra historia juntos.
    </motion.p>

  </div>
</motion.div>
    </div>
  );
}