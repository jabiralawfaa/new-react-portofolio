import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.div className="text-center mb-12" variants={itemVariants}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to reach out through any of the channels below.
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Form */}
        <motion.div 
          className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8"
          variants={itemVariants}
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-white">Send Me a Message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info & Social Links */}
        <motion.div 
          className="space-y-6 sm:space-y-8"
          variants={itemVariants}
        >
          {/* Quick Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center p-4 bg-gray-800/50 backdrop-blur-lg rounded-xl hover:bg-gray-700/50 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/10 flex items-center justify-center mr-3 group-hover:bg-purple-500/20 transition-all duration-300">
                <span className="text-lg sm:text-xl text-purple-500">✉️</span>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-300">Email</h4>
                <p className="text-xs sm:text-sm text-gray-400">your.email@example.com</p>
              </div>
            </a>
            <a
              href="https://wa.me/yourwhatsappnumber"
              className="flex items-center p-4 bg-gray-800/50 backdrop-blur-lg rounded-xl hover:bg-gray-700/50 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/10 flex items-center justify-center mr-3 group-hover:bg-purple-500/20 transition-all duration-300">
                <span className="text-lg sm:text-xl">📱</span>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-300">WhatsApp</h4>
                <p className="text-xs sm:text-sm text-gray-400">+1234567890</p>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-white">Connect With Me</h3>
            <div className="grid grid-cols-2 gap-4">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-700/50 rounded-xl hover:bg-gray-600/50 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-600/50 flex items-center justify-center mr-3 group-hover:bg-gray-500/50 transition-all duration-300">
                  <span className="text-lg sm:text-xl">👨‍💻</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">GitHub</h4>
                  <p className="text-xs text-gray-400">@yourusername</p>
                </div>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-700/50 rounded-xl hover:bg-gray-600/50 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-600/50 flex items-center justify-center mr-3 group-hover:bg-gray-500/50 transition-all duration-300">
                  <span className="text-lg sm:text-xl">💼</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">LinkedIn</h4>
                  <p className="text-xs text-gray-400">@yourusername</p>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Location Info */}
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8"
            variants={itemVariants}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Location</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Based in Indonesia<br />
              Available for remote work worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;