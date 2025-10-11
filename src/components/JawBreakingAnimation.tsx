'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface JawBreakingAnimationProps {
  children: React.ReactNode;
  animationType?: 'staggeredEntrance' | 'waveEntrance' | 'bounceIn' | 'slideIn' | 'flipIn' | 'scaleIn' | 'fadeIn';
  className?: string;
  delay?: number;
  duration?: number;
  trigger?: boolean;
}

const JawBreakingAnimation: React.FC<JawBreakingAnimationProps> = ({
  children,
  animationType = 'staggeredEntrance',
  className = '',
  delay = 0,
  duration = 0.6,
  trigger = true
}) => {
  // Simple animation component without complex type handling
  const renderSimpleAnimation = () => {
    const commonProps = {
      initial: { opacity: 0 },
      animate: trigger ? { opacity: 1 } : { opacity: 0 },
      exit: { opacity: 0 },
      transition: { delay, duration },
      className: `motion-element ${className}`
    };

    switch (animationType) {
      case 'staggeredEntrance':
        return (
          <motion.div
            {...commonProps}
            initial={{ opacity: 0, y: 30 }}
            animate={trigger ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          >
            {children}
          </motion.div>
        );
      case 'bounceIn':
        return (
          <motion.div
            {...commonProps}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={trigger ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 }}
            transition={{ 
              delay, 
              type: "spring", 
              damping: 12, 
              stiffness: 200, 
              duration: duration * 1.5 
            }}
          >
            {children}
          </motion.div>
        );
      case 'slideIn':
        return (
          <motion.div
            {...commonProps}
            initial={{ opacity: 0, x: -100 }}
            animate={trigger ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          >
            {children}
          </motion.div>
        );
      case 'flipIn':
        return (
          <motion.div
            {...commonProps}
            initial={{ opacity: 0, rotateX: -90 }}
            animate={trigger ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: -90 }}
          >
            {children}
          </motion.div>
        );
      case 'scaleIn':
        return (
          <motion.div
            {...commonProps}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={trigger ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          >
            {children}
          </motion.div>
        );
      case 'fadeIn':
        return (
          <motion.div
            {...commonProps}
            initial={{ opacity: 0 }}
            animate={trigger ? { opacity: 1 } : { opacity: 0 }}
          >
            {children}
          </motion.div>
        );
      default:
        return (
          <motion.div
            {...commonProps}
            initial={{ opacity: 0, y: 30 }}
            animate={trigger ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          >
            {children}
          </motion.div>
        );
    }
  };

  return (
    <AnimatePresence>
      {renderSimpleAnimation()}
    </AnimatePresence>
  );
};

export default JawBreakingAnimation;