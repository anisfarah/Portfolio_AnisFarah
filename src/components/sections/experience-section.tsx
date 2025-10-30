"use client";

import { WORK_EXPERIENCE } from "@/data/constants";
import { motion } from "framer-motion";
import { CalendarDays, ChevronDown, ChevronUp, ExternalLink, MapPin, Play, Download, ZoomIn, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ExperienceSection() {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('experience.title')}</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
            
            {WORK_EXPERIENCE.map((job, index) => (
              <ExperienceCard key={index} job={job} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ 
  job, 
  index 
}: { 
  job: {
    company: string;
    position: string;
    positionFr?: string;
    period: string;
    logo: string;
    responsibilities: string[];
    website?: string;
    location?: string;
    locationFr?: string;
    tech?: string[];
    video?: string;
    images?: string[];
    videoUrl?: string;
    attestation?: string;
    responsibilitiesFr?: string[];
    start?: string;
    end?: string;
  };
  index: number;
}) {
  const { t, language } = useLanguage();
  const [expanded, setExpanded] = useState(false); // All cards closed by default
  const [showVideo, setShowVideo] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  
  return (
    <motion.div 
      className={`relative mb-8 ${index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'} md:w-[calc(50%-32px)]`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-6 md:left-0 top-4 md:-translate-x-1/2 md:translate-x-0 transform -translate-x-1/2 md:-translate-y-0 w-3 h-3 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900" />
      
      {/* Card */}
      <div className="ml-12 md:ml-0 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-3">
          {/* Company logo */}
          <div className="bg-white dark:bg-gray-800 p-2 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700 w-12 h-12">
            <img 
              src={job.logo} 
              alt={`${job.company} Logo`}
              className="w-10 h-10 object-contain"
            />
          </div>
          
          <div className="flex-1">
            {/* Position */}
            <h3 className="text-lg font-bold">{language === 'fr' && job.positionFr ? job.positionFr : job.position}</h3>
            {/* Company */}
            <h4 className="text-blue-600 dark:text-blue-400 font-medium mb-1">
              {job.website ? (
                <a href={job.website} target="_blank" className="hover:underline inline-flex items-center gap-1">
                  {job.company}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : job.company}
            </h4>
            {/* Period */}
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <CalendarDays className="w-4 h-4 mr-1" />
              <span>{formatPeriod(job, language)}</span>
            </div>
            {(job.location || job.locationFr) && (
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{language === 'fr' && job.locationFr ? job.locationFr : job.location}</span>
              </div>
            )}
          </div>
          
          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-gray-100 dark:bg-gray-700 p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label={expanded ? t('experience.collapseDetails') : t('experience.expandDetails')}
          >
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
        
        {/* Responsibilities */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 border-t border-gray-100 dark:border-gray-700 pt-3"
          >
            <h5 className="text-sm font-semibold mb-2">{t('experience.responsibilities')}</h5>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
              {(language === 'fr' && job.responsibilitiesFr ? job.responsibilitiesFr : job.responsibilities).map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>

            {/* Tech badges */}
            {job.tech && job.tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {job.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-600/10 text-blue-600 dark:text-blue-300 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Media section */}
            {(job.video || job.images || job.videoUrl || job.attestation) && (
              <div className="mt-4 space-y-3">
                {job.video && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowVideo((v) => !v)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-blue-600/20 text-blue-600 dark:text-blue-300 rounded-md hover:bg-blue-600/30"
                    >
                      <Play className="w-4 h-4" /> {showVideo ? t('experience.hideVideo') : t('experience.showVideo')}
                    </button>
                    <a href={job.video} download className="flex items-center gap-2 px-3 py-1.5 bg-green-600/20 text-green-700 dark:text-green-300 rounded-md hover:bg-green-600/30">
                      <Download className="w-4 h-4" /> {t('experience.download')}
                    </a>
                  </div>
                )}
                {showVideo && job.video && (
                  <div className="relative w-full rounded-md overflow-hidden border border-blue-500/20" style={{ aspectRatio: '16/9' }}>
                    <video controls playsInline className="w-full h-full" preload="metadata">
                      <source src={job.video} type="video/mp4" />
                    </video>
                  </div>
                )}

                {job.videoUrl && (
                  <a href={job.videoUrl} target="_blank" className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600/20 text-blue-600 dark:text-blue-300 rounded-md hover:bg-blue-600/30">
                    <Play className="w-4 h-4" /> {t('experience.watchDemo')} <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                {job.images && job.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-3">
                    {job.images.map((img, i) => (
                      <button key={i} className="relative w-full h-36 rounded-md overflow-hidden border border-blue-500/20 group" onClick={() => setFullscreenImage(img)}>
                        <img src={img} alt={`demo-${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-colors">
                          <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100" />
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {job.attestation && (
                  <div className="block pt-1">
                    <a href={job.attestation} target="_blank" className="text-blue-600 dark:text-blue-300 inline-flex items-center gap-1 text-sm">
                      {t('experience.viewCertificate')} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Fullscreen image viewer */}
      {fullscreenImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setFullscreenImage(null)}>
          <button className="absolute top-4 right-4 text-white" onClick={() => setFullscreenImage(null)}>
            <X className="w-7 h-7" />
          </button>
          <img src={fullscreenImage} alt="preview" className="max-w-full max-h-[90vh] object-contain" />
        </div>
      )}
    </motion.div>
  );
} 

function formatPeriod(job: { start?: string; end?: string; period: string }, language: string) {
  if (!job.start || !job.end) return job.period;
  try {
    const opts: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
    const fmt = new Intl.DateTimeFormat(language === 'fr' ? 'fr-FR' : 'en-US', opts);
    const start = fmt.format(new Date(job.start));
    const end = fmt.format(new Date(job.end));
    return `${start} - ${end}`;
  } catch {
    return job.period;
  }
}