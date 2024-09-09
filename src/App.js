import React from 'react';
import HeaderTop from './components/Header/headerTop';
import Banner from './components/Banner/banner';
import AnalyticsCardSection from './components/AnalyticsCard/analyticsCardSection';
import ProfitAssurance from './components/AboutPoints/aboutPoints';
import SectionedBackground from './components/BackgroundSection/backgroundSection';
import PromoSection from './components/TiltleText/titleText';
import TestimonialsSection from './components/TestimonialSection/testimonialSection';
import ConferenceSection from './components/ConferenceSection/conferenceSection';
import Footer from './components/Footer/footer';


function App() {
  return (
      <>
      <HeaderTop />
      <Banner />
      <AnalyticsCardSection />
      <ProfitAssurance />
      <SectionedBackground />
      <PromoSection />
      <TestimonialsSection />
      <ConferenceSection />
      <Footer />
      </>
  );
}

export default App;
