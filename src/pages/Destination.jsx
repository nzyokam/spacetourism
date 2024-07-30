import { useState } from "react";
import { destinations } from "../ui/constants";
import { motion } from 'framer-motion';

export const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState("MOON");
  const [opacity, setOpacity] = useState(1);
  const { image, title, description, distance, time, number, acttime } =
    destinations[selectedDestination];

  const handleDestinationClick = (destination) => {
    setOpacity(0);
    setTimeout(() => {
      setSelectedDestination(destination);
      setOpacity(1); // Fade in
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
        className="bg-destination-bg min-h-screen bg-cover bg-center 
        text-white flex flex-col xs:bg-destination-bg-xs sm:bg-destination-bg-sm md:bg-destination-bg-md 
        lg:bg-destination-bg xl:bg-destination-bg 2xl:bg-destination-bg"
      >

        <h1
          className="lg:mt-[20vh] lg:text-left xs:mt-[100px] sm:mt-[100px] md:mt-[20vw] 
          md:ml-[5vw] xs:text-center sm:text-center lg:text-3xl md:text-2xl xs:text-xl sm:text-xl"
        >
          <span className="text-slate-gray">01</span> PICK YOUR DESTINATION
        </h1>

        <div
          className="lg:mt-[15vh] lg:ml-[200px] flex lg:flex-row xs:flex-col sm:flex-col 
          md:flex-col md:text-center"
        >

          <div className={`transition-opacity duration-500`} style={{ opacity }}>
            <img
              src={image}
              className="lg:w-[550px] md:w-[400px] xs:w-[300px] sm:w-[300px] h-auto 
              object-contain lg:mt-0 lg:ml-0 md:mt-[5vw] xs:mt-[10vw] sm:mt-[10vw] 
              xs:ml-auto xs:mr-auto sm:ml-auto sm:mr-auto xs:mb-[20px] sm:mb-[20px]"
              alt={title}
            />
          </div>

          <div className="lg:mt-0 lg:ml-[100px] lg:w-[35vw] xs:mt-[10vw] sm:mt-[10vw] md:mt-[8vw] md:text-center">

            <div className="bc lg:text-left mb-[20px] xs:text-center sm:text-center md:text-center">
              {["MOON", "EUROPA", "MARS", "TITAN"].map((destination) => (
                <button
                key={destination}
                className={`button hover:text-white mr-10 pb-2 ${selectedDestination === destination ? 'selected' : 'text-pale-blue'}`}
                onClick={() => handleDestinationClick(destination)}
              >
                {destination}
              </button>
              
              ))}
            </div>

            <div
              className={`transition-opacity duration-500`}
              style={{ opacity }}
            >

              <div
                className="lg:leading-loose xs:leading-snug sm:leading-snug border-b-2 pb-5
                whitespace-pre-line lg:text-left xs:text-center sm:text-center"
              >
                <span className="bellefair lg:text-8xl xs:text-4xl sm:text-4xl md:text-6xl">
                  {title}
                </span>
                <br />
                <p className="text-pale-blue lg:ml-[0] md:ml-[20vw] md:w-[500px] xs:m-5 sm:m-5">
                {description}</p>
              </div>

            </div>

            <div
              className={` bellefair mt-10 md:ml-[32vw] xs:ml-[35px] sm:ml-[80px] xs:mr-auto 
              sm:mr-auto md:mr-auto md:mb-2 lg:ml-0
              transition-opacity duration-500`}
              style={{ opacity }}
            >
              <div className="flex lg:w-[30vw] lg:gap-40 xs:gap-10 sm:gap-10 text-pale-blue">
                <p>{distance}</p>
                <p>{time}</p>
              </div>
              <div
                className="flex lg:w-[30vw] xs:gap-20 sm:gap-20 mt-[8px] xs:text-xl 
                sm:text-xl lg:text-3xl"
              >
               <p>{number}</p>
               <p>{acttime}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};
