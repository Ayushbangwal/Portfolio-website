import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 dark:bg-gray-900 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="relative">
          <div className="w-20 h-20 border-4 border-primary-200 dark:border-primary-800 rounded-full"></div>
          <div className="w-20 h-20 border-4 border-primary-600 dark:border-primary-400 rounded-full border-t-transparent animate-spin absolute top-0 left-0"></div>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 text-2xl font-bold text-primary-600 dark:text-primary-400"
        >
          Loading Portfolio...
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-2 text-gray-400"
        >
          Preparing amazing content for you
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
