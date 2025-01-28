import { motion } from "framer-motion";

const Project = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      tech: ["React", "TailwindCSS", "Node.js"],
      image: "/project1.jpg",
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      tech: ["Next.js", "TypeScript", "MongoDB"],
      image: "/project2.jpg",
    },
    {
      title: "Project 3",
      description: "Description of project 3",
      tech: ["Vue.js", "Express", "PostgreSQL"],
      image: "/project3.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-48 bg-gray-700">
                {/* Add actual project images here */}
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;