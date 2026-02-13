import { motion } from "framer-motion";

const AboutMe = () => {
    const text =
        "My name is Abhishek Ratnakar, from Beas, Punjab, a second-year student who chose tech for stability and got existential bugs instead. I’m into frontend, backend, databases, and AI, meaning I argue with code daily, break things professionally, overthink everything, and still pretend I’m learning by choice.";

    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <section className="relative z-10 w-full min-h-[200vh] bg-white text-black py-24 px-8 md:px-24 flex flex-col items-center justify-center">
            <div className="max-w-4xl text-center">
                <motion.p
                    className="text-lg md:text-xl font-medium leading-relaxed flex flex-wrap"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-100px" }} // Trigger slightly before the element is fully in view
                >
                    {words.map((word, index) => (
                        <span key={index} className="mr-2 inline-block">
                            {word.split("").map((letter, i) => (
                                <motion.span key={i} variants={child}>
                                    {letter}
                                </motion.span>
                            ))}
                        </span>
                    ))}
                </motion.p>
            </div>
        </section>
    );
};

export default AboutMe;
