'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  useTheme,
  Grid,
} from '@mui/material';
import {
  School as SchoolIcon,
  Groups as GroupsIcon,
  EmojiPeople as EmojiPeopleIcon,
  TrendingUp as TrendingUpIcon,
  Public as PublicIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const initiatives = [
  {
    icon: <SchoolIcon />,
    title: 'IMF Africa Champlain',
    description: 'A specialized initiative focused on equipping and empowering local ministry leaders through advanced theological education and practical ministry training programs across Africa.',
    category: 'Leadership Development',
    color: '#1976d2',
    features: [
      'Advanced theological education programs',
      'Practical ministry training workshops',
      'Leadership development seminars',
      'Mentorship and coaching programs',
      'Resource centers for local ministries'
    ],
    target: 'Church leaders, pastors, and ministry coordinators',
    link: '/champlain'
  },
  {
    icon: <EmojiPeopleIcon />,
    title: 'IMF Africa Generation Next',
    description: 'A dynamic platform exclusively designed for youths and teens, providing engaging programs, leadership opportunities, and spiritual growth experiences within the IMF Africa community.',
    category: 'Youth & Teen Ministry',
    color: '#7b1fa2',
    features: [
      'Youth leadership development programs',
      'Teen discipleship initiatives',
      'Creative arts and talents ministry',
      'Sports and recreation activities',
      'Technology and innovation workshops',
      'Global missions exposure programs'
    ],
    target: 'Youths and teens aged 13-35',
    link: '/generation'
  }
];

const InitiativesSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 10, bgcolor: 'background.default' }}>
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
              Our Specialized Initiatives
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
              Dedicated programs designed to reach and empower specific groups within our ministry community
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {initiatives.map((initiative, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      boxShadow: `0 20px 60px ${initiative.color}20`,
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: initiative.color,
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 70,
                          height: 70,
                          borderRadius: '50%',

                          background: `linear-gradient(135deg, ${initiative.color}, ${initiative.color}dd)`,
                          color: 'white',
                          boxShadow: `0 8px 32px ${initiative.color}30`,
                        }}
                      >
                        {initiative.icon}
                      </Box>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                          {initiative.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: initiative.color,
                            fontWeight: 600,
                            bgcolor: `${initiative.color}10`,
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1,
                            display: 'inline-block',
                          }}
                        >
                          {initiative.category}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 3 }}
                    >
                      {initiative.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5, color: 'text.primary' }}>
                        Key Features:
                      </Typography>
                      <Box sx={{ display: 'grid', gap: 1 }}>
                        {initiative.features.map((feature, featureIndex) => (
                          <Box key={featureIndex} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                            <StarIcon sx={{ fontSize: 16, color: initiative.color, mt: 0.5 }} />
                            <Typography variant="body2">{feature}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <GroupsIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <strong>Target Audience:</strong> {initiative.target}
                      </Typography>
                    </Box>
                  </CardContent>

                  <CardActions sx={{ p: 4, pt: 0 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      href={initiative.link}
                      sx={{
                        borderRadius: 3,
                        py: 1.5,
                        fontWeight: 600,
                        background: `linear-gradient(135deg, ${initiative.color}, ${initiative.color}dd)`,
                        '&:hover': {
                          background: `linear-gradient(135deg, ${initiative.color}dd, ${initiative.color})`,
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default InitiativesSection;