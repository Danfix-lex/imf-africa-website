'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, CircularProgress, Alert } from '@mui/material';

export default function TestCloudinaryPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [testData, setTestData] = useState<any>(null);
  const [apiTestData, setApiTestData] = useState<any>(null);

  useEffect(() => {
    const runTests = async () => {
      try {
        // Test 1: Check environment variables directly
        const envTest = {
          NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? 'SET' : 'NOT SET',
          CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY ? 'SET' : 'NOT SET',
          CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET ? 'SET' : 'NOT SET',
        };
        
        setTestData({
          envTest,
          isBrowser: typeof window !== 'undefined',
        });
        
        // Test 2: Check API route
        const response = await fetch('/api/test-cloudinary');
        const apiData = await response.json();
        setApiTestData(apiData);
        
        setStatus('success');
      } catch (error) {
        console.error('Test failed:', error);
        setStatus('error');
      }
    };

    runTests();
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Cloudinary Configuration Test
        </Typography>
        
        {status === 'loading' && (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <CircularProgress />
            <Typography>Running tests...</Typography>
          </Box>
        )}
        
        {status === 'success' && (
          <Box sx={{ textAlign: 'left', maxWidth: 600, mx: 'auto' }}>
            <Typography variant="h6" color="success.main" gutterBottom>
              ✅ Tests completed successfully!
            </Typography>
            
            <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Browser Environment Variables:</Typography>
            <pre style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '4px', overflowX: 'auto' }}>
              {JSON.stringify(testData?.envTest, null, 2)}
            </pre>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Running in browser: {testData?.isBrowser ? 'Yes' : 'No'}
            </Typography>
            
            <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>API Route Test:</Typography>
            <pre style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '4px', overflowX: 'auto' }}>
              {JSON.stringify(apiTestData, null, 2)}
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
            <Typography variant="h6">❌ Tests failed</Typography>
            <Typography>There was an error running the tests. Please check the console for more details.</Typography>
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