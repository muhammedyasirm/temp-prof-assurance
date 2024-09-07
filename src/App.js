import React from 'react';
import HeaderTop from './components/Header/headerTop';
import Banner from './components/Banner/banner';
import AnalyticsCardSection from './components/AnalyticsCard/analyticsCardSection';
import ProfitAssurance from './components/AboutPoints/aboutPoints';


function App() {
  return (
      <>
      <HeaderTop />
      <Banner />
      <AnalyticsCardSection/>
      <ProfitAssurance />
      <div className='h-56'>
        Footer
      </div>
      </>
  );
}

export default App;
