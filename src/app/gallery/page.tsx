'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Alert,
  Button,
} from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GalleryPage: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch gallery items from Cloudinary
  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/gallery');
        
        console.log('Gallery API response status:', response.status);
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          const errorMessage = errorData.details || errorData.error || `Failed to fetch gallery items: ${response.status} - ${response.statusText}`;
          throw new Error(errorMessage);
        }
        
        const data = await response.json();
        console.log('Gallery data received:', data);
        
        setGalleryItems(data);
        setLoading(false);
      } catch (error: any) {
        console.error('Error fetching gallery items:', error);
        setError(`Error fetching gallery items: ${error.message || 'Unknown error occurred'}. Please try again later.`);
        setLoading(false);
      }
    };

    fetchGalleryItems();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pt: { xs: 12, md: 15 }, pb: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
          <Typography sx={{ ml: 2 }}>Loading gallery...</Typography>
        </Box>
        <Footer />
      </>
    );
  }

  // Show error message if there's an error
  if (error) {
    return (
      <>
        <Header />
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pt: { xs: 12, md: 15 }, pb: 8 }}>
          <Container maxWidth="xl">
            <Alert severity="error" sx={{ mb: 4 }}>
              <Typography variant="h6">Gallery Error</Typography>
              <Typography>{error}</Typography>
              <Button 
                variant="contained" 
                onClick={() => window.location.reload()}
                sx={{ mt: 2 }}
              >
                Retry
              </Button>
            </Alert>
          </Container>
        </Box>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pt: { xs: 12, md: 15 }, pb: 8 }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
              Media Gallery
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 400, color: 'text.secondary' }}>
              Explore photos and videos from our ministry events
            </Typography>
          </Box>
          
          <Box>
            <Typography>Gallery items count: {galleryItems.length}</Typography>
            <pre style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '4px', overflowX: 'auto' }}>
              {JSON.stringify(galleryItems.slice(0, 5), null, 2)}
            </pre>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default GalleryPage;