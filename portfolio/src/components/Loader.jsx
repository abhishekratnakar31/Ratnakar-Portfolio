import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onComplete }) => {
    const [currentLetter, setCurrentLetter] = useState("");
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < letters.length) {
            const timeout = setTimeout(() => {
                setCurrentLetter(letters[index]);
                setIndex((prev) => prev + 1);
            }, 80); // Adjust speed here
            return () => clearTimeout(timeout);
        } else {
            // Small delay after 'Z' before starting curtain lift
            const timer = setTimeout(() => {
                onComplete();
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [index, letters, onComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white px-5"
        >
            <div className="flex flex-col items-center">
                <motion.h1
                    className="text-6xl md:text-9xl font-mono font-bold tracking-tighter"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {currentLetter}
                </motion.h1>

                {/* Optional: Subtle indicator of letters passed */}
                <div className="mt-8 flex gap-1 opacity-20 overflow-hidden max-w-xs justify-center">
                    {letters.map((l, i) => (
                        <span key={i} className={`text-[10px] font-mono transition-colors ${i <= index - 1 ? "text-white opacity-100" : "text-gray-500"}`}>
                            {l}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Loader;
