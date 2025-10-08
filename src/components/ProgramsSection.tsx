'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  useTheme,
  Chip,
  Modal,
  IconButton,
  Tabs,
  Tab,
  Badge,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  School as SchoolIcon,
  Business as BusinessIcon,
  Handshake as HandshakeIcon,
  Assessment as AssessmentIcon,
  Public as PublicIcon,
  Close as CloseIcon,
  LocationOn as LocationIcon,
  CalendarToday as CalendarIcon,
  AttachMoney as MoneyIcon,
  Group as GroupIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const programs = [
  {
    icon: <SchoolIcon />,
    title: 'Ministry Training Institute',
    description: 'Comprehensive theological and pastoral training programs for ministers and ministry leaders across Africa.',
    category: 'Ministry Training',
    status: 'Active',
    budget: '$5M',
    duration: '2020-2025',
    countries: ['Kenya', 'Ghana', 'Rwanda', 'Nigeria', 'Tanzania'],
    beneficiaries: '15K ministers',
    objectives: [
      'Train and equip pastors',
      'Develop theological education',
      'Strengthen ministry leadership',
      'Promote biblical literacy',
    ],
    achievements: [
      '3,500 ministers graduated',
      '150 training centers established',
      '2,200 leaders equipped',
      '95% graduation rate achieved',
    ],
    color: '#1976d2',
  },
  {
    icon: <BusinessIcon />,
    title: 'Youth Ministry Programs',
    description: 'Empowering young people through discipleship, leadership development, and skills training programs.',
    category: 'Youth Development',
    status: 'Active',
    budget: '$2.5M',
    duration: '2021-2026',
    countries: ['Ethiopia', 'Tanzania', 'Uganda', 'Zambia', 'Botswana'],
    beneficiaries: '100K youth',
    objectives: [
      'Disciple young people',
      'Develop youth leaders',
      'Provide skills training',
      'Combat social challenges',
    ],
    achievements: [
      '25K youth discipled',
      '500 youth leaders trained',
      '150 youth centers established',
      '75% program completion rate',
    ],
    color: '#388e3c',
  },

  {
    icon: <TrendingUpIcon />,
    title: 'Women in Ministry',
    description: 'Empowering women in ministry leadership and ministry through training, mentorship, and leadership development.',
    category: 'Women Leadership',
    status: 'Active',
    budget: '$1.8M',
    duration: '2020-2025',
    countries: ['ECOWAS', 'EAC', 'SADC', 'COMESA'],
    beneficiaries: '50K women',
    objectives: [
      'Train women leaders',
      'Promote gender equality',
      'Develop mentorship programs',
      'Build leadership capacity',
    ],
    achievements: [
      '8K women trained',
      '200 mentorship circles formed',
      '1,500 women in leadership',
      '90% leadership advancement rate',
    ],
    color: '#f57c00',
  },
  {
    icon: <AssessmentIcon />,
    title: 'Community Development',
    description: 'Holistic community development programs addressing social, economic, and spiritual needs in partnership with local ministries.',
    category: 'Community Outreach',
    status: 'Active',
    budget: '$4M',
    duration: '2019-2024',
    countries: ['Nigeria', 'South Africa', 'Kenya', 'Egypt', 'Ghana'],
    beneficiaries: '300K people',
    objectives: [
      'Address community needs',
      'Promote social justice',
      'Develop sustainable programs',
      'Build ministry-community partnerships',
    ],
    achievements: [
      '180 communities served',
      '500 development projects',
      '50K families impacted',
      '95% community satisfaction',
    ],
    color: '#d32f2f',
  },
  {
    icon: <PublicIcon />,
    title: 'Global Missions Network',
    description: 'Connecting African ministries with global missions opportunities and building international ministry partnerships.',
    category: 'Global Missions',
    status: 'Active',
    budget: '$6M',
    duration: '2020-2030',
    countries: ['All 54 African Countries'],
    beneficiaries: '1M people',
    objectives: [
      'Coordinate missions efforts',
      'Build global partnerships',
      'Share ministry resources',
      'Expand kingdom impact',
    ],
    achievements: [
      '200+ partnerships established',
      '5K missionaries sent',
      '25 international connections',
      '90% missions success rate',
    ],
    color: '#0288d1',
  },
];

const ProgramsSection: React.FC = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProgram, setSelectedProgram] = useState<typeof programs[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const categories = ['All', 'Ministry Training', 'Youth Development', 'Women Leadership', 'Community Outreach', 'Global Missions'];
  
  const filteredPrograms = selectedCategory === 'All' 
    ? programs 
    : programs.filter(program => program.category === selectedCategory);

  const handleProgramClick = (program: typeof programs[0]) => {
    setSelectedProgram(program);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProgram(null);
  };

  return (
    <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
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
              Our Ministry Programs
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
              Comprehensive ministry initiatives designed to equip leaders,
              strengthen ministries, and transform communities across Africa
            </Typography>

            {/* Category Filter Tabs */}
            <Box sx={{ mb: 6 }}>
              <Tabs
                value={selectedCategory}
                onChange={(e, value) => setSelectedCategory(value)}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    minWidth: 'auto',
                    px: 3,
                  },
                  '& .MuiTabs-indicator': {
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    height: 3,
                  },
                }}
              >
                {categories.map((category) => {
                  const count = category === 'All' ? programs.length : programs.filter(p => p.category === category).length;
                  return (
                    <Tab
                      key={category}
                      label={
                        <Badge badgeContent={count} color="primary" sx={{ '& .MuiBadge-badge': { fontSize: '0.7rem' } }}>
                          {category}
                        </Badge>
                      }
                      value={category}
                    />
                  );
                })}
              </Tabs>
            </Box>
          </Box>
        </motion.div>

        {/* Programs Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={`${selectedCategory}-${index}`}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
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
                      cursor: 'pointer',
                      '&:hover': {
                        boxShadow: `0 20px 60px ${program.color}20`,
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: program.color,
                      },
                    }}
                    onClick={() => handleProgramClick(program)}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                        <Box
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 70,
                            height: 70,
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${program.color}, ${program.color}dd)`,
                            color: 'white',
                            boxShadow: `0 8px 32px ${program.color}30`,
                          }}
                        >
                          {program.icon}
                        </Box>
                        <Chip
                          label={program.status}
                          size="small"
                          sx={{
                            bgcolor: program.status === 'Active' ? 'success.main' : 'warning.main',
                            color: 'white',
                            fontWeight: 600,
                          }}
                        />
                      </Box>

                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                        {program.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 3 }}
                      >
                        {program.description}
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <MoneyIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                          <Typography variant="caption" sx={{ fontWeight: 600 }}>
                            {program.budget}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <CalendarIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                          <Typography variant="caption" sx={{ fontWeight: 600 }}>
                            {program.duration}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <GroupIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                          <Typography variant="caption" sx={{ fontWeight: 600 }}>
                            {program.beneficiaries}
                          </Typography>
                        </Box>
                      </Box>

                      <Chip
                        label={program.category}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: program.color,
                          color: program.color,
                          fontWeight: 500,
                        }}
                      />
                    </CardContent>

                    <CardActions sx={{ p: 4, pt: 0 }}>
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                          borderRadius: 3,
                          py: 1.5,
                          fontWeight: 600,
                          borderColor: program.color,
                          color: program.color,
                          '&:hover': {
                            bgcolor: program.color,
                            color: 'white',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        View Details
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </AnimatePresence>

        {/* Program Detail Modal */}
        <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}
        >
          <Box
            sx={{
              bgcolor: 'background.paper',
              borderRadius: 4,
              boxShadow: 24,
              p: 0,
              maxWidth: 800,
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
            }}
          >
            {selectedProgram && (
              <>
                <Box
                  sx={{
                    background: `linear-gradient(135deg, ${selectedProgram.color}, ${selectedProgram.color}dd)`,
                    color: 'white',
                    p: 4,
                    position: 'relative',
                  }}
                >
                  <IconButton
                    onClick={handleCloseModal}
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      color: 'white',
                      bgcolor: 'rgba(255,255,255,0.2)',
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: 'rgba(255,255,255,0.2)',
                      }}
                    >
                      {selectedProgram.icon}
                    </Box>
                    <Box>
                      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                        {selectedProgram.title}
                      </Typography>
                      <Chip
                        label={selectedProgram.category}
                        sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                      />
                    </Box>
                  </Box>

                  <Typography variant="body1" sx={{ lineHeight: 1.6, opacity: 0.9 }}>
                    {selectedProgram.description}
                  </Typography>
                </Box>

                <Box sx={{ p: 4 }}>
                  {/* Key Metrics */}
                  <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 3, mb: 4 }}>
                    <Box sx={{ textAlign: 'center', p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
                      <MoneyIcon sx={{ fontSize: 40, color: selectedProgram.color, mb: 1 }} />
                      <Typography variant="h5" sx={{ fontWeight: 700, color: selectedProgram.color }}>
                        {selectedProgram.budget}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Total Budget
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center', p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
                      <CalendarIcon sx={{ fontSize: 40, color: selectedProgram.color, mb: 1 }} />
                      <Typography variant="h6" sx={{ fontWeight: 700, color: selectedProgram.color }}>
                        {selectedProgram.duration}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Duration
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center', p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
                      <GroupIcon sx={{ fontSize: 40, color: selectedProgram.color, mb: 1 }} />
                      <Typography variant="h6" sx={{ fontWeight: 700, color: selectedProgram.color }}>
                        {selectedProgram.beneficiaries}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Beneficiaries
                      </Typography>
                    </Box>
                  </Box>

                  {/* Countries */}
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LocationIcon sx={{ color: selectedProgram.color }} />
                      Target Countries/Regions
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {selectedProgram.countries.map((country, index) => (
                        <Chip
                          key={index}
                          label={country}
                          variant="outlined"
                          sx={{
                            borderColor: selectedProgram.color,
                            color: selectedProgram.color,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Objectives */}
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      Key Objectives
                    </Typography>
                    <Box sx={{ display: 'grid', gap: 1 }}>
                      {selectedProgram.objectives.map((objective, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              bgcolor: selectedProgram.color,
                            }}
                          />
                          <Typography variant="body2">{objective}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* Achievements */}
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      Key Achievements
                    </Typography>
                    <Box sx={{ display: 'grid', gap: 1 }}>
                      {selectedProgram.achievements.map((achievement, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              bgcolor: 'success.main',
                            }}
                          />
                          <Typography variant="body2">{achievement}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default ProgramsSection;