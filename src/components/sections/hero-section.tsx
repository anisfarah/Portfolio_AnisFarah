"use client";

import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/data/constants";
import { motion } from "framer-motion";
import { ArrowDown, Code, Database, Globe, FileDown } from "lucide-react";
import { useEffect, useState } from "react";
import ClientOnly from "../layout/client-only";
import { useLanguage } from "@/contexts/LanguageContext";
import { downloadCV } from "@/utils/download-cv";

// Define the particle properties interface
interface ParticleProps {
  width: number;
  height: number;
  left: string;
  top: string;
  yMovement: number;
  xMovement: number;
  duration: number;
  delay: number;
}

// Generate particle props outside of the component to avoid hydration issues
const generateParticleProps = (count: number): ParticleProps[] => {
  return Array.from({ length: count }).map(() => ({
    width: Math.random() * 40 + 10,
    height: Math.random() * 40 + 10,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    yMovement: Math.random() * -100 - 50,
    xMovement: Math.random() * 50 - 25,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 10,
  }));
};

export function HeroSection() {
  const { t, language } = useLanguage();
  const [particles, setParticles] = useState<ParticleProps[]>([]);
  
  // Initialize particles only on the client side
  useEffect(() => {
    setParticles(generateParticleProps(20));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pb-24 overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 -z-10 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full -top-20 -right-20 blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full -bottom-20 -left-20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Animated particles - only rendered on client side */}
      <ClientOnly>
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-400/20 dark:bg-blue-400/10"
              style={{
                width: particle.width,
                height: particle.height,
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [0, particle.yMovement],
                x: [0, particle.xMovement],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
                delay: particle.delay
              }}
            />
          ))}
        </div>
      </ClientOnly>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-12">
          {/* Text content */}
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-800 shadow-sm">
                {t('hero.availableForWork')}
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {t('hero.greeting')}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
              <span className="inline-block animate-wave origin-bottom-right">👋</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {t('hero.title')}
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('buttons.contactMe')}
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-200"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('buttons.viewMyWork')}
              </Button>
              
              {/* Download Resume Button */}
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
                onClick={() => downloadCV(language)}
              >
                <FileDown className="w-4 h-4" />
                {t('buttons.resume')}
              </Button>
            </motion.div>
            
            {/* Currently working indicator */}
            <motion.div
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              {t('hero.currentlyWorking')}
            </motion.div>
          </motion.div>
          
          {/* Profile Image with floating icons */}
          <motion.div
            className="relative w-56 h-56 md:w-64 md:h-64"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="rounded-full overflow-hidden bg-gradient-to-tr from-blue-600 to-purple-600 p-1 shadow-xl w-full h-full">
              <div className="rounded-full overflow-hidden bg-white dark:bg-gray-900 p-1 w-full h-full">
                <img 
                  src="/mdr-blanc.png" 
                  alt="Anis FARAH - Data Scientist & AI Engineer"
                  className="w-full h-full rounded-full object-cover aspect-square"
                />
              </div>
            </div>
            
            {/* Floating tech icons */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.2, rotate: -10 }}
            >
              <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <Globe className="w-6 h-6 text-green-600 dark:text-green-400" />
            </motion.div>
            
            {/* Animated rings */}
            <div className="absolute inset-0 -z-10">
              <motion.div 
                className="w-full h-full rounded-full border-2 border-blue-500/20 dark:border-blue-500/10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="absolute inset-0 -z-10">
              <motion.div 
                className="w-full h-full rounded-full border-2 border-purple-500/20 dark:border-purple-500/10"
                animate={{ scale: [1.05, 1.15, 1.05] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.button 
              className="group flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ y: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-sm font-medium">{t('buttons.scrollDown')}</span>
              <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 