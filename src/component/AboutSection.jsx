import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Node.js", level: 75 },
    { name: "UI/UX Design", level: 85 },
  ];

  return (
    <motion.div
      className="p-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        whileHover={{ scale: 1.05 }}
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">Who I Am</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              I'm a passionate Frontend Developer with a keen eye for design and a 
              commitment to creating engaging user experiences.
            </p>
            <p>
              With several years of experience in web development, I specialize in 
              building responsive and interactive web applications using modern 
              technologies and best practices.
            </p>
            <p>
              My goal is to combine technical expertise with creative design to 
              deliver solutions that not only meet technical requirements but also 
              delight users.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white">My Skills</h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6 text-white">Experience</h3>
        <div className="space-y-8">
          <motion.div
            className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <h4 className="text-xl font-semibold text-primary mb-2">Senior Frontend Developer</h4>
            <p className="text-gray-400 mb-2">Tech Company • 2021 - Present</p>
            <p className="text-gray-300">
              Led frontend development for multiple high-impact projects, implementing 
              modern web technologies and best practices.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <h4 className="text-xl font-semibold text-primary mb-2">UI/UX Designer</h4>
            <p className="text-gray-400 mb-2">Design Studio • 2019 - 2021</p>
            <p className="text-gray-300">
              Created user-centered designs and prototypes for web and mobile applications,
              collaborating with development teams to ensure pixel-perfect implementation.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
