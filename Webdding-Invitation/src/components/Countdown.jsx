import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2026-06-07T00:00:00');
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Unit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <motion.span
        key={value}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
      >
        {String(value).padStart(2, '0')}
      </motion.span>
      <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/70 mt-1">
        {label}
      </span>
    </div>
  );

  const Separator = () => (
    <span className="text-2xl sm:text-3xl md:text-4xl text-white/40 font-light pb-4">
      :
    </span>
  );

  return (
    <motion.div
      className="w-full bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-2xl p-5 sm:p-7 border border-white/10 backdrop-blur-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-center text-sm sm:text-base md:text-lg font-bold text-white/80 mb-5 tracking-[0.3em]">
        FALTAN
      </h2>

      <div className="flex items-center justify-center gap-2 sm:gap-3">
        <Unit value={timeLeft.days} label="Días" />
        <Separator />
        <Unit value={timeLeft.hours} label="Horas" />
        <Separator />
        <Unit value={timeLeft.minutes} label="Min" />
        <Separator />
        <Unit value={timeLeft.seconds} label="Seg" />
      </div>

      {/* <p className="text-center text-white/70 text-xs sm:text-sm mt-6 font-medium">
        
      </p> */}

      <div className="mt-5">
        <iframe
          src="https://open.spotify.com/embed/track/70jP2lO4kyktgLKQjE62Ak?utm_source=generator&theme=0"
          width="100%"
          height="152"
          style={{ borderRadius: '12px' }}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};

export default Countdown;