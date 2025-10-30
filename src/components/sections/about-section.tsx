"use client";

import { PERSONAL_INFO, EDUCATION } from "@/data/constants";
import { motion } from "framer-motion";
import { Code, Globe, MapPin, Server, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-16 items-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Left Side - Professional Info & Skills */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {t('about.professionalTitle')}
              </h3>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                <MapPin className="w-4 h-4 text-blue-600" aria-hidden="true" />
                <span>{t('about.location')}</span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                {t('about.summary')}
              </p>
            </motion.div>

            {/* Education moved below the two-column grid */}

            {/* Skills List */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Machine Learning</span>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Deep Learning</span>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Computer Vision</span>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">NLP</span>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">MLOps & Deployment</span>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Data Engineering</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <User className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t('about.features.userCentered.title')}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t('about.features.userCentered.description')}
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ y: -5 }}
            >
              <Code className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t('about.features.cleanCode.title')}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t('about.features.cleanCode.description')}
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <Server className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t('about.features.scalableSolutions.title')}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t('about.features.scalableSolutions.description')}
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ y: -5 }}
            >
              <Globe className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t('about.features.modernTechnologies.title')}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t('about.features.modernTechnologies.description')}
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Education Grid - full width below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700 p-6"
        >
          <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            {t('about.education.title')}
          </h4>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
            {EDUCATION.map((edu) => (
              <div key={edu.name} className="flex items-center gap-4 p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <img src={edu.logo} alt={edu.name} className="w-12 h-12 object-contain" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {edu.website ? (
                      <a href={edu.website} target="_blank" className="hover:underline">
                        {edu.name}
                      </a>
                    ) : (
                      edu.name
                    )}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
                    {language === 'fr' ? edu.type.fr : edu.type.en}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 truncate">{edu.period} • {language === 'fr' ? edu.location.fr : edu.location.en}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 