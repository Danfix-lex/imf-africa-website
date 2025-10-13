'use client';

import React, { Suspense } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
  Chip,
  alpha,
  CircularProgress,
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

// Lazy load images for better performance
const LazyImage = ({ src, alt, sx, onError }: { src: string; alt: string; sx?: any; onError?: (e: any) => void }) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        ...sx,
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
      onLoad={() => setLoaded(true)}
      onError={(e) => {
        if (onError) onError(e);
      }}
    />
  );
};

const ProgramsPage: React.FC = () => {
  const theme = useTheme();

  // Function to generate Google Calendar URL
  const addToGoogleCalendar = () => {
    const startDate = '20251118T090000'; // Tuesday, 18th November 2025, 9:00 AM
    const endDate = '20251118T120000'; // End at 12:00 PM
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
      'DTSTART:20251118T090000',
      'DTEND:20251118T120000',
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
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pt: { xs: 12, md: 15 }, pb: 8 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
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
              Upcoming Program
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 400,
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.25rem' }
              }}
            >
              Join us for our upcoming special event
            </Typography>
          </Box>

          <Card
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0,0,0,0.05)',
            }}
          >
            {/* Flyer Image */}
            <Suspense fallback={<CircularProgress />}>
              <LazyImage
                src="https://res.cloudinary.com/dprrsr08j/image/upload/v1760178814/upcoming-program_l4dpud.jpg"
                alt="End of the Year Banquet & Award"
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Available';
                }}
              />
            </Suspense>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'text.primary', fontSize: '1.75rem' }}>
                End of the Year Banquet & Award
              </Typography>
              
              <Chip
                label="Special Event"
                size="small"
                color="warning"
                sx={{ 
                  fontWeight: 600,
                  mb: 3,
                  px: 2,
                  py: 1,
                  borderRadius: 2
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
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'text.primary', fontSize: '1.25rem' }}>
                  Event Details
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <CalendarIcon sx={{ mr: 2, mt: 0.5, color: 'primary.main', fontSize: '1.5rem' }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', fontSize: '1.1rem' }}>
                      Tuesday, 18th November 2025
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500, fontSize: '1rem' }}>
                      9:00 AM
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <PlaceIcon sx={{ mr: 2, mt: 0.5, color: 'primary.main', fontSize: '1.5rem' }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', mb: 1, fontSize: '1.1rem' }}>
                      Venue
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Festival Hotel Conference Center (Former Golden Tulip), Diamond Estate, Amuwo-Odofin, Lagos State.
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Box sx={{ mr: 2, mt: 0.5 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </Box>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', mb: 1, fontSize: '1.1rem' }}>
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
                    borderRadius: 3,
                    fontWeight: 600,
                    textTransform: 'none',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                    boxShadow: `0 6px 16px ${alpha(theme.palette.primary.main, 0.3)}`,
                    '&:hover': {
                      background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.4)}`,
                    },
                    transition: 'all 0.3s ease',
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
                    borderRadius: 3,
                    fontWeight: 600,
                    textTransform: 'none',
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.1)}`,
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      borderColor: 'primary.main',
                      transform: 'translateY(-2px)',
                      boxShadow: `0 6px 16px ${alpha(theme.palette.primary.main, 0.2)}`,
                    },
                    transition: 'all 0.3s ease',
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