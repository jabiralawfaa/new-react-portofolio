import { motion } from "framer-motion";

function AnimatedBox() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="w-32 h-32 bg-blue-500">
      Hello, Vite + React + Tailwind + Framer Motion!
    </motion.div>
  );
}

export default AnimatedBox;
