'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  Card,
  CardContent,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  InputAdornment,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  Send as SendIcon,
  AccountBalance as BankIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Payment as PaymentIcon,
  Launch as LaunchIcon,
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

const RemittalsSection: React.FC = () => {
  const theme = useTheme();
  const [senderCountry, setSenderCountry] = useState('');
  const [recipientCountry, setRecipientCountry] = useState('');
  const [amount, setAmount] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSendMoney = () => {
    // Open the IMF Africa Pay website in a new tab
    window.open('https://imf-africa-pay-1.onrender.com/', '_blank');
  };

  const handleQuickTransfer = () => {
    setDialogOpen(true);
  };

  const features = [
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Secure Transfers',
      description: 'Bank-level security with end-to-end encryption for all transactions'
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Fast Processing',
      description: 'Quick transfers across African countries with real-time tracking'
    },
    {
      icon: <BankIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Multiple Options',
      description: 'Bank transfers, mobile money, and cash pickup options available'
    }
  ];

  return (
    <Box
      sx={{
        py: 10,
        background: `linear-gradient(135deg, 
          ${theme.palette.background.default} 0%, 
          ${theme.palette.primary.main}05 50%,
          ${theme.palette.background.default} 100%)`,
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              IMF Africa Pay - Send Money Across Africa
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              Support ministry work and send financial assistance to ministers across the African continent with our secure payment platform
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
              <Chip label="Powered by IMF Africa Pay" color="primary" />
              <Chip label="54 African Countries" color="secondary" />
              <Chip label="Secure & Fast" color="success" />
            </Box>
          </Box>
        </motion.div>

        {/* Features Section */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 4,
          mb: 8,
        }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  border: `1px solid ${theme.palette.divider}`,
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.shadows[8],
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
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
            </motion.div>
          ))}
        </Box>

        {/* Quick Transfer Calculator */}
        <Card sx={{ mb: 6, p: 4, background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)` }}>
          <Typography variant="h5" sx={{ textAlign: 'center', mb: 4, fontWeight: 600 }}>
            Quick Transfer Calculator
          </Typography>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
            gap: 3,
            alignItems: 'center',
          }}>
            <FormControl fullWidth>
              <InputLabel>From Country</InputLabel>
              <Select
                value={senderCountry}
                onChange={(e) => setSenderCountry(e.target.value)}
                label="From Country"
              >
                {africanCountries.map((country) => (
                  <MenuItem key={country} value={country}>{country}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>To Country</InputLabel>
              <Select
                value={recipientCountry}
                onChange={(e) => setRecipientCountry(e.target.value)}
                label="To Country"
              >
                {africanCountries.map((country) => (
                  <MenuItem key={country} value={country}>{country}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
            <Button
              fullWidth
              variant="outlined"
              size="large"
              onClick={handleQuickTransfer}
              disabled={!senderCountry || !recipientCountry || !amount}
              sx={{ py: 2 }}
            >
              Calculate Fees
            </Button>
          </Box>
        </Card>

        {/* Main CTA */}
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
            Ready to Send Money?
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, maxWidth: 600, mx: 'auto' }}>
            Access our full-featured payment platform to send money securely across Africa. 
            Support ministry work and help your fellow believers with ease.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<PaymentIcon />}
              endIcon={<LaunchIcon />}
              onClick={handleSendMoney}
              sx={{
                py: 2,
                px: 4,
                borderRadius: 3,
                fontSize: '1.1rem',
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                '&:hover': {
                  background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                  transform: 'translateY(-2px)',
                  boxShadow: theme.shadows[8],
                },
              }}
            >
              Open IMF Africa Pay
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<SendIcon />}
              onClick={handleQuickTransfer}
              sx={{
                py: 2,
                px: 4,
                borderRadius: 3,
                fontSize: '1.1rem',
              }}
            >
              Quick Transfer Info
            </Button>
          </Box>
        </Box>

        {/* Transfer Info Dialog */}
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="md" fullWidth>
          <DialogTitle sx={{ textAlign: 'center', pb: 1 }}>
            Transfer Information
          </DialogTitle>
          <DialogContent>
            <Box sx={{ textAlign: 'center', py: 2 }}>
              {senderCountry && recipientCountry && amount ? (
                <Box>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Transfer Details
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography>From:</Typography>
                    <Typography fontWeight={600}>{senderCountry}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography>To:</Typography>
                    <Typography fontWeight={600}>{recipientCountry}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography>Amount:</Typography>
                    <Typography fontWeight={600}>${amount}</Typography>
                  </Box>
                  <Typography color="text.secondary" sx={{ mb: 3 }}>
                    For exact fees and exchange rates, please visit our payment platform.
                  </Typography>
                </Box>
              ) : (
                <Typography color="text.secondary">
                  Please fill in all transfer details to see the information.
                </Typography>
              )}
            </Box>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
            <Button onClick={() => setDialogOpen(false)}>Close</Button>
            <Button variant="contained" onClick={handleSendMoney} startIcon={<LaunchIcon />}>
              Go to IMF Africa Pay
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default RemittalsSection;