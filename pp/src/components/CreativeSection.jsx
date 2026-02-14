import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes.",
    "In order to be irreplaceable, one must always be different.",
    "Knowledge is power.",
    "Simplicity is the soul of efficiency.",
    "Make it work, make it right, make it fast.",
    "Clean code always looks like it was written by someone who cares."
];

function CreativeSection() {
    const [quote, setQuote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);
    const [userInput, setUserInput] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(100);
    const [isFinished, setIsFinished] = useState(false);
    const inputRef = useRef(null);

    // Focus input on start/reset
    useEffect(() => {
        if (!isFinished) {
            inputRef.current?.focus();
        }
    }, [isFinished, quote]);

    const handleInputChange = (e) => {
        if (isFinished) return;

        const value = e.target.value;
        if (!startTime) {
            setStartTime(Date.now());
        }

        setUserInput(value);

        // Calculate Stats
        let correctChars = 0;
        for (let i = 0; i < value.length; i++) {
            if (value[i] === quote[i]) {
                correctChars++;
            }
        }
        setAccuracy(Math.round((correctChars / value.length) * 100) || 100);

        // Check if finished
        if (value.length >= quote.length) {
            setIsFinished(true);
            const timeTaken = (Date.now() - startTime) / 60000; // in minutes
            const wordsTyped = quote.split(' ').length;
            setWpm(Math.round(wordsTyped / timeTaken));
        }
    };

    const resetGame = () => {
        setUserInput('');
        setStartTime(null);
        setWpm(0);
        setAccuracy(100);
        setIsFinished(false);
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    };

    return (
        <section className="min-h-[80vh] bg-white text-black flex flex-col items-center justify-center relative overflow-hidden px-6 py-20 font-[Inter]">

            <div className="z-10 text-center max-w-4xl w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-12"
                >
                    Test Your Speed
                </motion.h2>

                <div
                    className="relative text-3xl md:text-5xl font-light leading-snug tracking-tight mb-16 cursor-text min-h-[200px] flex items-center justify-center flex-wrap gap-x-3 gap-y-1"
                    onClick={() => inputRef.current?.focus()}
                >
                    {quote.split('').map((char, index) => {
                        let color = 'text-gray-200';
                        let isCurrent = index === userInput.length;

                        if (index < userInput.length) {
                            color = userInput[index] === char ? 'text-black' : 'text-red-500 line-through decoration-2';
                        }

                        return (
                            <span key={index} className={`relative ${color} transition-colors duration-100`}>
                                {char === ' ' ? '\u00A0' : char}
                                {isCurrent && !isFinished && (
                                    <motion.span
                                        layoutId="cursor"
                                        className="absolute -left-[1px] top-1 h-[90%] w-[2px] bg-blue-600"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </span>
                        );
                    })}

                    {/* Hidden Input */}
                    <input
                        ref={inputRef}
                        type="text"
                        value={userInput}
                        onChange={handleInputChange}
                        className="absolute opacity-0 top-0 left-0 w-full h-full cursor-default"
                        autoFocus
                    />
                </div>

                {/* Stats */}
                <div className="flex justify-center gap-16 mb-12 border-t border-gray-100 pt-12">
                    <div className="text-center">
                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">WPM</p>
                        <motion.p
                            key={wpm}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-5xl font-light text-black"
                        >
                            {isFinished ? wpm : (startTime ? '...' : '-')}
                        </motion.p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Accuracy</p>
                        <motion.p
                            key={accuracy}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-5xl font-light text-black"
                        >
                            {accuracy}%
                        </motion.p>
                    </div>
                </div>

                {/* Reset Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetGame}
                    className="px-8 py-3 bg-black text-white text-sm uppercase tracking-widest rounded-full hover:bg-gray-800 transition-colors"
                >
                    {isFinished ? 'Try Again' : 'Reset'}
                </motion.button>
            </div>
        </section>
    );
}

export default CreativeSection;
