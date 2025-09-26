'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  useTheme,
  Chip,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const leadershipTeam = [
  {
    id: 1,
    name: 'Dr. Samuel Ojo',
    position: 'President & Chairman',
    department: 'Executive Leadership',
    bio: 'Dr. Samuel Ojo brings decades of ministry experience and leads IMF Africa\'s strategic initiatives across the continent with a focus on spiritual transformation and church development.',
    avatar: '/images/leadership/president.jpg',
    location: 'Lagos, Nigeria',
  },
  {
    id: 2,
    name: 'Pastor Grace Adewale',
    position: 'Vice President',
    department: 'Operations & Development',
    bio: 'Pastor Grace Adewale oversees operational excellence and ministry development programs, ensuring effective implementation of IMF Africa\'s vision across member nations.',
    avatar: '/images/leadership/vice-president.jpg',
    location: 'Accra, Ghana',
  },
  {
    id: 3,
    name: 'Bishop Michael Okonkwo',
    position: 'Africa/National President',
    department: 'Regional Coordination',
    bio: 'Bishop Michael Okonkwo coordinates regional activities and strengthens partnerships with local churches and ministries across African nations.',
    avatar: '/images/leadership/africa-president.jpg',
    location: 'Abuja, Nigeria',
  },
  {
    id: 4,
    name: 'Rev. Dr. Sarah Johnson',
    position: 'Secretary General',
    department: 'Administration & Finance',
    bio: 'Rev. Dr. Sarah Johnson manages the administrative and financial operations of IMF Africa, ensuring transparency and efficient resource allocation for ministry programs.',
    avatar: '/images/leadership/secretary-general.jpg',
    location: 'Nairobi, Kenya',
  },
];

const LeadershipSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 10,
        background: `linear-gradient(135deg, 
          ${theme.palette.background.default} 0%, 
          ${theme.palette.secondary.main}05 50%,
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
              Ministry Leadership Team
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Meet the experienced spiritual leaders driving ministry transformation across Africa
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, 
          gap: { xs: 3, md: 4 },
          maxWidth: { xs: '100%', md: 1400 },
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 0 }
}}>
          {leadershipTeam.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  },
                }}
                onClick={() => {/* Optional: Add click handler for more details */}}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Avatar
                      src={leader.avatar}
                      alt={leader.name}
                      sx={{
                        width: { xs: 100, md: 120 },
                        height: { xs: 100, md: 120 },
                        mx: 'auto',
                        mb: 3,
                        border: `4px solid ${theme.palette.primary.main}20`,
                        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                      }}
                    >
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </Avatar>
                  </motion.div>

                  <Typography variant="h5" sx={{ 
                    fontWeight: 600, 
                    mb: 1, 
                    color: 'text.primary',
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    lineHeight: 1.2
                  }}>
                    {leader.name}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      color: 'primary.main',
                      mb: 1,
                      fontWeight: 500,
                      fontSize: { xs: '0.85rem', md: '0.95rem' },
                      lineHeight: 1.3
                    }}
                  >
                    {leader.position}
                  </Typography>

                  <Chip
                    label={leader.department}
                    size="small"
                    sx={{
                      mb: 3,
                      bgcolor: 'secondary.main',
                      color: 'white',
                      fontWeight: 500,
                      fontSize: { xs: '0.65rem', sm: '0.7rem' }
                    }}
                  />

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      mb: 2,
                      fontSize: { xs: '0.8rem', md: '0.85rem' },
                    }}
                  >
                    {leader.bio}
                  </Typography>

                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: 1,
                    color: 'text.secondary',
                    fontSize: { xs: '0.75rem', md: '0.8rem' }
                  }}>
                    <LocationIcon sx={{ fontSize: 16 }} />
                    <Typography variant="caption">
                      {leader.location}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default LeadershipSection;