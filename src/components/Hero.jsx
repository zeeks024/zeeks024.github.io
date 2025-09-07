import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen gradient-primary flex items-center justify-center text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Halo, Saya{' '}
            <span className="block text-yellow-300">
              <TypeAnimation
                sequence={[
                  'Arzaki Zunior Putra',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'React Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                style={{ display: 'inline-block' }}
              />
            </span>
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto"
        >
          Menciptakan pengalaman digital yang luar biasa dengan teknologi modern dan desain yang inovatif
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg mb-10 opacity-80 max-w-2xl mx-auto"
        >
          Passionate dalam membangun aplikasi web yang user-friendly, performant, dan scalable menggunakan React, Node.js, dan teknologi terkini
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:bg-gray-50"
          >
            <i className="fas fa-rocket mr-2"></i>
            Lihat Projects
          </motion.button>
          
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 transform"
          >
            <i className="fas fa-envelope mr-2"></i>
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex justify-center space-x-6"
        >
          {[
            { icon: 'fab fa-github', href: 'https://github.com/zeeks024', label: 'GitHub' },
            { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/arzaki-zunior-p-839a5b286/', label: 'LinkedIn' },
            { icon: 'fas fa-envelope', href: 'mailto:arzakizuniorputra19@gmail.com', label: 'Email' }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <i className={`${social.icon} text-lg`}></i>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
