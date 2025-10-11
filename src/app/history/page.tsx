'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import { Church as ChurchIcon, History as HistoryIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HistoryPage: React.FC = () => {
  const theme = useTheme();

  const timelineEvents = [
    {
      year: "1950",
      title: "IMF Founded",
      content: "The International Ministers Forum (IMF) has been in existence since August 18, 1950. Originally started as a women's ministerial group."
    },
    {
      year: "1960-1998",
      title: "Leadership of Louise Copeland",
      content: "Louise Copeland was first president of the forum, serving from 1960 until 1998. She was pastor of Faith Tabernacle in Poplar Bluff, Missouri."
    },
    {
      year: "1975",
      title: "Inclusion of Men",
      content: "Men were allowed to join around 1975 when they asked the group because of their integrity. The name was then changed to International Ministers Forum."
    },
    {
      year: "1987",
      title: "IMF Incorporated",
      content: "IMF was incorporated in 1987 in Missouri the year before Sis. Copeland died in 1988."
    },
    {
      year: "1988-2012",
      title: "Leadership of Doris Swartz",
      content: "Sis. Doris Swartz became the second president and served until her death in 2012. She pastored the United Christian Center in Dayton for over 40 years."
    },
    {
      year: "2012-Present",
      title: "Leadership of Gooden Couple",
      content: "Leadership passed to Bishop Darrell & Pastor Kathy Gooden, who Pastor the Rehoboth Christian Center in Tallapoosa, Georgia. They had IMF incorporated in Georgia."
    }
  ];

  const milestones = [
    {
      title: "Global Recognition",
      content: "International Minister's Forum is recognized by the Federal Government as an established Ecclesiastical Fellowship."
    },
    {
      title: "Worldwide Impact",
      content: "IMF has put roofs on buildings, dug wells for villages, built meeting facilities, held meetings, supported feeding programs, built homes for children, built homes for pastors and blessed many pastors and missionaries."
    },
    {
      title: "Annual Conferences",
      content: "The international conference is held each year in October, bringing together ministers from around the world."
    }
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
                Our History
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
                A journey through more than 75 years of faithful service and ministry
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ mb: 10 }}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.05)',
                mb: 8,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
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
                      mr: 3,
                    }}
                  >
                    <HistoryIcon sx={{ fontSize: 32 }} />
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    The Journey of Faith
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}
                >
                  The International Ministers Forum (IMF) has been a beacon of hope and transformation 
                  for more than seven decades. From its humble beginnings as a women's ministerial group 
                  to becoming a globally recognized ecclesiastical fellowship, IMF has remained committed 
                  to its founding principles of integrity, accountability, and responsibility.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}
                >
                  Throughout the years, IMF has been led by visionary leaders who understood the importance 
                  of fellowship, training, and missions. Today, under the leadership of Bishop Darrell & 
                  Pastor Kathy Gooden, IMF continues to expand its reach and impact, staying true to its 
                  mission of empowering God-called, spirit-filled ministers, ministries, and religious 
                  organizations to carry out their God-given assignments throughout the world.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ mb: 10 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
              Historical Timeline
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {timelineEvents.map((event, index) => (
                <Box component="div" key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        borderRadius: 3,
                        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                        border: '1px solid rgba(0,0,0,0.05)',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: '100%', md: 120 },
                          bgcolor: 'primary.main',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          p: 2,
                          borderRadius: { xs: '8px 8px 0 0', md: '8px 0 0 8px' },
                        }}
                      >
                        <Typography variant="h6" sx={{ fontWeight: 700, textAlign: 'center' }}>
                          {event.year}
                        </Typography>
                      </Box>
                      <CardContent sx={{ flex: 1, p: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                          {event.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {event.content}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 10 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
              Key Milestones
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
              {milestones.map((milestone, index) => (
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
                        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                        border: '1px solid rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                          <Box
                            sx={{
                              width: 56,
                              height: 56,
                              borderRadius: '50%',
                              bgcolor: 'secondary.main',
                              color: 'white',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mr: 3,
                            }}
                          >
                            <ChurchIcon />
                          </Box>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {milestone.title}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{ color: 'text.secondary', lineHeight: 1.8 }}
                        >
                          {milestone.content}
                        </Typography>
                      </CardContent>
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

export default HistoryPage;