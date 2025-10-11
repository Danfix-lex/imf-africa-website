'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JawBreakingAnimation from '@/components/JawBreakingAnimation';

const AnimationsDemoPage: React.FC = () => {
  const theme = useTheme();
  const [selectedAnimation, setSelectedAnimation] = useState('staggeredEntrance');
  const [trigger, setTrigger] = useState(true);

  const animationTypes = [
    { value: 'staggeredEntrance', label: 'Staggered Entrance' },
    { value: 'bounceIn', label: 'Bounce In' },
    { value: 'slideIn', label: 'Slide In' },
    { value: 'flipIn', label: 'Flip In' },
    { value: 'scaleIn', label: 'Scale In' },
    { value: 'fadeIn', label: 'Fade In' },
  ];

  const handleReplay = () => {
    setTrigger(false);
    setTimeout(() => setTrigger(true), 100);
  };

  return (
    <>
      <Header />
      <Box sx={{ 
        minHeight: '100vh', 
        bgcolor: 'background.default',
        py: { xs: 12, md: 15 }
      }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Jaw Breaking Animations
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.6,
                  mb: 4,
                  fontWeight: 500,
                  maxWidth: 800,
                  mx: 'auto',
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                }}
              >
                Experience our professionally crafted animations that bring your content to life
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap', mb: 6 }}>
                <FormControl sx={{ minWidth: 200 }}>
                  <InputLabel>Select Animation</InputLabel>
                  <Select
                    value={selectedAnimation}
                    label="Select Animation"
                    onChange={(e) => setSelectedAnimation(e.target.value)}
                    sx={{ borderRadius: 2 }}
                  >
                    {animationTypes.map((type) => (
                      <MenuItem key={type.value} value={type.value}>
                        {type.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                
                <Button
                  variant="contained"
                  onClick={handleReplay}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                    textTransform: 'none',
                    '&:hover': {
                      background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 16px rgba(25, 118, 210, 0.3)',
                  }}
                >
                  Replay Animation
                </Button>
              </Box>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <JawBreakingAnimation
                  animationType={selectedAnimation as any}
                  delay={index * 0.1}
                  trigger={trigger}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,1))',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: 3,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                        transform: 'translateY(-8px)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
                      <motion.div
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -10, 10, 0]
                        }}
                        transition={{ 
                          rotate: { duration: 0.5 }
                        }}
                      >
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            color: 'white',
                            mx: 'auto',
                            mb: 3,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2rem',
                            fontWeight: 700,
                          }}
                        >
                          {item}
                        </Box>
                      </motion.div>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: 'text.primary',
                          mb: 2,
                          fontSize: '1.3rem',
                        }}
                      >
                        Animation Demo {item}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.7,
                          fontSize: '1rem',
                        }}
                      >
                        This card demonstrates the {selectedAnimation.replace(/([A-Z])/g, ' $1').toLowerCase()} animation effect.
                      </Typography>
                    </CardContent>
                  </Card>
                </JawBreakingAnimation>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 10, textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  color: 'text.primary',
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                }}
              >
                Why Our Animations Stand Out
              </Typography>
            </motion.div>
            
            <Grid container spacing={4} sx={{ mt: 2 }}>
              {[
                {
                  title: "Performance Optimized",
                  description: "All animations are hardware-accelerated for smooth 60fps performance",
                  icon: "⚡"
                },
                {
                  title: "Accessibility Friendly",
                  description: "Animations automatically reduce motion for users who prefer it",
                  icon: "♿"
                },
                {
                  title: "Professional Design",
                  description: "Crafted by experts to enhance user experience without distraction",
                  icon: "🎨"
                }
              ].map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <JawBreakingAnimation
                    animationType="scaleIn"
                    delay={index * 0.2 + 1}
                    trigger={trigger}
                  >
                    <Card
                      sx={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        borderRadius: 3,
                        p: 4,
                        textAlign: 'center',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        }
                      }}
                    >
                      <Typography variant="h2" sx={{ mb: 2 }}>
                        {feature.icon}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'text.primary' }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                        {feature.description}
                      </Typography>
                    </Card>
                  </JawBreakingAnimation>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default AnimationsDemoPage;