'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  Button,
} from '@mui/material';
import {
  Church as ChurchIcon,
  Groups as GroupsIcon,
  School as SchoolIcon,
  Public as PublicIcon,
  AutoStories as AutoStoriesIcon,
  Favorite as FavoriteIcon,
  MenuBook as BibleIcon,
  TrendingUp as TrendingUpIcon,
  Handshake as HandshakeIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MissionPage: React.FC = () => {
  const theme = useTheme();

  const missionVision = [
    {
      icon: <ChurchIcon />,
      title: 'Mission',
      description: 'To strengthen the church across Africa through biblical training, leadership development, and strategic ministry initiatives that transform communities and advance the Kingdom of God.',
      points: [
        'Equip pastors and church leaders with advanced theological education',
        'Establish sustainable church planting movements',
        'Develop resources for contextualized ministry',
        'Foster partnerships for maximum Kingdom impact'
      ],
      color: 'primary.main'
    },
    {
      icon: <PublicIcon />,
      title: 'Vision',
      description: 'To see vibrant, biblically grounded churches in every community across Africa, led by well-trained, Spirit-filled leaders who are equipped to address both the spiritual and practical needs of their congregations.',
      points: [
        '5,000+ churches planted across Africa by 2030',
        '100,000+ ministers equipped through our training programs',
        'Resources available in 10+ African languages',
        'Sustainable ministry movements in all 54 African nations'
      ],
      color: 'secondary.main'
    }
  ];

  const strategicGoals = [
    {
      icon: <SchoolIcon />,
      title: 'Leadership Development',
      description: 'Comprehensive training programs for current and emerging church leaders.',
      progress: 85,
    },
    {
      icon: <GroupsIcon />,
      title: 'Church Planting',
      description: 'Strategic initiatives to establish new congregations in underserved areas.',
      progress: 75,
    },
    {
      icon: <FavoriteIcon />,
      title: 'Community Transformation',
      description: 'Outreach programs addressing practical needs alongside spiritual growth.',
      progress: 65,
    },
    {
      icon: <BibleIcon />,
      title: 'Resource Development',
      description: 'Creation of contextualized materials for African ministry contexts.',
      progress: 80,
    },
  ];

  const approach = [
    {
      icon: <TrendingUpIcon />,
      title: 'Sustainable Growth',
      description: 'We focus on long-term, sustainable ministry development rather than short-term programs.',
    },
    {
      icon: <HandshakeIcon />,
      title: 'Partnership Model',
      description: 'We work collaboratively with local churches and leaders to ensure contextual relevance.',
    },
    {
      icon: <AutoStoriesIcon />,
      title: 'Biblical Foundation',
      description: 'All our initiatives are grounded in Scripture and committed to the authority of God\'s Word.',
    },
    {
      icon: <GroupsIcon />,
      title: 'Community Focus',
      description: 'We believe in the power of community and fellowship to transform lives and strengthen faith.',
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
                Mission & Vision
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
                Understanding our purpose, direction, and approach to ministry across Africa.
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ mb: 10 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6 }}>
              {missionVision.map((item, index) => (
                <Box component="div" key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                        border: '1px solid rgba(0,0,0,0.05)',
                      }}
                    >
                      <Box
                        sx={{
                          p: 4,
                          bgcolor: item.color,
                          color: 'white',
                          textAlign: 'center',
                        }}
                      >
                        <Box
                          sx={{
                            width: 72,
                            height: 72,
                            borderRadius: '50%',
                            bgcolor: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 3,
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                          {item.title}
                        </Typography>
                      </Box>
                      <CardContent sx={{ p: 4 }}>
                        <Typography
                          variant="body1"
                          sx={{ color: 'text.secondary', mb: 3, fontSize: '1.1rem' }}
                        >
                          {item.description}
                        </Typography>
                        <Box component="ul" sx={{ pl: 2 }}>
                          {item.points.map((point, pointIndex) => (
                            <Box component="li" key={pointIndex} sx={{ mb: 2 }}>
                              <Typography variant="body1">{point}</Typography>
                            </Box>
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 10 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
              Strategic Goals
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 4 }}>
              {strategicGoals.map((goal, index) => (
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
                          mx: 'auto',
                          mb: 3,
                        }}
                      >
                        {goal.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                        {goal.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', mb: 3, flexGrow: 1 }}
                      >
                        {goal.description}
                      </Typography>
                      <Box sx={{ textAlign: 'left' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            Progress
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {goal.progress}%
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            bgcolor: 'grey.200',
                            overflow: 'hidden',
                          }}
                        >
                          <Box
                            sx={{
                              height: '100%',
                              width: `${goal.progress}%`,
                              bgcolor: 'primary.main',
                              borderRadius: 4,
                            }}
                          />
                        </Box>
                      </Box>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 10 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
              Our Approach
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 4 }}>
              {approach.map((item, index) => (
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
                        {item.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
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
              bgcolor: 'grey.50',
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Partner With Us
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 400, mb: 4, maxWidth: 600, mx: 'auto' }}>
              Join us in fulfilling our mission to strengthen the church across Africa.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  borderRadius: 2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  '&:hover': {
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                  },
                }}
              >
                Support Our Mission
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  borderRadius: 2,
                }}
              >
                Learn About Partnership
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default MissionPage;