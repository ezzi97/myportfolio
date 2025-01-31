const Education: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">
        Certifications & Education
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="px-4 py-2 bg-white dark:bg-gray-800/50 rounded-full text-sky-600 dark:text-sky-400 shadow-sm border border-gray-100 dark:border-gray-700">
          AWS Certified Solutions Architect
        </span>
        <span className="px-4 py-2 bg-white dark:bg-gray-800/50 rounded-full text-sky-600 dark:text-sky-400 shadow-sm border border-gray-100 dark:border-gray-700">
          Google Cloud Professional Developer
        </span>
        <span className="px-4 py-2 bg-white dark:bg-gray-800/50 rounded-full text-sky-600 dark:text-sky-400 shadow-sm border border-gray-100 dark:border-gray-700">
          M.S. Computer Science, Stanford University
        </span>
      </div>
    </div>
  )
}

export default Education 