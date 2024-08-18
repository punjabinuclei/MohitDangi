import { motion } from "framer-motion";
import { ComponentType } from "react";

// Type declaration for transition HOC
const transitions = (OgComponent: ComponentType) => {
  return () => (
    <>
      {/* Render the original component */}
      < OgComponent />

      {/* Slide-in motion div */}
      < motion.div
        className="slide-in"
        initial={{ scaleY: 0 }
        }
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Slide-out motion div */}
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default transitions;
