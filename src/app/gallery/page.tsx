'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  Tabs,
  Tab,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Chip,
  CircularProgress,
  CardActions,
} from '@mui/material';
import {
  Image as ImageIcon,
  PlayCircle as PlayIcon,
  Close as CloseIcon,
  ZoomIn as ZoomInIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CldImage } from 'next-cloudinary';

// Update the gallery item type
interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  downloadUrl: string;
  category: string;
  date: string;
}

// Remove mock data - will fetch from Cloudinary instead
const categories = ['All', 'Events', 'Training', 'Outreach', 'Youth', 'Worship'];

const GalleryPage: React.FC = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(12); // Initial visible items

  // Fetch gallery items from Cloudinary
  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const response = await fetch('/api/gallery');
        const data = await response.json();
        setGalleryItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching gallery items:', error);
        setLoading(false);
      }
    };

    fetchGalleryItems();
  }, []);

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  // Items to display based on visibility
  const itemsToDisplay = filteredItems.slice(0, visibleItems);

  const handleOpenDialog = (item: GalleryItem) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
  };

  // Function to handle download
  const handleDownload = (url: string, title: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = title;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Load more items
  const loadMore = () => {
    setVisibleItems(prev => Math.min(prev + 12, filteredItems.length));
  };

  if (loading) {
    return (
      <>
        <Header />
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pt: 15, pb: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </Box>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pt: 15, pb: 8 }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
                }}
              >
                Media Gallery
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 400,
                  color: 'text.secondary',
                  maxWidth: 700,
                  mx: 'auto',
                }}
              >
                Explore photos and videos from our ministry events, training sessions, and community outreach programs
              </Typography>
            </Box>

            {/* Category Filter */}
            <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
              <Tabs
                value={selectedCategory}
                onChange={(e, value) => {
                  setSelectedCategory(value);
                  setVisibleItems(12); // Reset visible items when category changes
                }}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    minWidth: 'auto',
                    px: 3,
                  },
                  '& .MuiTabs-indicator': {
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    height: 3,
                  },
                }}
              >
                {categories.map((category) => (
                  <Tab
                    key={category}
                    label={category}
                    value={category}
                  />
                ))}
              </Tabs>
            </Box>
          </motion.div>

          {/* Gallery Grid */}
          <Grid container spacing={4}>
            {itemsToDisplay.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
                        transform: 'translateY(-4px)',
                      },
                      cursor: 'pointer',
                    }}
                  >
                    <Box sx={{ position: 'relative' }} onClick={() => handleOpenDialog(item)}>
                      {/* Using CldImage for optimized Cloudinary delivery with lazy loading */}
                      <CldImage
                        src={item.thumbnail}
                        alt={item.title}
                        width={600}
                        height={400}
                        crop="fill"
                        loading={index < 6 ? "eager" : "lazy"} // Eager load first 6 images
                        style={{
                          height: 200,
                          objectFit: 'cover',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          bgcolor: 'primary.main',
                          color: 'white',
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {item.type === 'image' ? <ImageIcon /> : <PlayIcon />}
                      </Box>
                      <Chip
                        label={item.category}
                        size="small"
                        sx={{
                          position: 'absolute',
                          bottom: 16,
                          left: 16,
                          bgcolor: 'rgba(255, 255, 255, 0.9)',
                          color: 'text.primary',
                          fontWeight: 600,
                        }}
                      />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 3 }} onClick={() => handleOpenDialog(item)}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {item.description}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {new Date(item.date).toLocaleDateString()}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center', p: 2 }}>
                      <Button
                        variant="outlined"
                        startIcon={<DownloadIcon />}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(item.downloadUrl, item.title);
                        }}
                        sx={{
                          borderRadius: 2,
                          textTransform: 'none',
                          fontWeight: 600,
                        }}
                      >
                        Download
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Load More Button */}
          {visibleItems < filteredItems.length && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
              <Button
                variant="contained"
                onClick={loadMore}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 600,
                  textTransform: 'none',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  '&:hover': {
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Load More
              </Button>
            </Box>
          )}
        </Container>

        {/* Media Dialog */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          sx={{
            '& .MuiDialog-paper': {
              borderRadius: 3,
              overflow: 'hidden',
            },
          }}
        >
          <DialogContent sx={{ p: 0, position: 'relative' }}>
            <IconButton
              onClick={handleCloseDialog}
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                bgcolor: 'rgba(0,0,0,0.5)',
                color: 'white',
                zIndex: 10,
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.7)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            
            {selectedItem && (
              <>
                <Box sx={{ position: 'relative' }}>
                  {/* Using CldImage for the full-size media in dialog */}
                  <CldImage
                    src={selectedItem.url}
                    alt={selectedItem.title}
                    width={1200}
                    height={800}
                    crop="scale"
                    style={{
                      width: '100%',
                      maxHeight: '70vh',
                      objectFit: 'contain',
                    }}
                  />
                  <IconButton
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      right: 16,
                      bgcolor: 'rgba(0,0,0,0.5)',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'rgba(0,0,0,0.7)',
                      },
                    }}
                  >
                    <ZoomInIcon />
                  </IconButton>
                </Box>
                
                <Box sx={{ p: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    {selectedItem.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {selectedItem.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Chip
                      label={selectedItem.category}
                      size="small"
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {new Date(selectedItem.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Box>
              </>
            )}
          </DialogContent>
          <DialogActions sx={{ p: 2, justifyContent: 'space-between' }}>
            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              onClick={() => selectedItem && handleDownload(selectedItem.downloadUrl, selectedItem.title)}
            >
              Download
            </Button>
            <Button onClick={handleCloseDialog} variant="contained">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Footer />
    </>
  );
};

export default GalleryPage;