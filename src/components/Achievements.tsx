const Achievements: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
        Professional Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800/50 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="font-semibold text-sky-600 dark:text-sky-400 mb-2">Technical Leadership</h3>
          <p className="text-gray-600 dark:text-gray-300">Led 3 development teams of 8+ engineers, delivering 15+ successful projects</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800/50 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="font-semibold text-sky-600 dark:text-sky-400 mb-2">Innovation</h3>
          <p className="text-gray-600 dark:text-gray-300">4 patents filed for innovative software solutions in cloud computing</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800/50 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="font-semibold text-sky-600 dark:text-sky-400 mb-2">Recognition</h3>
          <p className="text-gray-600 dark:text-gray-300">2x Developer of the Year award recipient at previous companies</p>
        </div>
      </div>
    </div>
  )
}

export default Achievements 