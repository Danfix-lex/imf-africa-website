'use client';
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  useTheme,
  IconButton,
  Rating,
  Chip,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  FormatQuote as QuoteIcon,
  Business as BusinessIcon,
  Person as PersonIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Pastor Enoch Adeboye',
    position: 'General Overseer',
    organization: 'The Redeemed Christian Church of God',
    country: 'Nigeria',
    testimonial: 'The International Ministers Forum Africa has been instrumental in transforming ministry across our continent. Their training programs have strengthened our pastoral capacity and enabled us to plant over 5,000 churches across Africa in the past three years alone.',
    impact: 'Led to 5,000+ church plants and 2M+ souls won',
    rating: 5,
    program: 'Ministry Training Initiative',
    avatar: '/api/placeholder/80/80',
    category: 'Church Leadership',
  },
  {
    id: 2,
    name: 'Bishop Tudor Bismark',
    position: 'Presiding Bishop',
    organization: 'New Life Covenant Church',
    country: 'Zimbabwe',
    testimonial: 'The collaboration between our church network and IMF Africa has revolutionized leadership development across Southern Africa. Together, we\'ve trained over 8,000 ministers and established 200+ training centers that are equipping leaders for effective ministry.',
    impact: 'Trained 8,000+ ministers across 15 countries',
    rating: 5,
    program: 'Leadership Development',
    avatar: '/api/placeholder/80/80',
    category: 'Ministry Partnership',
  },
  {
    id: 3,
    name: 'Dr. Sunday Adelaja',
    position: 'Founder & Senior Pastor',
    organization: 'Kingdom Life Christian Centre',
    country: 'Ukraine/Nigeria',
    testimonial: 'IMF Africa\'s strategic partnership has been instrumental in our ministry\'s expansion across Africa. Their comprehensive approach to church leadership development has equipped thousands of pastors with practical tools for effective ministry and sustainable church growth.',
    impact: 'Equipped 5,000+ pastors for effective ministry',
    rating: 5,
    program: 'Leadership Development',
    avatar: '/api/placeholder/80/80',
    category: 'Church Leadership',
  },

  {
    id: 5,
    name: 'Archbishop Nicholas Duncan-Williams',
    position: 'Presiding Archbishop',
    organization: 'Action Chapel International',
    country: 'Ghana',
    testimonial: 'IMF Africa\'s strategic approach to ministry development has been transformational. Their training frameworks have helped our ministry network make informed decisions that have collectively planted over 1,000 churches across West Africa in five years.',
    impact: 'Planted 1,000+ churches across West Africa',
    rating: 5,
    program: 'Strategic Ministry Development',
    avatar: '/api/placeholder/80/80',
    category: 'Strategic Leadership',
  },
  {
    id: 6,
    name: 'Pastor Funke Felix-Adejumo',
    position: 'Senior Pastor',
    organization: 'The Lord\'s Garden Ministry',
    country: 'Nigeria',
    testimonial: 'The youth ministry initiatives launched through IMF Africa are raising the next generation of African leaders. These programs have mentored over 50,000 young people, positioning them as champions of faith and transformation across the continent.',
    impact: 'Mentored 50,000+ young people for ministry',
    rating: 5,
    program: 'Youth Ministry Development',
    avatar: '/api/placeholder/80/80',
    category: 'Youth Ministry',
  },
  {
    id: 7,
    name: 'Pastor Tony Rapu',
    position: 'Senior Pastor',
    organization: 'The House of Freedom',
    country: 'Nigeria',
    testimonial: 'The partnership with IMF Africa has transformed community development in our region. Our joint initiatives have established 150+ community projects, enabling thousands of churches to create sustainable impact and address social challenges effectively.',
    impact: 'Established 150+ community development projects',
    rating: 5,
    program: 'Community Transformation',
    avatar: '/api/placeholder/80/80',
    category: 'Community Development',
  },
  {
    id: 8,
    name: 'Bishop Dag Heward-Mills',
    position: 'Founder & Presiding Bishop',
    organization: 'Lighthouse Chapel International',
    country: 'Ghana',
    testimonial: 'Ministry training programs supported by IMF Africa have transformed pastoral effectiveness across the continent. These initiatives have equipped 15,000+ pastors with practical ministry skills and enhanced spiritual formation for millions of African Christians.',
    impact: 'Equipped 15,000+ pastors for effective ministry',
    rating: 5,
    program: 'Pastoral Training',
    avatar: '/api/placeholder/80/80',
    category: 'Pastoral Development',
  },
];

const TestimonialsSection: React.FC = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1200) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev >= testimonials.length - itemsPerView ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [itemsPerView]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => 
      prev >= testimonials.length - itemsPerView ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => 
      prev <= 0 ? testimonials.length - itemsPerView : prev - 1
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView);
  if (visibleTestimonials.length < itemsPerView) {
    visibleTestimonials.push(...testimonials.slice(0, itemsPerView - visibleTestimonials.length));
  }

  const categoryColors: { [key: string]: string } = {
    'Church Leadership': '#1976d2',
    'Ministry Partnership': '#388e3c',
    'Women Leadership': '#f57c00',
    'Global Missions': '#7b1fa2',
    'Strategic Leadership': '#d32f2f',
    'Youth Ministry': '#00695c',
    'Community Development': '#303f9f',
    'Pastoral Development': '#689f38',
  };

  return (
    <Box
      sx={{
        py: 10,
        background: `linear-gradient(135deg, 
          ${theme.palette.primary.main}08 0%, 
          ${theme.palette.background.default} 30%,
          ${theme.palette.secondary.main}05 70%,
          ${theme.palette.background.default} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 80% 20%, ${theme.palette.primary.main}08 0%, transparent 50%),
                           radial-gradient(circle at 20% 80%, ${theme.palette.secondary.main}08 0%, transparent 50%)`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
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
              Ministry Impact & Testimonials
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
              Hear from church leaders across Africa about how our ministry programs are transforming lives and strengthening the body of Christ
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ overflow: 'hidden', position: 'relative' }}>
          {/* Navigation Buttons */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              mb: 4,
            }}
          >
            <IconButton
              onClick={prevTestimonial}
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.dark',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              onClick={nextTestimonial}
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.dark',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>

          {/* Testimonials Carousel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: `repeat(${itemsPerView}, 1fr)` }, gap: 4 }}>
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.id}-${currentIndex}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: 4,
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          boxShadow: `0 20px 60px ${categoryColors[testimonial.category]}20`,
                          background: 'rgba(255, 255, 255, 1)',
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          background: categoryColors[testimonial.category],
                        },
                      }}
                    >
                      <CardContent sx={{ p: 4 }}>
                        {/* Quote Icon */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 20,
                            right: 20,
                            opacity: 0.1,
                          }}
                        >
                          <QuoteIcon sx={{ fontSize: 60, color: categoryColors[testimonial.category] }} />
                        </Box>

                        {/* Header */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                          <Avatar
                            src={testimonial.avatar}
                            sx={{
                              width: 60,
                              height: 60,
                              bgcolor: categoryColors[testimonial.category],
                              border: `3px solid ${categoryColors[testimonial.category]}20`,
                            }}
                          >
                            <PersonIcon />
                          </Avatar>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                              {testimonial.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                              {testimonial.position}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              {testimonial.organization}
                            </Typography>
                          </Box>
                        </Box>

                        {/* Category & Rating */}
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                          <Chip
                            label={testimonial.category}
                            size="small"
                            sx={{
                              bgcolor: `${categoryColors[testimonial.category]}15`,
                              color: categoryColors[testimonial.category],
                              fontWeight: 600,
                              fontSize: 11,
                            }}
                          />
                          <Rating value={testimonial.rating} readOnly size="small" />
                        </Box>

                        {/* Testimonial Text */}
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.primary',
                            lineHeight: 1.7,
                            mb: 3,
                            fontStyle: 'italic',
                            position: 'relative',
                            zIndex: 1,
                          }}
                        >
                          "{testimonial.testimonial}"
                        </Typography>

                        {/* Impact Statement */}
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            bgcolor: `${categoryColors[testimonial.category]}08`,
                            border: `1px solid ${categoryColors[testimonial.category]}20`,
                          }}
                        >
                          <Typography variant="caption" sx={{ fontWeight: 600, color: categoryColors[testimonial.category] }}>
                            IMPACT ACHIEVED
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.primary',
                              fontWeight: 500,
                              mt: 0.5,
                            }}
                          >
                            {testimonial.impact}
                          </Typography>
                        </Box>

                        {/* Program Badge */}
                        <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                          <BusinessIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                            {testimonial.program}
                          </Typography>
                          <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <LocationIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              {testimonial.country}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicators */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 4 }}>
            {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: Math.floor(currentIndex / itemsPerView) === index ? 'primary.main' : 'grey.300',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    scale: 1.2,
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: 10 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: 'text.primary',
              }}
            >
              Join Our Growing Network of Success
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.8,
                fontSize: '1.1rem',
              }}
            >
              These stories represent just a fraction of the transformative impact we're creating together.
              Partner with us to write the next chapter of Africa's economic success story.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;