import Background from "./Background";

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative text-white overflow-hidden">
      <Background />
      {/* <h1 className="relative z-10 text-[clamp(4rem,12vw,12rem)] font-black tracking-[-0.04em]">
        Ratnakar
      </h1> */}
    </section>
  );
}

export default Hero;
