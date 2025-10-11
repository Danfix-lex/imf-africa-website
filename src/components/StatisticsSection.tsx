'use client';
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  LinearProgress,
} from '@mui/material';
import {
  AccountBalance as AccountBalanceIcon,
  Public as PublicIcon,
  Groups as GroupsIcon,
  Payments as PaymentsIcon,
  School as SchoolIcon,
  Business as BusinessIcon,
  Timeline as TimelineIcon,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ 
  end, 
  duration = 2, 
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const achievements = [
  {
    icon: <AccountBalanceIcon />,
    title: 'Countries Served',
    value: 54,
    description: 'African nations with active ministry presence',
    color: '#1976d2',
    progress: 90,
  },
  {
    icon: <SchoolIcon />,
    title: 'Ministers Trained',
    value: 12,
    suffix: 'K+',
    description: 'Church leaders equipped and empowered',
    color: '#f57c00',
    progress: 85,
  },
  {
    icon: <GroupsIcon />,
    title: 'Lives Transformed',
    value: 850,
    suffix: 'K+',
    description: 'People reached through ministry programs',
    color: '#388e3c',
    progress: 95,
  },
  {
    icon: <BusinessIcon />,
    title: 'Church Plants',
    value: 3200,
    suffix: '+',
    description: 'New ministries established across Africa',
    color: '#7b1fa2',
    progress: 80,
  },
  {
    icon: <PaymentsIcon />,
    title: 'Partner Churches',
    value: 4500,
    suffix: '+',
    description: 'Local congregations in fellowship',
    color: '#d32f2f',
    progress: 75,
  },
  {
    icon: <TimelineIcon />,
    title: 'Ministry Growth',
    value: 35,
    suffix: '%',
    description: 'Annual growth in ministry activities',
    color: '#0288d1',
    progress: 88,
  },
];

const StatisticsSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 10,
        background: `linear-gradient(135deg, 
          ${theme.palette.primary.main}08 0%, 
          ${theme.palette.background.default} 30%,
          ${theme.palette.secondary.main}05 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 80%, ${theme.palette.primary.main}10 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, ${theme.palette.secondary.main}10 0%, transparent 50%)`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Our Ministry Impact in Numbers
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.2rem' },
              }}
            >
              Measuring God&apos;s faithfulness through ministry results and spiritual transformation across Africa
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card
                sx={{
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: 4,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    boxShadow: `0 20px 60px ${achievement.color}20`,
                    background: 'rgba(255, 255, 255, 1)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: achievement.color,
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${achievement.color}, ${achievement.color}dd)`,
                        color: 'white',
                        mb: 3,
                        boxShadow: `0 8px 32px ${achievement.color}30`,
                      }}
                    >
                      {achievement.icon}
                    </Box>
                  </motion.div>

                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      mb: 1,
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      color: achievement.color,
                    }}
                  >
                    <AnimatedCounter 
                      end={achievement.value} 
                      suffix={achievement.suffix || ''} 
                    />
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      mb: 2,
                    }}
                  >
                    {achievement.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    {achievement.description}
                  </Typography>

                  <Box sx={{ mt: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="caption" sx={{ fontWeight: 500 }}>
                        Progress
                      </Typography>
                      <Typography variant="caption" sx={{ fontWeight: 500 }}>
                        {achievement.progress}%
                      </Typography>
                    </Box>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <LinearProgress
                        variant="determinate"
                        value={achievement.progress}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: `${achievement.color}20`,
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: achievement.color,
                            borderRadius: 4,
                          },
                        }}
                      />
                    </motion.div>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* Additional Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: 10 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: 'text.primary',
              }}
            >
              Building God&apos;s Kingdom in Africa Together
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.8,
                fontSize: '1.1rem',
              }}
            >
              Every number represents real people, communities, and ministries experiencing
              spiritual transformation. Our commitment extends beyond training to
              building strong faith communities and fostering long-term spiritual growth.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default StatisticsSection;