import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "remixicon/fonts/remixicon.css";

gsap.registerPlugin(ScrollTrigger);

const Background = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // Initial entrance animation
            // gsap.fromTo(
            //     ".main",
            //     { scale: 1.7, rotate: -10 },
            //     {
            //         scale: 1,
            //         rotate: 0,
            //         duration: 2.75,
            //         ease: "expo.inOut",
            //     }
            // );

            // gsap.fromTo(
            //     [".sky", ".bg", ".character", ".text"],
            //     { opacity: 0 },
            //     { opacity: 1, duration: 1.5, delay: 0.3 }
            // );

            // Mouse move parallax
            const handleMouseMove = (e) => {
                const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
                const yMove = (e.clientY / window.innerHeight - 0.5) * 40;

                gsap.to(".text", {
                    x: xMove * 0.1,
                    y: yMove * 0.1,
                    duration: 0.5,
                    ease: "power3.out",
                });

                gsap.to(".character", {
                    x: xMove * 0.7,
                    y: yMove * 0.2, // Slight vertical movement too
                    duration: 0.5,
                    ease: "power1.out",
                });
            };

            window.addEventListener("mousemove", handleMouseMove);

            // Scroll Parallax
            // Scroll Parallax
            gsap.to(".text", {
                yPercent: 50, // Moves down faster
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 20%",
                    end: "+=200%",
                    scrub: true,
                },
            });

            gsap.to(".character", {
                yPercent: 20, // Moves down slower
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=100%",
                    scrub: true,
                },
            });

            return () =>
                window.removeEventListener("mousemove", handleMouseMove);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden bg-primary font-['Arial_Black']"
        >
            <div className="main w-full h-full">
                <div className="landing relative w-full h-full bg-primary">
                    <div className="imagesdiv relative w-full h-full overflow-hidden">

                        <div className="text text-charcoal flex flex-col gap-4 absolute top-1/2 left-10 md:left-24 -translate-y-1/2 max-w-md z-50">
                            <p className="bio font-mono text-xs md:text-sm leading-relaxed tracking-wide text-justify">
                                hi I’m a second-year student who enjoys designing and building things, turning ideas into practical solutions.
                                Curious by nature, I like learning new technologies and using them to create clean, functional projects.
                            </p>
                        </div>

                        <div className="text text-charcoal flex gap-6 fixed bottom-10 right-10 z-50">
                            <a href="https://www.linkedin.com/in/abhishek-ratnakar-668625322/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs md:text-sm hover:opacity-70 transition-opacity uppercase tracking-wide">
                                LinkedIn
                            </a>
                            <a href="https://github.com/abhishekratnakar31" target="_blank" rel="noopener noreferrer" className="font-mono text-xs md:text-sm hover:opacity-70 transition-opacity uppercase tracking-wide">
                                Github
                            </a>
                        </div>



                        <img
                            className="absolute character bottom-30 left-1/2 -translate-x-1/2 scale-[1] grayscale transition-all duration-500 will-change-transform"
                            src="me.png"
                            alt="Character"
                        />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-transparent to-transparent text-charcoal flex justify-between items-end">
                        <div className="flex gap-4 items-center opacity-50 animate-bounce">
                            {/* <i className="text-4xl ri-arrow-down-line"></i>
                            <h3 className="text-xl font-mono">Scroll Down</h3> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Background;

