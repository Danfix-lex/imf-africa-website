import PaymentIntegration from '@/components/PaymentIntegration';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { Box } from '@mui/material';

export default function PaymentPage() {
  return (
    <ProtectedRoute>
      <Header />
      <Box sx={{ minHeight: '80vh', py: 4 }}>
        <PaymentIntegration />
      </Box>
      <Footer />
    </ProtectedRoute>
  );
}