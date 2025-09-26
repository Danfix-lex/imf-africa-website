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
import { Church as ChurchIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const StatementOfFaithPage: React.FC = () => {
  const theme = useTheme();

  const statementOfFaith = [
    {
      title: "The Holy Scriptures",
      content: "That the Holy Scriptures are the inspired Word of God, and that the whole Bible being the only infallible, authoritative Word of God."
    },
    {
      title: "The Triune God",
      content: "There is only one true and living God, existing in three expression: The Father, The Son, and The Holy Spirit."
    },
    {
      title: "The Deity of Christ",
      content: "We believe in the Essential Deity of Christ, His Virgin Birth, His Sinless Life, His Miracles, His Bodily Resurrection, His Ascension to the Right Hand of the Father, and His second coming in Great Power and Glory."
    },
    {
      title: "Salvation",
      content: "We believe in the forgiveness of sins by the confession of faith in the Blood of Jesus Christ, and conversion upon repentance for all."
    },
    {
      title: "The Holy Spirit",
      content: "That it is the privilege of all Christians to have the present Indwelling of the Holy Spirit, with the evidence of speaking in Other Tongues, enabling them to live a Godly and holy life."
    },
    {
      title: "Unity of Believers",
      content: "We believe in the unity of all true Christian believers repudiating all man-made sectarian walls."
    },
    {
      title: "The Body of Christ",
      content: "However, we believe that every true Christian who is saved through the Blood of Jesus Christ, is a member of the Body of Christ, regardless of where they received salvation or where they worship. And to all such saved, we extend the Hand of Fellowship."
    }
  ];

  const imfAnthem = [
    {
      title: "IMF Anthem",
      content: "God is moving the people of power, God is moving IMF, that will move through the land by his spirit, and will glorify his precious name.\n\nChorus: Move your church Lord, make us strong Lord, Join our hands Lord through your Son. Make us one Lord, in your Body, in your kingdom, of your Son."
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
                Statement of Faith
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
                The foundational beliefs that guide our ministry and fellowship
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ mb: 10 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr' }, gap: 4 }}>
              {statementOfFaith.map((item, index) => (
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
                              bgcolor: 'primary.main',
                              color: 'white',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mr: 3,
                            }}
                          >
                            <ChurchIcon />
                          </Box>
                          <Typography variant="h5" sx={{ fontWeight: 700 }}>
                            {item.title}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}
                        >
                          {item.content}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 10 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr' }, gap: 4 }}>
              {imfAnthem.map((item, index) => (
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
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
                        },
                        background: `linear-gradient(135deg, ${theme.palette.primary.light}10, ${theme.palette.secondary.light}10)`,
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
                          <Typography variant="h5" sx={{ fontWeight: 700 }}>
                            {item.title}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8, whiteSpace: 'pre-line' }}
                        >
                          {item.content}
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

export default StatementOfFaithPage;