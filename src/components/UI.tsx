import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'dark';
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ variant = 'primary', children, className, onClick, ...props }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden px-8 py-3 font-condensed text-sm font-bold uppercase tracking-wider transition-colors duration-300",
        variant === 'primary' && "bg-primary-teal text-white border-2 border-primary-teal",
        variant === 'outline' && "bg-transparent text-primary-teal border-2 border-primary-teal",
        variant === 'dark' && "bg-near-black text-white border-2 border-near-black",
        className
      )}
      {...props}
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-teal group-hover:mix-blend-difference">
        {children}
      </span>
      <div 
        className={cn(
          "absolute inset-0 scale-x-0 transition-transform duration-350 ease-[cubic-bezier(0.76,0,0.24,1)] origin-right group-hover:scale-x-100 group-hover:origin-left",
          variant === 'primary' && "bg-white",
          variant === 'outline' && "bg-primary-teal",
          variant === 'dark' && "bg-primary-teal"
        )}
      />
    </button>
  );
};

export const Section = ({ children, className, id, dark = false, diagonal = false }: { children: React.ReactNode, className?: string, id?: string, dark?: boolean, diagonal?: boolean }) => {
  return (
    <section 
      id={id} 
      className={cn(
        "relative py-20 px-6 md:px-12 overflow-hidden",
        dark ? "bg-dark-bg text-white" : "bg-white text-near-black",
        diagonal && "diagonal-cut-bottom",
        className
      )}
    >
      {dark && <div className="animated-grid absolute inset-0 pointer-events-none opacity-50" />}
      <div className="relative z-10 max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export const Eyebrow = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={cn("block font-condensed text-primary-teal text-sm font-bold uppercase tracking-[0.2em] mb-4", className)}>
    {children}
  </span>
);

export const StatCounter = ({ end, label, suffix = "" }: { end: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easedProgress * end);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [end]);

  return (
    <div className="text-center">
      <div className="font-display text-4xl md:text-6xl text-primary-teal mb-2">
        {count}{suffix}
      </div>
      <div className="font-condensed text-xs text-mid-grey uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
};
