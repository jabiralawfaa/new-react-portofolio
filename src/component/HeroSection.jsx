import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <motion.div 
      className="p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        whileHover={{ scale: 1.05 }}
      >
        Hello, I'm
      </motion.h2>
      
      <motion.h1 
        className="text-5xl lg:text-7xl font-extrabold mb-6"
        whileHover={{ scale: 1.05 }}
      >
        Rusydi Jabir Alawfa
      </motion.h1>

      <div className="text-xl lg:text-2xl mb-8 text-gray-300">
        <Typewriter
          options={{
            strings: [
              'Frontend Developer',
              'UI/UX Designer',
              'Web Developer'
            ],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </div>

      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
        Passionate about creating beautiful and functional web experiences. 
        Specialized in modern frontend technologies and responsive design.
      </p>

      <div className="flex gap-4">
        <motion.a
          href="#contact"
          className="px-8 py-3 bg-primary text-white rounded-full font-medium 
                   hover:bg-primary/90 transition-colors duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.a>
        
        <motion.a
          href="#portfolio"
          className="px-8 py-3 bg-gray-800 text-white rounded-full font-medium 
                   hover:bg-gray-700 transition-colors duration-300 border border-gray-700 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Work
        </motion.a>
      </div>

      <div className="mt-12 flex gap-6">
        <motion.a
          href="https://github.com/jabiralawfaa"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
          </svg>
        </motion.a>
        
        <motion.a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -5 }}
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HeroSection;
