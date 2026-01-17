import Background from "./Background";
import Banner from "./Banner";

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative text-white overflow-hidden">
      <Background />
      <div className="absolute inset-0 z-10 w-full h-full">
        <Banner />
      </div>
      {/* <h1 className="relative z-10 text-[clamp(4rem,12vw,12rem)] font-black tracking-[-0.04em]">
        Ratnakar
      </h1> */}
    </section>
  );
}

export default Hero;
