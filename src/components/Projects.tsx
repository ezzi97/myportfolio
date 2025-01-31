interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Led the development of a full-stack e-commerce platform serving 100k+ monthly users. Implemented microservices architecture reducing server costs by 35%.',
    image: 'https://placehold.co/600x400',
    technologies: ['React', 'Node.js', 'AWS', 'MongoDB'],
    link: 'https://project1.com'
  },
  {
    id: 2,
    title: 'Real-time Analytics Dashboard',
    description: 'Designed and built a real-time analytics dashboard processing 1M+ events daily. Improved data visualization response time by 65%.',
    image: 'https://placehold.co/600x400',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis'],
    link: 'https://project2.com'
  },
  {
    id: 3,
    title: 'AI-Powered Healthcare Platform',
    description: 'Developed a machine learning platform for medical image analysis, achieving 95% accuracy in early disease detection. Reduced diagnosis time by 75%.',
    image: 'https://placehold.co/600x400',
    technologies: ['Python', 'TensorFlow', 'Docker', 'GCP'],
    link: 'https://project3.com'
  },
  {
    id: 4,
    title: 'Financial Trading System',
    description: 'Built a high-frequency trading platform processing 50k+ transactions per second. Implemented real-time risk management reducing error rates by 99%.',
    image: 'https://placehold.co/600x400',
    technologies: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL'],
    link: 'https://project4.com'
  },
  {
    id: 5,
    title: 'Mobile Payment Solution',
    description: 'Created a secure mobile payment system used by 2M+ users. Integrated with multiple banking APIs and implemented PCI-DSS compliant architecture.',
    image: 'https://placehold.co/600x400',
    technologies: ['React Native', 'Node.js', 'Firebase', 'Stripe'],
    link: 'https://project5.com'
  },
  {
    id: 6,
    title: 'DevOps Automation Suite',
    description: 'Architected a CI/CD pipeline automation tool used by 50+ development teams. Reduced deployment failures by 80% and cut release time by 60%.',
    image: 'https://placehold.co/600x400',
    technologies: ['Kubernetes', 'Jenkins', 'Terraform', 'AWS'],
    link: 'https://project6.com'
  },
  // Add more projects here
]

const Projects: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700"
            >
              <img
                className="w-full h-48 object-cover"
                src={project.image}
                alt={project.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="mt-4 inline-block text-sky-500 hover:text-sky-600 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects 