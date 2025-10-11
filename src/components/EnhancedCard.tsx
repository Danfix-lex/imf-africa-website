'use client';
import React from 'react';
import { Card, CardContent, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  gradientBorder?: string;
  sx?: any;
  [key: string]: any;
}

const EnhancedCard: React.FC<EnhancedCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true, 
  gradientBorder, 
  sx = {}, 
  ...props 
}) => {
  const theme = useTheme();

  const defaultSx = {
    height: '100%',
    background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,1))',
    backdropFilter: 'blur(24px)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    borderRadius: 4,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    ...(gradientBorder && {
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '5px',
        background: gradientBorder,
      },
    }),
    ...(hoverEffect && {
      '&:hover': {
        boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
        transform: 'translateY(-6px)',
        background: 'linear-gradient(145deg, rgba(255,255,255,1), rgba(255,255,255,1))',
      },
    }),
    ...sx,
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
    >
      <Card sx={defaultSx} className={className} {...props}>
        {children}
      </Card>
    </motion.div>
  );
};

export default EnhancedCard;