import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showNotification('Mohon isi semua field!', 'error')
      setIsSubmitting(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      showNotification('Format email tidak valid!', 'error')
      setIsSubmitting(false)
      return
    }

    // Simulate form submission
    setTimeout(() => {
      showNotification('Terima kasih! Pesan Anda telah dikirim.', 'success')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1500)
  }

  const showNotification = (message, type) => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 5000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'arzakizuniorputra19@gmail.com',
      href: 'mailto:arzakizuniorputra19@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'Arzaki Zunior Putra',
      href: 'https://www.linkedin.com/in/arzaki-zunior-p-839a5b286/',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      value: 'zeeks024',
      href: 'https://github.com/zeeks024',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Indonesia',
      href: '#',
      color: 'from-green-500 to-teal-500'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-primary-500 mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Mari berkolaborasi untuk menciptakan sesuatu yang luar biasa! 
            Saya selalu terbuka untuk proyek baru dan peluang kerjasama.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-gray-800 mb-6"
            >
              Let's Connect
            </motion.h3>

            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <i className={`${info.icon} text-white text-xl`}></i>
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-800">{info.title}</h4>
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {info.value}
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Social Media Links */}
            <motion.div
              variants={itemVariants}
              className="pt-6"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: 'fab fa-github', href: 'https://github.com/zeeks024', color: 'hover:text-gray-800' },
                  { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/arzaki-zunior-p-839a5b286/', color: 'hover:text-blue-600' },
                  { icon: 'fas fa-envelope', href: 'mailto:arzakizuniorputra19@gmail.com', color: 'hover:text-red-500' },
                  { icon: 'fab fa-twitter', href: '#', color: 'hover:text-blue-400' },
                  { icon: 'fab fa-instagram', href: '#', color: 'hover:text-pink-500' }
                ].map((social, index) => (
                  <motion.a
                    key={social.icon}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300`}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="spinner border-2 border-white border-t-transparent rounded-full w-4 h-4"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Notification */}
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '100%' }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50, x: '100%' }}
            className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
              notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            } text-white max-w-sm`}
          >
            <div className="flex items-center space-x-2">
              <i className={`fas ${notification.type === 'success' ? 'fa-check' : 'fa-exclamation-triangle'}`}></i>
              <span>{notification.message}</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Contact
