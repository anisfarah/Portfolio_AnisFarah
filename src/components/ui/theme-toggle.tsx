"use client";

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../layout/theme-provider';
import { cn } from '@/utils/cn';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn('w-6 h-6', className)} />;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'w-9 h-9 bg-opacity-20 backdrop-blur-md rounded-full flex items-center justify-center',
        'transition-colors hover:bg-gray-100/20 dark:hover:bg-gray-800/20',
        className
      )}
      aria-label="Toggle theme"
    >
      <Sun 
        className={cn(
          'h-5 w-5 rotate-0 scale-100 transition-all', 
          theme === 'dark' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        )} 
      />
      <Moon 
        className={cn(
          'absolute h-5 w-5 rotate-90 transition-all', 
          theme === 'dark' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        )} 
      />
    </button>
  );
} 