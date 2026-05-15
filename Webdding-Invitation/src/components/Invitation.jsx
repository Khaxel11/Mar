import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ticket, player } from '../assets/index';
import Countdown from './Countdown';

const Invitation = () => {
    const [isOpened, setIsOpened] = useState(false);
    const audioRef = useRef(null);

    // Reproducir música solo cuando se abran los tickets
    useEffect(() => {
        if (isOpened && audioRef.current) {
            audioRef.current.play().catch(err => console.log('Auto-play prevented:', err));
        } else if (!isOpened && audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }, [isOpened]);

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 flex items-center justify-center overflow-hidden relative p-4 sm:p-8">

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(40)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full opacity-40"
                        animate={{
                            y: [0, -window.innerHeight],
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: 'easeIn',
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex items-center justify-center w-full">
                {!isOpened ? (
                    <motion.div
                        className="cursor-pointer w-full max-w-sm"
                        onClick={() => setIsOpened(true)}
                    >
                        <motion.div
                            className="absolute inset-0 bg-black rounded-2xl blur-3xl opacity-40 -z-10"
                            animate={{
                                scale: [1, 1.15, 1],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                            }}
                        />

                        <motion.div
                            className="relative w-full aspect-square sm:aspect-auto sm:h-96 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl sm:rounded-3xl shadow-2xl border-4 sm:border-6 border-amber-200 p-6 sm:p-8 flex flex-col items-center justify-center"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 30px 80px rgba(191, 144, 0, 0.5)',
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                        >
                            <motion.div
                                className="absolute top-3 sm:top-4 left-3 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 border-t-4 border-l-4 border-amber-400 rounded-tl-lg"
                                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                                transition={{
                                    rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
                                    scale: { duration: 2, repeat: Infinity },
                                }}
                            />
                            <motion.div
                                className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 border-b-4 border-r-4 border-amber-400 rounded-br-lg"
                                animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                                transition={{
                                    rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
                                    scale: { duration: 2, repeat: Infinity, delay: 1 },
                                }}
                            />

                            <motion.div
                                className="text-center"
                                animate={{
                                    scale: [1, 1.02, 1],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                <motion.div
                                    className="mb-4 sm:mb-6 flex justify-center"
                                    animate={{
                                        y: [0, -10, 0],
                                        rotateZ: [0, 2, -2, 0],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <svg width="60" height="60" viewBox="0 0 60 60" className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-lg">
                                        <rect x="10" y="15" width="40" height="30" fill="none" stroke="currentColor" strokeWidth="2" rx="4" className="text-purple-900" />
                                        <line x1="10" y1="25" x2="50" y2="25" stroke="currentColor" strokeWidth="1.5" className="text-purple-900" />
                                        <line x1="10" y1="35" x2="50" y2="35" stroke="currentColor" strokeWidth="1.5" className="text-purple-900" />
                                        <circle cx="20" cy="20" r="3" fill="currentColor" className="text-pink-600" />
                                    </svg>
                                </motion.div>

                                <motion.div
                                    className="text-center"
                                    animate={{
                                        scale: [1, 1.02, 1],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <h1
                                        className="text-base sm:text-xl md:text-2xl font-medium text-purple-900 mb-2 tracking-widest uppercase"
                                        style={{
                                            letterSpacing: '0.15em',
                                            opacity: 0.8,
                                        }}
                                    >
                                        Una pregunta para ti
                                    </h1>

                                    <motion.p
                                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-pink-600 to-red-600 mb-3"
                                        style={{
                                            fontFamily: "'Playfair Display', serif",
                                            textShadow: '0 10px 25px rgba(0,0,0,0.25)',
                                            letterSpacing: '0.05em',
                                        }}
                                        animate={{
                                            scale: [1, 1.08, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        07 de Junio
                                    </motion.p>

                                    <motion.p
                                        className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold mb-4"
                                        style={{
                                            fontFamily: "'Cormorant Garamond', serif",
                                            letterSpacing: '0.05em',
                                        }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        ¿Qué tienes planeado esa noche?
                                    </motion.p>

                                    <motion.div
                                        className="mt-4 text-xs sm:text-sm text-amber-900 tracking-[0.3em] uppercase"
                                        animate={{
                                            opacity: [0.5, 1, 0.5],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                    >
                                        Toca para abrir
                                    </motion.div>

                                    <motion.div
                                        className="mt-2 text-xl text-amber-800"
                                        animate={{
                                            y: [0, 6, 0],
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        ↓
                                    </motion.div>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="absolute bottom-4 sm:bottom-6 w-20 sm:w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            />
                        </motion.div>

                        {[...Array(4)].map((_, i) => (
                            <motion.div
                                key={`star-${i}`}
                                className="absolute w-8 h-8 sm:w-12 sm:h-12"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: i * 0.5,
                                }}
                                style={{
                                    left: ['5%', '95%', '-5%', '105%'][i],
                                    top: ['-10%', '-10%', '110%', '110%'][i],
                                }}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="8" opacity="0.3" />
                                    <circle cx="12" cy="12" r="4" />
                                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
                                </svg>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    // INVITACIÓN ABIERTA CON BOLETOS
                    <motion.div
                        className="relative w-full"
                        initial={{ opacity: 0, scale: 0.7, rotateX: 90 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                        transition={{
                            duration: 0.9,
                            type: 'spring',
                            stiffness: 80,
                            damping: 15,
                        }}
                    >
                        <div className="relative z-10 bg-gradient-to-b from-white to-blue-50 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border-4 sm:border-6 border-gradient w-full">
                            <motion.div
                                className="text-center mb-6 sm:mb-8 md:mb-12"
                                initial={{ y: -60, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.7 }}
                            >
                                {/* <motion.div
                                    className="mb-2 sm:mb-4 flex justify-center"
                                    animate={{
                                        rotate: [0, 10, -10, 0],
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                >
                                    <svg width="80" height="80" viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                                        <defs>
                                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#9333ea" />
                                                <stop offset="100%" stopColor="#ec4899" />
                                            </linearGradient>
                                        </defs>
                                        <polygon points="40,10 60,30 60,70 20,70 20,30" fill="url(#grad1)" opacity="0.8" />
                                        <circle cx="40" cy="50" r="8" fill="white" opacity="0.6" />
                                        <line x1="40" y1="30" x2="40" y2="70" stroke="white" strokeWidth="1" opacity="0.4" />
                                    </svg>
                                </motion.div> */}
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 mb-1 sm:mb-2" style={{
                                    textShadow: '0 4px 12px rgba(236, 72, 153, 0.3)',
                                }}>
                                    ¿Te gustaría ir a bailar conmigo?
                                </h1>
                                <motion.div
                                    // className="relative text-center border-t-4 border-purple-300 pt-8 overflow-hidden"
                                    initial={{ y: 60, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1, duration: 0.7 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-pink-100 via-purple-100 to-red-100 opacity-40 blur-2xl"
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            rotate: [0, 2, -2, 0],
                                        }}
                                        transition={{
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />



                                    <motion.h2
                                        className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 relative z-10"
                                        animate={{
                                            scale: [1, 1.08, 1],
                                            textShadow: [
                                                "0px 0px 10px rgba(236,72,153,0.4)",
                                                "0px 0px 25px rgba(236,72,153,0.8)",
                                                "0px 0px 10px rgba(236,72,153,0.4)",
                                            ],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        07 de Junio
                                    </motion.h2>

                                    <motion.div
                                        className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-red-500"
                                        animate={{
                                            width: ["6rem", "10rem", "6rem"],
                                            opacity: [0.7, 1, 0.7],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />

                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="mb-6 sm:mb-8 md:mb-12 relative"
                                initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
                                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                                transition={{ delay: 0.5, duration: 0.8, type: 'spring', stiffness: 100 }}
                            >
                                <motion.div
                                    className="absolute -inset-2 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-2xl blur-xl -z-10"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: [0.5, 0.8, 0.5],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />

                                <div className="relative flex items-center justify-center h-[220px] sm:h-[260px] md:h-[300px] mt-[30%] mb-[30%]">
                                    <motion.img
                                        src={ticket}
                                        alt="Boleto 1"
                                        className="absolute w-[75%] sm:w-[65%] md:w-[55%] rounded-xl shadow-2xl z-10"
                                        initial={{ rotate: -12, x: -40, opacity: 0 }}
                                        animate={{
                                            rotate: -12,
                                            x: -10,
                                            y: [0, -8, 0],
                                            opacity: 1,
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.6,
                                            y: {
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            },
                                        }}
                                    />

                                    <motion.img
                                        src={ticket}
                                        alt="Boleto 2"
                                        className="absolute w-[75%] sm:w-[65%] md:w-[55%] rounded-xl shadow-2xl z-20"
                                        initial={{ rotate: 12, x: 40, opacity: 0 }}
                                        animate={{
                                            rotate: 12,
                                            x: 10,
                                            y: [0, 8, 0],
                                            opacity: 1,
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.8,
                                            y: {
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            },
                                        }}
                                    />
                                </div>

                                <motion.div
                                    className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-white/0 pointer-events-none"
                                    animate={{
                                        borderColor: ['rgba(255,255,255,0)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0)'],
                                        boxShadow: [
                                            '0 0 20px rgba(236, 72, 153, 0)',
                                            '0 0 40px rgba(236, 72, 153, 0.5)',
                                            '0 0 20px rgba(236, 72, 153, 0)',
                                        ],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />
                            </motion.div>
                            <motion.div
                                className="mb-6 sm:mb-8"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                <Countdown />
                            </motion.div>

                            <motion.div
                                className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-16 h-16 sm:w-24 sm:h-24"
                                animate={{
                                    rotate: 360,
                                    y: [0, -25, 0],
                                }}
                                transition={{
                                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                                    y: { duration: 3, repeat: Infinity },
                                }}
                            >
                                <div className="w-full h-full rounded-full bg-gradient-to-tr from-pink-400 via-purple-400 to-red-400 opacity-70 blur-md" />
                                <div className="absolute inset-2 rounded-full border border-white/40" />
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-16 h-16 sm:w-24 sm:h-24"
                                animate={{
                                    rotate: -360,
                                    y: [0, 25, 0],
                                }}
                                transition={{
                                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                                    y: { duration: 3, repeat: Infinity, delay: 1 },
                                }}
                            >
                                <div className="w-full h-full rounded-full bg-gradient-to-tr from-red-400 via-purple-400 to-pink-400 opacity-70 blur-md" />
                                <div className="absolute inset-2 rounded-full border border-white/40" />
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </div>

            {isOpened && (
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(60)].map((_, i) => (
                        <motion.div
                            key={`confetti-${i}`}
                            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full shadow-lg"
                            style={{
                                backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8', '#a29bfe'][
                                    Math.floor(Math.random() * 7)
                                ],
                                left: `${Math.random() * 100}%`,
                                top: '-10px',
                            }}
                            animate={{
                                y: window.innerHeight + 30,
                                x: (Math.random() - 0.5) * 400,
                                rotate: Math.random() * 720,
                                opacity: [1, 0.8, 0],
                            }}
                            transition={{
                                duration: Math.random() * 2.5 + 2.5,
                                ease: 'easeIn',
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Invitation;
