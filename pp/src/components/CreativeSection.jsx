function CreativeSection() {
    return (
        <section className="h-screen bg-primary text-white flex items-center justify-center relative overflow-hidden">
            {/* Placeholder for creative visuals - circles, gradients etc */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-primary rounded-full blur-[100px] opacity-30 animate-pulse"></div>
            <div className="absolute top-1/3 left-1/3 w-[30vw] h-[30vw] bg-teal-900 rounded-full blur-[100px] opacity-20 mix-blend-screen"></div>

            <div className="z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-black mb-4">
                    Creation is <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-primary">Chaos</span>
                </h2>
                <p className="text-lg md:text-xl font-light tracking-widest uppercase">
                    But the result is order
                </p>
            </div>
        </section>
    );
}

export default CreativeSection;
