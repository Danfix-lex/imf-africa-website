'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
  Chip,
} from '@mui/material';
import {
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  Groups as GroupsIcon,
  ArrowBack as ArrowBackIcon,
  Place as PlaceIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CldImage } from 'next-cloudinary';

const ProgramsPage: React.FC = () => {
  const theme = useTheme();

  // Function to generate Google Calendar URL
  const addToGoogleCalendar = () => {
    const startDate = '20251121T190000'; // Friday, 21st November 2025, 7:00 PM
    const endDate = '20251121T220000'; // End at 10:00 PM
    const title = 'End of the Year Banquet & Award';
    const details = 'An evening of celebration, recognition, and kingdom impact! Join ministers, leaders, and visionaries from across the globe as we dine, fellowship, and explore divine strategies for greater ministry growth. Theme: Exploring Global Perspectives for Ministry Growth';
    const location = 'Festival Hotel Conference Center (Former Golden Tulip), Diamond Estate, Amuwo-Odofin, Lagos State.';
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  // Function to generate iCal data
  const downloadICal = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      'UID:' + Math.random().toString(36).substr(2, 9) + '@imfafrica.org',
      'DTSTART:20251121T190000',
      'DTEND:20251121T220000',
      'SUMMARY:End of the Year Banquet & Award',
      'DESCRIPTION:An evening of celebration\\, recognition\\, and kingdom impact! Join ministers\\, leaders\\, and visionaries from across the globe as we dine\\, fellowship\\, and explore divine strategies for greater ministry growth. Theme: Exploring Global Perspectives for Ministry Growth',
      'LOCATION:Festival Hotel Conference Center (Former Golden Tulip)\\, Diamond Estate\\, Amuwo-Odofin\\, Lagos State.',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'imf-africa-event.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Header />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pt: 15, pb: 8 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                color: 'text.primary',
              }}
            >
              Upcoming Program
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 400,
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Join us for our upcoming special event
            </Typography>
          </Box>

          <Card
            sx={{
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid rgba(0,0,0,0.05)',
            }}
          >
            {/* Flyer Image */}
            <CldImage
              src="v1760178814/upcoming-program_l4dpud.jpg"
              alt="End of the Year Banquet & Award"
              width={800}
              height={600}
              crop="fill"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                End of the Year Banquet & Award
              </Typography>
              
              <Chip
                label="Special Event"
                size="small"
                color="warning"
                sx={{ 
                  fontWeight: 600,
                  mb: 3 
                }}
              />

              <Typography
                variant="body1"
                sx={{ 
                  color: 'text.secondary', 
                  mb: 4, 
                  fontSize: '1.1rem', 
                  lineHeight: 1.7 
                }}
              >
                An evening of celebration, recognition, and kingdom impact! Join ministers, leaders, and visionaries from across the globe as we dine, fellowship, and explore divine strategies for greater ministry growth.
              </Typography>

              {/* Event Details */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}>
                  Event Details
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <CalendarIcon sx={{ mr: 2, mt: 0.5, color: 'primary.main' }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Friday, 21st November 2025
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      7:00 PM - 10:00 PM
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <PlaceIcon sx={{ mr: 2, mt: 0.5, color: 'primary.main' }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
                      Venue
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Festival Hotel Conference Center (Former Golden Tulip), Diamond Estate, Amuwo-Odofin, Lagos State.
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Box sx={{ mr: 2, mt: 0.5 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </Box>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
                      Theme
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                      Exploring Global Perspectives for Ministry Growth
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Calendar Buttons */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2,
                  flexWrap: 'wrap',
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<CalendarIcon />}
                  onClick={addToGoogleCalendar}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    textTransform: 'none',
                    background: 'primary.main',
                    '&:hover': {
                      background: 'primary.dark',
                    },
                  }}
                >
                  Add to Google Calendar
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<AddIcon />}
                  onClick={downloadICal}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    textTransform: 'none',
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white',
                    },
                  }}
                >
                  Add to Calendar
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default ProgramsPage;