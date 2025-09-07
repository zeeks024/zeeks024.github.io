import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const projectsData = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution dengan React, Node.js, dan MongoDB. Fitur lengkap termasuk payment gateway, admin dashboard, dan real-time notifications.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
      github: 'https://github.com/zeeks024',
      demo: '#',
      category: 'Full Stack',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas kolaboratif dengan Vue.js dan real-time updates. Drag & drop interface, team collaboration, dan progress tracking.',
      image: '/api/placeholder/400/250',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
      github: 'https://github.com/zeeks024',
      demo: '#',
      category: 'Frontend',
      featured: true
    },
    {
      title: 'Analytics Dashboard',
      description: 'Dashboard analytics dengan visualisasi data real-time menggunakan D3.js dan Chart.js. API integration dan responsive design.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      github: 'https://github.com/zeeks024',
      demo: '#',
      category: 'Data Visualization',
      featured: true
    },
    {
      title: 'Social Media App',
      description: 'Platform social media dengan fitur posting, commenting, real-time chat, dan notification system.',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Redis'],
      github: 'https://github.com/zeeks024',
      demo: '#',
      category: 'Mobile',
      featured: false
    },
    {
      title: 'Learning Management System',
      description: 'LMS untuk online learning dengan video streaming, quiz system, progress tracking, dan certificate generation.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
      github: 'https://github.com/zeeks024',
      demo: '#',
      category: 'Full Stack',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website dengan React, Framer Motion, dan Tailwind CSS. Responsive design dan smooth animations.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/zeeks024',
      demo: '#',
      category: 'Frontend',
      featured: false
    }
  ]

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

  const ProjectCard = ({ project, index }) => (
    <motion.article
      variants={itemVariants}
      className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift group"
      role="listitem"
      aria-labelledby={`project-title-${index}`}
    >
      {/* Project Image */}
      <figure className="relative h-64 bg-gradient-to-br from-primary-500 to-secondary-500 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-center text-white"
          >
            <i className="fas fa-code text-6xl mb-4 opacity-80" aria-hidden="true"></i>
            <figcaption className="text-lg font-medium">Project Preview</figcaption>
          </motion.div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4" role="presentation">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <i className="fab fa-github text-xl" aria-hidden="true"></i>
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
            aria-label={`View ${project.title} live demo`}
          >
            <i className="fas fa-external-link-alt text-xl" aria-hidden="true"></i>
          </motion.a>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-lg rounded-full text-white text-sm font-medium" role="note" aria-label={`Project category: ${project.category}`}>
            {project.category}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-yellow-400 rounded-full text-gray-800 text-sm font-medium" role="note" aria-label="Featured project">
              <i className="fas fa-star mr-1" aria-hidden="true"></i>
              Featured
            </span>
          </div>
        )}
      </figure>

      {/* Project Content */}
      <div className="p-6">
        <header className="mb-4">
          <h3 
            id={`project-title-${index}`}
            className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors"
          >
            {project.title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed">
            {project.description}
          </p>
        </header>

        {/* Technologies */}
        <section className="mb-4" aria-labelledby={`tech-heading-${index}`}>
          <h4 id={`tech-heading-${index}`} className="sr-only">Technologies used in {project.title}</h4>
          <ul className="flex flex-wrap gap-2" role="list">
            {project.technologies.map((tech) => (
              <li key={tech}>
                <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Links */}
        <nav aria-label={`Links for ${project.title} project`}>
          <ul className="flex space-x-4">
            <li>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 font-medium transition-colors"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <i className="fab fa-github" aria-hidden="true"></i>
                <span>Code</span>
              </motion.a>
            </li>
            <li>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 font-medium transition-colors"
                aria-label={`View ${project.title} live demo`}
              >
                <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                <span>Demo</span>
              </motion.a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.article>
  )

  return (
    <section id="projects" className="py-20 bg-white" role="main" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-4">
        <motion.header
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            id="projects-heading"
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-primary-500 mx-auto mb-6"
            role="presentation"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Berikut adalah beberapa project yang telah saya kerjakan, menampilkan keahlian dalam 
            berbagai teknologi dan pendekatan problem-solving
          </motion.p>
        </motion.header>

        {/* Projects Grid */}
        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          role="list"
          aria-label="Portfolio projects"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.main>

        {/* CTA Section */}
        <motion.aside
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
          aria-labelledby="cta-heading"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white"
          >
            <h3 id="cta-heading" className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-lg mb-6 opacity-90">
              Saya selalu terbuka untuk proyek-proyek menarik dan kolaborasi yang menantang
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
              aria-label="Navigate to contact section"
            >
              <i className="fas fa-paper-plane mr-2" aria-hidden="true"></i>
              Let's Talk
            </motion.button>
          </motion.div>
        </motion.aside>
      </div>
    </section>
  )
}

export default Projects
