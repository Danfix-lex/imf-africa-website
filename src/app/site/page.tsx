import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatisticsSection from '@/components/StatisticsSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import NewsSection from '@/components/NewsSection';
import LeadershipSection from '@/components/LeadershipSection';
import RemittalsSection from '@/components/RemittalsSection';
import CallToActionSection from '@/components/CallToActionSection';
import Footer from '@/components/Footer';
import InitiativesSection from '@/components/InitiativesSection';
import { Box } from '@mui/material';

export default function SitePage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', pt: { xs: 8, md: 15 } }}>
        <HeroSection />
        <StatisticsSection />
        <AboutSection />
        <ProgramsSection />
        <InitiativesSection />
        <NewsSection />
        <LeadershipSection />
        <RemittalsSection />
        <CallToActionSection />
      </Box>
      <Footer />
    </Box>
  );
}