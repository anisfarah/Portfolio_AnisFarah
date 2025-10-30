"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  borderGradient?: boolean;
  delay?: number;
}

export function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  borderGradient = false,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`
        relative overflow-hidden rounded-xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg
        border border-gray-200/50 dark:border-gray-700/50 shadow-xl
        ${hoverEffect ? "hover:shadow-2xl hover:-translate-y-1 transition-all duration-300" : ""}
        ${borderGradient ? "gradient-border" : ""}
        ${className}
      `}
    >
      {/* Inner glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10"></div>
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
      
      {/* Hover shine effect */}
      {hoverEffect && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-500/0 via-white/30 to-purple-500/0 opacity-0 group-hover:opacity-100 translate-x-full group-hover:translate-x-0 transition-all duration-1000"></div>
      )}
    </motion.div>
  );
} 