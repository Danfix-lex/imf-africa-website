import RemittalsSection from '@/components/RemittalsSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { Box, Container, Typography, Button } from '@mui/material';
import { Payment as PaymentIcon } from '@mui/icons-material';
import Link from 'next/link';

export default function RemittalsPage() {
  return (
    <ProtectedRoute>
      <Header />
      <Box sx={{ pt: 2, pb: 4 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
              Money Transfer Services
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Choose the service that best fits your needs
            </Typography>
            <Button
              component={Link}
              href="/payment"
              variant="contained"
              size="large"
              startIcon={<PaymentIcon />}
              sx={{ mb: 4 }}
            >
              Go to Full Payment Platform
            </Button>
          </Box>
        </Container>
      </Box>
      <RemittalsSection />
      <Footer />
    </ProtectedRoute>
  );
}