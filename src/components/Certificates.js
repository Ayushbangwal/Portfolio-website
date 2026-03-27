
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';
import cer1 from "../assets/cer1.pdf";
import cer2 from '../assets/cer2.jpeg';
import cer3 from '../assets/cer3.pdf';
import cer4a from '../assets/cer4a.jpeg';
import cer4b from '../assets/cer4b.jpeg';
import cer4c from '../assets/cer4c.jpeg';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const certificates = [
  {
    id: 1,
    title: "Entrepreneurship cum Skill Development Program",
    issuer: "MSME - Government of India",
    date: "September 2024",
    credentialId: "45255/E-SDP/2024-25/12",
    certificateUrl: cer1,
    description: "Completed Entrepreneurship cum Skill Development Program focused on data entry operations, business basics, and practical skill training under MSME.",
    skills: ["Data Entry", "MS Excel", "Entrepreneurship", "Business Skills"],
    featured: true,
    linkedin: "https://www.linkedin.com/posts/ayush-bangwal-a1412a323_activity-7317849364016607233-eMhj?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFG15zABG77lUmmdl0dsJtNydUpCsXeBYVI"
  },
  {
    id: 2,
    title: "Basic Computer Course (12 Months)",
    issuer: "ICMT Institute",
    date: "August 2023",
    certificateUrl: cer2,
    description: "Completed 12-month computer course including MS Word, Excel, HTML, Photoshop & Tally.",
    skills: ["MS Word", "Excel", "HTML", "Photoshop", "Tally"],
    featured: false
  },
  {
  id: 3,
  title: "Artificial Intelligence Bootcamp",
  issuer: "Smarted Innovations",
  date: "June 2025",
  certificateUrl: cer3,
  description: "Completed 5-day bootcamp on AI by building web-based face tracking using Cursor AI.",
  skills: ["AI", "Web Development", "Face Tracking", "Cursor AI"],
  featured: false,
  linkedin: "https://www.linkedin.com/posts/ayush-bangwal-a1412a323_activity-7341842529924882432-Sd2r?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFG15zABG77lUmmdl0dsJtNydUpCsXeBYVI"
},
{
  id: 4,
  title: "Diploma in Computer Application & Programming",
  issuer: "ITDA-CALC (Govt. of Uttarakhand)",
  date: "2025",
  certificateUrls: [cer4a, cer4b, cer4c],
  description: "Completed diploma with Semester I & II including programming, web development, and computer fundamentals.",
  skills: ["Programming", "Web Development", "Computer Fundamentals"],
  featured: true
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
       className="bg-white/5 border border-white/10 rounded-xl shadow-lg overflow-hidden 
flex flex-col hover:shadow-2xl transition-all duration-300 group h-full"
      
      >
        {/* Certificate Header */}
       <div className="relative h-32 bg-gradient-to-br from-blue-500 to-purple-600 p-6">
          <div className="absolute top-4 right-4">
            {certificate.featured && (
              <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                <Award size={12} />
                Featured
              </span>
            )}
          </div>
          <div className="flex items-center h-full">
            <motion.div whileHover={{ rotate: 10 }}>
  <Award className="w-12 h-12 text-white opacity-90" />
</motion.div>
          </div>
        </div>

        {/* Certificate Content */}
        
          
            <div className="p-6 flex flex-col">
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">

            {certificate.title}
          </h3>
          
            <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
            <span className="font-medium">{certificate.issuer}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              {certificate.date}
            </div>
          </div>

            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            {certificate.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {certificate.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
              className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full border border-primary-200 dark:border-primary-800 hover:scale-105 hover:shadow-md transition-all">
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
          <div className="mt-4 space-y-3">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedCert(certificate)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-300"
          >
            <ExternalLink size={16} />
            View Certificate (Image)
          </motion.a>
         
          </div>

          {/* 🔥 👉 STEP 6 YAHI ADD KARNA HAI */}
{certificate.certificateUrls && (
  <div className="flex gap-2 mt-3">
    {certificate.certificateUrls.map((url, i) => (
      <a
        key={i}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center text-xs px-2 py-1 border border-primary-500 text-primary-500 rounded hover:bg-primary-500 hover:text-white transition"
      >
        {i === 0 ? "Sem 1" : i === 1 ? "Sem 2" : "Final"}
      </a>
    ))}
  </div>
)}
          {/* 🔥 ADD THIS BELOW */}
{certificate.linkedin && (
  <a
    href={certificate.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
  >
    <ExternalLink size={16} />
    View on LinkedIn
  </a>
)}
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

        <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <Swiper
    modules={[Navigation, Autoplay]}
    navigation
    autoplay={{ delay: 6000, disableOnInteraction: true }}
    loop={true}
    centeredSlides={false}
    spaceBetween={40}
    slidesPerView={1}
    breakpoints={{
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
}}
  >
    {certificates.map((certificate) => (
      <SwiperSlide key={certificate.id}>
        <CertificateCard certificate={certificate} />
      </SwiperSlide>
    ))}
  </Swiper>
</motion.div>
{selectedCert && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center 
    justify-center z-[9999] p-4"
    onMouseDown={() => setSelectedCert(null)}
  >
    <div
      className="relative bg-gray-900 border border-white/10 
      rounded-2xl p-4 w-full max-w-3xl"
      onMouseDown={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        type="button"
        onMouseDown={(e) => {
          e.stopPropagation();
          setSelectedCert(null);
        }}
        className="absolute -top-3 -right-3 z-10 w-8 h-8 
        bg-red-500 hover:bg-red-600 text-white rounded-full 
        flex items-center justify-center text-sm font-bold 
        shadow-lg transition-colors cursor-pointer"
      >
        ✕
      </button>

      {/* Certificate title */}
      <p className="text-white font-semibold text-center mb-3 
      text-sm truncate px-6">
        {selectedCert.title}
      </p>

      {/* Image/Slider */}
      <Swiper
        key={selectedCert.id}
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
      >
        {(selectedCert.certificateUrls || 
          [selectedCert.certificateUrl]).map((url, i) => (
          <SwiperSlide key={i}>
            <img
              src={url}
              alt={`certificate-${i}`}
              className="w-full max-h-[75vh] object-contain rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slide count (only if multiple) */}
      {selectedCert.certificateUrls?.length > 1 && (
        <p className="text-center text-gray-400 text-xs mt-2">
          Use arrows to navigate between pages
        </p>
      )}
    </div>
  </div>
)}

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
