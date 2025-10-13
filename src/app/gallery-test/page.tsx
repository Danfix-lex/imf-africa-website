'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, CircularProgress, Alert } from '@mui/material';

export default function GalleryTestPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [testData, setTestData] = useState<any>(null);

  useEffect(() => {
    const runTest = async () => {
      try {
        setStatus('loading');
        const response = await fetch('/api/gallery-test');
        const data = await response.json();
        setTestData(data);
        setStatus('success');
      } catch (error) {
        console.error('Test failed:', error);
        setTestData({ error: 'Failed to connect to test endpoint' });
        setStatus('error');
      }
    };

    runTest();
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Gallery Data Test
        </Typography>
        
        {status === 'loading' && (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <CircularProgress />
            <Typography>Fetching gallery data...</Typography>
          </Box>
        )}
        
        {status === 'success' && (
          <Box sx={{ textAlign: 'left', maxWidth: 800, mx: 'auto' }}>
            <Typography variant="h6" color="success.main" gutterBottom>
              ✅ Gallery Data Test Successful!
            </Typography>
            
            <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Test Results:</Typography>
            <pre style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '4px', overflowX: 'auto', fontSize: '0.8rem' }}>
              {JSON.stringify(testData, null, 2)}
            </pre>
            
            <Box sx={{ mt: 3 }}>
              <Button 
                variant="contained" 
                sx={{ mr: 2 }}
                href="/gallery"
              >
                Go to Gallery
              </Button>
              <Button 
                variant="outlined"
                onClick={() => window.location.reload()}
              >
                Retry Test
              </Button>
            </Box>
          </Box>
        )}
        
        {status === 'error' && (
          <Alert severity="error">
            <Typography variant="h6">❌ Gallery Data Test Failed</Typography>
            <pre style={{ backgroundColor: '#ffebee', padding: '16px', borderRadius: '4px', overflowX: 'auto' }}>
              {JSON.stringify(testData, null, 2)}
            </pre>
            <Button 
              variant="contained" 
              onClick={() => window.location.reload()}
              sx={{ mt: 2 }}
            >
              Retry
            </Button>
          </Alert>
        )}
      </Box>
    </Container>
  );
}