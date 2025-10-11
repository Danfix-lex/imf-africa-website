'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
  Grid,
  Chip,
} from '@mui/material';
import {
  EmojiPeople as EmojiPeopleIcon,
  CheckCircle as CheckCircleIcon,
  School as SchoolIcon,
  Public as PublicIcon,
  ArrowBack as ArrowBackIcon,
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon,
  Group as GroupIcon,
  MusicNote as MusicNoteIcon,
  SportsSoccer as SportsSoccerIcon,
  Computer as ComputerIcon,
  VolunteerActivism as VolunteerActivismIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

const GenerationPage: React.FC = () => {
  const theme = useTheme();

  const activities = [
    {
      icon: <SchoolIcon />,
      title: 'Leadership Development',
      description: 'Training programs to develop the next generation of ministry and community leaders'
    },
    {
      icon: <MusicNoteIcon />,
      title: 'Creative Arts Ministry',
      description: 'Music, drama, and visual arts programs to express faith through creativity'
    },
    {
      icon: <SportsSoccerIcon />,
      title: 'Sports & Recreation',
      description: 'Healthy competition and physical activities that build character and teamwork'
    },
    {
      icon: <ComputerIcon />,
      title: 'Technology & Innovation',
      description: 'Digital skills training and innovation workshops for the tech-savvy generation'
    },
    {
      icon: <VolunteerActivismIcon />,
      title: 'Community Service',
      description: 'Outreach programs that engage youth in serving their communities'
    },
    {
      icon: <PublicIcon />,
      title: 'Global Missions',
      description: 'Exposure to international missions and cross-cultural ministry opportunities'
    }
  ];

  const benefits = [
    'Spiritual growth in a peer-focused environment',
    'Leadership skills development',
    'Creative expression through various arts',
    'Healthy relationships and mentorship',
    'Community service and social impact',
    'Global perspective and missions exposure',
    'Networking with like-minded peers',
    'Personal development and life skills'
  ];

  const programs = [
    {
      title: 'Youth Leadership Academy',
      duration: '6 months',
      level: 'Intermediate',
      description: 'Comprehensive leadership training for young people aged 18-35'
    },
    {
      icon: <MusicNoteIcon />,
      title: 'Creative Arts Ministry',
      duration: '4 months',
      level: 'Beginner',
      description: 'Training in music, drama, and visual arts for ministry'
    },
    {
      icon: <ComputerIcon />,
      title: 'Digital Ministry Training',
      duration: '3 months',
      level: 'Beginner',
      description: 'Technology skills for modern ministry and outreach'
    },
    {
      icon: <VolunteerActivismIcon />,
      title: 'Community Impact Program',
      duration: 'Ongoing',
      level: 'All Levels',
      description: 'Service projects and social engagement initiatives'
    }
  ];

  return (
    <ProtectedRoute>
      <Header />
      <Box sx={{ minHeight: '80vh', py: 4 }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Button */}
            <Box sx={{ mb: 4 }}>
              <Button
                startIcon={<ArrowBackIcon />}
                href="/site"
                variant="outlined"
                sx={{
                  borderRadius: 3,
                  py: 1,
                  px: 3,
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                  },
                }}
              >
                Back to Main Site
              </Button>
            </Box>

            {/* Hero Section */}
            <Box
              sx={{
                textAlign: 'center',
                mb: 8,
                p: 6,
                borderRadius: 4,
                background: `linear-gradient(135deg, ${theme.palette.secondary.main}10, ${theme.palette.primary.light}10)`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                  <Box
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      bgcolor: 'secondary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      boxShadow: '0 12px 40px rgba(156, 39, 176, 0.4)',
                    }}
                  >
                    <EmojiPeopleIcon sx={{ fontSize: '4rem' }} />
                  </Box>
                </Box>

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                  }}
                >
                  IMF Africa Generation Next
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: 'secondary.main',
                    mb: 3,
                    fontStyle: 'italic',
                  }}
                >
                  Empowering the Next Generation of Leaders
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    maxWidth: 800,
                    mx: 'auto',
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                  }}
                >
                  A dynamic platform exclusively designed for youths and teens, providing engaging programs, 
                  leadership opportunities, and spiritual growth experiences within the IMF Africa community.
                </Typography>
              </Box>
            </Box>

            {/* Key Information */}
            <Grid container spacing={4} sx={{ mb: 8 }}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card sx={{ height: '100%', textAlign: 'center', p: 4 }}>
                  <GroupIcon sx={{ fontSize: '3rem', color: 'secondary.main', mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    Target Audience
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Youths and teens aged 13-35
                  </Typography>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card sx={{ height: '100%', textAlign: 'center', p: 4 }}>
                  <LocationIcon sx={{ fontSize: '3rem', color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    Coverage
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    All 54 African Nations
                  </Typography>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card sx={{ height: '100%', textAlign: 'center', p: 4 }}>
                  <CalendarIcon sx={{ fontSize: '3rem', color: 'success.main', mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    Established
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    2018
                  </Typography>
                </Card>
              </Grid>
            </Grid>

            {/* Detailed Description */}
            <Box sx={{ mb: 8 }}>
              <Card>
                <CardContent sx={{ p: 6 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'secondary.main' }}>
                    About IMF Africa Generation Next
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 2, mb: 4, fontSize: '1.1rem' }}>
                    IMF Africa Generation Next is our vibrant and dynamic platform specifically designed to 
                    engage, empower, and equip the youth and teen population within our ministry community. 
                    Recognizing that young people are the future of ministry and society, this initiative 
                    provides a dedicated space where they can grow spiritually, develop leadership skills, 
                    express their creativity, and make a meaningful impact in their communities.
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 2, mb: 4, fontSize: '1.1rem' }}>
                    Our programs are carefully crafted to address the unique needs, interests, and challenges 
                    faced by today's young generation. We blend traditional spiritual formation with contemporary 
                    approaches that resonate with modern youth culture. From leadership training and creative 
                    arts ministry to technology workshops and community service projects, Generation Next 
                    offers a holistic approach to youth development.
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 2, fontSize: '1.1rem' }}>
                    Since its launch, IMF Africa Generation Next has engaged over 50,000 young people across 
                    the continent, with many going on to become ministry leaders, community activists, 
                    entrepreneurs, and change agents in their respective spheres of influence.
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Activities */}
            <Box sx={{ mb: 8 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: 'center', color: 'secondary.main' }}>
                Youth Activities & Programs
              </Typography>
              <Grid container spacing={4}>
                {activities.map((activity, index) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <Card sx={{ height: '100%', textAlign: 'center' }}>
                        <CardContent sx={{ p: 4 }}>
                          <Box
                            sx={{
                              width: 70,
                              height: 70,
                              borderRadius: '50%',
                              bgcolor: 'secondary.main',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              mx: 'auto',
                              mb: 3,
                            }}
                          >
                            {activity.icon}
                          </Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                            {activity.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {activity.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Training Programs */}
            <Box sx={{ mb: 8 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: 'center', color: 'secondary.main' }}>
                Specialized Programs
              </Typography>
              <Grid container spacing={4}>
                {programs.map((program, index) => (
                  <Grid size={{ xs: 12, md: 6 }} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <Card sx={{ height: '100%' }}>
                        <CardContent sx={{ p: 4 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                              {program.title}
                            </Typography>
                            <Chip
                              label={program.level}
                              size="small"
                              sx={{
                                bgcolor: program.level === 'Advanced' ? 'primary.main' :
                                         program.level === 'Intermediate' ? 'secondary.main' :
                                         program.level === 'Beginner' ? 'success.main' : 'info.main',
                                color: 'white',
                              }}
                            />
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <CalendarIcon sx={{ fontSize: '1rem', mr: 1, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              Duration: {program.duration}
                            </Typography>
                          </Box>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {program.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Benefits */}
            <Box sx={{ mb: 8 }}>
              <Card>
                <CardContent sx={{ p: 6 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: 'center', color: 'secondary.main' }}>
                    Benefits for Participants
                  </Typography>
                  <Grid container spacing={2}>
                    {benefits.map((benefit, index) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                          <CheckCircleIcon sx={{ color: 'success.main', mt: 0.5, mr: 2 }} />
                          <Typography variant="body1">{benefit}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Box>

            {/* Call to Action */}
            <Box
              sx={{
                textAlign: 'center',
                p: 6,
                borderRadius: 4,
                bgcolor: 'secondary.main',
                color: 'white',
              }}
            >
              <EmojiPeopleIcon sx={{ fontSize: '4rem', mb: 3 }} />
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                Join IMF Africa Generation Next
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                Be part of a dynamic community that's shaping the future of ministry and society across Africa.
              </Typography>
              <Button
                variant="contained"
                size="large"
                href="/auth"
                sx={{
                  px: 6,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 50,
                  bgcolor: 'white',
                  color: 'secondary.main',
                  '&:hover': {
                    bgcolor: 'grey.100',
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Get Involved
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
      <Footer />
    </ProtectedRoute>
  );
};

export default GenerationPage;