function Hero() {
  return (
    <section
      style={{
        height: "100vh",
        background: "#d9d9d9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }}
    >
      <h1
        style={{
          fontSize: "clamp(4rem, 12vw, 12rem)",
          fontWeight: "900",
          letterSpacing: "-0.04em"
        }}
      >
        RAUB
      </h1>


    </section>
  );
}

export default Hero;
