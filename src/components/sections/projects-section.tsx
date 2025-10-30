"use client";

import { PROJECTS } from "@/data/constants";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('projects.title')}</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ 
  project, 
  index 
}: { 
  project: {
    id: string;
    title: string;
    description: string;
    descriptionFr?: string;
    image: string;
    tags: string[];
    demoUrl: string;
    sourceUrl: string;
  };
  index: number;
}) {
  const { t, language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-700 group">
        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <motion.div 
            className="h-full w-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Code className="w-12 h-12 text-blue-600/50 dark:text-blue-400/50" />
          </motion.div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
          {language === 'fr' && project.descriptionFr ? project.descriptionFr : project.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.map((tag) => (
            <span
              key={`${project.id}-${tag}`}
              className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/*
        <div className="flex gap-2">
          <Button
            href={project.demoUrl}
            target="_blank"
            size="sm"
            className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-xs"
          >
            <ExternalLink className="w-3 h-3" />
            {t('projects.demo')}
          </Button>
          <Button
            href={project.sourceUrl}
            target="_blank"
            variant="outline"
            size="sm"
            className="flex items-center gap-1 text-xs"
          >
            <Github className="w-3 h-3" />
            {t('projects.code')}
          </Button>
        </div>
        */}
      </div>
    </motion.div>
  );
} 