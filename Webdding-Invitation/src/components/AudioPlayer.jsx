import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound, mute, player } from '../assets';
import audio from '/src/assets/music/music.mp3';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(() => {
    const savedState = localStorage.getItem('isPlaying');
    return savedState !== null ? JSON.parse(savedState) : true; 
  });

  const [volume, setVolume] = useState(() => {
    const savedVolume = localStorage.getItem('volume');
    return savedVolume !== null ? JSON.parse(savedVolume) : 1;
  });

  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false); 
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.volume = volume;

      if (isPlaying) {
        audioElement.play().catch((error) => {
          console.error('Error al intentar reproducir el audio:', error);
        });
      } else {
        audioElement.pause();
      }

      const updateProgress = () => {
        if (audioElement) {
          setCurrentTime(audioElement.currentTime);
          setDuration(audioElement.duration);
        }
      };

      audioElement.addEventListener('timeupdate', updateProgress);

      // Cleanup the event listener on component unmount
      return () => {
        audioElement.removeEventListener('timeupdate', updateProgress);
      };
    }
  }, [isPlaying, volume]);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error('Error al intentar reproducir el audio:', error);
      });
    }
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error('Error al intentar reproducir el audio:', error);
      });
    }
    setIsPlaying(!isPlaying);
    localStorage.setItem('isPlaying', JSON.stringify(!isPlaying));
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    localStorage.setItem('volume', JSON.stringify(newVolume));
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleProgressChange = (event) => {
    const newTime = parseFloat(event.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="absolute z-[99] right-0 bottom-0">
      <AnimatePresence>
        {!showPlayer ? (
          <motion.div
            className="flex items-center justify-center p-1 sm:p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <img
              src={player.cover}
              alt="Album cover"
              className="w-10 h-10 md:w-20 md:h-20 rounded-lg cursor-pointer object-cover"
              onClick={() => setShowPlayer(true)}
            />
          </motion.div>
        ) : (
          <motion.div
            className="flex flex-col bg-black p-4 rounded-lg shadow-lg w-screen md:max-w-xs relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              className="absolute top-2 right-2 p-2 bg-gray-800 rounded-full"
              onClick={() => setShowPlayer(false)}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex items-center justify-between">
              <img
                src={player.cover}
                alt="Album cover"
                className="w-12 h-12 md:w-20 md:h-20 rounded-lg object-cover"
              />
              <div className="flex flex-1 flex-col ml-4">
                <div className="text-sm text-white"><a href={player.urlmusic}>{player.name}</a></div>
                <div className="text-xs text-gray-400">{player.artist}</div>
                <div className="flex items-center mt-2">
                  <span className="text-white text-xs">{formatTime(currentTime)}</span>
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    step="0.01"
                    value={currentTime}
                    onChange={handleProgressChange}
                    className="w-full mx-2"
                  />
                  <span className="text-white text-xs">{formatTime(duration - currentTime)}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <button className="text-white" onClick={() => setShowVolumeControl(!showVolumeControl)}>
                    <img
                      src={volume === 0 ? mute : sound}
                      alt="sound-button"
                      className="w-6 h-6"
                    />
                  </button>
                  <button onClick={togglePlayPause} className="ml-4">
                    {isPlaying ? (
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 9v6m4-6v6"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.752 11.168l-6.412-3.697A1 1 0 007 8.618v6.764a1 1 0 001.34.937l6.412-3.697a1 1 0 000-1.736z"
                        />
                      </svg>
                    )}
                  </button>
                  <button onClick={() => (audioRef.current.currentTime += 10)} className="ml-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {showVolumeControl && (
              <div className="bg-black p-4 md:rounded-lg mt-2">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full"
                />
              </div>
            )}
            
          </motion.div>
        )}
      </AnimatePresence>
      <audio ref={audioRef} src={audio} loop />
    </div>
    
  );
};

export default AudioPlayer;
