'use client';

import React, { useState, Suspense } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  useTheme,
  Button,
  Divider,
  alpha,
  CircularProgress,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  ArrowBack as ArrowBackIcon,
  History as HistoryIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  VolunteerActivism as VolunteerActivismIcon,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

// Component to handle image loading with fallback
const LeaderImage = ({ src, name }: { src: string; name: string }) => {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <Box
      component="img"
      src={`https://res.cloudinary.com/dprrsr08j/image/upload/${src}`}
      alt={name}
      sx={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
      onLoad={() => setLoaded(true)}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = `https://via.placeholder.com/300x300?text=${encodeURIComponent(name)}`;
      }}
    />
  );
};

export default function LeadershipPage() {
  const theme = useTheme();
  const founders = [
    {
      name: "Rev. Mary Louise Copeland",
      role: "Founder & First President, International Ministers Forum",
      image: "v1760178637/mary-copeland_lwmulf.jpg", // TODO: Update with correct founder image when available
      bioSections: [
        {
          title: "Ministry Beginnings",
          content: "Mary Louise Copeland began her ministry in 1937 at age 18 in Detroit, Michigan. She was a trailblazer in the Pentecostal movement and ministered with many healing evangelists as part of the 'Voice of Healing' network."
        },
        {
          title: "Leadership & Legacy",
          content: "She founded the International Ministers Forum (IMF) and served as its first president until her death in 1988. She was a true pioneer in the Pentecostal, Healing Revival, Latter Rain, and Charismatic Movements."
        },
        {
          title: "Legacy & Transition",
          content: "IMF was incorporated in 1987 in Missouri the year before Rev. Copeland died in 1988. She was a true pioneer in the Pentecostal, Healing Revival, Latter Rain, and Charismatic Movements, ministering with many healing evangelists as part of the 'Voice of Healing' network."
        }
      ]
    },
    {
      name: "Pastor Doris Swartz",
      role: "Second President, International Ministers Forum",
      image: "v1760178636/doris-swartz_crj2t3.jpg", // Updated to use full Cloudinary path
      bioSections: [
        {
          title: "Personal & Ministry Background",
          content: "Full name: Doris J. Swartz. Born: November 27, 1933. Died: May 22, 2012 at 4:01 AM in Dayton, Ohio at age 78. She was the Secretary Treasurer and trained under 'Preacher' Louise Copeland."
        },
        {
          title: "Leadership & Service",
          content: "Pastor of United Christian Center Church, Dayton, OH for 45 years. She later moved back to Ohio to pastor the United Christian Center in Dayton for over 40 years. Became the second president of IMF after Sis. Copeland's death in 1988 and served until her death in 2012."
        },
        {
          title: "Legacy & Transition",
          content: "After her death, services were held at United Christian Center with interment at Woodland Cemetery. She passed the leadership to Bishop Darrell & Kathy Gooden, who had been ministers for 43 years and married 53 years at that time."
        }
      ]
    }
  ];

  const currentLeaders = [
    {
      name: "Bishop Darrell & Pastor Kathy Gooden",
      role: "President, International Ministers Forum (IMF) USA",
      image: "v1760178642/president_drjwco.png", // Updated to use full Cloudinary path
      bioSections: [
        {
          title: "Leadership Role",
          content: "Current President of the International Ministers Forum (IMF) USA. They lead the Rehoboth Christian Center in Tallapoosa, Georgia. Headquarters are located in Tallapoosa in the Rehoboth Christian Center."
        },
        {
          title: "Ministry Experience",
          content: "They have been ministers for 43 years and married 53 years. They had IMF incorporated in Georgia. International Minister's Forum is recognized by the Federal Government as an established Ecclesiastical Fellowship."
        }
      ]
    },
    {
      name: "Pastor Paul Price",
      role: "Vice President, International Ministers Forum (IMF) USA",
      image: "v1760178637/vice-president_hp54ma.jpg", // Updated to use full Cloudinary path
      bioSections: [
        {
          title: "Leadership Role",
          content: "Made Vice President in 2012. Minister of Cornerstone Worship Center in Indiana, Pennsylvania."
        },
        {
          title: "Ministry Focus",
          content: "Serves as Vice President, supporting the President in overseeing the operations and strategic direction of the International Ministers Forum USA."
        }
      ]
    },
    {
      name: "Sherry Swiger",
      role: "Secretary, IMF USA",
      image: "v1760178638/secretary-usa_lrrbba.jpg", // Updated to use full Cloudinary path
      bioSections: [
        {
          title: "Ministry Role",
          content: "Serves as Secretary for IMF USA, providing administrative leadership and support for the organization's operations in the United States."
        },
        {
          title: "Service & Dedication",
          content: "Committed to supporting the mission of the International Ministers Forum through dedicated service and organizational leadership."
        }
      ]
    },
    {
      name: "Rev. Olusegun and Rev Dr Blessing Jibuike",
      role: "President, IMF Africa",
      image: "v1760178644/africa-president_g9db07.png", // Updated to use full Cloudinary path
      bioSections: [
        {
          title: "Regional Leadership",
          content: "President of IMF Nigeria and the entire IMF family in Nigeria and Africa. Recently established the IMF Lagos State chapter under the leadership of Rev Oladapo Taiwo."
        },
        {
          title: "African Ministry",
          content: "Dedicated to expanding the reach of IMF programs throughout Africa and supporting local ministry leaders in their spiritual development and community impact."
        }
      ]
    },
    {
      name: "Amb. Edward Grace",
      role: "Secretary General, IMF Africa",
      image: "v1760178639/secretary-general_hkrf1z.jpg", // Updated to use full Cloudinary path
      bioSections: [
        {
          title: "Administrative Leadership",
          content: "Serves as the Secretary General of IMF Africa, overseeing the administrative functions and coordination of the IMF Africa chapter."
        },
        {
          title: "Service & Dedication",
          content: "Committed to supporting the mission of the International Ministers Forum through administrative leadership and coordination of the IMF Africa chapter."
        }
      ]
    }
  ];

  return (
    <>
      <Header />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pt: { xs: 12, md: 15 }, pb: 8 }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              align="center" 
              sx={{
                fontWeight: 800,
                mb: 2,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2rem', md: '2.75rem' }
              }}
            >
              Our Leadership
            </Typography>
            <Typography 
              variant="h5" 
              component="h2" 
              gutterBottom 
              align="center" 
              color="text.secondary" 
              mb={6}
              sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
            >
              Visionary Leaders Who Shaped and Continue to Guide the International Ministers Forum
            </Typography>
          </MotionBox>

          {/* Founders Section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom 
              align="center" 
              sx={{ 
                fontWeight: 700, 
                mb: 4, 
                color: 'primary.main',
                fontSize: '1.75rem'
              }}
            >
              Founding Leaders
            </Typography>
          </MotionBox>

          {founders.map((founder, index) => (
                <Box key={founder.name} sx={{ mb: 6 }}>
                  <Card
                    sx={{
                      borderRadius: 4,
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                      border: '1px solid rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <Box sx={{ display: { xs: 'block', md: 'flex' }}}
                      onError={(e) => {
                        console.error('Error in founder card:', founder.name, e);
                      }}
                    >
                      <Box sx={{ 
                        width: { xs: '100%', md: 300 }, 
                        height: { xs: 300, md: 300 },
                        position: 'relative'
                      }}>
                        <Suspense fallback={<CircularProgress />}>
                          <LeaderImage src={founder.image} name={founder.name} />
                        </Suspense>
                      </Box>
                      <CardContent sx={{ flex: 1, p: 4 }}>
                        <Box sx={{ mb: 3 }}>
                          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'primary.main', fontSize: '1.5rem' }}>
                            {founder.name}
                          </Typography>
                          <Chip 
                            label={founder.role} 
                            color="primary" 
                            variant="outlined" 
                            sx={{ 
                              fontWeight: 600,
                              mb: 2,
                              '& .MuiChip-label': {
                                px: 2
                              }
                            }} 
                          />
                        </Box>

                        {founder.bioSections.map((section, sectionIndex) => (
                          <Accordion 
                            key={sectionIndex} 
                            defaultExpanded={sectionIndex === 0}
                            sx={{ 
                              mb: 2,
                              boxShadow: 'none',
                              border: '1px solid',
                              borderColor: 'divider',
                              '&:before': {
                                display: 'none',
                              },
                              '&.Mui-expanded': {
                                margin: '8px 0',
                              },
                              '& .MuiAccordionSummary-root': {
                                borderRadius: 1,
                                '&:hover': {
                                  bgcolor: alpha(theme.palette.primary.main, 0.05),
                                }
                              }
                            }}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              sx={{
                                fontWeight: 600,
                                color: 'text.primary',
                                '& .MuiAccordionSummary-content': {
                                  my: 1,
                                }
                              }}
                            >
                              {section.title}
                            </AccordionSummary>
                            <AccordionDetails sx={{ color: 'text.secondary', pt: 0, lineHeight: 1.7 }}>
                              <Typography>
                                {section.content}
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        ))}
                      </CardContent>
                    </Box>
                  </Card>
                </Box>
              ))}

          {/* Divider between sections */}
          <Divider sx={{ my: 8, borderWidth: 1, borderColor: 'divider' }} />

          {/* Current Leadership Section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom 
              align="center" 
              sx={{ 
                fontWeight: 700, 
                mb: 4, 
                color: 'primary.main',
                fontSize: '1.75rem'
              }}
            >
              Current Leadership
            </Typography>
          </MotionBox>

          {currentLeaders.map((leader, index) => (
                <Box key={leader.name} sx={{ mb: 6 }}>
                  <Card
                    sx={{
                      borderRadius: 4,
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                      border: '1px solid rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <Box sx={{ display: { xs: 'block', md: 'flex' }}}
                      onError={(e) => {
                        console.error('Error in leader card:', leader.name, e);
                      }}
                    >
                      <Box sx={{ 
                        width: { xs: '100%', md: 300 }, 
                        height: { xs: 300, md: 300 },
                        position: 'relative'
                      }}>
                        <Suspense fallback={<CircularProgress />}>
                          <LeaderImage src={leader.image} name={leader.name} />
                        </Suspense>
                      </Box>
                      <CardContent sx={{ flex: 1, p: 4 }}>
                        <Box sx={{ mb: 3 }}>
                          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'primary.main', fontSize: '1.5rem' }}>
                            {leader.name}
                          </Typography>
                          <Chip 
                            label={leader.role} 
                            color="secondary" 
                            variant="outlined" 
                            sx={{ 
                              fontWeight: 600,
                              mb: 2,
                              '& .MuiChip-label': {
                                px: 2
                              }
                            }} 
                          />
                        </Box>

                        {leader.bioSections.map((section, sectionIndex) => (
                          <Accordion 
                            key={sectionIndex} 
                            defaultExpanded={sectionIndex === 0}
                            sx={{ 
                              mb: 2,
                              boxShadow: 'none',
                              border: '1px solid',
                              borderColor: 'divider',
                              '&:before': {
                                display: 'none',
                              },
                              '&.Mui-expanded': {
                                margin: '8px 0',
                              },
                              '& .MuiAccordionSummary-root': {
                                borderRadius: 1,
                                '&:hover': {
                                  bgcolor: alpha(theme.palette.primary.main, 0.05),
                                }
                              }
                            }}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              sx={{
                                fontWeight: 600,
                                color: 'text.primary',
                                '& .MuiAccordionSummary-content': {
                                  my: 1,
                                }
                              }}
                            >
                              {section.title}
                            </AccordionSummary>
                            <AccordionDetails sx={{ color: 'text.secondary', pt: 0, lineHeight: 1.7 }}>
                              <Typography>
                                {section.content}
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        ))}
                      </CardContent>
                    </Box>
                  </Card>
                </Box>
              ))}

        </Container>
      </Box>
      <Footer />
    </>
  );
}