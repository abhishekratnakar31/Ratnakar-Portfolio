import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

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
            //         duration: 2,
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

                gsap.to(".text", {
                    x: `${xMove * 0.1}%`,
                    duration: 0.5,
                    ease: "power3.out",
                });

                gsap.to(".sky", {
                    x: xMove,
                    duration: 0.5,
                    ease: "power3.out",
                });

                gsap.to(".bg", {
                    x: xMove * 1.7,
                    duration: 0.5,
                    ease: "power3.out",
                });
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () =>
                window.removeEventListener("mousemove", handleMouseMove);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden bg-black font-['Arial_Black']"
        >
            <div className="main w-full h-full">
                <div className="landing relative w-full h-full bg-black">
                    <div className="imagesdiv relative w-full h-full overflow-hidden">
                        <img
                            className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                            src=""
                            alt="Sky"
                        />

                        <img
                            className="absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-full object-cover"
                            src=""
                            alt="Background"
                        />

                        <div className="text text-white  flex flex-col gap-3 absolute top-1/3 left-1/4 -translate-x-1/2  rotate-[0deg]">
                            <h1 className="text-[1rem]  leading-none -ml-10 font-black">
                                {/* Hi i am.... <br /> */}
                            </h1>
                            
                        </div>

                        <img
                            className="absolute character -bottom-[45%] left-1/3 -translate-x-1/2 scale-[1] rotate-[-5deg]"
                            src="me.png"
                            alt="Character"
                        />
                    </div>

                    {/* <div className="absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent text-white flex justify-between items-end">
                        <div className="flex gap-4 items-center opacity-50">
                            <i className="text-4xl ri-arrow-down-line"></i>
                            <h3 className="text-xl">Scroll Down</h3>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Background;
