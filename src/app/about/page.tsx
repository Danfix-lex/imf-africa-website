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
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage: React.FC = () => {
  const theme = useTheme();

  const stats = [
    { icon: <PublicIcon />, value: '54', label: 'African Nations', description: 'Countries with active ministry presence', color: '#1565C0' },
    { icon: <SchoolIcon />, value: '15K+', label: 'Ministers Equipped', description: 'Pastors trained and ordained', color: '#2E7D32' },
    { icon: <ChurchIcon />, value: '3,200+', label: 'Churches Planted', description: 'New congregations established', color: '#7B1FA2' },
    { icon: <FavoriteIcon />, value: '750K+', label: 'Lives Transformed', description: 'Souls reached for Christ', color: '#C62828' },
  ];

  const values = [
    {
      icon: <BibleIcon />,
      title: 'Biblical Foundation',
      description: 'All our initiatives are grounded in Scripture and committed to the authority of God\'s Word.',
    },
    {
      icon: <GroupsIcon />,
      title: 'Community Focus',
      description: 'We believe in the power of community and fellowship to transform lives and strengthen faith.',
    },
    {
      icon: <HandshakeIcon />,
      title: 'Partnership',
      description: 'We work collaboratively with local churches, leaders, and organizations to maximize impact.',
    },
    {
      icon: <StarIcon />,
      title: 'Excellence',
      description: 'We strive for excellence in all our programs, ensuring the highest quality in ministry training and outreach.',
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
                About IMF Africa
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
                Empowering churches and transforming communities across Africa through biblical training, leadership development, and strategic ministry initiatives.
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
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        {stat.label}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.description}
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
                      Our Story
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                      Founded in 2010, the International Ministers Forum Africa began as a small gathering of pastors 
                      committed to strengthening the church across the African continent. What started as monthly 
                      fellowship meetings has grown into a comprehensive network of training centers, resource 
                      development initiatives, and church planting movements.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                      Today, we operate in 54 African nations, having equipped over 15,000 ministers with advanced 
                      theological education and practical ministry skills. Our work has resulted in the establishment 
                      of more than 3,200 new churches and the transformation of over 750,000 lives through various 
                      outreach programs.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                      Our vision is to see vibrant, biblically grounded churches in every community across Africa, 
                      led by well-trained, Spirit-filled leaders who are equipped to address both the spiritual and 
                      practical needs of their congregations.
                    </Typography>
                    <Button variant="contained" size="large">
                      Learn More About Our Mission
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
                      backgroundImage: 'url(/api/placeholder/600/400)',
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
              Our Core Values
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 4 }}>
              {values.map((value, index) => (
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
                          width: 64,
                          height: 64,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                        }}
                      >
                        {value.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                        {value.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {value.description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default AboutPage;