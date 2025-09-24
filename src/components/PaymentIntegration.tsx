'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  Card,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  InputAdornment,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Payment as PaymentIcon,
  AccountBalance as BankIcon,
  PhoneAndroid as MobileIcon,
  LocationOn as LocationIcon,
  Check as CheckIcon,
  Launch as LaunchIcon,
  Info as InfoIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const africanCountries = [
  'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cabo Verde',
  'Cameroon', 'Central African Republic', 'Chad', 'Comoros', 'Congo', 'Democratic Republic of the Congo',
  'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon',
  'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Ivory Coast', 'Kenya', 'Lesotho',
  'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius',
  'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'Sao Tome and Principe',
  'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan',
  'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe'
];

const paymentMethods = [
  { id: 'bank', name: 'Bank Transfer', icon: <BankIcon />, description: 'Direct bank account transfer' },
  { id: 'mobile', name: 'Mobile Money', icon: <MobileIcon />, description: 'M-Pesa, MTN Mobile Money, etc.' },
  { id: 'cash', name: 'Cash Pickup', icon: <LocationIcon />, description: 'Pick up cash at designated locations' },
];

const transferSteps = [
  'Enter Transfer Details',
  'Choose Payment Method',
  'Complete Payment',
  'Track Transfer'
];

const PaymentIntegration: React.FC = () => {
  const theme = useTheme();
  const [activeStep] = useState(0);
  const [formData, setFormData] = useState({
    fromCountry: '',
    toCountry: '',
    amount: '',
    purpose: 'ministry-support',
    paymentMethod: '',
    recipientName: '',
    recipientPhone: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleProceedToPayment = () => {
    // Open IMF Africa Pay with pre-filled data if possible
    const paymentUrl = 'https://imf-africa-pay-1.onrender.com/';
    window.open(paymentUrl, '_blank');
  };

  const transferPurposes = [
    { value: 'ministry-support', label: 'Ministry Support' },
    { value: 'church-donation', label: 'Church Donation' },
    { value: 'pastor-support', label: 'Pastor Support' },
    { value: 'mission-work', label: 'Mission Work' },
    { value: 'education', label: 'Education Support' },
    { value: 'emergency-aid', label: 'Emergency Aid' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            IMF Africa Payment Portal
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Send money securely across Africa to support ministry work
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<LaunchIcon />}
            onClick={handleProceedToPayment}
            sx={{
              py: 2,
              px: 4,
              borderRadius: 3,
              fontSize: '1.1rem',
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              mb: 4,
            }}
          >
            Go to IMF Africa Pay Platform
          </Button>
        </Box>

        {/* Transfer Process Stepper */}
        <Paper sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
            How It Works
          </Typography>
          <Stepper activeStep={activeStep} alternativeLabel>
            {transferSteps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
          gap: 4,
        }}>
          {/* Transfer Form */}
          <Card sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Quick Transfer Setup
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Fill out the details below, then complete your transfer on the IMF Africa Pay platform
            </Typography>
            
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 3,
            }}>
              <FormControl fullWidth>
                <InputLabel>From Country</InputLabel>
                <Select
                  value={formData.fromCountry}
                  onChange={(e) => handleInputChange('fromCountry', e.target.value)}
                  label="From Country"
                >
                  {africanCountries.map((country) => (
                    <MenuItem key={country} value={country}>{country}</MenuItem>
                  ))}</Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>To Country</InputLabel>
                <Select
                  value={formData.toCountry}
                  onChange={(e) => handleInputChange('toCountry', e.target.value)}
                  label="To Country"
                >
                  {africanCountries.map((country) => (
                    <MenuItem key={country} value={country}>{country}</MenuItem>
                  ))}</Select>
              </FormControl>
              <TextField
                fullWidth
                label="Amount"
                type="number"
                value={formData.amount}
                onChange={(e) => handleInputChange('amount', e.target.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
              <FormControl fullWidth>
                <InputLabel>Purpose</InputLabel>
                <Select
                  value={formData.purpose}
                  onChange={(e) => handleInputChange('purpose', e.target.value)}
                  label="Purpose"
                >
                  {transferPurposes.map((purpose) => (
                    <MenuItem key={purpose.value} value={purpose.value}>
                      {purpose.label}
                    </MenuItem>
                  ))}</Select>
              </FormControl>
              <TextField
                fullWidth
                label="Recipient Name"
                value={formData.recipientName}
                onChange={(e) => handleInputChange('recipientName', e.target.value)}
              />
              <TextField
                fullWidth
                label="Recipient Phone"
                value={formData.recipientPhone}
                onChange={(e) => handleInputChange('recipientPhone', e.target.value)}
                placeholder="+234 XXX XXX XXXX"
              />
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" sx={{ mb: 2 }}>
              Payment Methods Available
            </Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: 2,
            }}>
              {paymentMethods.map((method) => (
                <Card
                  key={method.id}
                  sx={{
                    p: 2,
                    textAlign: 'center',
                    border: formData.paymentMethod === method.id ? 
                      `2px solid ${theme.palette.primary.main}` : 
                      `1px solid ${theme.palette.divider}`,
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}
                  onClick={() => handleInputChange('paymentMethod', method.id)}
                >
                  <Box sx={{ color: theme.palette.primary.main, mb: 1 }}>
                    {method.icon}
                  </Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    {method.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {method.description}
                  </Typography>
                </Card>
              ))}
            </Box>

            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<PaymentIcon />}
                onClick={handleProceedToPayment}
                sx={{
                  py: 2,
                  px: 6,
                  borderRadius: 3,
                }}
              >
                Proceed to Payment Platform
              </Button>
            </Box>
          </Card>

          {/* Info Panel */}
          <Box>
            <Card sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                <InfoIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Why Use IMF Africa Pay?
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Secure Transactions"
                    secondary="Bank-level security protocols"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Fast Processing"
                    secondary="Quick transfers across Africa"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Low Fees"
                    secondary="Competitive rates for ministry support"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="24/7 Support"
                    secondary="Round-the-clock customer service"
                  />
                </ListItem>
              </List>
            </Card>

            <Card sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Supported Countries
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Send money to any of the 54 African countries including:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {africanCountries.slice(0, 8).map((country) => (
                  <Typography
                    key={country}
                    variant="caption"
                    sx={{
                      backgroundColor: theme.palette.primary.main + '20',
                      color: theme.palette.primary.main,
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                    }}
                  >
                    {country}
                  </Typography>
                ))}
              </Box>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                ...and 46 more countries
              </Typography>
            </Card>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default PaymentIntegration;