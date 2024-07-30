import { useState, useEffect } from "react";
import { crew } from "../ui/constants";
import { motion } from "framer-motion";

export const Crew = () => {
  const crewKeys = Object.keys(crew);
  const [selectedCrew, setSelectedCrew] = useState("DOUG");

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const [transitionDirection, setTransitionDirection] = useState("");
  const [transitionType, setTransitionType] = useState("transform");
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const currentIndex = crewKeys.indexOf(selectedCrew);
      if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % crewKeys.length;
        setTransitionDirection("right");
        setTimeout(() => {
          setSelectedCrew(crewKeys[nextIndex]);
          setTransitionDirection("");
        }, 500);
      } else if (e.key === "ArrowLeft") {
        const prevIndex =
          (currentIndex - 1 + crewKeys.length) % crewKeys.length;
        setTransitionDirection("left");
        setTimeout(() => {
          setSelectedCrew(crewKeys[prevIndex]);
          setTransitionDirection("");
        }, 500);
      }
    };

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      setTouchStartX(touch.clientX);
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      setTouchEndX(touch.clientX);
    };

    const handleTouchEnd = () => {
      if (touchStartX !== null && touchEndX !== null) {
        if (touchStartX - touchEndX > 50) {
          // Swipe left
          const currentIndex = crewKeys.indexOf(selectedCrew);
          const nextIndex = (currentIndex + 1) % crewKeys.length;
          setTransitionDirection("right");
          setTimeout(() => {
            setSelectedCrew(crewKeys[nextIndex]);
            setTransitionDirection("");
          }, 500);
        }

        if (touchEndX - touchStartX > 50) {
          // Swipe right
          const currentIndex = crewKeys.indexOf(selectedCrew);
          const prevIndex =
            (currentIndex - 1 + crewKeys.length) % crewKeys.length;
          setTransitionDirection("left");
          setTimeout(() => {
            setSelectedCrew(crewKeys[prevIndex]);
            setTransitionDirection("");
          }, 500);
        }

        setTouchStartX(null);
        setTouchEndX(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [crewKeys, selectedCrew, touchStartX, touchEndX]);

  const { img, rank, name, description } = crew[selectedCrew];

  const handleCircleClicks = (key) => {
    setTransitionType("opacity");
    setOpacity(0); // Start fading out
    setTimeout(() => {
      setSelectedCrew(key);
      setOpacity(1); // Fade in
    }, 500); // Duration of the fade-out transition
  };

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div
        className="
        xs:bg-crew-bg-xs
        sm:bg-crew-bg-sm
        md:bg-crew-bg-md
        lg:bg-crew-bg
        xl:bg-crew-bg
        2xl:bg-crew-bg
        min-h-screen bg-cover bg-center text-white flex flex-col p-4"
      >
        <h1 className="lg:mt-[20vh] xs:mt-[100px] sm:mt-[100px] md:mt-[20vw] lg:text-3xl md:text-2xl xs:text-xl sm:text-xl md:mb-[50px] md:ml-[5vw] xs:text-center lg:text-left sm:text-center xs:mb-[50px] sm:mb-[50px]">
          <span className="text-slate-gray">02</span> MEET YOUR CREW
        </h1>

        <div
          className={`lg:mt-[10vh] lg:ml-[25vh] flex lg:flex-row xs:flex-col sm:flex-col md:flex-col md:text-center xs:text-center sm:text-center lg:hidden transform transition-transform duration-500 ${
            transitionDirection === "right"
              ? "-translate-x-full"
              : transitionDirection === "left"
              ? "translate-x-full"
              : "translate-x-0"
          }`}
        >
          <div
            className={`flex lg:text-left flex-col lg:mr-60 xs:mb-[20px] sm:mb-[20px] ${
              transitionType === "transform"
                ? "transform transition-transform duration-500"
                : "transition-opacity duration-500"
            }`}
            style={{ opacity }}
          >
            <h2 className="bellefair text-xl mb-4 lg:mt-[10vh] uppercase text-slate-gray">
              {rank}
            </h2>
            <h3 className="bellefair text-2xl mb-4 uppercase">{name}</h3>
            <p className="mb-8 text-pale-blue lg:mt-[2vh] xs:leading-snug sm:leading-snug whitespace-pre-line">
              {description}
            </p>
          </div>
        </div>
        <div className="flex lg:hidden md:justify-center md:mb-[50px] xs:justify-center sm:justify-center md:mt-4 xs:mb-[50px] sm:mb-[50px]">
          {crewKeys.map((key) => (
            <div
              key={key}
              className={`w-5 h-5 rounded-full mx-3 ${
                selectedCrew === key ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => handleCircleClicks(key)}
            ></div>
          ))}
        </div>
        <div
          className={`lg:hidden transform transition-transform duration-500 ${
            transitionDirection === "right"
              ? "translate-x-full"
              : transitionDirection === "left"
              ? "-translate-x-full"
              : "translate-x-0"
          }`}
        >
          <img
            src={img}
            alt={name}
            className={`w-full md:w-[400px] xs:w-[300px] sm:w-[300px] md:ml-[200px] xs:ml-[35px] sm:ml-[35px] h-auto object-contain mb-10 ${
              transitionType === "transform"
                ? "transform transition-transform duration-500"
                : "transition-opacity duration-500"
            }`}
            style={{ opacity }}
          />
        </div>
        {/* large devices */}
        <div
          className={`lg:ml-[25vh] lg:flex lg:flex-row xs:flex-col sm:flex-col md:flex-col md:text-center md:hidden xs:hidden sm:hidden transform ${
            transitionType === "transform"
              ? "transform transition-transform duration-500"
              : "transition-opacity duration-500"
          }`}
          style={{ opacity }}
        >
          <div
            className={`flex lg:text-left flex-col lg:mr-6 transition-transform duration-500 ${
              transitionDirection === "right"
                ? "-translate-x-full"
                : transitionDirection === "left"
                ? "-translate-x-full"
                : "translate-x-0"
            }`}
            style={{ opacity }}
          >
            <h2 className="text-[32px]  mb-4 lg:mt-[10vh] uppercase text-slate-gray">
              {rank}
            </h2>
            <h3 className="font text-[32px]  uppercase">{name}</h3>
            <p className="mb-8 text-pale-blue leading-loose lg:mt-[2vh] whitespace-pre-line">
              {description}
            </p>
          </div>

          <div
            className={`ml-[200px] transition-transform duration-500 ${
              transitionDirection === "right"
                ? "translate-x-full"
                : transitionDirection === "left"
                ? "translate-x-full"
                : "translate-x-0"
            }`}
            style={{ opacity }}
          >
            <img
              src={img}
              alt={name}
              className="w-full max-w-[500px] mr-[100px] h-auto object-contain"
            />
          </div>
        </div>

        <div className="lg:flex lg:justify-start md:hidden xs:hidden sm:hidden lg:ml-[200px] cursor-pointer">
          {crewKeys.map((key) => (
            <div
              key={key}
              className={`w-5 h-5 rounded-full mx-5 hover:bg-slate-300 ${
                selectedCrew === key ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => handleCircleClicks(key)}
            ></div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
