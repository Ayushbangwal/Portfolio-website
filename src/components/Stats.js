import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Award, Star } from 'lucide-react';

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    if (started.current) return;
    started.current = true;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return { count, ref };
};

const StatCard = ({ stat, itemVariants }) => {
  const { count, ref } = useCountUp(stat.value);
  const Icon = stat.icon;
  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      whileHover={{ scale: 1.08, y: -5 }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 
      border border-white/10 rounded-xl p-6 text-center 
      shadow-lg hover:shadow-purple-500/20 
      transition-all duration-300"
    >
      <motion.div whileHover={{ rotate: 10 }}>
        <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
      </motion.div>
      <div className="text-3xl font-bold text-white mb-1">
        {count}+
      </div>
      <div className="text-sm text-gray-400">
        {stat.label}
      </div>
    </motion.div>
  );
};

const Stats = () => {
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

  const stats = [
    { label: 'Projects Built', value: 2, icon: Trophy },
    { label: 'Technologies Used', value: 5, icon: Star },
    { label: 'GitHub Commits', value: 100, icon: Award },
    { label: 'Problems Solved', value: 50, icon: Users }
  ];

  return (
    <section id="stats" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
              My Stats
            </span>
          </motion.h2>
          <motion.div variants={itemVariants}
            className="w-32 h-1 bg-gradient-to-r from-blue-400 
            to-purple-500 mx-auto rounded-full mb-8"
          />
          <motion.p variants={itemVariants}
            className="text-gray-300 max-w-2xl mx-auto">
            A quick overview of my work and skills.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label + index}
              stat={stat}
              itemVariants={itemVariants}
            />
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Striving for Excellence
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm continuously seeking new challenges and opportunities 
              to grow. Whether it's through competitions, academic 
              pursuits, or community involvement, I believe in pushing 
              boundaries and learning from every experience.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 
              to-purple-600 text-white font-semibold rounded-lg 
              shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Stats;