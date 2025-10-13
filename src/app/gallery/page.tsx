'use client';

import React, { useState, useEffect, Suspense } from 'react';
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
  Alert,
  alpha,
} from '@mui/material';
import {
  Image as ImageIcon,
  PlayCircle as PlayIcon,
  Close as CloseIcon,
  ZoomIn as ZoomInIcon,
  Download as DownloadIcon,
  Videocam as VideoIcon,
  PictureAsPdf as PdfIcon,
  Description as DocumentIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Lazy load images for better performance
const LazyImage = ({ src, alt, sx, onError }: { src: string; alt: string; sx?: any; onError?: (e: any) => void }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

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
        setError(true);
        if (onError) onError(e);
      }}
    />
  );
};

// Update the gallery item type
interface GalleryItem {
  id: string;
  type: 'image' | 'video' | 'document';
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  downloadUrl: string;
  category: string;
  date: string;
  duration?: number; // For videos
  format?: string; // For videos and documents
}

// Remove mock data - will fetch from Cloudinary instead
const categories = ['All', 'Events', 'Training', 'Outreach', 'Youth', 'Worship', 'Videos', 'Documents'];

const GalleryPage: React.FC = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState(12); // Initial visible items

  // Fetch gallery items from Cloudinary
  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/gallery');
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          const errorMessage = errorData.details || errorData.error || `Failed to fetch gallery items: ${response.status} - ${response.statusText}`;
          throw new Error(errorMessage);
        }
        
        const data = await response.json();
        
        // Check if we received valid data
        if (!data || (Array.isArray(data) && data.length === 0)) {
          setError('No gallery items found. Please check if media has been uploaded to Cloudinary.');
        } else {
          setGalleryItems(data);
        }
        
        setLoading(false);
      } catch (error: any) {
        console.error('Error fetching gallery items:', error);
        setError(`Error fetching gallery items: ${error.message || 'Unknown error occurred'}. Please try again later.`);
        setLoading(false);
      }
    };

    fetchGalleryItems();
  }, []);

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : selectedCategory === 'Videos'
    ? galleryItems.filter(item => item.type === 'video')
    : selectedCategory === 'Documents'
    ? galleryItems.filter(item => item.type === 'document')
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
              <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
                Please ensure that:
                <ul>
                  <li>Cloudinary environment variables are properly set in your Render dashboard</li>
                  <li>You have uploaded media to your Cloudinary "gallery" folder</li>
                  <li>Your Cloudinary account is properly configured</li>
                </ul>
              </Typography>
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

  // Show error message if no items
  if (galleryItems.length === 0) {
    return (
      <>
        <Header />
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pt: { xs: 12, md: 15 }, pb: 8 }}>
          <Container maxWidth="xl">
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h4" gutterBottom>
                No Gallery Items Found
              </Typography>
              <Typography variant="body1" color="text.secondary">
                There are currently no images, videos, or documents in your gallery.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Please make sure you have uploaded media to your Cloudinary "gallery" folder.
              </Typography>
              <Button 
                variant="contained" 
                onClick={() => window.location.reload()}
                sx={{ mt: 2 }}
              >
                Retry
              </Button>
            </Box>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
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
                  fontSize: { xs: '2rem', md: '2.75rem' }
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
                  fontSize: { xs: '1rem', md: '1.25rem' }
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
                    py: 1.5,
                    borderRadius: 2,
                    minHeight: 'auto',
                    mr: 1,
                    '&.Mui-selected': {
                      color: 'primary.main',
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                    },
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.05),
                    }
                  },
                  '& .MuiTabs-indicator': {
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    height: 3,
                  },
                  '& .MuiTabs-scrollButtons': {
                    '&.Mui-disabled': {
                      opacity: 0.3,
                    },
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
          <Grid container spacing={{ xs: 3, md: 4 }}>
            <AnimatePresence>
              {itemsToDisplay.map((item, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
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
                        {/* Handle both images and videos properly */}
                        {item.type === 'video' ? (
                          <Box
                            sx={{
                              width: '100%',
                              height: 220,
                              bgcolor: 'black',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              position: 'relative',
                            }}
                          >
                            <PlayIcon sx={{ color: 'white', fontSize: 48 }} />
                            <Box
                              sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                bgcolor: 'rgba(0,0,0,0.3)',
                              }}
                            />
                          </Box>
                        ) : item.type === 'document' ? (
                          // Document preview with icon
                          <Box
                            sx={{
                              width: '100%',
                              height: 220,
                              bgcolor: alpha(theme.palette.primary.main, 0.1),
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              position: 'relative',
                            }}
                          >
                            {(item.format && item.format.toLowerCase() === 'pdf') ? (
                              <PdfIcon sx={{ color: 'primary.main', fontSize: 64 }} />
                            ) : (
                              <DocumentIcon sx={{ color: 'primary.main', fontSize: 64 }} />
                            )}
                          </Box>
                        ) : (
                          // Use optimized image loading
                          <Box sx={{ width: '100%', height: 220, position: 'relative' }}>
                            <LazyImage
                              src={item.thumbnail || `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_220,c_fill,f_webp,q_auto/${item.url.split('/').pop()}`}
                              alt={item.title}
                              sx={{
                                width: '100%',
                                height: 220,
                                objectFit: 'cover',
                              }}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://via.placeholder.com/400x220?text=${encodeURIComponent(item.title)}`;
                              }}
                            />
                          </Box>
                        )}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            bgcolor: 'primary.main',
                            color: 'white',
                            width: 44,
                            height: 44,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                          }}
                        >
                          {item.type === 'image' ? <ImageIcon /> : item.type === 'video' ? <VideoIcon /> : <DocumentIcon />}
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
                            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                          }}
                        />
                      </Box>
                      <CardContent sx={{ flexGrow: 1, p: 3 }} onClick={() => handleOpenDialog(item)}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: '1.1rem' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                          {item.description}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="caption" color="text.secondary">
                            {new Date(item.date).toLocaleDateString()}
                          </Typography>
                          {item.type === 'video' && item.duration && (
                            <Typography variant="caption" color="text.secondary">
                              {Math.floor(item.duration / 60)}:{String(Math.floor(item.duration % 60)).padStart(2, '0')}
                            </Typography>
                          )}
                        </Box>
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
                            px: 2,
                            py: 0.8,
                            borderColor: alpha(theme.palette.primary.main, 0.3),
                            color: 'primary.main',
                            '&:hover': {
                              bgcolor: alpha(theme.palette.primary.main, 0.1),
                              borderColor: 'primary.main',
                            }
                          }}
                        >
                          Download
                        </Button>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>

          {/* Load More Button */}
          {visibleItems < filteredItems.length && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
              <Button
                variant="contained"
                onClick={loadMore}
                sx={{
                  px: 5,
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
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
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
                  {/* Handle both images and videos in the dialog */}
                  {selectedItem.type === 'video' ? (
                    <Box
                      sx={{
                        width: '100%',
                        maxHeight: '70vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'black',
                        p: 2,
                      }}
                    >
                      <video
                        src={selectedItem.url}
                        controls
                        style={{
                          maxWidth: '100%',
                          maxHeight: '70vh',
                        }}
                      />
                    </Box>
                  ) : selectedItem.type === 'document' ? (
                    // Document preview with download option
                    <Box
                      sx={{
                        width: '100%',
                        maxHeight: '70vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'background.paper',
                        p: 4,
                      }}
                    >
                      <Box
                        sx={{
                          mb: 4,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 120,
                          height: 120,
                          borderRadius: '50%',
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                        }}
                      >
                        {(selectedItem.format && selectedItem.format.toLowerCase() === 'pdf') ? (
                          <PdfIcon sx={{ color: 'primary.main', fontSize: 64 }} />
                        ) : (
                          <DocumentIcon sx={{ color: 'primary.main', fontSize: 64 }} />
                        )}
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                        {selectedItem.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, textAlign: 'center' }}>
                        {selectedItem.description || 'Document file'}
                      </Typography>
                      <Button
                        variant="contained"
                        startIcon={<DownloadIcon />}
                        onClick={() => handleDownload(selectedItem.url, selectedItem.title)}
                        sx={{
                          px: 4,
                          py: 1.5,
                          borderRadius: 2,
                          fontWeight: 600,
                        }}
                      >
                        Download {selectedItem.format?.toUpperCase() || 'Document'}
                      </Button>
                    </Box>
                  ) : (
                    // Use optimized image loading for dialog
                    <Box sx={{ width: '100%', maxHeight: '70vh', position: 'relative' }}>
                      <LazyImage
                        src={selectedItem.url}
                        alt={selectedItem.title}
                        sx={{
                          width: '100%',
                          maxHeight: '70vh',
                          objectFit: 'contain',
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://via.placeholder.com/800x600?text=${encodeURIComponent(selectedItem.title)}`;
                        }}
                      />
                    </Box>
                  )}
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
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                    {selectedItem.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Chip
                      label={selectedItem.category}
                      size="small"
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        {new Date(selectedItem.date).toLocaleDateString()}
                      </Typography>
                      {selectedItem.type === 'video' && selectedItem.duration && (
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                          Duration: {Math.floor(selectedItem.duration / 60)}:{String(Math.floor(selectedItem.duration % 60)).padStart(2, '0')}
                        </Typography>
                      )}
                    </Box>
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