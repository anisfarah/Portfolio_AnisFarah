"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Mail, Menu, X, Github, Linkedin, FileDown, Languages } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { ThemeToggle } from "../ui/theme-toggle";
import { PERSONAL_INFO } from "@/data/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { getCVPath } from "@/utils/download-cv";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export function FloatingNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();

  const navItems: NavItem[] = useMemo(() => [
    { label: t('nav.home'), href: "/", icon: <Home className="w-5 h-5" /> },
    { label: t('nav.about'), href: "/#about", icon: <User className="w-5 h-5" /> },
    { label: t('nav.experience'), href: "/#experience", icon: <Briefcase className="w-5 h-5" /> },
    { label: t('nav.projects'), href: "/#projects", icon: <Code className="w-5 h-5" /> },
    { label: t('nav.contact'), href: "/#contact", icon: <Mail className="w-5 h-5" /> },
  ], [t]);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('/#', '')).filter(Boolean);
      
      // If we're at the top, set Home as active
      if (window.scrollY < 100) {
        setActiveSection("/");
        return;
      }
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(`/#${section}`);
          return;
        }
      }
    };

    handleScroll(); // Call once on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <>
      {/* Floating Navigation */}
      <motion.div 
        className="fixed bottom-8 left-0 right-0 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div 
          className="bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-md w-fit mx-auto"
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center">
            {/* Mobile Menu Toggle with ripple effect */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative lg:hidden p-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors overflow-hidden"
              aria-label="Toggle menu"
            >
              <span className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 transform scale-0 rounded-full button-ripple"></span>
              {isMenuOpen ? <X className="w-5 h-5 relative z-10" /> : <Menu className="w-5 h-5 relative z-10" />}
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center relative">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative flex items-center px-4 py-3 transition-all duration-200 overflow-hidden group",
                    activeSection === item.href
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  )}
                  onMouseEnter={() => setHoveredItem(item.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 transform scale-0 rounded-full button-ripple"></span>
                  <motion.div
                    animate={{ 
                      y: activeSection === item.href ? [-2, 0] : 0,
                      scale: activeSection === item.href ? [1.1, 1] : 1
                    }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    {item.icon}
                  </motion.div>
                  
                  {/* Active indicator per item */}
                  {activeSection === item.href && (
                    <motion.div 
                      className="absolute bottom-1 left-3 right-3 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  {/* Tooltip that appears on hover */}
                  <motion.div 
                    className="absolute left-1/2 -translate-x-1/2 -top-12 bg-gray-900 dark:bg-gray-700 text-white px-2 py-1 rounded-md text-sm font-medium shadow-lg whitespace-nowrap pointer-events-none z-50"
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredItem === item.href ? 1 : 0,
                      y: hoveredItem === item.href ? 0 : 10,
                      scale: hoveredItem === item.href ? 1 : 0.8
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-gray-900 dark:bg-gray-700"></div>
                  </motion.div>
                </Link>
              ))}
            </div>
            
            {/* Social Links & CV Download (Always visible) */}
            <div className="flex items-center border-l border-gray-200 dark:border-gray-700 pl-2">
              <a 
                href={PERSONAL_INFO.contact.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors overflow-hidden"
                aria-label="GitHub"
                onMouseEnter={() => setHoveredItem('github')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 transform scale-0 rounded-full button-ripple"></span>
                <Github className="w-5 h-5 relative z-10" />
                <motion.div 
                  className="absolute left-1/2 -translate-x-1/2 -top-12 bg-gray-900 dark:bg-gray-700 text-white px-2 py-1 rounded-md text-sm font-medium shadow-lg whitespace-nowrap pointer-events-none z-50"
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ 
                    opacity: hoveredItem === 'github' ? 1 : 0,
                    y: hoveredItem === 'github' ? 0 : 10,
                    scale: hoveredItem === 'github' ? 1 : 0.8
                  }}
                  transition={{ duration: 0.2 }}
                >
                  GitHub
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-gray-900 dark:bg-gray-700"></div>
                </motion.div>
              </a>
              <a 
                href={PERSONAL_INFO.contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors overflow-hidden"
                aria-label="LinkedIn"
                onMouseEnter={() => setHoveredItem('linkedin')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 transform scale-0 rounded-full button-ripple"></span>
                <Linkedin className="w-5 h-5 relative z-10" />
                <motion.div 
                  className="absolute left-1/2 -translate-x-1/2 -top-12 bg-gray-900 dark:bg-gray-700 text-white px-2 py-1 rounded-md text-sm font-medium shadow-lg whitespace-nowrap pointer-events-none z-50"
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ 
                    opacity: hoveredItem === 'linkedin' ? 1 : 0,
                    y: hoveredItem === 'linkedin' ? 0 : 10,
                    scale: hoveredItem === 'linkedin' ? 1 : 0.8
                  }}
                  transition={{ duration: 0.2 }}
                >
                  LinkedIn
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-gray-900 dark:bg-gray-700"></div>
                </motion.div>
              </a>
              <a 
                href={getCVPath(language)} 
                download
                className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors overflow-hidden"
                aria-label={t('nav.downloadCV')}
                onMouseEnter={() => setHoveredItem('cv')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 transform scale-0 rounded-full button-ripple"></span>
                <FileDown className="w-5 h-5 relative z-10" />
                <motion.div 
                  className="absolute left-1/2 -translate-x-1/2 -top-12 bg-gray-900 dark:bg-gray-700 text-white px-2 py-1 rounded-md text-sm font-medium shadow-lg whitespace-nowrap pointer-events-none z-50"
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ 
                    opacity: hoveredItem === 'cv' ? 1 : 0,
                    y: hoveredItem === 'cv' ? 0 : 10,
                    scale: hoveredItem === 'cv' ? 1 : 0.8
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {t('nav.downloadCV')}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-gray-900 dark:bg-gray-700"></div>
                </motion.div>
              </a>
            </div>
            
            {/* Language Toggle */}
            <div className="px-2 border-l border-gray-200 dark:border-gray-700 ml-2">
              <button
                onClick={toggleLanguage}
                className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors overflow-hidden"
                aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
                onMouseEnter={() => setHoveredItem('language')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 transform scale-0 rounded-full button-ripple"></span>
                <div className="relative z-10 flex items-center">
                  <Languages className="w-4 h-4 mr-1" />
                  <span className="text-xs font-medium">{language === 'en' ? 'FR' : 'EN'}</span>
                </div>
                <motion.div 
                  className="absolute left-1/2 -translate-x-1/2 -top-12 bg-gray-900 dark:bg-gray-700 text-white px-2 py-1 rounded-md text-sm font-medium shadow-lg whitespace-nowrap pointer-events-none z-50"
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ 
                    opacity: hoveredItem === 'language' ? 1 : 0,
                    y: hoveredItem === 'language' ? 0 : 10,
                    scale: hoveredItem === 'language' ? 1 : 0.8
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {language === 'en' ? 'Français' : 'English'}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-gray-900 dark:bg-gray-700"></div>
                </motion.div>
              </button>
            </div>
            
            {/* Theme Toggle */}
            <div className="px-3 border-l border-gray-200 dark:border-gray-700 ml-2">
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Mobile Menu Popup */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-2 flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-3 px-4 py-3 rounded-lg transition-colors overflow-hidden",
                    activeSection === item.href
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 transform scale-0 rounded-lg button-ripple"></span>
                  <span className="relative z-10">{item.icon}</span>
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
              
              {/* Language toggle in mobile menu */}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="relative flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors mt-2 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <span className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 transform scale-0 rounded-lg button-ripple"></span>
                <Languages className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{language === 'en' ? 'Français' : 'English'}</span>
              </button>
              
              {/* Download CV option in mobile menu */}
              <a
                href={getCVPath(language)}
                download
                className="relative flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors overflow-hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 transform scale-0 rounded-lg button-ripple"></span>
                <FileDown className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{t('nav.downloadCV')}</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
} 