import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1500);
  };

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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ayushbangwal0@gmail.com',
      href: 'mailto:ayushbangwal0@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Srinagar, Uttarakhand',
      href: '#',
      color: 'text-red-400'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Ayushbangwal',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ayush-bangwal-a1412a323/',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/yourusername',
      label: 'Twitter'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
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
              Get In Touch
            </span>
          </motion.h2>
          <motion.div variants={itemVariants}
            className="w-32 h-1 bg-gradient-to-r from-blue-400 
            to-purple-500 mx-auto rounded-full mb-8"
          />
          <motion.p variants={itemVariants}
            className="text-gray-300 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, 
            exciting projects, or just having a chat about technology. 
            Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT — Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full"
            >
              <h3 className="text-2xl font-bold mb-3 text-white">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                Whether you have a question, want to discuss a project, 
                or just want to say hello — I'm here and ready to help!
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      variants={itemVariants}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-4 p-4 
                      bg-white/5 border border-white/10 rounded-xl 
                      hover:border-blue-500/40 hover:bg-white/10
                      transition-all duration-300"
                    >
                      <div className={`p-3 bg-white/10 rounded-lg ${info.color}`}>
                        <Icon size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-400 mb-0.5">
                          {info.label}
                        </span>
                        <div className="font-medium text-white 
                        flex items-center gap-2 text-sm">
                          {info.value}
                          {info.label === 'Email' && (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                navigator.clipboard.writeText(info.value);
                                setCopied(true);
                                setTimeout(() => setCopied(false), 2000);
                              }}
                              className="text-xs px-2 py-0.5 bg-blue-500/20 
                              hover:bg-blue-500/40 text-blue-400 
                              rounded-md transition"
                            >
                              {copied ? '✓ Copied' : 'Copy'}
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold mb-4 text-gray-400 
                uppercase tracking-wider">
                  Follow Me
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        title={social.label}
                        className="p-3 bg-white/5 border border-white/10 
                        rounded-xl text-gray-400 hover:text-blue-400 
                        hover:border-blue-500/40 hover:bg-blue-500/10
                        transition-all duration-300"
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                Send Me a Message
              </h3>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-900/20 text-green-300 
                  rounded-xl border border-green-800 flex items-center gap-2"
                >
                  <MessageSquare size={18} />
                  <span className="text-sm">
                    Message sent! I'll get back to you soon.
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                  <label htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/5 border 
                    border-white/10 rounded-xl text-white placeholder-gray-500
                    focus:outline-none focus:border-blue-500 focus:bg-white/10
                    transition-all duration-300 text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white/5 border 
                    border-white/10 rounded-xl text-white placeholder-gray-500
                    focus:outline-none focus:border-blue-500 focus:bg-white/10
                    transition-all duration-300 text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or just say hello..."
                    className="w-full px-4 py-3 bg-white/5 border 
                    border-white/10 rounded-xl text-white placeholder-gray-500
                    focus:outline-none focus:border-blue-500 focus:bg-white/10
                    transition-all duration-300 resize-none text-sm"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 
                  px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 
                  text-white font-semibold rounded-xl shadow-lg 
                  hover:opacity-90 transition-all duration-300 
                  disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white 
                      border-t-transparent rounded-full animate-spin"/>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>

              </form>

              <p className="mt-4 text-xs text-gray-500 text-center">
                I'll respond within 24-48 hours.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;