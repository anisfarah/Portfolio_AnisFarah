"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  text: string | ReactNode;
  className?: string;
  variant?: "gradient" | "heading" | "subheading" | "paragraph";
  animation?: "fade" | "reveal" | "typewriter" | "none";
  delay?: number;
}

export function AnimatedText({
  text,
  className = "",
  variant = "heading",
  animation = "fade",
  delay = 0,
}: AnimatedTextProps) {
  // Define base classes based on variant
  const variantClasses = {
    gradient: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold",
    heading: "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white",
    subheading: "text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100",
    paragraph: "text-base md:text-lg text-gray-700 dark:text-gray-300",
  };

  // If text is a string and animation is typewriter, split it into characters
  const renderTypewriter = () => {
    if (typeof text !== "string") return text;
    
    return (
      <span className="inline-block">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.1,
              delay: delay + index * 0.05,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    );
  };

  // If animation is reveal, wrap in reveal animation
  const renderReveal = () => {
    return (
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay, ease: "easeOut" }}
        >
          {text}
        </motion.div>
      </div>
    );
  };

  // If animation is fade, wrap in fade animation
  const renderFade = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
      >
        {text}
      </motion.div>
    );
  };

  // Render based on animation type
  const renderContent = () => {
    switch (animation) {
      case "typewriter":
        return renderTypewriter();
      case "reveal":
        return renderReveal();
      case "fade":
        return renderFade();
      default:
        return text;
    }
  };

  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {renderContent()}
    </div>
  );
} 