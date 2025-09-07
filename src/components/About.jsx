import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

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

  return (
    <section id="about" className="py-20 bg-white">
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
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-primary-500 mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Passionate <span className="text-gradient">Developer</span>
            </h3>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Saya adalah seorang <strong>Full Stack Developer</strong> dengan passion dalam menciptakan solusi digital yang inovatif. 
              Dengan pengalaman dalam berbagai teknologi modern, saya fokus pada pengembangan aplikasi web yang 
              user-friendly dan performant.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Saya percaya bahwa kombinasi antara <strong>desain yang menarik</strong> dan <strong>teknologi yang solid</strong> dapat menciptakan 
              pengalaman pengguna yang luar biasa. Setiap project yang saya kerjakan selalu mengutamakan kualitas, 
              performance, dan user experience.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl">
                <h4 className="text-2xl font-bold text-primary-600">3+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl">
                <h4 className="text-2xl font-bold text-primary-600">50+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex space-x-4 pt-6"
            >
              {[
                { icon: 'fab fa-github', href: 'https://github.com/zeeks024', label: 'GitHub', color: 'hover:text-gray-800' },
                { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/arzaki-zunior-p-839a5b286/', label: 'LinkedIn', color: 'hover:text-blue-600' },
                { icon: 'fas fa-envelope', href: 'mailto:arzakizuniorputra19@gmail.com', label: 'Email', color: 'hover:text-red-500' }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-gray-600 ${social.color} text-2xl transition-all duration-300`}
                  title={social.label}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative">
              {/* Main circle */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-80 h-80 mx-auto gradient-primary rounded-full flex items-center justify-center relative overflow-hidden group"
              >
                <motion.i
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="fas fa-user text-white text-8xl"
                />
                
                {/* Floating elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-4 left-8 w-4 h-4 bg-yellow-300 rounded-full opacity-70"></div>
                  <div className="absolute top-16 right-6 w-3 h-3 bg-pink-300 rounded-full opacity-70"></div>
                  <div className="absolute bottom-8 left-6 w-5 h-5 bg-blue-300 rounded-full opacity-70"></div>
                  <div className="absolute bottom-16 right-8 w-2 h-2 bg-green-300 rounded-full opacity-70"></div>
                </motion.div>
              </motion.div>

              {/* Floating icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center"
              >
                <i className="fab fa-react text-2xl text-blue-500"></i>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center"
              >
                <i className="fab fa-js text-2xl text-yellow-500"></i>
              </motion.div>

              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center"
              >
                <i className="fab fa-node-js text-2xl text-green-500"></i>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center"
              >
                <i className="fab fa-python text-2xl text-blue-600"></i>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
