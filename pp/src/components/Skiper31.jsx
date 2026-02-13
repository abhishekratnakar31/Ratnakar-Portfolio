"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";

import { cn } from "../lib/utils";

const CharacterV1 = ({
    char,
    index,
    centerIndex,
    scrollYProgress,
}) => {
    const isSpace = char === " ";

    const distanceFromCenter = index - centerIndex;

    const x = useTransform(
        scrollYProgress,
        [0, 0.5],
        [distanceFromCenter * 50, 0],
    );
    const rotateX = useTransform(
        scrollYProgress,
        [0, 0.5],
        [distanceFromCenter * 50, 0],
    );

    return (
        <motion.span
            className={cn("inline-block text-black", isSpace && "w-2")}
            style={{
                x,
                rotateX,
            }}
        >
            {char}
        </motion.span>
    );
};
const CharacterV2 = ({
    char,
    index,
    centerIndex,
    scrollYProgress,
}) => {
    const isSpace = char === " ";
    const distanceFromCenter = index - centerIndex;

    const x = useTransform(
        scrollYProgress,
        [0, 0.5],
        [distanceFromCenter * 50, 0],
    );
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

    const y = useTransform(
        scrollYProgress,
        [0, 0.5],
        [Math.abs(distanceFromCenter) * 50, 0],
    );

    return (
        <motion.img
            src={char}
            className={cn(
                "mx-1 inline-block h-20 w-20 rounded-2xl bg-white object-contain p-2 md:h-28 md:w-28 md:rounded-3xl",
                isSpace && "w-4",
            )}
            style={{
                x,
                scale,
                y,
                transformOrigin: "center",
            }}
        />
    );
};
const CharacterV3 = ({
    char,
    index,
    centerIndex,
    scrollYProgress,
}) => {
    const isSpace = char === " ";
    const distanceFromCenter = index - centerIndex;

    const x = useTransform(
        scrollYProgress,
        [0, 0.5],
        [distanceFromCenter * 90, 0],
    );
    const rotate = useTransform(
        scrollYProgress,
        [0, 0.5],
        [distanceFromCenter * 50, 0],
    );

    const y = useTransform(
        scrollYProgress,
        [0, 0.5],
        [-Math.abs(distanceFromCenter) * 20, 0],
    );
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

    return (
        <motion.img
            src={char}
            className={cn(
                "mx-1 inline-block h-20 w-20 rounded-2xl bg-white object-contain p-2 md:h-28 md:w-28 md:rounded-3xl",
                isSpace && "w-4",
            )}
            style={{
                x,
                rotate,
                y,
                scale,
                transformOrigin: "center",
            }}
        />
    );
};

const Skiper31 = () => {
    const targetRef = useRef(null);
    const targetRef2 = useRef(null);
    const targetRef3 = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: targetRef2,
    });
    const { scrollYProgress: scrollYProgress3 } = useScroll({
        target: targetRef3,
    });

    const text = "TechStack I have worked on";
    const characters = text.split("");
    const centerIndex = Math.floor(characters.length / 2);

    const macIcon = [
        "/html5.png",
        "/js.png",
        "/css.png",
        "/java.png",
        "/react.svg",
        "/nodejs.png",
        "/mongo.png",
        "/python.png",
        "/django.png",
        "/typescript-2.svg",
        "/docker.png",
        "/github.png",
        "/nextjs.png",
        "/mysql.png",





    ];
    const iconCenterIndex = Math.floor(macIcon.length / 2);

    return (
        <ReactLenis root>
            <main className="w-full bg-white">
                <div
                    ref={targetRef}
                    className="relative box-border flex h-[200vh] items-center justify-center gap-[2vw] overflow-hidden bg-white p-[2vw]"
                >
                    <div
                        className="font-geist w-full max-w-4xl text-center text-3xl font-bold uppercase tracking-tighter text-black"
                        style={{
                            perspective: "500px",
                        }}
                    >
                        {characters.map((char, index) => (
                            <CharacterV1
                                key={index}
                                char={char}
                                index={index}
                                centerIndex={centerIndex}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </div>
                </div>
                <div
                    ref={targetRef3}
                    className="relative -mt-[95vh] box-border flex h-[200vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-white p-[2vw]"
                >
                    {" "}
                    <div
                        className="font-geist w-full max-w-4xl py-50 text-center text-6xl font-bold uppercase tracking-tighter text-black"
                        style={{
                            perspective: "500px",
                        }}
                    >
                        {macIcon.map((char, index) => (
                            <CharacterV3
                                key={index}
                                char={char}
                                index={index}
                                centerIndex={iconCenterIndex}
                                scrollYProgress={scrollYProgress3}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </ReactLenis>
    );
};

export { CharacterV1, CharacterV2, CharacterV3, Skiper31 };

const Bracket = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 27 78"
            className={className}
        >
            <path
                fill="#000"
                d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
            ></path>
        </svg>
    );
};
