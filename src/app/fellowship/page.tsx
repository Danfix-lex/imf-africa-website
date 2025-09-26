import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { Box, Container, Typography, Card, CardContent, Grid, Button, Avatar, Chip } from '@mui/material';
import { Groups as GroupsIcon, Event as EventIcon, Forum as ForumIcon, 
         LocationOn as LocationIcon, Language as LanguageIcon } from '@mui/icons-material';

export default function FellowshipPage() {
  const fellowshipGroups = [
    {
      name: 'West Africa Ministers Network',
      members: 128,
      location: 'Multiple Countries',
      description: 'Monthly virtual meetings and annual conference for ministers in West Africa'
    },
    {
      name: 'East Africa Pastors Fellowship',
      members: 96,
      location: 'Kenya, Uganda, Tanzania',
      description: 'Quarterly training sessions and peer mentoring programs'
    },
    {
      name: 'Southern Africa Church Leaders',
      members: 75,
      location: 'South Africa, Zambia, Zimbabwe',
      description: 'Annual retreat and leadership development programs'
    },
    {
      name: 'North Africa Ministry Network',
      members: 42,
      location: 'Egypt, Morocco, Tunisia',
      description: 'Monthly prayer meetings and resource sharing'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Annual IMF Africa Conference 2024',
      date: 'November 15-17, 2024',
      location: 'Lagos, Nigeria',
      type: 'Conference'
    },
    {
      title: 'Pastoral Leadership Training',
      date: 'October 5-7, 2024',
      location: 'Online',
      type: 'Training'
    },
    {
      title: 'Youth Ministry Workshop',
      date: 'September 28-29, 2024',
      location: 'Kigali, Rwanda',
      type: 'Workshop'
    }
  ];

  return (
    <ProtectedRoute>
      <Header />
      <Box sx={{ minHeight: '80vh', py: 4 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Ministerial Fellowship
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Connect with fellow ministers across Africa in our regional networks and events
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                <GroupsIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                Regional Fellowship Groups
              </Typography>
              <Grid container spacing={3}>
                {fellowshipGroups.map((group, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <Card sx={{ height: '100%' }}>
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                          <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                            <GroupsIcon />
                          </Avatar>
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {group.name}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                              <LocationIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                              <Typography variant="body2" color="text.secondary">
                                {group.location}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                          {group.description}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Chip 
                            label={`${group.members} members`} 
                            size="small" 
                            sx={{ bgcolor: 'primary.light', color: 'primary.contrastText' }} 
                          />
                          <Button variant="outlined" size="small">
                            Join Group
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                <EventIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                Upcoming Events
              </Typography>
              <Card>
                <CardContent sx={{ p: 3 }}>
                  {upcomingEvents.map((event, index) => (
                    <Box key={index} sx={{ mb: 3, pb: 3, borderBottom: index < upcomingEvents.length - 1 ? 1 : 0, borderColor: 'divider' }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                        {event.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <EventIcon sx={{ fontSize: '1rem', mr: 1 }} />
                        <Typography variant="body2">
                          {event.date}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <LocationIcon sx={{ fontSize: '1rem', mr: 1 }} />
                        <Typography variant="body2">
                          {event.location}
                        </Typography>
                      </Box>
                      <Chip 
                        label={event.type} 
                        size="small" 
                        sx={{ 
                          bgcolor: event.type === 'Conference' ? 'secondary.light' : 
                                   event.type === 'Training' ? 'primary.light' : 'info.light',
                          color: event.type === 'Conference' ? 'secondary.contrastText' : 
                                 event.type === 'Training' ? 'primary.contrastText' : 'info.contrastText'
                        }} 
                      />
                    </Box>
                  ))}
                  <Button variant="contained" fullWidth>
                    View All Events
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Card sx={{ mb: 4 }}>
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <ForumIcon sx={{ fontSize: '4rem', color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Join Our Online Community
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
                Connect with thousands of ministers across Africa in our private Facebook group, 
                WhatsApp communities, and discussion forums.
              </Typography>
              <Button variant="contained" size="large">
                Join Community
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Footer />
    </ProtectedRoute>
  );
}