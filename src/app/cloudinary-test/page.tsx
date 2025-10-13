'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, CircularProgress, Alert } from '@mui/material';

export default function CloudinaryTestPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [testData, setTestData] = useState<any>(null);

  const runTest = async () => {
    try {
      setStatus('loading');
      const response = await fetch('/api/cloudinary-test');
      const data = await response.json();
      setTestData(data);
      setStatus(data.success ? 'success' : 'error');
    } catch (error) {
      console.error('Test failed:', error);
      setTestData({ error: 'Failed to connect to test endpoint' });
      setStatus('error');
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Cloudinary Connection Test
        </Typography>
        
        {status === 'idle' && (
          <Button 
            variant="contained" 
            onClick={runTest}
            size="large"
          >
            Run Cloudinary Test
          </Button>
        )}
        
        {status === 'loading' && (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <CircularProgress />
            <Typography>Testing Cloudinary connection...</Typography>
          </Box>
        )}
        
        {status === 'success' && (
          <Box sx={{ textAlign: 'left', maxWidth: 600, mx: 'auto' }}>
            <Typography variant="h6" color="success.main" gutterBottom>
              ✅ Cloudinary Connection Successful!
            </Typography>
            
            <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Test Results:</Typography>
            <pre style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '4px', overflowX: 'auto' }}>
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
                onClick={runTest}
              >
                Run Test Again
              </Button>
            </Box>
          </Box>
        )}
        
        {status === 'error' && (
          <Alert severity="error">
            <Typography variant="h6">❌ Cloudinary Test Failed</Typography>
            <pre style={{ backgroundColor: '#ffebee', padding: '16px', borderRadius: '4px', overflowX: 'auto', marginTop: '16px' }}>
              {JSON.stringify(testData, null, 2)}
            </pre>
            <Button 
              variant="contained" 
              onClick={runTest}
              sx={{ mt: 2 }}
            >
              Retry Test
            </Button>
          </Alert>
        )}
      </Box>
    </Container>
  );
}