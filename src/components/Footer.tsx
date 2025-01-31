import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { IconType } from 'react-icons'

interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/yourusername',
      icon: FaInstagram,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      icon: FaLinkedin,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/yourphonenumber',
      icon: FaWhatsapp,
    },
  ]

  return (
    <footer className="py-12 bg-gradient-to-b from-transparent to-sky-50/5 dark:to-sky-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-center space-x-6">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6 hover:scale-110 transition-transform duration-300" />
            </a>
          ))}
        </div>
        <div className="mt-8 text-center text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 