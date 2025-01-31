import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode, toggleDarkMode } = useTheme()

  return (
    <header>
      {/* Navigation Bar */}
      <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo/Name */}
            <div className="text-xl font-semibold text-sky-600 dark:text-sky-400">
              John Doe
            </div>
            
            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                About Me
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-sky-500 dark:bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
              <a
                href="#achievements"
                className="text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                Achievements
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-sky-500 dark:bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
              <a
                href="#projects"
                className="text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                My Projects
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-sky-500 dark:bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
              <a
                href="#education"
                className="text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                Education
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-sky-500 dark:bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
              </button>

              {/* Contact Button */}
              <a
                href="mailto:john.doe@example.com"
                className="hidden md:block bg-sky-500 dark:bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-sky-600 dark:hover:bg-sky-700 transition-colors"
              >
                Get in Touch
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t dark:border-gray-800">
              <a
                href="#about"
                className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
              >
                About Me
              </a>
              <a
                href="#achievements"
                className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
              >
                Achievements
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
              >
                My Projects
              </a>
              <a
                href="#education"
                className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
              >
                Education
              </a>
              <a
                href="#contacts"
                className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
              >
                Contacts
              </a>
              <a
                href="mailto:john.doe@example.com"
                className="block px-3 py-2 text-base font-medium text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Profile Section */}
      <div className="mt-16">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-end">
              <img
                className="h-48 w-48 rounded-full object-cover ring-4 ring-sky-100 dark:ring-sky-800 shadow-lg"
                src="assets/images/john_doe.png"
                alt="Profile"
              />
            </div>
            
            {/* Profile Info */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">John Doe</h1>
              <h2 className="mt-2 text-2xl text-gray-600 dark:text-gray-300">Full Stack Developer</h2>
              {/* Career Summary */}
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                Accomplished Full Stack Developer with 10 years of experience in building modern web applications.
                Specialized in React, Node.js, and cloud architecture. Led teams that increased application 
                performance by 40% and reduced deployment time by 60%. Industry expert in UI/UX design 
                and microservices architecture.
              </p>
              {/* Philosophy Statement */}
              <p className="mt-4 text-md text-gray-600 dark:text-gray-400 italic">
                "I believe in creating technology that makes a positive impact on people's lives,
                focusing on clean code, user experience, and sustainable development practices."
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 