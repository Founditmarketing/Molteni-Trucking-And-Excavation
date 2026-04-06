import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS } from '@/src/constants';

export const PageLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] bg-dark-bg flex flex-col items-center justify-center"
        >
          <img 
            src={ASSETS.logo} 
            alt="Molteni Logo" 
            className="h-16 invert brightness-0 mb-8"
          />
          <div className="w-[200px] h-1 bg-white/10 relative overflow-hidden">
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.5, ease: "linear" }}
              className="absolute inset-0 bg-primary-teal"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
