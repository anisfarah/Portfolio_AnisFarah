import Link from "next/link";
import { Github, Linkedin, Mail,Phone , MapPin } from "lucide-react";
import { PERSONAL_INFO } from "@/data/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Anis FARAH 
            </Link>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link 
                href="https://github.com/anisfarah" 
                target="_blank"
                className="bg-white dark:bg-gray-800 p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link 
                href="https://www.linkedin.com/in/anis-farah-89537216b" 
                target="_blank"
                className="bg-white dark:bg-gray-800 p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link 
                href="mailto:anisfarah2014@gmail.com" 
                className="bg-white dark:bg-gray-800 p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>  
              </Link>
              <Link 
                href={`tel:${PERSONAL_INFO.contact.phone?.replace(/\s+/g,'')}`}
                className="bg-white dark:bg-gray-800 p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
              >
                <Phone className="w-5 h-5" />
                <span className="sr-only">Téléphone</span>
              </Link>
          
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} Anis FARAH. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 mb-4 md:mb-0">
              <Link 
                href="/" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
              >
                Home
              </Link>
              <Link 
                href="/#about" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
              >
                About
              </Link>
              <Link 
                href="/#experience" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
              >
                Experience
              </Link>
              <Link 
                href="/#projects" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
              >
                Projects
              </Link>
              <Link 
                href="/#contact" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
              >
                Contact
              </Link>
            </nav>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Built with Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 