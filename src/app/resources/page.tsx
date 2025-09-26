import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { Box, Container, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { Book as BookIcon, VideoLibrary as VideoIcon, Article as ArticleIcon, 
         Audiotrack as AudioIcon, Download as DownloadIcon } from '@mui/icons-material';

export default function ResourcesPage() {
  const resourceCategories = [
    {
      icon: <BookIcon />,
      title: 'Ministry Books',
      description: 'Download our collection of ministry books and theological resources',
      items: 24
    },
    {
      icon: <VideoIcon />,
      title: 'Video Sermons',
      description: 'Access our library of video sermons and teaching materials',
      items: 42
    },
    {
      icon: <AudioIcon />,
      title: 'Audio Messages',
      description: 'Listen to messages from our conferences and training sessions',
      items: 68
    },
    {
      icon: <ArticleIcon />,
      title: 'Articles & Papers',
      description: 'Read theological articles and research papers by our ministers',
      items: 36
    }
  ];

  return (
    <ProtectedRoute>
      <Header />
      <Box sx={{ minHeight: '80vh', py: 4 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Ministry Resources
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Access our extensive collection of ministry materials and training resources
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {resourceCategories.map((category, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card sx={{ height: '100%', textAlign: 'center' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      mb: 2,
                      '& svg': { 
                        fontSize: '3rem', 
                        color: 'primary.main' 
                      } 
                    }}>
                      {category.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {category.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {category.description}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500, mb: 3 }}>
                      {category.items} resources
                    </Typography>
                    <Button 
                      variant="contained" 
                      fullWidth
                      endIcon={<DownloadIcon />}
                    >
                      Browse
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
              Featured Resources
            </Typography>
            <Card sx={{ maxWidth: 600, mx: 'auto' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  "Building Strong Churches in Africa" - Book by Dr. Samuel Okafor
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  A comprehensive guide to establishing and growing healthy churches in the African context, 
                  with practical insights from 30 years of ministry experience.
                </Typography>
                <Button variant="outlined" startIcon={<DownloadIcon />}>
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
      <Footer />
    </ProtectedRoute>
  );
}