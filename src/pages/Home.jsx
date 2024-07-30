import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

export const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/destination"); 
  };
  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '100vw' }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div
        className="
        bg-home-bg min-h-screen bg-cover bg-center text-white flex flex-col
        xs:bg-home-bg-xs sm:bg-home-bg-sm
        md:bg-home-bg-md
        lg:bg-home-bg
        xl:bg-home-bg
        2xl:bg-home-bg"
      >
        <div className="flex lg:flex-row md:flex-col xs:flex-col sm:flex-col">
          <div
            className="lg:mt-[50vh] md:mt-[20vh] xs:mt-[20vh] sm:mt-[20vh] 
            xs:text-center sm:text-center lg:text-start md:text-center lg:ml-[18vw]"
          >
            <h1 className="text-pale-blue">
              SO, YOU WANT TO TRAVEL TO <br />
              <span className="text-8xl text-white">SPACE</span>
            </h1>
            <p
              className="whitespace-pre-line lg:text-lg md:text-lg md:leading-loose xs:text-[15px] sm:text-[15px] 
              lg:leading-loose text-pale-blue xs:m-5 sm:m-5 lg:w-[30vw]"
            >
              Let’s be honest: if you dream of going to space, you should 
              experience the real thing. Venturing into the vastness of outer 
              space, not just skimming its edge. Sit back, relax, and prepare 
              for an experience that’s truly out of this world!
            </p>
          </div>
          <div
            className="relative xs:ml-[14vw] sm:ml-[22vw] xs:mt-[10vh] sm:mt-[10vh] lg:mt-[50vh] 
            md:mt-[10vh] lg:mr-[20vw]"
            onClick={handleClick}
          >
            <div className="circle md:ml-[15vw] lg:ml-[2vw]">
              <div className="circle1 flex justify-center items-center">
                <h1 className="text-black text-center text-2xl hover:text-pale-blue">EXPLORE</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
