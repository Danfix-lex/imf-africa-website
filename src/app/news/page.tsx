'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Avatar,
  TextField,
  InputAdornment,
  useTheme,
} from '@mui/material';
import {
  CalendarToday as CalendarIcon,
  School as SchoolIcon,
  Public as PublicIcon,
  Group as GroupIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NewsPage: React.FC = () => {
  const theme = useTheme();

  const newsArticles = [
    {
      id: 1,
      title: 'International Ministers Forum Launches Major Training Initiative in West Africa',
      excerpt: 'New comprehensive ministry training program targets ministry leaders, theological education, and spiritual development across 15 West African countries.',
      author: 'Rev. Dr. Sarah Johnson',
      authorRole: 'Director of Training Programs',
      publishDate: '2024-01-15',
      category: 'Ministry Training',
      tags: ['Ministry Training', 'West Africa', 'Church Leadership', 'Theological Education'],
      featured: true,
      imageUrl: '/api/placeholder/600/300',
      readTime: '5 min read',
      views: '12.5K',
    },
    {
      id: 2,
      title: 'IMF Africa Partners with Local Churches to Address Community Development Needs',
      excerpt: 'New partnership initiative focuses on clean water projects, education support, and healthcare outreach in rural communities.',
      author: 'Pastor Michael Adewumi',
      authorRole: 'Community Outreach Director',
      publishDate: '2024-01-10',
      category: 'Community Outreach',
      tags: ['Community Development', 'Partnership', 'Healthcare', 'Education'],
      featured: false,
      imageUrl: '/api/placeholder/600/300',
      readTime: '4 min read',
      views: '8.7K',
    },
    {
      id: 3,
      title: 'Record Number of Ministers Graduate from IMF Africa Leadership Program',
      excerpt: 'Over 2,000 ministry leaders complete advanced theological and pastoral training across East and Southern Africa.',
      author: 'Dr. Elizabeth Okafor',
      authorRole: 'Academic Dean',
      publishDate: '2024-01-05',
      category: 'Education',
      tags: ['Graduation', 'Leadership', 'Theological Education', 'Africa'],
      featured: false,
      imageUrl: '/api/placeholder/600/300',
      readTime: '6 min read',
      views: '15.2K',
    },
  ];

  const categories = [
    { name: 'All News', icon: <GroupIcon />, count: 24 },
    { name: 'Ministry Training', icon: <SchoolIcon />, count: 8 },
    { name: 'Community Outreach', icon: <PublicIcon />, count: 6 },
    { name: 'Church Development', icon: <PublicIcon />, count: 5 },
    { name: 'Policy & Research', icon: <PublicIcon />, count: 3 },
    { name: 'Events', icon: <CalendarIcon />, count: 2 },
  ];

  return (
    <>
      <Header />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pt: 15 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                News & Events
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 400,
                  color: 'text.secondary',
                  maxWidth: 800,
                  mx: 'auto',
                  mb: 4,
                }}
              >
                Stay updated with the latest developments, success stories, and events from IMF Africa initiatives across the continent.
              </Typography>

              <TextField
                placeholder="Search news..."
                variant="outlined"
                size="small"
                sx={{ width: '100%', maxWidth: 500, mx: 'auto' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </motion.div>

          <Box sx={{ mb: 6, display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Chip
                  icon={category.icon}
                  label={`${category.name} (${category.count})`}
                  clickable
                  sx={{
                    px: 2,
                    py: 3,
                    borderRadius: 3,
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                />
              </motion.div>
            ))}
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            {newsArticles.map((article, index) => (
              <Box component="div" key={article.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: { xs: 'column', md: article.featured ? 'row' : 'column' },
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={article.imageUrl}
                      alt={article.title}
                      sx={{
                        width: { xs: '100%', md: article.featured ? '50%' : '100%' },
                        height: { xs: 200, md: article.featured ? 'auto' : 200 },
                      }}
                    />
                    <CardContent sx={{ p: 4, flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                        <Chip
                          label={article.category}
                          size="small"
                          sx={{ bgcolor: 'primary.main', color: 'white', fontWeight: 600 }}
                        />
                        {article.featured && (
                          <Chip
                            label="Featured"
                            size="small"
                            color="secondary"
                            sx={{ fontWeight: 600 }}
                          />
                        )}
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                        {article.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', mb: 3 }}
                      >
                        {article.excerpt}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 3,
                          mb: 3,
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Avatar sx={{ width: 32, height: 32, fontSize: '0.8rem' }}>
                            {article.author
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </Avatar>
                          <Box>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              {article.author}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {article.authorRole}
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <CalendarIcon sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                          <Typography variant="caption" color="text.secondary">
                            {article.publishDate}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          {article.tags.slice(0, 2).map((tag, tagIndex) => (
                            <Chip
                              key={tagIndex}
                              label={tag}
                              size="small"
                              variant="outlined"
                              sx={{ mr: 1, fontSize: '0.7rem' }}
                            />
                          ))}
                        </Box>
                        <Button variant="outlined" size="small">
                          Read More
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default NewsPage;