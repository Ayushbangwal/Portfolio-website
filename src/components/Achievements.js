import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Users, Calendar, Award, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Hackathon Winner',
      organization: 'TechCrunch Disrupt',
      date: 'March 2024',
      description: 'First place in 48-hour hackathon for developing an innovative AI-powered accessibility tool.',
      category: 'competition',
      icon: Trophy,
      featured: true,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 2,
      title: 'Dean\'s List',
      organization: 'University of Technology',
      date: 'Fall 2023, Spring 2024',
      description: 'Recognized for academic excellence with GPA above 3.8 for consecutive semesters.',
      category: 'academic',
      icon: Award,
      featured: true,
      color: 'from-blue-400 to-purple-500'
    },
    {
      id: 3,
      title: 'Google Developer Challenge',
      organization: 'Google',
      date: 'February 2024',
      description: 'Top 10 finalist in Google\'s annual developer challenge for cloud-based solutions.',
      category: 'competition',
      icon: Target,
      featured: false,
      color: 'from-green-400 to-cyan-500'
    },
    {
      id: 4,
      title: 'Open Source Contributor',
      organization: 'GitHub',
      date: 'Ongoing',
      description: 'Active contributor to multiple open-source projects with 500+ contributions.',
      category: 'community',
      icon: Users,
      featured: false,
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 5,
      title: 'Technical Paper Publication',
      organization: 'IEEE Conference',
      date: 'January 2024',
      description: 'Published research paper on "Machine Learning Applications in Web Development".',
      category: 'academic',
      icon: Star,
      featured: false,
      color: 'from-indigo-400 to-blue-500'
    },
    {
      id: 6,
      title: 'Coding Competition Champion',
      organization: 'LeetCode Weekly Contest',
      date: 'December 2023',
      description: 'Ranked in top 2% globally in multiple coding competitions.',
      category: 'competition',
      icon: Trophy,
      featured: false,
      color: 'from-red-400 to-pink-500'
    }
  ];

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

  const AchievementCard = ({ achievement }) => {
    const Icon = achievement.icon;
    
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ 
          y: -8,
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
        }}
        className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
      >
        {/* Achievement Header */}
        <div className={`relative h-32 bg-gradient-to-br ${achievement.color} p-6`}>
          <div className="absolute top-4 right-4">
            {achievement.featured && (
              <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                <Star size={12} />
                Featured
              </span>
            )}
          </div>
          <div className="flex items-center h-full">
            <Icon className="w-12 h-12 text-white opacity-90" />
          </div>
        </div>

        {/* Achievement Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
            {achievement.title}
          </h3>
          
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
            <span className="font-medium">{achievement.organization}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              {achievement.date}
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
            {achievement.description}
          </p>

          {/* Category Badge */}
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 text-xs rounded-full font-medium ${
              achievement.category === 'competition' 
                ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300'
                : achievement.category === 'academic'
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
                : 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300'
            }`}>
              {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
            </span>
            
            {achievement.featured && (
              <div className="flex items-center gap-1 text-yellow-500">
                <Star size={16} fill="currentColor" />
                <span className="text-xs font-medium">Featured</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  const stats = [
    { label: 'Hackathons', value: '5+', icon: Trophy },
    { label: 'Publications', value: '3', icon: Star },
    { label: 'Awards', value: '10+', icon: Award },
    { label: 'Open Source', value: '500+', icon: Users }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-100 dark:bg-gray-900">
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
              Achievements
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
            A collection of my accomplishments in competitions, academics, and community contributions that showcase my dedication and growth.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Featured Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {achievements.filter(achievement => achievement.featured).map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </motion.div>

        {/* Other Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.filter(achievement => !achievement.featured).map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Striving for Excellence
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm continuously seeking new challenges and opportunities to grow. Whether it's through competitions, 
              academic pursuits, or community involvement, I believe in pushing boundaries and learning from every experience.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
