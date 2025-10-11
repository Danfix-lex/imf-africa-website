import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { Box, Container, Typography, Card, CardContent, Button, Chip } from '@mui/material';
import { School as SchoolIcon, CalendarToday as CalendarIcon, 
         AccessTime as TimeIcon, Person as PersonIcon } from '@mui/icons-material';

export default function TrainingPage() {
  const trainingPrograms = [
    {
      title: 'Biblical Leadership Foundation',
      level: 'Beginner',
      duration: '8 weeks',
      format: 'Online',
      description: 'Essential leadership principles from Scripture for new and aspiring ministry leaders',
      instructors: ['Dr. Samuel Okafor', 'Rev. Maria Johnson']
    },
    {
      title: 'Advanced Church Management',
      level: 'Intermediate',
      duration: '12 weeks',
      format: 'Hybrid',
      description: 'Comprehensive training in ministry administration, finance, and strategic planning',
      instructors: ['Pastor James Wilson', 'Dr. Lisa Thompson']
    },
    {
      title: 'Expository Preaching Mastery',
      level: 'Advanced',
      duration: '16 weeks',
      format: 'In-person',
      description: 'Deep dive into biblical interpretation and powerful sermon delivery techniques',
      instructors: ['Dr. Michael Adewumi', 'Bishop Grace Okoro']
    },
    {
      title: 'Youth Ministry Excellence',
      level: 'Intermediate',
      duration: '6 weeks',
      format: 'Online',
      description: 'Strategies for effectively reaching and discipling the next generation',
      instructors: ['Rev. David Kimani', 'Pastor Sarah Osei']
    }
  ];

  const certifications = [
    {
      name: 'Certified Ministerial Leader',
      requirements: 'Complete 3 core courses',
      duration: '6 months'
    },
    {
      name: 'Advanced Biblical Studies',
      requirements: 'Complete 5 advanced courses',
      duration: '12 months'
    },
    {
      name: 'Ministry Administration Specialist',
      requirements: 'Complete 4 management courses',
      duration: '8 months'
    }
  ];

  return (
    <ProtectedRoute>
      <Header />
      <Box sx={{ minHeight: '80vh', py: 4 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Ministerial Training
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Advance your ministry through our comprehensive training programs and certification courses
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
              <SchoolIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
              Training Programs
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
              {trainingPrograms.map((program, index) => (
                <Box component="div" key={index}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {program.title}
                        </Typography>
                        <Chip 
                          label={program.level} 
                          size="small" 
                          sx={{ 
                            bgcolor: program.level === 'Beginner' ? 'success.light' : 
                                     program.level === 'Intermediate' ? 'warning.light' : 'error.light',
                            color: program.level === 'Beginner' ? 'success.contrastText' : 
                                   program.level === 'Intermediate' ? 'warning.contrastText' : 'error.contrastText'
                          }} 
                        />
                      </Box>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                        <Box component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                          <TimeIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                          <Typography variant="body2">
                            {program.duration}
                          </Typography>
                        </Box>
                        <Box component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                          <CalendarIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                          <Typography variant="body2">
                            {program.format}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Typography variant="body2" sx={{ mb: 3 }}>
                        {program.description}
                      </Typography>
                      
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
                          Instructors:
                        </Typography>
                        {program.instructors.map((instructor, idx) => (
                          <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                            <PersonIcon sx={{ fontSize: '1rem', mr: 1 }} />
                            <Typography variant="body2">
                              {instructor}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                      
                      <Button variant="contained" fullWidth>
                        Enroll Now
                      </Button>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>

          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, textAlign: 'center' }}>
                Professional Certifications
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' }, gap: 3 }}>
                {certifications.map((cert, index) => (
                  <Box component="div" key={index}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                      <CardContent sx={{ p: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                          {cert.name}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                          <strong>Requirements:</strong> {cert.requirements}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 3 }}>
                          <strong>Duration:</strong> {cert.duration}
                        </Typography>
                        <Button variant="outlined" fullWidth size="small">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Footer />
    </ProtectedRoute>
  );
}