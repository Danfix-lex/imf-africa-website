'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Button, CircularProgress } from '@mui/material';

export default function CloudinaryTestSimplePage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [result, setResult] = useState<any>(null);

  const testSimpleEndpoint = async () => {
    try {
      setStatus('loading');
      const response = await fetch('/api/cloudinary-test-simple');
      const data = await response.json();
      setResult(data);
      setStatus('success');
    } catch (error) {
      console.error('Test failed:', error);
      setResult({ error: 'Failed to connect to test endpoint' });
      setStatus('error');
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Simple Cloudinary Test
        </Typography>
        
        {status === 'idle' && (
          <Button 
            variant="contained" 
            onClick={testSimpleEndpoint}
            size="large"
          >
            Test Cloudinary Imports
          </Button>
        )}
        
        {status === 'loading' && (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <CircularProgress />
            <Typography>Testing Cloudinary imports...</Typography>
          </Box>
        )}
        
        {status === 'success' && (
          <Box sx={{ textAlign: 'left', maxWidth: 600, mx: 'auto' }}>
            <Typography variant="h6" color="success.main" gutterBottom>
              ✅ Cloudinary Import Test Successful!
            </Typography>
            
            <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Test Results:</Typography>
            <pre style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '4px', overflowX: 'auto' }}>
              {JSON.stringify(result, null, 2)}
            </pre>
          </Box>
        )}
        
        {status === 'error' && (
          <Box sx={{ textAlign: 'left', maxWidth: 600, mx: 'auto' }}>
            <Typography variant="h6" color="error.main" gutterBottom>
              ❌ Cloudinary Import Test Failed
            </Typography>
            
            <pre style={{ backgroundColor: '#ffebee', padding: '16px', borderRadius: '4px', overflowX: 'auto' }}>
              {JSON.stringify(result, null, 2)}
            </pre>
            
            <Button 
              variant="outlined"
              onClick={testSimpleEndpoint}
              sx={{ mt: 2 }}
            >
              Retry Test
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
}