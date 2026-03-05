

const projects = [
  {
    id: 1,
    title: '项目一',
    description: '这是一个关于项目一的简短描述，突出其核心功能和目标。',
    imageUrl: 'https://via.placeholder.com/400x250',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: '项目二',
    description: '这是一个关于项目二的简短描述，突出其核心功能和目标。',
    imageUrl: 'https://via.placeholder.com/400x250',
    technologies: ['Vue.js', 'JavaScript', 'SCSS'],
  },
];

const Projects = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-20">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">我的项目</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
