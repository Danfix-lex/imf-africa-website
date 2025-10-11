'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
  Chip,
  TextField,
  InputAdornment,
  Avatar,
} from '@mui/material';
import {
  Search as SearchIcon,
  CalendarToday as CalendarIcon,
  Person as PersonIcon,
  TrendingUp as TrendingIcon,
  Business as BusinessIcon,
  Public as GlobalIcon,
  Assessment as PolicyIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { CldImage } from 'next-cloudinary';

const newsArticles = [
  {
    id: 1,
    title: 'International Ministers Forum Launches Major Training Initiative in West Africa',
    excerpt: 'New comprehensive ministry training program targets church leaders, theological education, and spiritual development across 15 West African countries.',
    content: 'The International Ministers Forum Africa has launched a landmark ministry training initiative for West African nations, marking the largest single commitment to pastoral education in the region\'s history...',
    author: 'Rev. Dr. Sarah Johnson',
    authorRole: 'Director of Training Programs',
    publishDate: '2024-01-15',
    category: 'Ministry Training',
    tags: ['Ministry Training', 'West Africa', 'Church Leadership', 'Theological Education'],
    featured: true,
    imageUrl: 'news/ministry-training-west-africa.jpg', // Cloudinary image path
    readTime: '5 min read',
    views: '12.5K',
  },
  {
    id: 2,
    title: 'Digital Ministry Platform Expands to 25 African Countries',
    excerpt: 'Revolutionary digital discipleship and online ministry solutions are transforming church engagement across the continent.',
    content: 'A groundbreaking digital ministry platform has expanded to 25 African countries, bringing modern ministry tools to thousands of churches and millions of believers...',
    author: 'Pastor Michael Chen',
    authorRole: 'Digital Ministry Lead',
    publishDate: '2024-01-12',
    category: 'Digital Ministry',
    tags: ['Digital Ministry', 'Church Technology', 'Online Discipleship', 'Innovation'],
    featured: false,
    imageUrl: 'news/digital-ministry-platform.jpg', // Cloudinary image path
    readTime: '7 min read',
    views: '8.7K',
  },
  {
    id: 3,
    title: 'African Church Unity Reaches Historic Milestone',
    excerpt: 'Cross-denominational fellowship among African churches increases by 45% following successful implementation of unity programs.',
    content: 'African church unity has reached unprecedented levels with a 45% increase in cross-denominational partnerships, driven by successful fellowship initiatives...',
    author: 'Dr. Amara Okafor',
    authorRole: 'Church Relations Specialist',
    publishDate: '2024-01-10',
    category: 'Church Unity',
    tags: ['Church Unity', 'Fellowship', 'Denominational Cooperation', 'Africa'],
    featured: true,
    imageUrl: 'news/church-unity-africa.jpg', // Cloudinary image path
    readTime: '6 min read',
    views: '15.2K',
  },
  {
    id: 4,
    title: 'Youth Ministry Program Launches in East Africa',
    excerpt: 'New ministry initiative targets young people with discipleship, leadership training, and spiritual development across 8 East African countries.',
    content: 'The IMF Africa\'s Youth Ministry Program has officially launched in East Africa, providing comprehensive spiritual support to young people...',
    author: 'Pastor James Kimani',
    authorRole: 'Youth Ministry Director',
    publishDate: '2024-01-08',
    category: 'Youth Ministry',
    tags: ['Youth Ministry', 'Discipleship', 'East Africa', 'Leadership'],
    featured: false,
    imageUrl: 'news/youth-ministry-east-africa.jpg', // Cloudinary image path
    readTime: '4 min read',
    views: '6.3K',
  },
  {
    id: 6,
    title: 'African Women Ministers Network Strengthens Leadership Development',
    excerpt: 'Historic agreement among women ministers across 20 African countries enhances leadership development and mentorship programs.',
    content: 'Twenty African women ministers have signed a landmark cooperation agreement aimed at strengthening women\'s leadership in ministry...',
    author: 'Dr. Grace Nkomo',
    authorRole: 'Women\'s Ministry Coordinator',
    publishDate: '2024-01-03',
    category: 'Women Ministry',
    tags: ['Women Leadership', 'Ministry Development', 'Mentorship', 'Cooperation'],
    featured: false,
    imageUrl: 'news/women-ministers-network.jpg', // Cloudinary image path
    readTime: '6 min read',
    views: '9.4K',
  },
];

const categoryIcons: { [key: string]: React.ReactElement } = {
  'Ministry Training': <PolicyIcon />,
  'Digital Ministry': <BusinessIcon />,
  'Church Unity': <GlobalIcon />,
  'Youth Ministry': <PersonIcon />,
  'Women Ministry': <PolicyIcon />,
};

const NewsSection: React.FC = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(newsArticles.map(article => article.category)))];
  
  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

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
              Ministry News & Updates
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
              Stay informed about our latest ministry initiatives, church developments, and spiritual growth across Africa
            </Typography>

            {/* Search and Filter */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, justifyContent: 'center', alignItems: 'center', mb: 6 }}>
              <TextField
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  minWidth: 300,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3,
                  },
                }}
              />
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {categories.map((category) => (
                  <Chip
                    key={category}
                    label={category}
                    onClick={() => setSelectedCategory(category)}
                    variant={selectedCategory === category ? 'filled' : 'outlined'}
                    sx={{
                      borderRadius: 3,
                      fontWeight: 500,
                      ...(selectedCategory === category && {
                        bgcolor: 'primary.main',
                        color: 'white',
                      }),
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: 'text.primary' }}>
              Featured Stories
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
              {featuredArticles.map((article, index) => (
                <Box key={article.id}>
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
                        borderRadius: 4,
                        overflow: 'hidden',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                        },
                      }}
                    >
                      <CldImage
                        src={article.imageUrl}
                        alt={article.title}
                        width={600}
                        height={250}
                        crop="fill"
                        style={{ width: '100%', height: 250, objectFit: 'cover' }}
                      />
                      <CardContent sx={{ p: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 40,
                              height: 40,
                              borderRadius: '50%',
                              bgcolor: 'primary.main',
                              color: 'white',
                            }}
                          >
                            {categoryIcons[article.category] || <PolicyIcon />}
                          </Box>
                          <Chip
                            label="Featured"
                            size="small"
                            sx={{ bgcolor: 'warning.main', color: 'white', fontWeight: 600 }}
                          />
                        </Box>

                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, lineHeight: 1.3 }}>
                          {article.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 3 }}
                        >
                          {article.excerpt}
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                          <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                            {article.author.split(' ').map(n => n[0]).join('')}
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

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <CalendarIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                              <Typography variant="caption" color="text.secondary">
                                {new Date(article.publishDate).toLocaleDateString()}
                              </Typography>
                            </Box>
                            <Typography variant="caption" color="text.secondary">
                              {article.readTime} • {article.views} views
                            </Typography>
                          </Box>
                          <Button
                            variant="outlined"
                            size="small"
                            sx={{
                              borderRadius: 3,
                              fontWeight: 600,
                              '&:hover': {
                                bgcolor: 'primary.main',
                                color: 'white',
                              },
                            }}
                          >
                            Read More
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* Regular Articles */}
        {regularArticles.length > 0 && (
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: 'text.primary' }}>
              Latest Updates
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
              {regularArticles.map((article, index) => (
                <Box key={article.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        borderRadius: 3,
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        },
                      }}
                    >
                      <CldImage
                        src={article.imageUrl}
                        alt={article.title}
                        width={600}
                        height={180}
                        crop="fill"
                        style={{ width: '100%', height: 180, objectFit: 'cover' }}
                      />

                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 30,
                              height: 30,
                              borderRadius: '50%',
                              bgcolor: 'primary.main',
                              color: 'white',
                            }}
                          >
                            {categoryIcons[article.category] || <PolicyIcon />}
                          </Box>
                          <Chip
                            label={article.category}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: 10, fontWeight: 500 }}
                          />
                        </Box>

                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, lineHeight: 1.3 }}>
                          {article.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary', lineHeight: 1.5, mb: 2 }}
                        >
                          {article.excerpt}
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                          <Avatar sx={{ width: 24, height: 24, bgcolor: 'primary.main', fontSize: 12 }}>
                            {article.author.split(' ').map(n => n[0]).join('')}
                          </Avatar>
                          <Typography variant="caption" sx={{ fontWeight: 500 }}>
                            {article.author}
                          </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CalendarIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                            <Typography variant="caption" color="text.secondary">
                              {new Date(article.publishDate).toLocaleDateString()}
                            </Typography>
                          </Box>
                          <Typography variant="caption" color="text.secondary">
                            {article.readTime}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {filteredArticles.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No articles found matching your search criteria.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Try adjusting your search terms or category filter.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default NewsSection;