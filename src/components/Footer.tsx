'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  useTheme,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  AccountBalance as AccountBalanceIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 6,
              mb: 4,
            }}
          >
            {/* Brand Section */}
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <AccountBalanceIcon sx={{ fontSize: 32 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    IMF Africa
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    International Ministers Forum
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="body2"
                sx={{ opacity: 0.9, lineHeight: 1.6, mb: 3 }}
              >
                Empowering ministers and strengthening churches
                across the African continent through fellowship, training,
                and spiritual development programs.
              </Typography>
            </Box>

            {/* Contact Information */}
            <Box sx={{ flex: 1 }}>
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
            </Box>

            {/* Newsletter Signup */}
            <Box sx={{ flex: 1 }}>
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
            </Box>
          </Box>

          {/* Bottom Section */}
          <Box
            sx={{
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
              pt: 4,
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
                gap: 3,
                flexWrap: 'wrap',
              }}
            >
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
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;