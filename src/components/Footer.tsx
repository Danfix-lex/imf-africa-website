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
  alpha,
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
        borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Box
                component="img"
                src="https://res.cloudinary.com/dprrsr08j/image/upload/v1760178679/logo_wv6j8l.png"
                alt="IMF Africa Logo"
                sx={{
                  width: '48px',
                  height: 'auto',
                  objectFit: 'contain',
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/48x48?text=Logo';
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', fontSize: '1.4rem' }}>
                IMF AFRICA
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 300, lineHeight: 1.7 }}>
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
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.2),
                      transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.3s ease',
                    width: 44,
                    height: 44,
                    boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.1)}`,
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: 'primary.main', fontSize: '1.3rem' }}>
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <EmailIcon sx={{ fontSize: 22, color: 'primary.main', mt: 0.5 }} />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Email
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    africa@imfministers.org
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <PhoneIcon sx={{ fontSize: 22, color: 'primary.main', mt: 0.5 }} />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Phone
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    +234 (0) 123-456-789
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <LocationIcon sx={{ fontSize: 22, color: 'primary.main', mt: 0.5 }} />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Location
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lagos, Nigeria
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Newsletter Signup */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: 'primary.main', fontSize: '1.3rem' }}>
              Stay Updated
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}
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
                    bgcolor: 'background.default',
                    borderRadius: 2,
                    '& fieldset': {
                      borderColor: 'divider',
                    },
                    '&:hover fieldset': {
                      borderColor: alpha(theme.palette.primary.main, 0.5),
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'primary.main',
                      borderWidth: 2,
                    },
                  },
                  '& .MuiOutlinedInput-input': {
                    color: 'text.primary',
                    py: 1.5,
                    '&::placeholder': {
                      color: 'text.secondary',
                      opacity: 1,
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  color: 'white',
                  '&:hover': {
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                    transform: 'translateY(-2px)',
                  },
                  borderRadius: 3,
                  py: 1.5,
                  px: 3,
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: `0 6px 16px ${alpha(theme.palette.primary.main, 0.3)}`,
                  transition: 'all 0.3s ease',
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
            borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            pt: { xs: 4, md: 5 },
            mt: 5,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
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
                cursor: 'pointer',
                color: 'text.secondary',
                fontSize: '0.9rem',
                '&:hover': { color: 'primary.main' },
                transition: 'color 0.2s ease',
              }}
              onClick={() => window.location.href = '/purpose'}
            >
              Purpose
            </Typography>
            <Typography
              variant="body2"
              sx={{
                cursor: 'pointer',
                color: 'text.secondary',
                fontSize: '0.9rem',
                '&:hover': { color: 'primary.main' },
                transition: 'color 0.2s ease',
              }}
              onClick={() => window.location.href = '/history'}
            >
              History
            </Typography>
            <Typography
              variant="body2"
              sx={{
                cursor: 'pointer',
                color: 'text.secondary',
                fontSize: '0.9rem',
                '&:hover': { color: 'primary.main' },
                transition: 'color 0.2s ease',
              }}
              onClick={() => window.location.href = '/statement-of-faith'}
            >
              Statement of Faith
            </Typography>
            <Typography
              variant="body2"
              sx={{
                cursor: 'pointer',
                color: 'text.secondary',
                fontSize: '0.9rem',
                '&:hover': { color: 'primary.main' },
                transition: 'color 0.2s ease',
              }}
            >
              Privacy
            </Typography>
            <Typography
              variant="body2"
              sx={{
                cursor: 'pointer',
                color: 'text.secondary',
                fontSize: '0.9rem',
                '&:hover': { color: 'primary.main' },
                transition: 'color 0.2s ease',
              }}
            >
              Terms
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;