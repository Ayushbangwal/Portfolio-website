import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, GitBranch, Terminal, Zap } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const skills = [
    { name: 'HTML', icon: Globe, level: 90, color: 'text-orange-500' },
    { name: 'CSS', icon: Globe, level: 85, color: 'text-blue-500' },
    { name: 'JavaScript', icon: Zap, level: 80, color: 'text-yellow-500' },
    { name: 'React', icon: Code, level: 75, color: 'text-cyan-500' },
    { name: 'Node.js', icon: Terminal, level: 70, color: 'text-green-500' },
    { name: 'Git & GitHub', icon: GitBranch, level: 85, color: 'text-red-500' },
    { name: 'Database', icon: Database, level: 65, color: 'text-purple-500' },
    { name: 'Python', icon: Code, level: 70, color: 'text-blue-600' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a passionate engineering student and aspiring software developer with a strong foundation in web development and programming. Currently pursuing my degree in Computer Engineering, I'm constantly learning and exploring new technologies to build innovative solutions.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                My Interests
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm deeply interested in web development, artificial intelligence, and creating user-friendly applications. I love working with modern JavaScript frameworks, exploring AI/ML concepts, and contributing to open-source projects. My goal is to bridge the gap between innovative ideas and practical implementation through clean, efficient code.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                My Goals
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I aim to become a full-stack developer who can create end-to-end solutions. I'm actively working on expanding my skill set, building real-world projects, and seeking opportunities to collaborate with other developers. My ultimate goal is to contribute to meaningful projects that make a positive impact on people's lives.
              </p>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
                Technical Skills
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center mb-2">
                        <Icon className={`w-5 h-5 ${skill.color} mr-2`} />
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                        />
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {skill.level}%
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                variants={itemVariants}
                className="mt-6 text-center"
              >
                <p className="text-gray-600 dark:text-gray-300">
                  Always learning and expanding my skillset!
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
