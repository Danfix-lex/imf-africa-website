'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  useTheme,
  Grid,
  IconButton,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  AccountBalance as AccountBalanceIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
} from '@mui/icons-material';
import { CldImage } from 'next-cloudinary';

const Footer: React.FC = () => {
  const theme = useTheme();

  // Social media links
  const socialMediaLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/17Qb4aYirx/?mibextid=LQQJ4d',
      icon: <FacebookIcon />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/imf_africa?igsh=eWM3anl1dHF3aHRh&utm_source=qr',
      icon: <InstagramIcon />,
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@internationalministersforumafr?si=FPDE9MFaqYpZxw95',
      icon: <YouTubeIcon />,
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <CldImage
                src="logo/imf-africa-logo.png"
                alt="IMF Africa Logo"
                width={40}
                height={40}
                style={{
                  width: 'auto',
                  height: 40,
                  objectFit: 'contain',
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                IMF AFRICA
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 300 }}>
              Equipping Christian leaders across Africa with world-class ministry training and resources.
            </Typography>
            
            {/* Social Media Links */}
            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              {socialMediaLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                    width: 40,
                    height: 40,
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <EmailIcon sx={{ fontSize: 20, opacity: 0.8 }} />
                <Typography variant="body2">
                  africa@imfministers.org
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <PhoneIcon sx={{ fontSize: 20, opacity: 0.8 }} />
                <Typography variant="body2">
                  +234 (0) 123-456-789
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationIcon sx={{ fontSize: 20, opacity: 0.8 }} />
                <Typography variant="body2">
                  Lagos, Nigeria
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Newsletter Signup */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Stay Updated
            </Typography>
            <Typography
              variant="body2"
              sx={{ opacity: 0.9, mb: 3, lineHeight: 1.6 }}
            >
              Subscribe to our newsletter for the latest updates on ministry
              programs, fellowship events, and spiritual developments.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                placeholder="Enter your email"
                variant="outlined"
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                  '& .MuiOutlinedInput-input': {
                    color: 'white',
                    '&::placeholder': {
                      color: 'rgba(255, 255, 255, 0.7)',
                      opacity: 1,
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: 'secondary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'secondary.dark',
                  },
                  borderRadius: 2,
                  py: 1,
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            pt: { xs: 4, md: 6 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2024 International Ministers Forum Africa. All rights reserved.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 2, md: 3 },
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', md: 'flex-end' },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                cursor: 'pointer',
                '&:hover': { opacity: 1 },
              }}
              onClick={() => window.location.href = '/purpose'}
            >
              Purpose & Membership
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                cursor: 'pointer',
                '&:hover': { opacity: 1 },
              }}
              onClick={() => window.location.href = '/history'}
            >
              History
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                cursor: 'pointer',
                '&:hover': { opacity: 1 },
              }}
              onClick={() => window.location.href = '/statement-of-faith'}
            >
              Statement of Faith
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                cursor: 'pointer',
                '&:hover': { opacity: 1 },
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                cursor: 'pointer',
                '&:hover': { opacity: 1 },
              }}
            >
              Terms of Service
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                cursor: 'pointer',
                '&:hover': { opacity: 1 },
              }}
            >
              Accessibility
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;