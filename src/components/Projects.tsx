

import { motion, type Variants } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: '项目一',
    description: '这是一个关于项目一的简短描述，突出其核心功能和目标。',
    imageUrl: 'https://via.placeholder.com/400x250',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    borderColor: 'border-pink-300',
    shadowClass: 'shadow-pink-200/80',
  },
  {
    id: 2,
    title: '项目二',
    description: '这是一个关于项目二的简短描述，突出其核心功能和目标。',
    imageUrl: 'https://via.placeholder.com/400x250',
    technologies: ['Vue.js', 'JavaScript', 'SCSS'],
    borderColor: 'border-green-300',
    shadowClass: 'shadow-green-200/80',
  },
  {
    id: 3,
    title: '项目三',
    description: '这是一个关于项目三的简短描述，突出其核心功能和目标。',
    imageUrl: 'https://via.placeholder.com/400x250',
    technologies: ['Angular', 'TypeScript', 'Firebase'],
    borderColor: 'border-yellow-300',
    shadowClass: 'shadow-yellow-200/80',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: "easeInOut",
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, ease: "easeInOut" },
  },
};

const Projects = () => {
  return (
    <section className="py-32">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <h2 className="text-4xl font-black tracking-tighter text-center mb-12 text-gray-900">我的项目</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`bg-white rounded-3xl overflow-hidden border-2 ${project.borderColor} shadow-lg ${project.shadowClass}`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                y: -8,
                boxShadow: `0 25px 50px -12px ${project.shadowClass.replace('shadow-', 'rgba(').replace('/80', ', 0.5)')}`,
                transition: { type: 'spring', stiffness: 400, damping: 30, ease: "easeInOut" }
              }}
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
