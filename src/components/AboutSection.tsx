'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  Card,
  CardContent,
  Avatar,
  Divider,
} from '@mui/material';
import {
  AutoStories as BibleIcon,
  Church as ChurchIcon,
  School as SchoolIcon,
  Favorite as HeartIcon,
  Public as GlobalIcon,
  Groups as CommunityIcon,
  Handshake as PartnershipIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const coreValues = [
  {
    icon: <BibleIcon />,
    title: "Biblical Foundation",
    description: "Rooted in Scripture and committed to sound biblical doctrine in all our teachings and practices.",
    color: '#1565C0'
  },
  {
    icon: <HeartIcon />,
    title: "Christ-Centered Love",
    description: "Demonstrating the love of Christ through compassionate service and genuine fellowship.",
    color: '#C62828'
  },
  {
    icon: <SchoolIcon />,
    title: "Excellence in Training",
    description: "Providing world-class ministerial education and practical training for effective ministry.",
    color: '#2E7D32'
  },
  {
    icon: <CommunityIcon />,
    title: "Unity in Diversity",
    description: "Celebrating the rich diversity of African cultures while maintaining Christian unity.",
    color: '#7B1FA2'
  },
  {
    icon: <PartnershipIcon />,
    title: "Strategic Partnerships",
    description: "Building lasting relationships with churches, organizations, and leaders across Africa.",
    color: '#E65100'
  },
  {
    icon: <GlobalIcon />,
    title: "Continental Impact",
    description: "Committed to reaching every nation and people group across the African continent.",
    color: '#558B2F'
  },
];

const AboutSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        {/* Main About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', maxWidth: 1000, mx: 'auto', mb: { xs: 8, md: 10 } }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  bgcolor: 'primary.main',
                  fontSize: '2rem',
                  boxShadow: '0 8px 32px rgba(25, 118, 210, 0.3)',
                }}
              >
                <ChurchIcon sx={{ fontSize: '2.5rem' }} />
              </Avatar>
            </Box>
            
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 4,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              About International Ministers Forum Africa
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                color: 'text.primary',
                lineHeight: 1.8,
                mb: 4,
                fontWeight: 500,
                fontSize: { xs: '1.3rem', md: '1.5rem' },
              }}
            >
              Founded in 1987, the International Ministers Forum Africa (IMF Africa) stands as 
              a beacon of hope and transformation across the African continent, dedicated to 
              empowering ministers, strengthening churches, and advancing God's Kingdom.
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.9,
                fontSize: '1.2rem',
                mb: 6,
                fontStyle: 'italic',
              }}
            >
              Our mission transcends denominational boundaries, bringing together Christian leaders 
              from diverse backgrounds to work collaboratively in fulfilling the Great Commission 
              across Africa's 54 nations.
            </Typography>

            {/* Mission Statement Box */}
            <Box
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                position: 'relative',
                overflow: 'hidden',
                mb: { xs: 6, md: 8 },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"3\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                },
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <StarIcon sx={{ fontSize: '3rem', mb: 2, opacity: 0.8 }} />
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                  Our Divine Calling
                </Typography>
                <Typography variant="h6" sx={{ lineHeight: 1.8, opacity: 0.95 }}>
                  "To equip the saints for the work of ministry, for building up the body of Christ, 
                  until we all attain to the unity of the faith and of the knowledge of the Son of God, 
                  to mature manhood, to the measure of the stature of the fullness of Christ."
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, fontWeight: 600, opacity: 0.9 }}>
                  — Ephesians 4:12-13
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>

        <Divider sx={{ mb: { xs: 8, md: 10 }, bgcolor: 'primary.main', height: 2 }} />

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: 'text.primary',
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Our Core Values & Principles
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              These foundational principles guide every aspect of our ministry 
              and shape our approach to serving God's people across Africa.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: { xs: 3, md: 4 } }}>
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,1))',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: 3,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                      transform: 'translateY(-8px)',
                      '&::before': {
                        opacity: 1,
                      },
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: value.color,
                      opacity: 0.7,
                      transition: 'opacity 0.3s ease',
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        width: 70,
                        height: 70,
                        bgcolor: value.color,
                        color: 'white',
                        mx: 'auto',
                        mb: 3,
                        boxShadow: `0 8px 32px ${value.color}40`,
                      }}
                    >
                      {value.icon}
                    </Avatar>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                        mb: 2,
                        fontSize: '1.3rem',
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        fontSize: '1rem',
                      }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: { xs: 8, md: 12 },
              p: { xs: 4, md: 8 },
              bgcolor: 'secondary.main',
              color: 'white',
              borderRadius: 4,
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  mb: 4,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Transforming Africa Through Faith
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  lineHeight: 1.8,
                  maxWidth: 800,
                  mx: 'auto',
                  opacity: 0.95,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                }}
              >
                For over three decades, IMF Africa has been instrumental in training thousands 
                of ministers, planting churches, and witnessing countless lives transformed by 
                the power of the Gospel. Our commitment remains unwavering as we continue to 
                advance God's Kingdom across this great continent.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection;