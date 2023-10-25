import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const BasicMotion = () => {
  const [visible, setVisible] = useState(true)


  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button 
        onClick={() => setVisible(prev => !prev)} 
        className="example-button"
        layout
      >Show / hide</motion.button>

      <AnimatePresence mode="popLayout">

        {visible &&

          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}

            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}

            transition={{
              duration: 1,
              ease: "backInOut",
              times:[0, 0.25, 0.5, 0.85, 1],
            }}

            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}

            style={{
              width: 150,
              height: 150,
              background: "black",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}

          >
            h
          </motion.div>
        }
      </AnimatePresence>
    </div>
  );
};

export default BasicMotion;