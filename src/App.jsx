import "./App.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./component/LoadingScreen";
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import Project from "./component/project";
import Contact from "./component/contact";
import ProfilePhoto from "./assets/img/Profile.png";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for page transitions
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  // Animation variants for navigation buttons
  const navButtonVariants = {
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: { 
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden"
          >
            <main className="container mx-auto px-4 py-8">
              <AnimatePresence mode="wait">
                {activeSection === "hero" && (
                  <motion.div
                    key="hero"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="relative"
                  >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                      <div className="lg:w-1/2">
                        <HeroSection />
                      </div>
                      <motion.div 
                        className="lg:w-1/2 flex justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <img 
                          src={ProfilePhoto} 
                          alt="Profile" 
                          className="rounded-2xl w-64 h-64 lg:w-96 lg:h-96 object-cover shadow-2xl 
                                   border-4 border-primary hover:border-secondary transition-all duration-300"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
                
                {activeSection === "about" && (
                  <motion.div
                    key="about"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <AboutSection />
                  </motion.div>
                )}

                {activeSection === "projects" && (
                  <motion.div
                    key="projects"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Project />
                  </motion.div>
                )}

                {activeSection === "contact" && (
                  <motion.div
                    key="contact"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Contact />
                  </motion.div>
                )}
              </AnimatePresence>
            </main>

            <motion.nav 
              className="fixed bottom-0 left-0 right-0 flex justify-center items-center pb-8 z-50"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="bg-gray-800/80 backdrop-blur-lg rounded-full p-2 flex gap-4 shadow-lg border border-gray-700/50">
                {[
                  { id: "hero", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "projects", label: "Projects" },
                  { id: "contact", label: "Contact" }
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    variants={navButtonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => setActiveSection(item.id)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      activeSection === item.id 
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg" 
                        : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
