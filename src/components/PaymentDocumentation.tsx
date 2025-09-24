'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Alert,
  Button,
} from '@mui/material';
import {
  Security as SecurityIcon,
  Speed as SpeedIcon,
  AccountBalance as BankIcon,
  PhoneAndroid as MobileIcon,
  LocationOn as LocationIcon,
  Check as CheckIcon,
  Launch as LaunchIcon,
} from '@mui/icons-material';

const PaymentDocumentation: React.FC = () => {
  const features = [
    {
      icon: <SecurityIcon color="primary" />,
      title: 'Bank-Level Security',
      description: 'End-to-end encryption and secure payment processing for all transactions'
    },
    {
      icon: <SpeedIcon color="primary" />,
      title: 'Fast Processing',
      description: 'Most transfers complete within 1-3 business days across African countries'
    },
    {
      icon: <BankIcon color="primary" />,
      title: 'Multiple Payment Methods',
      description: 'Bank transfers, mobile money, and cash pickup options available'
    }
  ];

  const paymentMethods = [
    {
      icon: <BankIcon />,
      title: 'Bank Transfer',
      description: 'Direct transfer to recipient bank account',
      countries: 'Available in all 54 African countries'
    },
    {
      icon: <MobileIcon />,
      title: 'Mobile Money',
      description: 'M-Pesa, MTN Mobile Money, Orange Money, etc.',
      countries: 'Kenya, Tanzania, Uganda, Ghana, and more'
    },
    {
      icon: <LocationIcon />,
      title: 'Cash Pickup',
      description: 'Recipient collects cash at designated locations',
      countries: 'Available in major cities across Africa'
    }
  ];

  const supportedCountries = [
    'Nigeria', 'South Africa', 'Kenya', 'Ghana', 'Ethiopia', 'Tanzania',
    'Uganda', 'Cameroon', 'Angola', 'Morocco', 'Mozambique', 'Madagascar'
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          IMF Africa Pay Integration
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Comprehensive money transfer solution for supporting ministry work across Africa
        </Typography>
        <Alert severity="info" sx={{ mb: 4 }}>
          <strong>Platform Integration:</strong> This system integrates with IMF Africa Pay platform 
          at <strong>https://imf-africa-pay-1.onrender.com/</strong> for secure payment processing.
        </Alert>
      </Box>

      {/* Key Features */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
          Key Features
        </Typography>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 4,
        }}>
          {features.map((feature, index) => (
            <Card key={index} sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Payment Methods */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
          Payment Methods
        </Typography>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 3,
        }}>
          {paymentMethods.map((method, index) => (
            <Card key={index} sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {method.icon}
                  <Typography variant="h6" sx={{ ml: 1, fontWeight: 600 }}>
                    {method.title}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {method.description}
                </Typography>
                <Chip label={method.countries} size="small" color="primary" />
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* How It Works */}
      <Card sx={{ p: 4, mb: 6 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
          How It Works
        </Typography>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4,
        }}>
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              For Senders:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Register or sign in to your IMF Africa account" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Enter transfer details and recipient information" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Choose payment method and complete transaction" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Receive confirmation and tracking information" />
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              For Recipients:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Receive SMS/email notification of incoming transfer" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Choose collection method (bank, mobile money, or cash)" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Provide required identification for pickup" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Receive funds within 1-3 business days" />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Card>

      {/* Supported Countries */}
      <Card sx={{ p: 4, mb: 6 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
          Supported Countries
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 3 }}>
          Send money to all 54 African countries. Here are some of our most popular destinations:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mb: 3 }}>
          {supportedCountries.map((country) => (
            <Chip
              key={country}
              label={country}
              color="primary"
              variant="outlined"
            />
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
          ...and 42 more African countries
        </Typography>
      </Card>

      {/* Get Started */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Ready to Send Money?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Start sending money across Africa today with our secure and reliable platform
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<LaunchIcon />}
          onClick={() => window.open('https://imf-africa-pay-1.onrender.com/', '_blank')}
          sx={{
            py: 2,
            px: 4,
            borderRadius: 3,
            fontSize: '1.1rem',
          }}
        >
          Open IMF Africa Pay Platform
        </Button>
      </Box>
    </Container>
  );
};

export default PaymentDocumentation;