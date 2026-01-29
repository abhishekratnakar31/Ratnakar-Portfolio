function AboutMe() {
    return (
        <section className="relative z-10 h-screen bg-primary text-charcoal flex flex-col justify-center px-8 md:px-24">
            <h2 className="text-6xl md:text-8xl font-black  uppercase tracking-tighter">
                About Me
            </h2>
            <div className="max-w-4xl text-xl md:text-3xl font-light leading-relaxed text-gray-400">
                <p className="mb-8">
                    I am a passionate developer who loves to create digital experiences that live on the internet. My journey started with a curiosity for how things work, and it has evolved into a career of building scalable solutions.
                </p>
                <p>
                    I focus on clean code, modern aesthetics, and user-centric design. Every project is an opportunity to learn something new and push the boundaries of what is possible.
                </p>
            </div>
        </section>
    );
}

export default AboutMe;
