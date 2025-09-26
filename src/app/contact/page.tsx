'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  useTheme,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  AccessTime as TimeIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactPage: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: '',
    subscribe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: any) => {
    setFormData((prev) => ({ ...prev, category: e.target.value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, subscribe: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <LocationIcon />,
      title: 'Office Address',
      details: '123 Ministry Street, Nairobi, Kenya',
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone Number',
      details: '+254 700 123 456',
    },
    {
      icon: <EmailIcon />,
      title: 'Email Address',
      details: 'info@imfafrica.org',
    },
    {
      icon: <TimeIcon />,
      title: 'Working Hours',
      details: 'Monday - Friday: 8:00 AM - 6:00 PM',
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
                Contact Us
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
                Have questions or want to learn more about our initiatives? Reach out to us through the form below or use our contact information.
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6 }}>
            <Box component="div">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    height: '100%',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>
                      Send us a Message
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                        <Box component="div">
                          <TextField
                            fullWidth
                            label="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </Box>
                        <Box component="div">
                          <TextField
                            fullWidth
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </Box>
                        <Box component="div">
                          <TextField
                            fullWidth
                            label="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </Box>
                        <Box component="div">
                          <FormControl fullWidth>
                            <InputLabel>Category</InputLabel>
                            <Select
                              value={formData.category}
                              label="Category"
                              onChange={handleSelectChange}
                            >
                              <MenuItem value="general">General Inquiry</MenuItem>
                              <MenuItem value="partnership">Partnership</MenuItem>
                              <MenuItem value="training">Training Programs</MenuItem>
                              <MenuItem value="donation">Donation</MenuItem>
                              <MenuItem value="volunteer">Volunteer</MenuItem>
                              <MenuItem value="technical">Technical Support</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                        <Box component="div">
                          <TextField
                            fullWidth
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            multiline
                            rows={5}
                            required
                          />
                        </Box>
                        <Box component="div">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={formData.subscribe}
                                onChange={handleCheckboxChange}
                                color="primary"
                              />
                            }
                            label="Subscribe to our newsletter for updates"
                          />
                        </Box>
                        <Box component="div">
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            sx={{
                              py: 2,
                              fontWeight: 600,
                              textTransform: 'none',
                              borderRadius: 2,
                              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                              '&:hover': {
                                background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                              },
                            }}
                          >
                            Send Message
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>

            <Box component="div">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    height: '100%',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>
                      Contact Information
                    </Typography>
                    
                    <Box sx={{ mb: 4 }}>
                      {contactInfo.map((info, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 3,
                            mb: 4,
                          }}
                        >
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
                              flexShrink: 0,
                            }}
                          >
                            {info.icon}
                          </Box>
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                              {info.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                              {info.details}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>

                    <Box
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        borderRadius: 2,
                        p: 3,
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        Emergency Support
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        For urgent matters, please call our 24/7 support line
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        +254 700 987 654
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default ContactPage;