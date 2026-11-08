
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Copy
} from 'lucide-react';

// Existing EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_g4svgsu';
const EMAILJS_TEMPLATE_ID = 'template_0z03zpo';
const EMAILJS_PUBLIC_KEY = 'Cc8nttOHwG-k-pFTJ';

const Contact = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [copied, setCopied] = useState(false);

  const email = 'ayushbangwal0@gmail.com';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Could not copy email:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');

      setFormData({
        from_name: '',
        from_email: '',
        message: ''
      });

      formRef.current.reset();

    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');

    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Ayushbangwal'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ayush-bangwal-a1412a323/'
    }
  ];

  const inputClasses = `
    w-full px-4 py-3
    bg-gray-900/60
    border border-white/10
    rounded-md text-white text-sm
    placeholder-gray-500
    focus:outline-none focus:border-blue-500
    transition-colors duration-200
  `;

  return (
    <section
      id="contact"
      className="py-20 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-14">

          <p className="text-sm font-medium tracking-widest
          uppercase text-blue-400 mb-3">
            Get In Touch
          </p>

          <h2 className="text-3xl sm:text-4xl
          font-bold text-white mb-4">
            Contact Me
          </h2>

          <p className="text-gray-400 max-w-2xl
          mx-auto leading-7">
            Have a question, an opportunity or something
            you'd like to discuss? Feel free to reach out.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Contact Information */}
          <div className="bg-gray-800/40 border
          border-white/10 rounded-lg p-6 sm:p-8">

            <h3 className="text-2xl font-semibold
            text-white mb-3">
              Let's Connect
            </h3>

            <p className="text-gray-400 text-sm
            leading-7 mb-8">
              I'm open to learning opportunities,
              collaborations and connecting with people
              working in technology.
            </p>

            {/* Email */}
            <div className="flex items-center gap-4
            p-4 border border-white/10 rounded-md mb-4">

              <div className="text-blue-400">
                <Mail size={22} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs text-gray-500 mb-1">
                  Email
                </p>

                <a
                  href={`mailto:${email}`}
                  className="text-sm text-white
                  hover:text-blue-400 transition-colors
                  break-all"
                >
                  {email}
                </a>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="text-gray-400 hover:text-white
                transition-colors"
              >
                {copied ? (
                  <CheckCircle size={18} />
                ) : (
                  <Copy size={18} />
                )}
              </button>

            </div>

            {/* Location */}
            <div className="flex items-center gap-4
            p-4 border border-white/10 rounded-md mb-8">

              <div className="text-blue-400">
                <MapPin size={22} />
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">
                  Location
                </p>

                <p className="text-sm text-white">
                  Srinagar, Uttarakhand
                </p>
              </div>

            </div>

            {/* Social Links */}
            <div className="border-t border-white/10 pt-6">

              <h4 className="text-sm font-medium
              text-gray-300 mb-4">
                Find me online
              </h4>

              <div className="flex gap-3">

                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex items-center gap-2
                      px-4 py-3 border border-white/10
                      rounded-md text-gray-400
                      hover:text-white hover:border-gray-500
                      transition-colors duration-200"
                    >
                      <Icon size={19} />
                      <span className="text-sm">
                        {social.label}
                      </span>
                    </a>
                  );
                })}

              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/40 border
          border-white/10 rounded-lg p-6 sm:p-8">

            <h3 className="text-xl font-semibold
            text-white mb-6 flex items-center gap-3">
              <MessageSquare
                size={21}
                className="text-blue-400"
              />
              Send Me a Message
            </h3>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div
                role="status"
                className="mb-6 p-4 border border-green-800
                bg-green-900/20 text-green-300
                rounded-md flex items-center gap-3"
              >
                <CheckCircle size={19} />
                <p className="text-sm">
                  Your message has been sent successfully.
                  Thank you for reaching out!
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div
                role="alert"
                className="mb-6 p-4 border border-red-800
                bg-red-900/20 text-red-300
                rounded-md flex items-center gap-3"
              >
                <AlertCircle size={19} />
                <p className="text-sm">
                  Message could not be sent.
                  Please email me directly at {email}.
                </p>
              </div>
            )}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm
                  font-medium text-gray-300 mb-2"
                >
                  Your Name *
                </label>

                <input
                  type="text"
                  id="contact-name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Enter your name"
                  className={inputClasses}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm
                  font-medium text-gray-300 mb-2"
                >
                  Email Address *
                </label>

                <input
                  type="email"
                  id="contact-email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="Enter your email address"
                  className={inputClasses}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm
                  font-medium text-gray-300 mb-2"
                >
                  Message *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center
                justify-center gap-2 px-6 py-3
                bg-blue-600 text-white font-medium
                rounded-md hover:bg-blue-700
                transition-colors duration-200
                disabled:opacity-50
                disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2
                    border-white border-t-transparent
                    rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
