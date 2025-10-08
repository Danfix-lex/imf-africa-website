'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  useTheme,
} from '@mui/material';
import {
  Star as StarIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const WelcomePage: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/auth');
  };

  const handleExploreSite = () => {
    router.push('/site');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Box
              component="img"
              src="/images/logo.png"
              alt="IMF Africa Logo"
              sx={{
                height: 120,
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
            <Chip 
              icon={<StarIcon />}
              label="Established 1950" 
              sx={{ 
                bgcolor: 'primary.main', 
                color: 'white',
                fontWeight: 600,
                fontSize: '1rem',
                px: 2,
                py: 1
              }} 
            />
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              color: 'text.primary',
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            <Box component="span" sx={{ 
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Welcome to
            </Box>
            <br />
            <Box component="span" sx={{ color: 'text.primary' }}>
              IMF AFRICA
            </Box>
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              fontWeight: 500,
              color: 'primary.main',
              mb: 6,
              fontStyle: 'italic',
            }}
          >
            International Ministers Forum Africa
          </Typography>

          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleGetStarted}
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 3,
                background: 'primary.main',
                textTransform: 'none',
                '&:hover': {
                  background: 'primary.dark',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Get Started
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={handleExploreSite}
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 3,
                borderColor: 'primary.main',
                color: 'primary.main',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Explore Ministry
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WelcomePage;