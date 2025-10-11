'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  useTheme,
  Chip,
} from '@mui/material';
import {
  Church as ChurchIcon,
  School as SchoolIcon,
  Favorite as FavoriteIcon,
  Groups as GroupsIcon,
  Public as PublicIcon,
  AutoStories as BibleIcon,
  Handshake as HandshakeIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const stats = [
  { icon: <PublicIcon />, value: '54', label: 'African Nations', description: 'Countries with active ministry presence', color: '#1565C0' },
  { icon: <SchoolIcon />, value: '15K+', label: 'Ministers Equipped', description: 'Pastors trained and ordained', color: '#2E7D32' },
  { icon: <ChurchIcon />, value: '3,200+', label: 'Churches Planted', description: 'New congregations established', color: '#7B1FA2' },
  { icon: <FavoriteIcon />, value: '750K+', label: 'Lives Transformed', description: 'Souls reached for Christ', color: '#C62828' },
];

const HeroSection: React.FC = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: { xs: 'auto', md: '100vh' },
        background: `linear-gradient(135deg, 
          ${theme.palette.primary.main}15 0%, 
          ${theme.palette.secondary.main}10 50%, 
          ${theme.palette.primary.light}15 100%)`,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 12, md: 10 },
        pb: { xs: 8, md: 8 },
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.08, scale: 1.2 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.light})`,
          filter: 'blur(30px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', lg: 'row' }, 
            gap: { xs: 6, lg: 8 }, 
            alignItems: 'center',
            textAlign: { xs: 'center', lg: 'left' },
            py: { xs: 6, md: 10 }
          }}>
            {/* Content Section */}
            <Box sx={{ flex: 1, maxWidth: { xs: '100%', lg: '600px' } }}>
              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                  <Chip 
                    icon={<StarIcon />}
                    label="Established 1950" 
                    sx={{ 
                      bgcolor: 'primary.main', 
                      color: 'white',
                      fontWeight: 600,
                      fontSize: { xs: '0.8rem', md: '0.9rem' }
                    }} 
                  />
                  <Chip 
                    label="75 Years of Ministry" 
                    sx={{ 
                      bgcolor: 'secondary.main', 
                      color: 'white',
                      fontWeight: 600,
                      fontSize: { xs: '0.8rem', md: '0.9rem' }
                    }} 
                  />
                </Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3.2rem', md: '4rem', lg: '4.5rem' },
                    fontWeight: 800,
                    color: 'text.primary',
                    mb: 3,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  <Box component="span" sx={{ 
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    International
                  </Box>
                  <br />
                  <Box component="span" sx={{ color: 'text.primary' }}>
                    Ministers Forum
                  </Box>
                  <br />
                  <Box component="span" sx={{ 
                    background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    Africa
                  </Box>
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                    fontWeight: 600,
                    color: 'primary.main',
                    mb: 4,
                    fontStyle: 'italic',
                    letterSpacing: '0.02em',
                  }}
                >
                  "Equipping Ministers • Strengthening Churches • Transforming Africa"
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'text.primary',
                    mb: 4,
                    lineHeight: 1.7,
                    maxWidth: '700px',
                    fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.4rem' },
                    fontWeight: 500,
                  }}
                >
                  A Christ-centered organization dedicated to empowering African ministers, 
                  strengthening local ministries, and advancing God's Kingdom across the continent 
                  through biblical training, spiritual formation, and transformational ministry.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ mb: 5 }}>
                  <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
                    gap: 2.5, 
                    maxWidth: '700px',
                    mx: { xs: 'auto', lg: 0 }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                      <BibleIcon sx={{ color: 'primary.main', fontSize: { xs: 20, md: 24 } }} />
                      <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                        Biblical Education
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                      <HandshakeIcon sx={{ color: 'primary.main', fontSize: { xs: 20, md: 24 } }} />
                      <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                        Ministry Partnership
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                      <FavoriteIcon sx={{ color: 'primary.main', fontSize: { xs: 20, md: 24 } }} />
                      <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                        Community Outreach
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 6,
                    lineHeight: 1.8,
                    maxWidth: '700px',
                    fontSize: { xs: '0.95rem', md: '1.1rem' },
                    fontStyle: 'italic',
                    borderLeft: '4px solid',
                    borderColor: 'primary.main',
                    pl: 3,
                    py: 2,
                    bgcolor: 'rgba(25, 118, 210, 0.05)',
                    borderRadius: '0 8px 8px 0',
                    mx: { xs: 'auto', lg: 0 }
                  }}
                >
                  "And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, 
                  to equip the saints for the work of ministry, for building up the body of Christ." 
                  <br />
                  <Box component="span" sx={{ fontWeight: 600, color: 'primary.main' }}>
                    — Ephesians 4:11-12
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 }, flexWrap: 'wrap', mb: 6, alignItems: 'center', justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      px: { xs: 4, md: 6 },
                      py: { xs: 2, md: 2.5 },
                      fontSize: { xs: '1rem', md: '1.2rem' },
                      fontWeight: 700,
                      borderRadius: 50,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                      boxShadow: '0 6px 30px rgba(25, 118, 210, 0.4)',
                      textTransform: 'none',
                      minWidth: { xs: '160px', md: '200px' },
                      '&:hover': {
                        background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 40px rgba(25, 118, 210, 0.5)',
                      },
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    Join Our Ministry
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      px: { xs: 4, md: 6 },
                      py: { xs: 2, md: 2.5 },
                      fontSize: { xs: '1rem', md: '1.2rem' },
                      fontWeight: 700,
                      borderRadius: 50,
                      borderWidth: 3,
                      borderColor: 'secondary.main',
                      color: 'secondary.main',
                      textTransform: 'none',
                      minWidth: { xs: '160px', md: '200px' },
                      '&:hover': {
                        bgcolor: 'secondary.main',
                        color: 'white',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 40px rgba(156, 39, 176, 0.4)',
                        borderWidth: 3,
                      },
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    Our Mission & Vision
                  </Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, alignItems: { xs: 'center', lg: 'flex-start' } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        bgcolor: 'success.main',
                        animation: 'pulse 2s infinite',
                        '@keyframes pulse': {
                          '0%': { transform: 'scale(1)', opacity: 1 },
                          '50%': { transform: 'scale(1.3)', opacity: 0.7 },
                          '100%': { transform: 'scale(1)', opacity: 1 },
                        },
                      }}
                    />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.main', fontSize: { xs: '0.85rem', md: '0.9rem' } }}>
                      Actively serving across 54 African nations
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
                    <ChurchIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                    <Typography variant="body2" sx={{ fontWeight: 500, fontSize: { xs: '0.85rem', md: '0.9rem' } }}>
                      Recognized by major Christian denominations
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Box>

            {/* Statistics Section */}
            <Box sx={{ flex: 1, width: '100%', maxWidth: { xs: '100%', lg: '600px' } }}>
              <motion.div
                variants={itemVariants}
                transition={{ delay: 0.5 }}
              >
                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr' }, 
                  gap: { xs: 2.5, md: 3.5 } 
                }}>
                  {stats.map((stat, index) => (
                    <Box key={index}>
                      <motion.div
                        variants={statsVariants}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
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
                              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                              transform: 'translateY(-8px) scale(1.02)',
                              background: 'rgba(255, 255, 255, 1)',
                            },
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              height: '4px',
                              background: stat.color || `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            },
                          }}
                        >
                          <CardContent sx={{ textAlign: 'center', p: { xs: 2.5, md: 4 } }}>
                            <motion.div
                              whileHover={{ rotate: [0, -5, 5, 0] }}
                              transition={{ duration: 0.5 }}
                            >
                              <Box
                                sx={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  width: { xs: 60, md: 90 },
                                  height: { xs: 60, md: 90 },
                                  borderRadius: '50%',
                                  background: stat.color || `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                  color: 'white',
                                  mb: { xs: 2, md: 3 },
                                  boxShadow: `0 12px 40px ${stat.color}40`,
                                  fontSize: { xs: '1.5rem', md: '2rem' },
                                }}
                              >
                                {stat.icon}
                              </Box>
                            </motion.div>
                            <Typography
                              variant="h3"
                              sx={{
                                fontWeight: 800,
                                color: stat.color,
                                mb: 1,
                                fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
                                background: `linear-gradient(135deg, ${stat.color}, ${stat.color}CC)`,
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                              }}
                            >
                              {stat.value}
                            </Typography>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 600,
                                color: 'text.primary',
                                mb: 1,
                                fontSize: { xs: '0.9rem', md: '1.1rem' },
                              }}
                            >
                              {stat.label}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'text.secondary',
                                fontWeight: 400,
                                lineHeight: 1.5,
                                fontSize: { xs: '0.75rem', md: '0.875rem' },
                              }}
                            >
                              {stat.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;