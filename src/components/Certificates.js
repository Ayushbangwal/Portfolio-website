import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Generative AI with Large Language Models',
      issuer: 'Coursera - DeepLearning.AI',
      date: 'March 2024',
      credentialId: 'ABC123XYZ',
      certificateUrl: 'https://coursera.org/verify/ABC123XYZ',
      description: 'Comprehensive course on building applications with large language models, including prompt engineering and fine-tuning techniques.',
      skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'Fine-tuning'],
      featured: true
    },
    {
      id: 2,
      title: 'Full Stack Web Development Bootcamp',
      issuer: 'Udemy',
      date: 'February 2024',
      credentialId: 'UC-DEF456GHI',
      certificateUrl: 'https://ude.my/UC-DEF456GHI',
      description: 'Intensive bootcamp covering modern web development technologies including React, Node.js, MongoDB, and deployment strategies.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs'],
      featured: true
    },
    {
      id: 3,
      title: 'Python for Data Science and Machine Learning',
      issuer: 'Udemy',
      date: 'January 2024',
      credentialId: 'UC-JKL789MNO',
      certificateUrl: 'https://ude.my/UC-JKL789MNO',
      description: 'Complete Python programming course with focus on data analysis, visualization, and machine learning fundamentals.',
      skills: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
      featured: false
    },
    {
      id: 4,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'December 2023',
      credentialId: 'AWS-CP-PQR456STU',
      certificateUrl: 'https://aws.amazon.com/verification/PQR456STU',
      description: 'Foundational understanding of AWS cloud services, architecture, and best practices for cloud computing.',
      skills: ['AWS', 'Cloud Computing', 'S3', 'EC2', 'Lambda'],
      featured: false
    },
    {
      id: 5,
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: 'November 2023',
      credentialId: 'UC-VWX789YZA',
      certificateUrl: 'https://ude.my/UC-VWX789YZA',
      description: 'In-depth React course covering hooks, context, Redux, Next.js, and advanced React patterns.',
      skills: ['React', 'Redux', 'Next.js', 'React Hooks', 'Context API'],
      featured: false
    },
    {
      id: 6,
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'October 2023',
      credentialId: 'FCC-BCD123EFG',
      certificateUrl: 'https://freecodecamp.org/certification/BCD123EFG',
      description: 'Mastered fundamental algorithms, data structures, and problem-solving techniques in JavaScript.',
      skills: ['JavaScript', 'Algorithms', 'Data Structures', 'Problem Solving'],
      featured: false
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

  const CertificateCard = ({ certificate }) => {
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ 
          y: -8,
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
        }}
        className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
      >
        {/* Certificate Header */}
        <div className={`relative h-32 bg-gradient-to-br ${
          certificate.featured 
            ? 'from-accent-500 to-primary-600' 
            : 'from-gray-400 to-gray-600'
        } p-6`}>
          <div className="absolute top-4 right-4">
            {certificate.featured && (
              <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                <Award size={12} />
                Featured
              </span>
            )}
          </div>
          <div className="flex items-center h-full">
            <Award className="w-12 h-12 text-white opacity-90" />
          </div>
        </div>

        {/* Certificate Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
            {certificate.title}
          </h3>
          
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
            <span className="font-medium">{certificate.issuer}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              {certificate.date}
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
            {certificate.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {certificate.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full border border-primary-200 dark:border-primary-800"
              >
                {skill}
              </span>
            ))}
            {certificate.skills.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                +{certificate.skills.length - 3}
              </span>
            )}
          </div>

          {/* Credential ID */}
          <div className="mb-4">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Credential ID: <span className="font-mono">{certificate.credentialId}</span>
            </p>
          </div>

          {/* View Certificate Button */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={certificate.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-300"
          >
            <ExternalLink size={16} />
            View Certificate
          </motion.a>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Certificates
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
            Professional certifications and courses I've completed to enhance my skills and stay updated with the latest technologies.
          </motion.p>
        </motion.div>

        {/* Featured Certificates */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {certificates.filter(cert => cert.featured).map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </motion.div>

        {/* Other Certificates */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.filter(cert => !cert.featured).map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </motion.div>

        {/* Verification Note */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full border border-green-200 dark:border-green-800">
            <CheckCircle size={16} />
            <span className="text-sm font-medium">All certificates are verifiable</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
