'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    cls: 0,
    fid: 0,
  });

  useEffect(() => {
    // Only run in browser
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Measure Core Web Vitals
      const measureVitals = () => {
        // First Contentful Paint
        const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }

        // Other metrics would typically be measured with web-vitals library
        // For simplicity, we'll just show what we can get from the performance API
      };

      // Measure after page load
      if (document.readyState === 'complete') {
        measureVitals();
      } else {
        window.addEventListener('load', measureVitals);
      }

      return () => {
        window.removeEventListener('load', measureVitals);
      };
    }
  }, []);

  // Don't render in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        p: 2,
        zIndex: 9999,
        maxWidth: 300,
        boxShadow: 3,
      }}
    >
      <Typography variant="h6" sx={{ mb: 1 }}>
        Performance Metrics
      </Typography>
      <Typography variant="body2">
        FCP: {metrics.fcp > 0 ? `${metrics.fcp.toFixed(0)}ms` : 'Measuring...'}
      </Typography>
      <Typography variant="body2" sx={{ mt: 0.5 }}>
        Page Load: {performance.timing.loadEventEnd - performance.timing.navigationStart}ms
      </Typography>
    </Box>
  );
};

export default PerformanceMonitor;