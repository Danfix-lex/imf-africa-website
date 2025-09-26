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
  Chip,
} from '@mui/material';
import {
  Church as ChurchIcon,
  LocationOn as LocationIcon,
  Groups as GroupsIcon,
  School as SchoolIcon,
  Public as PublicIcon,
  CalendarToday as CalendarIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ChurchPlantingPage: React.FC = () => {
  const theme = useTheme();

  const stats = [
    { icon: <ChurchIcon />, value: '3,200+', label: 'Churches Planted', color: '#1976d2' },
    { icon: <GroupsIcon />, value: '450K+', label: 'New Believers', color: '#f57c00' },
    { icon: <PublicIcon />, value: '35', label: 'African Nations', color: '#388e3c' },
    { icon: <SchoolIcon />, value: '850+', label: 'Pastors Trained', color: '#7b1fa2' },
  ];

  const approaches = [
    {
      title: 'Contextualized Ministry',
      description: 'We adapt our church planting strategies to fit local cultural contexts while maintaining biblical foundations.',
      icon: <PublicIcon />,
    },
    {
      title: 'Leadership Development',
      description: 'We train and equip local leaders to ensure sustainable church growth and community impact.',
      icon: <SchoolIcon />,
    },
    {
      title: 'Community Integration',
      description: 'Our churches become centers for community development, addressing both spiritual and practical needs.',
      icon: <GroupsIcon />,
    },
    {
      title: 'Multiplication Focus',
      description: 'We emphasize church multiplication rather than just church addition for exponential growth.',
      icon: <TrendingUpIcon />,
    },
  ];

  const regions = [
    {
      name: 'West Africa',
      countries: 12,
      churches: 850,
      pastors: 220,
      color: '#1976d2',
    },
    {
      name: 'East Africa',
      countries: 8,
      churches: 920,
      pastors: 280,
      color: '#f57c00',
    },
    {
      name: 'Central Africa',
      countries: 6,
      churches: 630,
      pastors: 180,
      color: '#388e3c',
    },
    {
      name: 'Southern Africa',
      countries: 9,
      churches: 800,
      pastors: 170,
      color: '#7b1fa2',
    },
  ];

  const resources = [
    {
      title: 'Church Planting Guide',
      description: 'Comprehensive manual for establishing new congregations in African contexts.',
      type: 'PDF',
    },
    {
      title: 'Leadership Training Videos',
      description: 'Instructional videos for training new pastors and church leaders.',
      type: 'Video',
    },
    {
      title: 'Worship Resources',
      description: 'Songs and liturgies contextualized for various African cultures.',
      type: 'Audio',
    },
    {
      title: 'Community Development Toolkit',
      description: 'Practical resources for addressing community needs alongside ministry.',
      type: 'Guide',
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
                Church Planting
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
                Establishing vibrant, biblically grounded churches in communities across Africa to transform lives and advance the Kingdom.
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ mb: 10 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 4 }}>
              {stats.map((stat, index) => (
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
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 4,
                        borderRadius: 3,
                        textAlign: 'center',
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
                          width: 72,
                          height: 72,
                          borderRadius: '50%',
                          bgcolor: `${stat.color}15`,
                          color: stat.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                        }}
                      >
                        {stat.icon}
                      </Box>
                      <Typography variant="h3" sx={{ fontWeight: 800, mb: 1, color: stat.color }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {stat.label}
                      </Typography>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 10 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 8 }}>
              <Box component="div">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Box sx={{ pr: { md: 4 } }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
                      Our Approach to Church Planting
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                      Our church planting strategy goes beyond simply establishing new congregations. We focus on 
                      creating sustainable, culturally relevant ministries that transform communities and advance 
                      the Kingdom of God across Africa.
                    </Typography>
                    <Box sx={{ mb: 4 }}>
                      {approaches.map((approach, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 3,
                            mb: 4,
                          }}
                        >
                          <Box
                            sx={{
                              width: 56,
                              height: 56,
                              borderRadius: '50%',
                              bgcolor: 'primary.main',
                              color: 'white',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            {approach.icon}
                          </Box>
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                              {approach.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {approach.description}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                    <Button variant="contained" size="large">
                      Learn About Our Process
                    </Button>
                  </Box>
                </motion.div>
              </Box>
              <Box component="div">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                      backgroundImage: 'url(/api/placeholder/600/500)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                </motion.div>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 10 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
              Regional Impact
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 4 }}>
              {regions.map((region, index) => (
                <Box component="div" key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        borderRadius: 3,
                        overflow: 'hidden',
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
                          p: 3,
                          bgcolor: region.color,
                          color: 'white',
                          textAlign: 'center',
                        }}
                      >
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          {region.name}
                        </Typography>
                      </Box>
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <LocationIcon sx={{ color: 'text.secondary', fontSize: '1rem' }} />
                          <Typography variant="body2">
                            {region.countries} countries
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                          <Box>
                            <Typography variant="h5" sx={{ fontWeight: 700 }}>
                              {region.churches.toLocaleString()}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Churches
                            </Typography>
                          </Box>
                          <Box>
                            <Typography variant="h5" sx={{ fontWeight: 700 }}>
                              {region.pastors}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Pastors
                            </Typography>
                          </Box>
                        </Box>
                        <Button fullWidth variant="outlined" size="small">
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 10 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
              Resources for Church Planters
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 4 }}>
              {resources.map((resource, index) => (
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
                        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                        border: '1px solid rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3, flexGrow: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {resource.title}
                          </Typography>
                          <Chip
                            label={resource.type}
                            size="small"
                            sx={{
                              bgcolor: 'primary.main',
                              color: 'white',
                              fontWeight: 600,
                            }}
                          />
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                          {resource.description}
                        </Typography>
                        <Button fullWidth variant="outlined" size="small">
                          Download
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              textAlign: 'center',
              py: 8,
              mb: 8,
              borderRadius: 3,
              bgcolor: 'primary.main',
              color: 'white',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Start a Church Planting Initiative
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 400, mb: 4, maxWidth: 600, mx: 'auto' }}>
              Partner with us to establish new congregations in your community.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                fontWeight: 600,
                px: 4,
                py: 2,
                borderRadius: 2,
                '&:hover': {
                  bgcolor: 'grey.100',
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default ChurchPlantingPage;