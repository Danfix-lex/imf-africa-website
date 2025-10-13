'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryCard from '@/components/ui/GalleryCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { 
  Download, 
  Eye, 
  Image as ImageIcon, 
  Play, 
  FileText 
} from 'lucide-react';

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

const GalleryPageShadcn: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState(8); // Initial visible items

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
          // Validate the data structure
          const isValid = data.every((item: any) => 
            item.id && 
            item.type && 
            ['image', 'video', 'document'].includes(item.type) &&
            item.title &&
            item.url
          );
          
          if (!isValid) {
            setError('Invalid gallery data received from server. Please check the data format.');
          } else {
            setGalleryItems(data);
          }
        }
        
        setLoading(false);
      } catch (error: any) {
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
    setVisibleItems(prev => Math.min(prev + 8, filteredItems.length));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-lg">Loading gallery...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Show error message if there's an error
  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto bg-destructive/10 border border-destructive/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-destructive mb-4">Gallery Error</h2>
            <p className="mb-4">{error}</p>
            <p className="text-sm text-muted-foreground mb-6">
              Please ensure that:
            </p>
            <ul className="text-sm text-muted-foreground mb-6 list-disc pl-5 space-y-1">
              <li>Cloudinary environment variables are properly set in your Render dashboard</li>
              <li>You have uploaded media to your Cloudinary "gallery" folder</li>
              <li>Your Cloudinary account is properly configured</li>
            </ul>
            <Button onClick={() => window.location.reload()}>
              Retry
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Show error message if no items
  if (galleryItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center py-16">
            <h2 className="text-3xl font-bold mb-4">No Gallery Items Found</h2>
            <p className="text-muted-foreground mb-2">
              There are currently no images, videos, or documents in your gallery.
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              Please make sure you have uploaded media to your Cloudinary "gallery" folder.
            </p>
            <Button onClick={() => window.location.reload()}>
              Retry
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Media Gallery
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore photos and videos from our ministry events, training sessions, and community outreach programs
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-12 flex justify-center">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid grid-cols-4 md:grid-cols-8 gap-2">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="px-3 py-2"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          <AnimatePresence>
            {itemsToDisplay.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={index}
                onOpenDialog={handleOpenDialog}
                onDownload={handleDownload}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {visibleItems < filteredItems.length && (
          <div className="text-center">
            <Button
              onClick={loadMore}
              className="px-8 py-3 rounded-xl font-semibold transition-all hover:translate-y-[-2px]"
            >
              Load More
            </Button>
          </div>
        )}
      </div>

      {/* Media Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>{selectedItem?.title}</DialogTitle>
          </DialogHeader>
          
          {selectedItem && (
            <div className="space-y-6">
              {/* Media Preview */}
              <div className="relative">
                {selectedItem.type === 'video' ? (
                  <div className="w-full max-h-[70vh] flex items-center justify-center bg-black">
                    <video
                      src={selectedItem.url}
                      controls
                      className="max-w-full max-h-[70vh]"
                    />
                  </div>
                ) : selectedItem.type === 'document' ? (
                  <div className="w-full max-h-[70vh] flex flex-col items-center justify-center bg-muted p-8">
                    <div className="mb-6 flex items-center justify-center w-24 h-24 rounded-full bg-primary/10">
                      {selectedItem.format?.toLowerCase() === 'pdf' ? (
                        <FileText className="w-12 h-12 text-primary" />
                      ) : (
                        <FileText className="w-12 h-12 text-primary" />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{selectedItem.title}</h3>
                    <p className="text-muted-foreground text-center mb-6">
                      {selectedItem.description || 'Document file'}
                    </p>
                    <Button onClick={() => handleDownload(selectedItem.url, selectedItem.title)}>
                      <Download className="w-4 h-4 mr-2" />
                      Download {selectedItem.format?.toUpperCase() || 'Document'}
                    </Button>
                  </div>
                ) : (
                  <div className="w-full max-h-[70vh] relative">
                    <img
                      src={selectedItem.url}
                      alt={selectedItem.title}
                      className="w-full max-h-[70vh] object-contain"
                    />
                  </div>
                )}
              </div>
              
              {/* Item Details */}
              <div className="space-y-4">
                <p className="text-muted-foreground">{selectedItem.description}</p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <Badge variant="default">{selectedItem.category}</Badge>
                  <div className="text-sm text-muted-foreground">
                    <p>{new Date(selectedItem.date).toLocaleDateString()}</p>
                    {selectedItem.type === 'video' && selectedItem.duration && (
                      <p>Duration: {Math.floor(selectedItem.duration / 60)}:{String(Math.floor(selectedItem.duration % 60)).padStart(2, '0')}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => selectedItem && handleDownload(selectedItem.downloadUrl, selectedItem.title)}>
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default GalleryPageShadcn;