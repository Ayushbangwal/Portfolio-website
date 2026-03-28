import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, GitBranch, Terminal, Zap } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const skills = [
    { name: 'HTML', icon: Globe, level: 90, color: 'text-orange-400' },
    { name: 'CSS', icon: Globe, level: 85, color: 'text-blue-400' },
    { name: 'JavaScript', icon: Zap, level: 80, color: 'text-yellow-400' },
    { name: 'React', icon: Code, level: 75, color: 'text-cyan-400' },
    { name: 'Node.js', icon: Terminal, level: 70, color: 'text-green-400' },
    { name: 'Git & GitHub', icon: GitBranch, level: 85, color: 'text-red-400' },
    { name: 'Database', icon: Database, level: 65, color: 'text-purple-400' },
    { name: 'Python', icon: Code, level: 70, color: 'text-blue-300' },
  ];

  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 
            bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          <motion.div variants={itemVariants}
            className="w-32 h-1 bg-gradient-to-r from-blue-400 
            to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-2xl p-8">

              <h3 className="text-xl font-bold mb-3 text-white flex 
              items-center gap-2">
                <span className="text-blue-400"></span> Who I Am
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                I'm a passionate engineering student and aspiring software 
                developer with a strong foundation in web development and 
                programming. Currently pursuing my degree in Computer 
                Engineering, I'm constantly learning and exploring new 
                technologies to build innovative solutions.
              </p>

              <h3 className="text-xl font-bold mb-3 text-white flex 
              items-center gap-2">
                <span className="text-purple-400"></span> My Interests
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                I'm deeply interested in web development, artificial 
                intelligence, and creating user-friendly applications. I love 
                working with modern JavaScript frameworks, exploring AI/ML 
                concepts, and contributing to open-source projects.
              </p>

              <h3 className="text-xl font-bold mb-3 text-white flex 
              items-center gap-2">
                <span className="text-green-400"></span> My Goals
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                I aim to become a full-stack developer who can create 
                end-to-end solutions. I'm actively working on expanding my 
                skill set, building real-world projects, and seeking 
                opportunities to collaborate with other developers.
              </p>

              {/* Quick info badges */}
              <div className="flex flex-wrap gap-2 mt-6 pt-6 
              border-t border-white/10">
                {[
                  '📍 Srinagar, Uttarakhand',
                  '🎓 Computer Engineering',
                  '💼 Open to Opportunities',
                  '🌐 Full Stack Developer'
                ].map((badge) => (
                  <span key={badge}
                    className="text-xs px-3 py-1.5 bg-blue-500/10 
                    border border-blue-500/20 text-blue-300 rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-2xl p-8">

              <h3 className="text-xl font-bold mb-6 text-white text-center">
                Technical Skills
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.04, y: -2 }}
                      className="bg-white/5 border border-white/10 
                      rounded-xl p-4 hover:border-blue-500/30 
                      hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center mb-2.5 gap-2">
                        <Icon className={`w-4 h-4 ${skill.color}`} />
                        <span className="font-medium text-white text-sm">
                          {skill.name}
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-1.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-blue-400 
                          to-purple-500 h-1.5 rounded-full"
                        />
                      </div>
                      <span className="text-xs text-gray-400 mt-1.5 block">
                        {skill.level}%
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              <motion.p variants={itemVariants}
                className="mt-5 text-center text-gray-400 text-sm">
                Always learning and expanding my skillset! 
              </motion.p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;