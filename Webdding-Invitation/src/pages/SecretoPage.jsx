import { useState } from 'react';

export default function SecretoPage() {
  const [showCard, setShowCard] = useState(false);
  const [hideIntro, setHideIntro] = useState(false);

  const handleTap = () => {
    setHideIntro(true);
    setTimeout(() => {
      setShowCard(true);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">

      <div className="absolute top-10 left-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-10 left-1/2 w-40 h-40 bg-yellow-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className={`fixed inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-lg z-20 transition-opacity duration-1000 ${hideIntro ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <p className="text-pink-400 text-lg md:text-xl animate-pulse text-center">
          Te puedo contar un secreto...
        </p>

        <button
          onClick={handleTap}
          className="mt-6 px-6 py-3 rounded-full bg-pink-500 text-white shadow-lg shadow-pink-500/50 hover:bg-pink-400 transition"
        >
          Tocar para descubrir
        </button>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <div
          className={`bg-black/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl p-8 md:p-12 text-center transition-all duration-1000 ${
            showCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-3xl md:text-4xl text-pink-400 mb-6">
            Mi secreto es...
          </h1>

          <p className="text-white text-base md:text-lg leading-relaxed space-y-2">
            <span className="block">Hace muchas semanas,</span>
            <span className="block">soñé que estaba contigo bailando.</span>

            <span className="block mt-4">Tal vez no lo hacía perfecto,</span>
            <span className="block">pero se sentía tan real...</span>

            <span className="block mt-4">No te lo conté antes,</span>
            <span className="block">porque en el fondo sabía algo:</span>

            <span className="block mt-4">Que un día dejaría de ser sueño</span>
            <span className="block">y se volvería realidad.</span>

            <span className="block mt-4">Mañana quiero verte…</span>
            <span className="block">y por fin bailar contigo.</span>
          </p>

          <div className="mt-6 rounded-xl overflow-hidden">
            <iframe
              src="https://open.spotify.com/embed/track/2NMjggapJcXXM7WccGEBUO?utm_source=generator"
              width="100%"
              height="80"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>

          <div className="text-pink-400 text-sm mt-6">
            <p>Te amo mucho ❤️</p>
            <p className="font-semibold">Para mi Novia</p>
          </div>
        </div>

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
  );
}