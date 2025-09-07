import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: 'fab fa-github', href: 'https://github.com/zeeks024', label: 'GitHub' },
    { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/arzaki-zunior-p-839a5b286/', label: 'LinkedIn' },
    { icon: 'fas fa-envelope', href: 'mailto:arzakizuniorputra19@gmail.com', label: 'Email' },
    { icon: 'fab fa-twitter', href: '#', label: 'Twitter' },
    { icon: 'fab fa-instagram', href: '#', label: 'Instagram' }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-primary-400">Arzaki</span> Zunior Putra
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Full Stack Developer & UI/UX Designer yang passionate dalam menciptakan 
                pengalaman digital yang luar biasa. Mari berkolaborasi untuk mewujudkan 
                ide-ide inovatif Anda.
              </p>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-primary-400">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-primary-400">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-primary-400"></i>
                  <a 
                    href="mailto:arzakizuniorputra19@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    arzakizuniorputra19@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-map-marker-alt text-primary-400"></i>
                  <span className="text-gray-400 text-sm">Indonesia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-clock text-primary-400"></i>
                  <span className="text-gray-400 text-sm">Available for freelance</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="border-t border-gray-800"
      >
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Arzaki Zunior Putra. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with</span>
              <div className="flex items-center space-x-2">
                <motion.i
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="fas fa-heart text-red-500"
                ></motion.i>
                <span>and</span>
                <i className="fab fa-react text-blue-400"></i>
                <span>React</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 z-50 flex items-center justify-center"
        aria-label="Back to top"
      >
        <i className="fas fa-chevron-up"></i>
      </motion.button>
    </footer>
  )
}

export default Footer
