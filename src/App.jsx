import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Bye.. bye.. 2023"]);

  const particlesInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeLeft() {
    const newYearDate = new Date("Januari 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();

    const remainingTime = newYearDate - nowDate;

    return remainingTime;
  }

  return (
    <>
      <Particles
        init={particlesInitialization}
        options={{ preset: "fireworks" }}
      />

      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold px-4 z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursor
            cursorStyle={"✨"}
          />
        </span>
        <div className="z-50 text-white font-bold text-3xl">
          <Countdown
            date={Date.now() + timeLeft()}
            onComplete={() =>
              setNewYearMessage(["SELAMAT", "TAHUN", "BARU", "2024"])
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
