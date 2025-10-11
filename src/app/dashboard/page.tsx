'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
  Chip,
  Divider,
  useTheme,
} from '@mui/material';
import {
  Church as ChurchIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  School as SchoolIcon,
  Favorite as FavoriteIcon,
  Groups as GroupsIcon,
  AutoStories as BibleIcon,
  Payment as PaymentIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

const quickActions = [
  { icon: <PaymentIcon />, title: 'Send Donation', description: 'Support our ministry', href: '/payment', color: '#1565C0' },
  { icon: <BibleIcon />, title: 'Resources', description: 'Ministry materials', href: '/resources', color: '#2E7D32' },
  { icon: <GroupsIcon />, title: 'Fellowship', description: 'Connect with ministers', href: '/fellowship', color: '#7B1FA2' },
  { icon: <SchoolIcon />, title: 'Training', description: 'Educational programs', href: '/training', color: '#E65100' },
];

const DashboardPage: React.FC = () => {
  const theme = useTheme();
  const { user } = useAuth();
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <ProtectedRoute>
      <Header />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          pt: 10,
          pb: 4,
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Welcome Header */}
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 6 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Welcome, {user?.firstName}!
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                  Your IMF Africa Ministry Dashboard
                </Typography>
              </Box>
            </motion.div>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 2fr' }, gap: 4 }}>
              {/* User Profile Card */}
              <Box>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                      color: 'white',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Avatar
                          sx={{
                            width: 120,
                            height: 120,
                            bgcolor: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            fontSize: '3rem',
                            mx: 'auto',
                            mb: 3,
                            border: '4px solid rgba(255,255,255,0.3)',
                          }}
                        >
                          {user?.firstName[0]}{user?.lastName[0]}
                        </Avatar>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                          {user?.firstName} {user?.lastName}
                        </Typography>
                        {user?.position && (
                          <Chip
                            label={user.position}
                            sx={{
                              bgcolor: 'rgba(255,255,255,0.2)',
                              color: 'white',
                              fontWeight: 600,
                              mb: 2,
                            }}
                          />
                        )}
                      </Box>

                      <Divider sx={{ borderColor: 'rgba(255,255,255,0.3)', mb: 3 }} />

                      <Box sx={{ space: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <EmailIcon sx={{ opacity: 0.8 }} />
                          <Typography variant="body1">{user?.email}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <LocationIcon sx={{ opacity: 0.8 }} />
                          <Typography variant="body1">{user?.country}</Typography>
                        </Box>
                        {/* Removed ministry name display to align with organizational focus */}
                      </Box>

                      <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                          mt: 3,
                          color: 'white',
                          borderColor: 'rgba(255,255,255,0.5)',
                          '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.1)',
                            borderColor: 'white',
                          },
                        }}
                      >
                        Edit Profile
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>

              {/* Quick Actions */}
              <Box>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      color: 'text.primary',
                    }}
                  >
                    Quick Actions
                  </Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                    {quickActions.map((action, index) => (
                      <Box key={index}>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Card
                            sx={{
                              height: '100%',
                              borderRadius: 3,
                              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                              },
                            }}
                            onClick={() => router.push(action.href)}
                          >
                            <CardContent sx={{ p: 3 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar
                                  sx={{
                                    bgcolor: action.color,
                                    color: 'white',
                                    width: 60,
                                    height: 60,
                                  }}
                                >
                                  {action.icon}
                                </Avatar>
                                <Box>
                                  <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 600, mb: 0.5 }}
                                  >
                                    {action.title}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    sx={{ color: 'text.secondary' }}
                                  >
                                    {action.description}
                                  </Typography>
                                </Box>
                              </Box>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </Box>
                    ))}
                  </Box>
                </motion.div>
              </Box>
            </Box>

            {/* Recent Activity */}
            <Box sx={{ mt: 4 }}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 3,
                        color: 'text.primary',
                      }}
                    >
                      Welcome to IMF Africa
                    </Typography>
                    <Box
                      sx={{
                        p: 4,
                        bgcolor: 'primary.main',
                        color: 'white',
                        borderRadius: 3,
                        textAlign: 'center',
                      }}
                    >
                      <FavoriteIcon sx={{ fontSize: '3rem', mb: 2, opacity: 0.9 }} />
                      <Typography variant="h6" sx={{ mb: 2 }}>
                        Thank you for joining the International Ministers Forum Africa!
                      </Typography>
                      <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                        You are now part of a growing fellowship of ministers and ministry leaders 
                        across Africa. Explore our resources, connect with fellow ministers, 
                        and participate in our mission to transform the continent through the Gospel.
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>
      <Footer />
    </ProtectedRoute>
  );
};

export default DashboardPage;