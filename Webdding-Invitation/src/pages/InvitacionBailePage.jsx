import { useState } from 'react';

export default function InvitacionBailePage() {
  const [hideIntro, setHideIntro] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleTap = () => {
    setHideIntro(true);
    setTimeout(() => {
      setShowCard(true);
    }, 400);
  };

  const hearts = [
    { left: '10%', delay: '0s' },
    { left: '20%', delay: '2s' },
    { left: '35%', delay: '4s' },
    { left: '50%', delay: '1s' },
    { left: '65%', delay: '5s' },
    { left: '80%', delay: '3s' },
    { left: '90%', delay: '6s' },
  ];

  return (
    
    <div className="h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-pink-100 to-pink-300 flex items-center justify-center relative">

      <div className="absolute inset-0 z-0 overflow-hidden">
        {hearts.map((h, i) => (
          <span
            key={i}
            className="absolute bottom-[-50px] text-white/70 text-xl animate-float"
            style={{ left: h.left, animationDelay: h.delay }}
          >
            ❤
          </span>
        ))}
      </div>

      <div
        onClick={handleTap}
        className={`absolute inset-0 flex flex-col items-center justify-center bg-white/20 backdrop-blur-lg z-20 cursor-pointer transition-opacity duration-1000 ${
          hideIntro ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="text-pink-500 animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1zM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
          </svg>
        </div>

        <p className="mt-6 text-xl text-pink-500 font-semibold text-center">
          Haz click para abrir tu sorpresa
        </p>
      </div>

      <div
        className={`relative z-10 w-[90%] max-w-xl bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl p-10 text-center shadow-2xl transition-all duration-1000 ${
          showCard ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      >
        <h1 className="text-3xl md:text-4xl text-pink-500 mb-6">
          Una frase bonita para alegrar tu noche
        </h1>

        <p className="text-lg md:text-xl text-pink-900 leading-relaxed">
          Me encanta el sabor de tus besos,
          <br />
          esa sensación de tus labios,
          <br />
          como pequeños trozos de caramelo
          <br />
          que se deshacen en la boca.
        </p>

        <div className="mt-8 text-pink-500 font-semibold tracking-wide">
          Con amor, para mi novia hermosa.
          <br />
          <strong>Mareita</strong>
          <br />
          Te amo
           <div className="text-center mt-8">
          <button
            onClick={() => window.history.back()}
            className="text-pink-400 hover:text-pink-300 transition text-sm uppercase tracking-wider font-semibold"
          >
            ← Volver
          </button>
        </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh) scale(1.5);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float 10s linear infinite;
        }
      `}</style>
    </div>
  );
}