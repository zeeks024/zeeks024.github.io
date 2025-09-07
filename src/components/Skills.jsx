import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [animatedSkills, setAnimatedSkills] = useState({})

  const skillsData = {
    frontend: [
      { name: 'React.js', level: 90, icon: 'fab fa-react', color: 'text-blue-500' },
      { name: 'Vue.js', level: 85, icon: 'fab fa-vuejs', color: 'text-green-500' },
      { name: 'TypeScript', level: 80, icon: 'fab fa-js', color: 'text-blue-600' },
      { name: 'Tailwind CSS', level: 95, icon: 'fas fa-palette', color: 'text-teal-500' },
      { name: 'Next.js', level: 85, icon: 'fas fa-bolt', color: 'text-gray-800' },
    ],
    backend: [
      { name: 'Node.js', level: 85, icon: 'fab fa-node-js', color: 'text-green-600' },
      { name: 'Python', level: 80, icon: 'fab fa-python', color: 'text-blue-600' },
      { name: 'Express.js', level: 85, icon: 'fas fa-server', color: 'text-gray-700' },
      { name: 'MongoDB', level: 75, icon: 'fas fa-database', color: 'text-green-500' },
      { name: 'PostgreSQL', level: 70, icon: 'fas fa-database', color: 'text-blue-500' },
    ],
    tools: [
      { name: 'Git & GitHub', level: 90, icon: 'fab fa-git-alt', color: 'text-orange-500' },
      { name: 'Docker', level: 70, icon: 'fab fa-docker', color: 'text-blue-500' },
      { name: 'VS Code', level: 95, icon: 'fas fa-code', color: 'text-blue-600' },
      { name: 'Figma', level: 85, icon: 'fab fa-figma', color: 'text-purple-500' },
      { name: 'AWS', level: 65, icon: 'fab fa-aws', color: 'text-orange-400' },
    ]
  }

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const allSkills = {}
        Object.values(skillsData).flat().forEach(skill => {
          allSkills[skill.name] = skill.level
        })
        setAnimatedSkills(allSkills)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const SkillCard = ({ title, skills, icon, gradient }) => (
    <motion.div
      variants={itemVariants}
      className="bg-white p-8 rounded-2xl shadow-xl hover-lift"
    >
      <div className="text-center mb-6">
        <div className={`w-16 h-16 ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
          <i className={`${icon} text-2xl text-white`}></i>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2">
                <i className={`${skill.icon} ${skill.color}`}></i>
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              </div>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: inView ? `${animatedSkills[skill.name] || 0}%` : 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 bg-gray-50">
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
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-primary-500 mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Teknologi dan tools yang saya kuasai untuk membangun aplikasi web modern yang scalable dan performant
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <SkillCard
            title="Frontend Development"
            skills={skillsData.frontend}
            icon="fas fa-laptop-code"
            gradient="bg-gradient-to-br from-blue-500 to-purple-600"
          />
          
          <SkillCard
            title="Backend Development"
            skills={skillsData.backend}
            icon="fas fa-server"
            gradient="bg-gradient-to-br from-green-500 to-teal-600"
          />
          
          <SkillCard
            title="Tools & Others"
            skills={skillsData.tools}
            icon="fas fa-tools"
            gradient="bg-gradient-to-br from-orange-500 to-red-600"
          />
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold text-center text-gray-800 mb-8"
          >
            Other Technologies I Work With
          </motion.h3>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              'React Native', 'GraphQL', 'Redux', 'Jest', 'Webpack',
              'Sass', 'Material-UI', 'Firebase', 'Vercel', 'Netlify'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-white rounded-full shadow-md text-gray-700 font-medium hover:shadow-lg transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
