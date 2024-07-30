import { useEffect, useState } from "react";
import { technologies } from "../ui/constants";
import { motion } from 'framer-motion';

export const Technology = () => {
  const techKeys = Object.keys(technologies);
  const [selectedTech, setSelectedTech] = useState("LAUNCHVEHICLE");
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [transitionDirection, setTransitionDirection] = useState("");
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const currentIndex = techKeys.indexOf(selectedTech);
      if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % techKeys.length;
        setTransitionDirection("right");
        setTimeout(() => {
          setSelectedTech(techKeys[nextIndex]);
          setTransitionDirection("");
        }, 500);
      } else if (e.key === "ArrowLeft") {
        const prevIndex =
          (currentIndex - 1 + techKeys.length) % techKeys.length;
        setTransitionDirection("left");
        setTimeout(() => {
          setSelectedTech(techKeys[prevIndex]);
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
          const currentIndex = techKeys.indexOf(selectedTech);
          const nextIndex = (currentIndex + 1) % techKeys.length;
          setTransitionDirection("right");
          setTimeout(() => {
            setSelectedTech(techKeys[nextIndex]);
            setTransitionDirection("");
          }, 500);
        }

        if (touchEndX - touchStartX > 50) {
          // Swipe right
          const currentIndex = techKeys.indexOf(selectedTech);
          const prevIndex =
            (currentIndex - 1 + techKeys.length) % techKeys.length;
          setTransitionDirection("left");
          setTimeout(() => {
            setSelectedTech(techKeys[prevIndex]);
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
  }, [selectedTech, techKeys, touchEndX, touchStartX]);

  const { title, technology, description, img, imgtablet, imgmobile } =
    technologies[selectedTech];

  const handleCircleClick = (key) => {
    setTransitionDirection("fade");
    setOpacity(0); // Start fading out
    setTimeout(() => {
      setSelectedTech(key);
      setOpacity(1); // Fade in
      setTransitionDirection("");
    }, 500); // Duration of the fade-out transition
  };

  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '100vw' }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div
        className="min-h-screen bg-cover bg-center text-white flex 
          flex-col xs:bg-technology-bg-xs sm:bg-technology-bg-sm md:bg-technology-bg-md lg:bg-technology-bg 
          xl:bg-technology-bg 2xl:bg-technology-bg"
      >
        <h1
          className="xs:mt-[100px] sm:mt-[100px] md:mt-[20vw] md:text-2xl sm:text-xl 
            md:mb-[50px] lg:mt-[20vh] lg:text-3xl md:ml-[5vw] lg:text-left xs:text-center sm:text-center xs:mb-[50px] sm:mb-[50px]"
        >
          <span className="text-slate-gray">03</span> SPACE LAUNCH 101
        </h1>
        {/* Smaller devices */}
        <div className="lg:hidden">
          <div
            className={`flex xs:flex-col sm:flex-col md:flex-col md:text-center 
              sm:text-center transform transition-transform duration-700 ${
                transitionDirection === "right"
                  ? "-translate-x-full"
                  : transitionDirection === "left"
                  ? "translate-x-full"
                  : "translate-x-0"
              }`}
          >
            <img
              src={img}
              srcSet={`${imgmobile} 430w, ${imgtablet} 768w`}
              alt={technology}
              className={`w-full xs:w-[100vw] sm:w-[100vw] h-auto 
                object-contain mb-10 ${
                  transitionDirection === "fade"
                    ? "transition-opacity duration-500"
                    : "transform transition-transform duration-500"
                }`}
              style={{ opacity }}
            />
          </div>

          <div className="flex justify-center items-center mb-[50px] mt-4">
            {techKeys.map((key, index) => (
              <div
                key={key}
                className={`w-10 h-10 flex justify-center items-center 
                  rounded-full mx-3 ${
                    selectedTech === key
                      ? "bg-white text-black"
                      : "bg-gray-500 text-white"
                  }`}
                onClick={() => handleCircleClick(key)}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div
            className={`flex flex-col xs:mb-[20px] sm:mb-[20px] md:text-center 
              sm:text-center ${
                transitionDirection === "fade"
                  ? "transition-opacity duration-500"
                  : "transform transition-transform duration-500"
              }`}
            style={{ opacity }}
          >
            <div
              className={`transform transition-transform duration-500 ${
                transitionDirection === "right"
                  ? "translate-x-full"
                  : transitionDirection === "left"
                  ? "-translate-x-full"
                  : "translate-x-0"
              }`}
            >
              <h2 className="text-center mb-4 uppercase text-slate-gray">{title}</h2>
              <h3 className="text-xl text-center mb-4 uppercase ">{technology}</h3>
              <p className="m-8 text-center xs:leading-snug sm:leading-snug text-pale-blue whitespace-pre-line">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Larger devices */}
        <div className="md:hidden sm:hidden xs:hidden lg:flex">
          <div
            className={`lg:ml-[25vh] flex lg:flex-row${
              transitionDirection === "fade"
                ? "transition-opacity duration-500"
                : "transform transition-transform duration-500"
            }`}
            style={{ opacity }}
          >
            <div className="flex lg:text-left flex-row lg:mr-60">
              <div
                className="md:hidden sm:hidden lg:block items-center 
              lg:mt-[10vh]"
              >
                {techKeys.map((key, index) => (
                  <div
                    key={key}
                    className={`w-10 h-10 flex justify-center items-center 
                      rounded-full mr-12 mb-14 border border-white-400 ${
                        selectedTech === key
                          ? "bg-white text-black"
                          : "bg-gray-500 text-white"
                      }`}
                    onClick={() => handleCircleClick(key)}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
              <div
                className={`flex-col lg:mt-[10vh]
              transform transition-transform duration-500 ${
                transitionDirection === "right"
                  ? "-translate-x-full"
                  : transitionDirection === "left"
                  ? "-translate-x-full"
                  : "translate-x-0"
              }`}
              >
                <h2 className="text-3xl mb-8 uppercase text-slate-gray">
                  {title}
                </h2>
                <h3 className="text-4xl mb-12 uppercase">{technology}</h3>
                <p className="mb-8 text-pale-blue text-xl leading-7 whitespace-pre-line">
                  {description}
                </p>
              </div>
            </div>
            <div
              className={`transform transition-transform duration-500 ${
                transitionDirection === "right"
                  ? "translate-x-full"
                  : transitionDirection === "left"
                  ? "translate-x-full"
                  : "translate-x-0"
              }`}
            >
              <img
                src={img}
                alt={technology}
                className="w-[100vw] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
