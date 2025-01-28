import { motion } from "framer-motion";

const ProjectSection = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-featured e-commerce platform built with React and Node.js",
      image: "/projects/ecommerce.jpg",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      image: "/projects/taskmanager.jpg",
      tags: ["React", "Firebase", "Material-UI"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing my work and skills",
      image: "/projects/portfolio.jpg",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project"
    }
  ];

  return (
    <motion.div
      className="p-8 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="text-4xl lg:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center"
        whileHover={{ scale: 1.05 }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-primary transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium
                           hover:bg-primary/90 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 text-white rounded-full text-sm font-medium
                           hover:bg-gray-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectSection;
