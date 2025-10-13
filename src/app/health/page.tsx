'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, CircularProgress } from '@mui/material';

export default function HealthCheckPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [healthData, setHealthData] = useState<any>(null);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch('/api/health');
        const data = await response.json();
        setHealthData(data);
        setStatus('success');
      } catch (error) {
        console.error('Health check failed:', error);
        setStatus('error');
      }
    };

    checkHealth();
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Application Health Check
        </Typography>
        
        {status === 'loading' && (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <CircularProgress />
            <Typography>Checking application health...</Typography>
          </Box>
        )}
        
        {status === 'success' && (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Typography variant="h6" color="success.main">
              ✅ Application is running successfully!
            </Typography>
            <Typography>Service: {healthData?.service}</Typography>
            <Typography>Timestamp: {healthData?.timestamp}</Typography>
            <Button 
              variant="contained" 
              sx={{ mt: 2 }}
              href="/gallery"
            >
              Go to Gallery
            </Button>
          </Box>
        )}
        
        {status === 'error' && (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Typography variant="h6" color="error.main">
              ❌ Health check failed
            </Typography>
            <Button 
              variant="contained" 
              onClick={() => window.location.reload()}
            >
              Retry
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
}