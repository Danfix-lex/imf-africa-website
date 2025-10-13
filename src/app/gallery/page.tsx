'use client';

import React, { useState, useEffect } from 'react';

export default function GalleryPage() {
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
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <div>Loading gallery...</div>
      </div>
    );
  }

  // Show error message if there's an error
  if (error) {
    return (
      <div style={{ padding: '20px' }}>
        <div style={{ color: 'red' }}>
          <h2>Gallery Error</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    );
  }

  // Success - show data
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>Media Gallery</h1>
        <p>Explore photos and videos from our ministry events</p>
      </div>
      
      <div>
        <p>Gallery items count: {galleryItems.length}</p>
        <div style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '4px', overflowX: 'auto' }}>
          <pre>{JSON.stringify(galleryItems.slice(0, 5), null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}