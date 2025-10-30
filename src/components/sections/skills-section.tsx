"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { 
  SiOpenai, 
  SiDotnet, 
  SiSpringboot, 
  SiPython, 
  SiAngular, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiPostgresql, 
  SiMongodb, 
  SiMysql,
  SiDocker,
  SiGit,
  SiPytorch,
  SiTensorflow,
  SiOpencv
} from "react-icons/si";
import { 
  FaBrain, 
  FaRobot, 
  FaDatabase, 
  FaJava, 
  FaMicrosoft,
  FaCloud,
  FaCode
} from "react-icons/fa";
import { SKILLS } from "@/data/constants";
import { useLanguage } from "@/contexts/LanguageContext";

type SkillCategory = 'frontend' | 'backend' | 'databases' | 'ai' | 'tools';

export function SkillsSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('ai');

  const categories: { id: SkillCategory; label: string }[] = [
    { id: 'ai', label: t('skills.categories.ai') },
    { id: 'backend', label: t('skills.categories.backend') },
    { id: 'frontend', label: t('skills.categories.frontend') },
    { id: 'databases', label: t('skills.categories.databases') },
    { id: 'tools', label: t('skills.categories.tools') },
  ];

  return (
    <section id="skills" className="py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('skills.title')}</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-gray-100 dark:bg-gray-900 p-1.5 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                  activeCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          key={activeCategory} // Force re-render on category change for animation
        >
          {SKILLS[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-2">
                <SkillIcon name={skill.icon} />
              </div>
              <h3 className="font-medium text-sm text-gray-900 dark:text-gray-100">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Highlights */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
            {t('skills.coreCompetencies.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
                             <div className="flex items-center mb-3">
                 <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                 <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('skills.coreCompetencies.areas.aiIntegration.title')}</h4>
               </div>
               <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                 {t('skills.coreCompetencies.areas.aiIntegration.description')}
               </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
                             <div className="flex items-center mb-3">
                 <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                 <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('skills.coreCompetencies.areas.fullStackDevelopment.title')}</h4>
               </div>
               <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                 {t('skills.coreCompetencies.areas.fullStackDevelopment.description')}
               </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
                             <div className="flex items-center mb-3">
                 <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                 <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('skills.coreCompetencies.areas.databaseApiDesign.title')}</h4>
               </div>
               <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                 {t('skills.coreCompetencies.areas.databaseApiDesign.description')}
               </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
                             <div className="flex items-center mb-3">
                 <div className="w-3 h-3 bg-orange-600 rounded-full mr-3"></div>
                 <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('skills.coreCompetencies.areas.modernPractices.title')}</h4>
               </div>
               <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                 {t('skills.coreCompetencies.areas.modernPractices.description')}
               </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function SkillIcon({ name }: { name: string }) {
  const iconProps = { className: "w-4 h-4 text-blue-600 dark:text-blue-400" };
  
  switch (name) {
    // AI & LLM
    case 'ai':
      return <FaBrain {...iconProps} />;
    case 'openai':
      return <SiOpenai {...iconProps} />;
    case 'azure':
      return <FaMicrosoft {...iconProps} />;
    case 'prompt':
      return <FaRobot {...iconProps} />;
    case 'rag':
      return <FaBrain {...iconProps} />;
    case 'vector':
      return <FaDatabase {...iconProps} />;
    case 'pytorch':
      return <SiPytorch {...iconProps} />;
    case 'tensorflow':
      return <SiTensorflow {...iconProps} />;
    case 'opencv':
      return <SiOpencv {...iconProps} />;
    
    // Backend
    case 'dotnet':
      return <SiDotnet {...iconProps} />;
    case 'csharp':
      return <FaMicrosoft {...iconProps} />;
    case 'spring':
      return <SiSpringboot {...iconProps} />;
    case 'java':
      return <FaJava {...iconProps} />;
    case 'python':
      return <SiPython {...iconProps} />;
    case 'api':
      return <FaCode {...iconProps} />;
    
    // Frontend
    case 'angular':
      return <SiAngular {...iconProps} />;
    case 'ts':
      return <SiTypescript {...iconProps} />;
    case 'js':
      return <SiJavascript {...iconProps} />;
    case 'html':
      return <SiHtml5 {...iconProps} />;
    case 'css':
      return <SiCss3 {...iconProps} />;
    
    // Databases
    case 'postgres':
      return <SiPostgresql {...iconProps} />;
    case 'mongo':
      return <SiMongodb {...iconProps} />;
    case 'mysql':
      return <SiMysql {...iconProps} />;
    
    // Tools
    case 'docker':
      return <SiDocker {...iconProps} />;
    case 'git':
      return <SiGit {...iconProps} />;
    case 'aws':
      return <FaCloud {...iconProps} />;
    case 'signalr':
      return <FaCloud {...iconProps} />;
    case 'ef':
      return <FaCode {...iconProps} />;
    case 'mediatr':
      return <FaCode {...iconProps} />;
    
    default:
      return (
        <div className="text-blue-600 dark:text-blue-400 font-bold text-xs">
          {name.substring(0, 2).toUpperCase()}
        </div>
      );
  }
}

 