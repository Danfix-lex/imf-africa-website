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
      description: 'IMF is committed to the gospel of Christ. Thus we must consider our action and decision in whatever we do. The scripture in 2 Peter 1:10 advises us to make our calling and election sure, and to walk worthy of our vocation. Integrity, accountability and responsibility are what IMF represents which are keys to successful ministry.',
      points: [
        'To provide strength that will stand with members against satanic attack',
        'To give Godly counsel when needed',
        'To help the local Church stand as member of the body of Christ',
        'To promote fellowship with one another and provide a base of sharing ministries',
        'To offer protection',
        'To help promote unity among the brethren and to help bring peace where there is division',
        'International Ministries Forum, Inc. has no desire to own your property or to promote false gain in any way',
        'The most important outreach of the fellowship is to established a worldwide vision',
        'Our desire is to spread the Gospel to all people both at home and in all areas of the world, through many outreaches, feeding/clothing programs and whatever means available as a tool of ministry',
        'To host conventions in various parts of the world and to be of assistance in conventions and ministries of other fellowship with which we have networked'
      ],
      color: 'primary.main'
    },
    {
      icon: <PublicIcon />,
      title: 'Vision',
      description: 'Our vision is to provide services that empower God called spirit-filled ministers, churches and religious organizations to carry out their God given assignments throughout the world. We will live in obedience to the Great commandment (Matthew 22:36-40) as we carry out the Great Commission (Matthew 28:18-20).',
      points: [
        'To spread the Gospel to all people both at home and in all areas of the world, through many outreaches, feeding/clothing programs and whatever means available as a tool of ministry',
        'To host conventions in various parts of the world and to be of assistance in conventions and ministries of other fellowship with which we have networked',
        'IMF has put roofs on buildings, dug wells for villages, built churches, Held meetings, supported feeding programs, planted homes for children, built homes for pastors and blessed many pastors and missionaries'
      ],
      color: 'secondary.main'
    }
  ];

  const strategicGoals = [
    {
      icon: <SchoolIcon />,
      title: 'Ordination & Licensing',
      description: 'Providing spiritual covering and legal support for ministers through ordination and licensing processes.',
      progress: 90,
    },
    {
      icon: <GroupsIcon />,
      title: 'Fellowship & Community',
      description: 'Building strong community bonds among ministers and churches across denominational lines.',
      progress: 85,
    },
    {
      icon: <FavoriteIcon />,
      title: 'Outreach & Missions',
      description: 'Supporting global missions and local outreach programs to spread the Gospel.',
      progress: 80,
    },
    {
      icon: <BibleIcon />,
      title: 'Resource Development',
      description: 'Creating and distributing resources to support ministers and churches in their work.',
      progress: 75,
    },
  ];

  const approach = [
    {
      icon: <TrendingUpIcon />,
      title: 'Spiritual Foundation',
      description: 'Rooted in our Statement of Faith and commitment to biblical truth.',
    },
    {
      icon: <HandshakeIcon />,
      title: 'Partnership Model',
      description: 'Working collaboratively with local churches and leaders to ensure contextual relevance.',
    },
    {
      icon: <AutoStoriesIcon />,
      title: 'Biblical Authority',
      description: 'All our initiatives are grounded in Scripture and committed to the authority of God\'s Word.',
    },
    {
      icon: <GroupsIcon />,
      title: 'Community Focus',
      description: 'Believing in the power of community and fellowship to transform lives and strengthen faith.',
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
                Understanding our purpose, direction, and approach to ministry across the world.
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
              Join us in fulfilling our mission to strengthen the church across the world.
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