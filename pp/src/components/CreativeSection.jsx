import { useState, useEffect, useRef } from 'react';

function CreativeSection() {
    const text = "Code is like humor. When you have to explain it, it’s bad.";
    const [userInput, setUserInput] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(100);
    const [isFinished, setIsFinished] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isFinished) return;
        inputRef.current?.focus();
    }, [isFinished]);

    const handleInputChange = (e) => {
        if (isFinished) return;

        const value = e.target.value;
        if (!startTime) {
            setStartTime(Date.now());
        }

        setUserInput(value);

        // Calculate Accuracy
        let correctChars = 0;
        for (let i = 0; i < value.length; i++) {
            if (value[i] === text[i]) {
                correctChars++;
            }
        }
        setAccuracy(Math.round((correctChars / value.length) * 100) || 100);

        // Check if finished
        if (value.length >= text.length) {
            setIsFinished(true);
            const timeTaken = (Date.now() - startTime) / 60000; // in minutes
            const wordsTyped = value.length / 5;
            setWpm(Math.round(wordsTyped / timeTaken));
        }
    };

    const resetGame = () => {
        setUserInput('');
        setStartTime(null);
        setWpm(0);
        setAccuracy(100);
        setIsFinished(false);
        inputRef.current?.focus();
    };

    return (
        <section className="h-screen bg-primary text-charcoal flex flex-col items-center justify-center relative overflow-hidden px-4">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-primary rounded-full blur-[100px] opacity-30 animate-pulse pointer-events-none"></div>
            <div className="absolute top-1/3 left-1/3 w-[30vw] h-[30vw] bg-gray-900 rounded-full blur-[100px] opacity-10 mix-blend-multiply pointer-events-none"></div>

            <div className="z-10 text-center max-w-4xl w-full">
                <h2 className="text-3xl md:text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black">
                    Test Your Typing Speed
                </h2>

                <div
                    className="relative text-2xl md:text-4xl font-mono leading-relaxed tracking-wide mb-8 p-6 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg cursor-text"
                    onClick={() => inputRef.current?.focus()}
                >
                    {text.split('').map((char, index) => {
                        let color = 'text-gray-400';
                        if (index < userInput.length) {
                            color = userInput[index] === char ? 'text-green-600' : 'text-red-500';
                        }
                        return (
                            <span key={index} className={color}>
                                {char}
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
                <div className="flex justify-center gap-12 mb-8">
                    <div className="text-center">
                        <p className="text-gray-500 text-sm uppercase tracking-wider">WPM</p>
                        <p className="text-4xl font-bold">{isFinished ? wpm : '-'}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-500 text-sm uppercase tracking-wider">Accuracy</p>
                        <p className="text-4xl font-bold">{accuracy}%</p>
                    </div>
                </div>

                {/* Reset Button */}
                <button
                    onClick={resetGame}
                    className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg"
                >
                    {isFinished ? 'Try Again' : 'Reset'}
                </button>
            </div>
        </section>
    );
}

export default CreativeSection;
