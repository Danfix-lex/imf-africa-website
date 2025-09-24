import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatisticsSection from '@/components/StatisticsSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import NewsSection from '@/components/NewsSection';
import LeadershipSection from '@/components/LeadershipSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import RemittalsSection from '@/components/RemittalsSection';
import CallToActionSection from '@/components/CallToActionSection';
import Footer from '@/components/Footer';

export default function SitePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <StatisticsSection />
      <AboutSection />
      <ProgramsSection />
      <NewsSection />
      <LeadershipSection />
      <TestimonialsSection />
      <RemittalsSection />
      <CallToActionSection />
      <Footer />
    </>
  );
}