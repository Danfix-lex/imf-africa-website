'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  useTheme,
} from '@mui/material';
import {
  Church as ChurchIcon,
  Public as PublicIcon,
  CalendarToday as CalendarIcon,
  Group as GroupIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProgramsPage: React.FC = () => {
  const theme = useTheme();

  const programs = [
    {
      icon: <ChurchIcon />,
      title: 'Ministry Training Institute',
      description: 'Comprehensive theological and pastoral training programs for ministers and church leaders across Africa.',
      category: 'Ministry Training',
      status: 'Active',
    },
    {
      icon: <GroupIcon />,
      title: 'Community Partnership Program',
      description: 'Collaborative efforts with local organizations to address community needs and development.',
      category: 'Community Outreach',
      status: 'Active',
    },
    {
      icon: <CalendarIcon />,
      title: 'Leadership Development',
      description: 'Advanced training programs for current and emerging church leaders.',
      category: 'Leadership',
      status: 'Active',
    },
    {
      image: '/images/upcoming-program.jpg',
      title: 'End of the Year Banquet & Award',
      description: 'An evening of celebration, recognition, and kingdom impact! Join ministers, leaders, and visionaries from across the globe as we dine, fellowship, and explore divine strategies for greater ministry growth.',
      category: 'Special Event',
      status: 'Upcoming',
      date: 'Friday, 21st November 2025',
      venue: 'Festival Hotel Conference Center (Former Golden Tulip), Diamond Estate, Amuwo-Odofin, Lagos State.',
      theme: 'Exploring Global Perspectives for Ministry Growth',
    },
  ];

  return (
    <>
      <Header />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pt: 15 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Our Programs
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 400,
                  color: 'text.secondary',
                  maxWidth: 800,
                  mx: 'auto',
                }}
              >
                Comprehensive initiatives designed to strengthen churches, develop leaders, and transform communities across Africa.
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            {programs.map((program, index) => (
              <Box component="div" key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      overflow: 'visible',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        p: 4,
                        bgcolor: 'primary.main',
                        color: 'white',
                        textAlign: 'center',
                        position: 'relative',
                        mt: -4,
                        mx: 2,
                        borderRadius: 2,
                        boxShadow: '0 8px 24px rgba(25, 118, 210, 0.3)',
                      }}
                    >
                      {program.image ? (
                        <CardMedia
                          component="img"
                          image={program.image}
                          alt={program.title}
                          sx={{
                            width: '100%',
                            height: 150,
                            objectFit: 'cover',
                            borderRadius: 2,
                            mb: 2,
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            bgcolor: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'primary.main',
                            mx: 'auto',
                            mb: 2,
                            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                          }}
                        >
                          {program.icon}
                        </Box>
                      )}
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                        {program.title}
                      </Typography>
                      <Chip
                        label={program.category}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(255,255,255,0.2)',
                          color: 'white',
                          fontWeight: 500,
                        }}
                      />
                      {program.date && (
                        <Typography variant="body2" sx={{ mt: 1, fontStyle: 'italic' }}>
                          {program.date}
                        </Typography>
                      )}
                      {program.venue && (
                        <Typography variant="body2" sx={{ mt: 1, fontSize: '0.8rem' }}>
                          {program.venue}
                        </Typography>
                      )}
                    </Box>

                    <CardContent sx={{ flexGrow: 1, p: 4, pt: 6 }}>
                      <Typography
                        variant="body1"
                        sx={{ color: 'text.secondary', mb: 3 }}
                      >
                        {program.description}
                      </Typography>
                      {program.theme && (
                        <Box sx={{ mb: 2 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            Theme:
                          </Typography>
                          <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                            {program.theme}
                          </Typography>
                        </Box>
                      )}
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Chip
                          label={program.status}
                          size="small"
                          color={program.status === 'Upcoming' ? 'warning' : 'success'}
                          sx={{ fontWeight: 600 }}
                        />
                        <Button variant="outlined" size="small">
                          {program.status === 'Upcoming' ? 'Register Now' : 'Learn More'}
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default ProgramsPage;