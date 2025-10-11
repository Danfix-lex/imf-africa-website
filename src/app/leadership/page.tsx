'use client';

import React, { useState } from 'react';
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
import { CldImage } from 'next-cloudinary';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function LeadershipPage() {
  const founders = [
    {
      name: "Rev. Mary Louise Copeland",
      role: "First President, International Ministers Forum",
      image: "leadership/mary-copeland.jpg",
      bioSections: [
        {
          title: "Early Life & Ministry Beginnings",
          content: "Born February 18, 1909, in Huffman, Mississippi County, Arkansas, USA. Died November 17, 1988, in Poplar Bluff, Butler County, Missouri at age 79. Originally started as a women's ministerial group with Sis. Louise Copeland as the first president, serving from 1960 until 1998."
        },
        {
          title: "Ministry & Leadership",
          content: "She was the pastor of Faith Tabernacle in Poplar Bluff, Missouri. Men were allowed to join around 1975 when they asked the group because of their integrity. The name was then changed to International Ministers Forum. Sis. Copeland became known as 'Preacher'."
        },
        {
          title: "Legacy & Transition",
          content: "IMF was incorporated in 1987 in Missouri the year before Sis. Copeland died in 1988. She was a true pioneer in the Pentecostal, Healing Revival, Latter Rain, and Charismatic Movements, ministering with many healing evangelists as part of the 'Voice of Healing' network."
        }
      ]
    },
    {
      name: "Pastor Doris Swartz",
      role: "Second President, International Ministers Forum",
      image: "leadership/doris-swartz.jpg",
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
          content: "After her death, services were held at United Christian Center with interment at Woodland Cemetery. She passed the leadership to Bishop Darrell & Kathy Gooden, who had been pastors for 43 years and married 53 years at that time."
        }
      ]
    }
  ];

  const currentLeaders = [
    {
      name: "Bishop Darrell & Pastor Kathy Gooden",
      role: "President, International Ministers Forum (IMF) USA",
      image: "leadership/president.png",
      bioSections: [
        {
          title: "Leadership Role",
          content: "Current President of the International Ministers Forum (IMF) USA. They Pastor the Rehoboth Christian Center in Tallapoosa, Georgia. Headquarters are located in Tallapoosa in the Rehoboth Christian Center."
        },
        {
          title: "Ministry Experience",
          content: "They have been pastors for 43 years and married 53 years. They had IMF incorporated in Georgia. International Minister's Forum is recognized by the Federal Government as an established Ecclesiastical Fellowship."
        }
      ]
    },
    {
      name: "Pastor Paul Price",
      role: "Vice President, International Ministers Forum (IMF) USA",
      image: "leadership/vice-president.jpg",
      bioSections: [
        {
          title: "Leadership Role",
          content: "Made Vice President in 2012. Pastor of Cornerstone Worship Center in Indiana, Pennsylvania."
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
      image: "leadership/secretary-usa.jpg",
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
      image: "leadership/africa-president.png",
      bioSections: [
        {
          title: "Regional Leadership",
          content: "President of IMF Nigeria and the entire IMF family in Nigeria and Africa. Recently inaugurated the IMF Lagos State chapter under the leadership of Rev Oladapo Taiwo."
        },
        {
          title: "African Ministry",
          content: "Dedicated to expanding the reach of IMF programs throughout Africa and supporting local church leaders in their spiritual development and community impact."
        }
      ]
    },
    {
      name: "Amb. Edward Grace",
      role: "Secretary General, IMF Africa",
      image: "leadership/secretary-general.png",
      bioSections: [
        {
          title: "Administrative Leadership",
          content: "Serves as the Secretary General of IMF Africa, overseeing the administrative functions and coordination of the IMF Africa chapter."
        },
        {
          title: "Service & Dedication",
          content: "Serves as Secretary for IMF USA, providing administrative leadership and support for the organization's operations in the United States."
        }
      ]
    }
  ];

  return (
    <>
      <Header />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pt: 15, pb: 8 }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h2" component="h1" gutterBottom align="center" color="primary">
              Our Leadership
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary" mb={6}>
              Visionary Leaders Who Shaped and Continue to Guide the International Ministers Forum
            </Typography>
          </MotionBox>

          {/* Founders Section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography variant="h3" component="h2" gutterBottom align="center" color="secondary" mt={6} mb={4}>
              Founding Leaders
            </Typography>
          </MotionBox>

          {founders.map((founder, index) => (
                <Box key={founder.name} sx={{ mb: 6 }}>
                  <Card
                    sx={{
                      borderRadius: 4,
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
                    <Box sx={{ display: { xs: 'block', md: 'flex' } }}>
                      <Box sx={{ 
                        width: { xs: '100%', md: 300 }, 
                        height: { xs: 300, md: 'auto' },
                        position: 'relative'
                      }}>
                        <CldImage
                          src={founder.image}
                          alt={founder.name}
                          width={300}
                          height={300}
                          crop="fill"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      </Box>
                      <CardContent sx={{ flex: 1, p: 4 }}>
                        <Box sx={{ mb: 3 }}>
                          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'primary.main' }}>
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
                            <AccordionDetails sx={{ color: 'text.secondary', pt: 0 }}>
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
          <Divider sx={{ my: 8, borderWidth: 2 }} />

          {/* Current Leadership Section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography variant="h3" component="h2" gutterBottom align="center" color="secondary" mt={6} mb={4}>
              Current Leadership
            </Typography>
          </MotionBox>

          {currentLeaders.map((leader, index) => (
                <Box key={leader.name} sx={{ mb: 6 }}>
                  <Card
                    sx={{
                      borderRadius: 4,
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
                    <Box sx={{ display: { xs: 'block', md: 'flex' } }}>
                      <Box sx={{ 
                        width: { xs: '100%', md: 300 }, 
                        height: { xs: 300, md: 'auto' },
                        position: 'relative'
                      }}>
                        <CldImage
                          src={leader.image}
                          alt={leader.name}
                          width={300}
                          height={300}
                          crop="fill"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      </Box>
                      <CardContent sx={{ flex: 1, p: 4 }}>
                        <Box sx={{ mb: 3 }}>
                          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'primary.main' }}>
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
                            <AccordionDetails sx={{ color: 'text.secondary', pt: 0 }}>
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
