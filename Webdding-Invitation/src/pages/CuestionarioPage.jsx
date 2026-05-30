import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Cuestionario.css';
import { top, player } from '../assets/index';
const MatrixText = () => {
    const [text, setText] = useState("");

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    useEffect(() => {
        const interval = setInterval(() => {
            let newText = "";
            for (let i = 0; i < 40; i++) {
                newText += chars[Math.floor(Math.random() * chars.length)];
            }
            setText(newText);
        }, 80);

        return () => clearInterval(interval);
    }, []);

    return <div>{text}</div>;
};
// SVG Components
const CakeSVG = () => (
    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 70H80V80H20Z" fill="#ff69b4" />
        <path d="M25 55H75V70H25Z" fill="#ffb6d9" />
        <path d="M30 40H70V55H30Z" fill="#ff69b4" />
        <circle cx="40" cy="30" r="3" fill="#ffd700" />
        <circle cx="50" cy="25" r="3" fill="#ffd700" />
        <circle cx="60" cy="30" r="3" fill="#ffd700" />
        <line x1="40" y1="30" x2="40" y2="20" stroke="#ff1493" strokeWidth="2" />
        <line x1="50" y1="25" x2="50" y2="15" stroke="#ff1493" strokeWidth="2" />
        <line x1="60" y1="30" x2="60" y2="20" stroke="#ff1493" strokeWidth="2" />
    </svg>
);

const CheckSVG = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const XSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CuestionarioPage = () => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [quizComplete, setQuizComplete] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [lastQuestionWrongAttempts, setLastQuestionWrongAttempts] = useState(0);

    const baseQuestions = [
        {
            question: 'Día que te mande el primer mensaje',
            options: [
                { text: '15/01/2026', correct: true },
                { text: '14/01/2026', correct: false },
                { text: '16/01/2026', correct: false },
                { text: '13/01/2026', correct: false }
            ]
        },
        {
            question: 'Día de nuestra primera cita',
            options: [
                { text: '10/02/2026', correct: true },
                { text: '07/02/2026', correct: false },
                { text: '11/02/2026', correct: false },
                { text: '09/02/2026', correct: false }
            ]
        },
        {
            question: 'Frase que decía la primera carta que te escribí',
            options: [
                { text: '"Y por nombre la llamo: Los postres de Mar"', correct: true },
                { text: '"La marea grito la M como si fuera Mar"', correct: false },
                { text: '"El azúcar batió la mantequilla tímida y de cristal"', correct: false },
                { text: '"Galletas cubiertas en turron como R al ron"', correct: false }
            ]
        },
        {
            question: 'Canción con la que nos tomamos de la mano por primera vez',
            isSpotify: true,
            options: [
                { text: 'Tear in my heart - Twenty One Pilots', correct: true, spotify: 'https://open.spotify.com/intl-es/track/3bnVBN67NBEzedqQuWrpP4?si=a039b2f501de45a6' },
                { text: 'Overcompensate - Twenty One Pilots', correct: false, spotify: 'https://open.spotify.com/embed/track/3JvJfTh5Z8G1TKvMyMdRa9' },
                { text: 'Car Radio - Twenty One Pilots', correct: false, spotify: 'https://open.spotify.com/embed/track/0kRKfRlSRZzLdOjMvTDJtG' },
                { text: 'Next Semester - Twenty One Pilots', correct: false, spotify: 'https://open.spotify.com/embed/track/7FXVkR3ALuD4rJCWzA1kFm' }
            ]
        },
        {
            question: 'Día y lugar de nuestro primer beso',
            options: [
                { text: '28 de Marzo - Huatabampito', correct: true },
                { text: '01 de Abril - Huatabampito', correct: false },
                { text: '27 de Marzo - Navojoa', correct: false },
                { text: '05 de Abril - La Unión', correct: false }
            ]
        },
        {
            question: 'Lugar donde te confesé lo que sentía por ti',
            options: [
                { text: 'Cafetal - Huatabampo, Sonora', correct: true },
                { text: 'Cinepolis - Obregon, Sonora', correct: false },
                { text: 'Tu casa - La Unión, Sonora', correct: false },
                { text: 'Huatabampito - Huatabampo, Sonora', correct: false }
            ]
        },
        {
            question: 'Primer canción que te dediqué',
            isSpotify: true,
            options: [
                { text: 'Formidable - Twenty One Pilots', correct: true, spotify: 'https://open.spotify.com/embed/track/6hN3B0P8hBWWOk3IWy8dIi' },
                { text: 'Smithereens - Twenty One Pilots', correct: false, spotify: 'https://open.spotify.com/embed/track/4V0jtQ0b3wDqJz28SrGLMp' },
                { text: 'Overcompensate - Twenty One Pilots', correct: false, spotify: 'https://open.spotify.com/embed/track/3JvJfTh5Z8G1TKvMyMdRa9' },
                { text: 'Ride - Twenty One Pilots', correct: false, spotify: 'https://open.spotify.com/embed/track/3bNjSHLc9q9g1ys4d7Qb0l' }
            ]
        },
        {
            question: 'Nuestro primer baile',
            options: [
                { text: 'La Brissa', correct: true },
                { text: 'Twenty One Pilots', correct: false },
                { text: 'La Leyenda Ranchera', correct: false },
                { text: 'No hemos ido a un baile', correct: false }
            ]
        },
        {
            question: 'Día que empezamos a ser novios',
            options: [
                { text: '25 de Abril 2026', correct: true },
                { text: '23 de Abril 2026', correct: false },
                { text: '24 de Abril 2026', correct: false },
                { text: '26 de Abril 2026', correct: false }
            ]
        },
        {
            question: 'Cual es uno de nuestros sueños',
            options: [
                { text: 'Ir a ver Twenty One Pilots juntos', correct: false },
                { text: 'Casita Infonavit pintado de las chivas rayadas de Guadalajara', correct: false },
                { text: 'Ámbar y Ander', correct: false },
                { text: 'Todas las anteriores', correct: true }
            ]
        },
        {
            question: '¿Te cumplo uno de nuestros sueños?',
            options: [
                { text: 'SI', correct: true },
                { text: 'NO', correct: false },
                { text: 'Mañana', correct: false },
                { text: 'No, te odio', correct: false }
            ]
        }
    ];

    const shuffleOptions = (options) => {
        return [...options].sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        const questionsWithShuffledOptions = baseQuestions.map(q => ({
            ...q,
            options: shuffleOptions(q.options)
        }));
        setShuffledQuestions(questionsWithShuffledOptions);
    }, []);

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password === 'tecate') {
            setIsAuthenticated(true);
        } else {
            alert('Contraseña incorrecta');
            setPassword('');
        }
    };

    const handleAnswerClick = (index) => {
        if (isAnswered || shuffledQuestions.length === 0) return;

        const isLastQuestion = currentQuestion === shuffledQuestions.length - 1;
        const isCorrectAnswer = shuffledQuestions[currentQuestion].options[index].correct;

        if (isLastQuestion && !isCorrectAnswer) {
            setLastQuestionWrongAttempts(lastQuestionWrongAttempts + 1);
            return;
        }

        const isCorrect = isCorrectAnswer;
        setSelectedAnswer(index);
        setIsAnswered(true);
        setShowResult(true);

        if (isCorrect) {
            setScore(score + 1);
        }

        setTimeout(() => {
            if (currentQuestion < shuffledQuestions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
                setIsAnswered(false);
                setShowResult(false);
                setLastQuestionWrongAttempts(0);
            } else {
                setQuizComplete(true);
            }
        }, 2500);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setSelectedAnswer(null);
        setIsAnswered(false);
        setShowResult(false);
        setQuizComplete(false);
        setLastQuestionWrongAttempts(0);
        const questionsWithShuffledOptions = baseQuestions.map(q => ({
            ...q,
            options: shuffleOptions(q.options)
        }));
        setShuffledQuestions(questionsWithShuffledOptions);
    };

   if (!isAuthenticated) {
    return (
        <div
            className="password-container"
            style={{
                background: "black",
                color: "#00ff9f",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "monospace",
                overflow: "hidden"
            }}
        >
            {/* EFECTO MATRIX TEXTO CAMBIANTE */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                    position: "absolute",
                    top: "20px",
                    width: "100%",
                    textAlign: "center",
                    fontSize: "0.9rem",
                    opacity: 0.4,
                    letterSpacing: "2px"
                }}
            >
                <MatrixText />
            </motion.div>

            <motion.div
                className="password-box"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                    border: "1px solid rgba(0,255,159,0.2)",
                    padding: "40px",
                    borderRadius: "10px",
                    background: "rgba(0,0,0,0.6)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 0 40px rgba(0,255,159,0.1)"
                }}
            >
                <motion.h2
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{
                        marginBottom: "20px",
                        fontWeight: "400",
                        letterSpacing: "3px"
                    }}
                >
                    ACCESS NODE
                </motion.h2>

                <form onSubmit={handlePasswordSubmit}>
                    <motion.input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder=">>>"
                        whileFocus={{ scale: 1.05 }}
                        style={{
                            width: "100%",
                            padding: "12px",
                            background: "transparent",
                            border: "1px solid rgba(0,255,159,0.3)",
                            color: "#00ff9f",
                            outline: "none",
                            marginBottom: "20px",
                            fontFamily: "monospace"
                        }}
                    />

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            width: "100%",
                            padding: "10px",
                            background: "transparent",
                            border: "1px solid rgba(0,255,159,0.3)",
                            color: "#00ff9f",
                            cursor: "pointer",
                            letterSpacing: "2px"
                        }}
                    >
                        EXECUTE
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}

if (quizComplete) {
    return (
        <motion.div
            className="completion-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
                position: "relative",
                width: "100vw",
                height: "100vh",
                overflow: "hidden"
            }}
        >
            {/* FONDO (NO BLOQUEA CLICKS) */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    pointerEvents: "none",
                    opacity: 0.5
                }}
            >
                {[...Array(40)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            y: -20,
                            x: Math.random() * window.innerWidth,
                            opacity: 0
                        }}
                        animate={{
                            y: window.innerHeight + 20,
                            opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 4 + 4,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                        style={{
                            position: "absolute",
                            color: "white",
                            fontSize: "18px"
                        }}
                    >
                        ❤️
                    </motion.div>
                ))}
            </div>

            {/* CONTENIDO */}
            <motion.div
                style={{
                    position: "absolute",
                    zIndex: 2,
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "20px"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        bottom: "80px",
                        padding: "8px 14px",
                        borderRadius: "999px",
                        color: "white",
                        background: "rgba(0,0,0,0.4)"
                    }}
                >
                    {score}/{shuffledQuestions.length}
                </div>

                {/* BOTÓN ARREGLADO */}
                <motion.button
                    onClick={resetQuiz}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        position: "absolute",
                        bottom: "30px",
                        // left: "50%",
                        padding: "12px 28px",
                        borderRadius: "999px",
                        border: "1px solid rgba(255,255,255,0.5)",
                        background: "black",
                        color: "white",
                        fontSize: "1rem",
                        cursor: "pointer",
                        zIndex: 9999
                    }}
                    x="-50%" // 🔥 ESTO evita que se mueva
                >
                    Reintentar
                </motion.button>
            </motion.div>
        </motion.div>
    );
}
    if (shuffledQuestions.length === 0) {
        return <div className="loading">Cargando...</div>;
    }

    return (
        <motion.div
            className="quiz-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="quiz-background">
                <motion.div className="bubble" />
                <motion.div className="bubble" />
                <motion.div className="bubble" />
            </div>

            <div className="quiz-content">
                {/* Progress Bar */}
                <motion.div
                    className="progress-container"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="progress-bar">
                        <motion.div
                            className="progress-fill"
                            initial={{ width: 0 }}
                            animate={{
                                width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%`
                            }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                    <p className="progress-text">
                        Pregunta {currentQuestion + 1} de {shuffledQuestions.length}
                    </p>
                </motion.div>

                {/* Question */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestion}
                        className="question-container"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="question-text">{shuffledQuestions[currentQuestion].question}</h2>

                        {/* Spotify Player para canciones */}
                        {/* {shuffledQuestions[currentQuestion].isSpotify && selectedAnswer !== null && (
              <motion.div
                className="spotify-container"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <iframe
                  data-testid="embed-iframe"
                  style={{
                    borderRadius: '12px',
                    width: '100%',
                    height: '152px'
                  }}
                  src={shuffledQuestions[currentQuestion].options[selectedAnswer].spotify}
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </motion.div>
            )} */}

                        {/* Options */}
                        <div className="options-container">
                            {shuffledQuestions[currentQuestion].options.map((option, index) => {
                                const isLastQuestion = currentQuestion === shuffledQuestions.length - 1;

                                return (
                                    <motion.button
                                        key={index}
                                        className={`option-button ${selectedAnswer === index ? 'selected' : ''
                                            } ${isAnswered
                                                ? option.correct
                                                    ? 'correct'
                                                    : selectedAnswer === index
                                                        ? 'incorrect'
                                                        : ''
                                                : ''
                                            }`}
                                        onClick={() => handleAnswerClick(index)}
                                        disabled={isAnswered && !(isLastQuestion && !option.correct)}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{
                                            opacity: 1,
                                            scale: isLastQuestion && lastQuestionWrongAttempts > 0 && option.correct ? 1 + (lastQuestionWrongAttempts * 0.15) : 1
                                        }}
                                        transition={{ delay: index * 0.1, duration: 0.4 }}
                                        whileHover={!isAnswered || (isLastQuestion && !option.correct) ? { scale: 1.05 } : {}}
                                        whileTap={!isAnswered || (isLastQuestion && !option.correct) ? { scale: 0.95 } : {}}
                                    >
                                        <span className="option-text">{option.text}</span>
                                        <motion.span
                                            className="option-indicator"
                                            initial={{ scale: 0 }}
                                            animate={
                                                isAnswered && selectedAnswer === index
                                                    ? { scale: 1 }
                                                    : { scale: 0 }
                                            }
                                            transition={{ type: 'spring', stiffness: 200 }}
                                        >
                                            {option.correct ? <CheckSVG /> : <XSvg />}
                                        </motion.span>
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Result Message */}
                        <AnimatePresence>
                            {showResult && (
                                <>
                                    {shuffledQuestions[currentQuestion].options[selectedAnswer].correct && (
                                        <div className="correct-animation-container">
                                            {[...Array(30)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="correct-particle"
                                                    initial={{
                                                        x: 0,
                                                        y: 0,
                                                        opacity: 1,
                                                        scale: 1
                                                    }}
                                                    animate={{
                                                        x: (Math.random() - 0.5) * 300,
                                                        y: (Math.random() - 0.5) * 300,
                                                        opacity: 0,
                                                        scale: 0
                                                    }}
                                                    transition={{
                                                        duration: 1 + Math.random() * 0.5,
                                                        ease: 'easeOut'
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    <motion.div
                                        className={`result-message ${shuffledQuestions[currentQuestion].options[selectedAnswer].correct
                                                ? 'correct'
                                                : 'incorrect'
                                            }`}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {shuffledQuestions[currentQuestion].options[selectedAnswer].correct
                                            ? 'Correcto'
                                            : 'Incorrecto'}
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default CuestionarioPage;
