// src/components/NavbarMobile.jsx
import { useState } from "react";
import { motion } from "framer-motion";
// Import ikon-ikon SVG
import HomeIcon from "../assets/home.svg";
import ProfileIcon from "../assets/profile.svg";
import ProjectIcon from "../assets/project.svg";
import CerificateIcon from "../assets/certificate.svg";

function NavbarMobile() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { icon: HomeIcon, label: "Home" },
    { icon: ProfileIcon, label: "Calendar" },
    { icon: ProjectIcon, label: "Notifications" },
    { icon: CerificateIcon, label: "Settings" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 bg-white rounded-full shadow-lg py-2 px-4 flex justify-around items-center">
      {navItems.map((item, index) => (
        <button key={index} onClick={() => setActiveIndex(index)} className="relative flex flex-col items-center focus:outline-none">
          <motion.div
            className="flex items-center justify-center w-12 h-12 rounded-full"
            animate={{
              backgroundColor: activeIndex === index ? "#000B58" : "transparent",
              transition: { duration: 0.3 },
            }}
          >
            <motion.img
              src={item.icon}
              alt={item.label}
              className={`w-6 h-6 ${activeIndex === index ? "fill-white" : "fill-black"}`}
              initial={{ filter: "brightness(0%)" }}
              animate={{
                filter: activeIndex === index ? "brightness(100%)" : "brightness(0%)",
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>
        </button>
      ))}
    </div>
  );
}

export default NavbarMobile;
