import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Database, Globe } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Champion Records',
      
      description: 'Sports analytics platform to track performance, records, and real-time insights.',
      problem: 'Manual tracking of player stats was inefficient and error-prone.',
      solution: 'Developed a full-stack system to track, manage and visualize sports data with filters and analytics.',
      impact: 'Reduced manual effort and improved data accuracy and accessibility.',
      
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
      githubUrl:"https://github.com/Ayushbangwal/Champion-Records",
      liveUrl: "https://champion-records.vercel.app/",
      category: 'web',
      featured: true,
      icon: Database
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A modern, responsive personal portfolio website built with React and Tailwind CSS, featuring smooth animations and dark mode support.',
      
      problem: 'No central platform to showcase projects and skills.',
      solution: 'Built a responsive portfolio with animations and modern UI.',
      impact: 'Improved professional visibility and personal branding.',
      techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
      githubUrl: 'https://github.com/Ayushbangwal/Portfolio-website',
      liveUrl: 'https://portfolio-website-peach-sigma-81.vercel.app/',
      category: 'web',
      featured: true,
      icon: Globe
    },
    
  ];

  const categories = ['all', 'web', 'ai'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  const ProjectCard = ({ project }) => {
    const Icon = project.icon;
    
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ 
  y: -10,
  scale: 1.02,
  boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
}}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden 
      hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group"
      >
        {/* Project Header */}
        <div className="relative h-48 bg-gradient-to-br from-primary-500 to-accent-500 p-6">
          <div className="absolute top-4 right-4">
            {project.featured && (
              <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>
          <div className="flex items-center justify-center h-full">
            <Icon className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition duration-300" />
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
            {project.title}
          </h3>
          
         <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed">
  {project.description}
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-xs space-y-2 mb-2">
  {/*Always  show problem  */}
  <p className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md">
  <span className="text-blue-500 font-semibold">Problem:</span> {project.problem}
</p>


   {/* Show extra only when expanded */}
 {expandedId === project.id && (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    transition={{ duration: 0.3 }}
    className="space-y-2 mt-2 border-t border-gray-300 dark:border-gray-700 pt-2"
  >
   <p>
    <span className="text-green-500 font-semibold">Solution:</span> {project.solution}
  </p>

  <p>
    <span className="text-purple-500 font-semibold">Impact:</span> {project.impact}
  </p>
  </motion.div>
 )}
 
</div>
<button
  onClick={() =>
    setExpandedId(expandedId === project.id ? null : project.id)
  }
className="text-primary-500 text-sm font-semibold mb-4 hover:text-primary-400 transition cursor-pointer flex items-center gap-1 group">
  {expandedId === project.id ? "Show Less ↑" : "Read More ↓"}
</button>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg 
            bg-gray-900 dark:bg-gray-700 text-white 
            hover:scale-105 hover:bg-gray-800 transition-all duration-300">
              <Github size={16} />
              Code
            </motion.a>
            
            {project.liveUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all"
              >
                <ExternalLink size={16} />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
              Projects
            </span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Explore my latest projects and see what I've been working on. Each project represents a unique challenge and learning opportunity.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex rounded-lg bg-white dark:bg-gray-800 p-1 shadow-lg">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Ayushbangwal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Github size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
