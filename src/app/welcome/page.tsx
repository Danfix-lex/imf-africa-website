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
  Grid,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Church as ChurchIcon,
  School as SchoolIcon,
  Favorite as FavoriteIcon,
  Groups as GroupsIcon,
  Public as PublicIcon,
  AutoStories as BibleIcon,
  ArrowForward as ArrowForwardIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const stats = [
  { icon: <PublicIcon />, value: '54', label: 'African Nations', description: 'Countries with active ministry presence', color: '#1565C0' },
  { icon: <SchoolIcon />, value: '15K+', label: 'Ministers Equipped', description: 'Pastors trained and ordained', color: '#2E7D32' },
  { icon: <ChurchIcon />, value: '3,200+', label: 'Churches Planted', description: 'New congregations established', color: '#7B1FA2' },
  { icon: <FavoriteIcon />, value: '750K+', label: 'Lives Transformed', description: 'Souls reached for Christ', color: '#C62828' },
];

const WelcomePage: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/auth');
  };

  const handleExploreSite = () => {
    router.push('/site');
  };

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

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, 
          ${theme.palette.primary.main}15 0%, 
          ${theme.palette.secondary.main}10 50%, 
          ${theme.palette.primary.light}15 100%)`,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        py: 4,
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
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div variants={itemVariants}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <Box
                  component="img"
                  src="/images/logo.png"
                  alt="IMF Africa Logo"
                  sx={{
                    height: 100,
                    width: 'auto',
                    objectFit: 'contain',
                    boxShadow: '0 12px 40px rgba(25, 118, 210, 0.4)',
                    borderRadius: '8px',
                  }}
                />
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
                <Chip 
                  icon={<StarIcon />}
                  label="Established 1950" 
                  sx={{ 
                    bgcolor: 'primary.main', 
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 2,
                    py: 1
                  }} 
                />
                <Chip 
                  label="75 Years of Ministry" 
                  sx={{ 
                    bgcolor: 'secondary.main', 
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 2,
                    py: 1
                  }} 
                />
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', md: '4.5rem', lg: '5rem' },
                  fontWeight: 900,
                  color: 'text.primary',
                  mb: 2,
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
                  Welcome to
                </Box>
                <br />
                <Box component="span" sx={{ color: 'text.primary' }}>
                  IMF AFRICA
                </Box>
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2.2rem' },
                  fontWeight: 600,
                  color: 'primary.main',
                  mb: 4,
                  fontStyle: 'italic',
                  letterSpacing: '0.02em',
                }}
              >
                International Ministers Forum Africa
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: 'text.primary',
                  mb: 3,
                  lineHeight: 1.7,
                  maxWidth: '800px',
                  mx: 'auto',
                  fontSize: { xs: '1.3rem', md: '1.6rem' },
                  fontWeight: 500,
                }}
              >
                Empowering Ministers • Strengthening Churches • Transforming Africa
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 6,
                  lineHeight: 1.8,
                  maxWidth: '700px',
                  mx: 'auto',
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                }}
              >
                Join thousands of ministers and church leaders across Africa in our mission to 
                advance God's Kingdom through biblical training, fellowship, and transformational ministry.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap', mb: 8 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleGetStarted}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 8,
                    py: 3,
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    borderRadius: 50,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                    boxShadow: '0 8px 40px rgba(25, 118, 210, 0.4)',
                    textTransform: 'none',
                    '&:hover': {
                      background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                      transform: 'translateY(-4px)',
                      boxShadow: '0 16px 50px rgba(25, 118, 210, 0.5)',
                    },
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Get Started
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleExploreSite}
                  sx={{
                    px: 8,
                    py: 3,
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    borderRadius: 50,
                    borderWidth: 3,
                    borderColor: 'secondary.main',
                    color: 'secondary.main',
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: 'secondary.main',
                      color: 'white',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 16px 50px rgba(156, 39, 176, 0.4)',
                      borderWidth: 3,
                    },
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Explore Our Ministry
                </Button>
              </Box>
            </motion.div>
          </Box>

          {/* Statistics Section */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h4"
              sx={{
                textAlign: 'center',
                fontWeight: 700,
                color: 'text.primary',
                mb: 6,
                fontSize: { xs: '1.8rem', md: '2.2rem' },
              }}
            >
              Our Impact Across Africa
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 4, maxWidth: 1200, mx: 'auto' }}>
              {stats.map((stat, index) => (
                <Box key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    whileHover={{ scale: 1.05 }}
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
                          transform: 'translateY(-8px)',
                          background: 'rgba(255, 255, 255, 1)',
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          background: stat.color,
                        },
                      }}
                    >
                      <CardContent sx={{ textAlign: 'center', p: 4 }}>
                        <Box
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 90,
                            height: 90,
                            borderRadius: '50%',
                            background: stat.color,
                            color: 'white',
                            mb: 3,
                            boxShadow: `0 12px 40px ${stat.color}40`,
                            fontSize: '2rem',
                          }}
                        >
                          {stat.icon}
                        </Box>
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 800,
                            color: stat.color,
                            mb: 1,
                            fontSize: { xs: '2rem', md: '2.5rem' },
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
                            fontSize: { xs: '1.1rem', md: '1.2rem' },
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

          {/* Call to Action */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                mt: 12,
                p: 8,
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: 4,
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <BibleIcon sx={{ fontSize: '4rem', mb: 3, opacity: 0.9 }} />
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    fontSize: { xs: '2rem', md: '2.8rem' },
                  }}
                >
                  Ready to Join Our Fellowship?
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    lineHeight: 1.8,
                    maxWidth: 600,
                    mx: 'auto',
                    opacity: 0.95,
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                    mb: 4,
                  }}
                >
                  Register today to access ministry resources, connect with fellow ministers, 
                  and be part of our mission to transform Africa through the Gospel.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleGetStarted}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 8,
                    py: 3,
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    borderRadius: 50,
                    bgcolor: 'white',
                    color: 'primary.main',
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: 'grey.100',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Join IMF Africa
                </Button>
              </Box>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default WelcomePage;