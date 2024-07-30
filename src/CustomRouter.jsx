import { useLocation, Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const CustomRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

export default CustomRouter;
