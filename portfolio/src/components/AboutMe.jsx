const AboutMe = () => {
    return (
        <section className="relative z-10 w-full min-h-screen bg-white text-black py-24 px-8 md:px-24 flex flex-col items-center justify-center">

            {/* Centered Heading */}
           

            {/* Content Grid */}
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Left Column: Heading */}
                <div className="md:col-span-1">
                    <h3 className="text-lg font-medium">About</h3>
                </div>

                {/* Right Column: Bio Text */}
                <div className="md:col-span-2 text-base md:text-lg font-light leading-relaxed">
                    <p>
                        My name is Abhishek Ratnakar, from Beas, Punjab, a second-year student who chose tech for stability and got existential bugs instead.
                        I’m into frontend, backend, databases, and AI, meaning I argue with code daily, break things professionally, overthink everything, and still pretend I’m learning by choice.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;
