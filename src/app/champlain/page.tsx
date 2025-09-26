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
  School as SchoolIcon,
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
  ArrowBack as ArrowBackIcon,
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon,
  Group as GroupIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

const ChamplainPage: React.FC = () => {
  const theme = useTheme();

  const features = [
    'Advanced theological education programs',
    'Practical ministry training workshops',
    'Leadership development seminars',
    'Mentorship and coaching programs',
    'Resource centers for local churches',
    'Pastoral counseling certification',
    'Church administration training',
    'Preaching and teaching excellence workshops'
  ];

  const benefits = [
    'Enhanced biblical knowledge and understanding',
    'Improved pastoral skills and effectiveness',
    'Stronger leadership capabilities',
    'Better church management practices',
    'Increased ministry impact in local communities',
    'Networking opportunities with other leaders',
    'Access to exclusive resources and materials',
    'Ongoing support and mentorship'
  ];

  const programs = [
    {
      title: 'Advanced Theological Studies',
      duration: '12 months',
      level: 'Advanced',
      description: 'In-depth study of biblical languages, theology, and church history'
    },
    {
      title: 'Practical Ministry Training',
      duration: '6 months',
      level: 'Intermediate',
      description: 'Hands-on training in preaching, teaching, and pastoral care'
    },
    {
      title: 'Leadership Development Program',
      duration: '9 months',
      level: 'Advanced',
      description: 'Comprehensive leadership training for senior pastors and ministry leaders'
    },
    {
      title: 'Church Administration',
      duration: '4 months',
      level: 'Beginner',
      description: 'Essential skills for managing church operations and finances'
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
                background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
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
                      bgcolor: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      boxShadow: '0 12px 40px rgba(25, 118, 210, 0.4)',
                    }}
                  >
                    <SchoolIcon sx={{ fontSize: '4rem' }} />
                  </Box>
                </Box>

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                  }}
                >
                  IMF Africa Champlain
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: 'primary.main',
                    mb: 3,
                    fontStyle: 'italic',
                  }}
                >
                  Equipping Church Leaders for Excellence
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
                  A specialized initiative focused on equipping and empowering local church leaders 
                  through advanced theological education and practical ministry training programs across Africa.
                </Typography>
              </Box>
            </Box>

            {/* Key Information */}
            <Grid container spacing={4} sx={{ mb: 8 }}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card sx={{ height: '100%', textAlign: 'center', p: 4 }}>
                  <GroupIcon sx={{ fontSize: '3rem', color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    Target Audience
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Church leaders, pastors, and ministry coordinators
                  </Typography>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card sx={{ height: '100%', textAlign: 'center', p: 4 }}>
                  <LocationIcon sx={{ fontSize: '3rem', color: 'secondary.main', mb: 2 }} />
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
                    2015
                  </Typography>
                </Card>
              </Grid>
            </Grid>

            {/* Detailed Description */}
            <Box sx={{ mb: 8 }}>
              <Card>
                <CardContent sx={{ p: 6 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'primary.main' }}>
                    About IMF Africa Champlain
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 2, mb: 4, fontSize: '1.1rem' }}>
                    IMF Africa Champlain is our flagship leadership development initiative designed to equip 
                    and empower local church leaders across Africa with the knowledge, skills, and spiritual 
                    foundation necessary for effective ministry. Named after our founder's vision, this program 
                    represents our commitment to raising up a new generation of spiritually mature and practically 
                    skilled church leaders.
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 2, mb: 4, fontSize: '1.1rem' }}>
                    Through a combination of advanced theological education, practical ministry training, and 
                    ongoing mentorship, Champlain provides church leaders with the tools they need to effectively 
                    shepherd their congregations, manage church operations, and expand their ministry impact. 
                    Our comprehensive approach ensures that participants not only gain academic knowledge but 
                    also develop the practical skills necessary for real-world ministry challenges.
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 2, fontSize: '1.1rem' }}>
                    Since its inception, IMF Africa Champlain has trained over 5,000 church leaders who have 
                    gone on to plant new churches, revitalize existing congregations, and lead their communities 
                    in spiritual and social transformation.
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Key Features */}
            <Box sx={{ mb: 8 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: 'center', color: 'primary.main' }}>
                Program Features
              </Typography>
              <Grid container spacing={3}>
                {features.map((feature, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card sx={{ height: '100%' }}>
                        <CardContent sx={{ display: 'flex', alignItems: 'flex-start', p: 3 }}>
                          <StarIcon sx={{ color: 'primary.main', mt: 0.5, mr: 2 }} />
                          <Typography variant="body1">{feature}</Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Training Programs */}
            <Box sx={{ mb: 8 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: 'center', color: 'primary.main' }}>
                Training Programs
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
                                         program.level === 'Intermediate' ? 'secondary.main' : 'success.main',
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
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: 'center', color: 'primary.main' }}>
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
                bgcolor: 'primary.main',
                color: 'white',
              }}
            >
              <SchoolIcon sx={{ fontSize: '4rem', mb: 3 }} />
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                Ready to Join IMF Africa Champlain?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                Take the next step in your leadership journey and equip yourself with the tools for ministry excellence.
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
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'grey.100',
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Register Now
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
      <Footer />
    </ProtectedRoute>
  );
};

export default ChamplainPage;