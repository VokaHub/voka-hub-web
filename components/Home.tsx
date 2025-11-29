import React from 'react';
import Hero from './Hero';
import Segmentation from './Segmentation';
import Process from './Process';
import Projects from './Projects';
import Academy from './Academy';
import Testimonials from './Testimonials';
import WorkWithUs from './WorkWithUs';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* 1. Educate: The Methodology (How it works + Navigation to Know-How/Who/Where) */}
      <Process />
      
      {/* 2. Action: Segmentation (Choose your path) */}
      <Segmentation />
      
      {/* 3. The Result: Portfolio */}
      <Projects /> 
      
      {/* 4. Validation */}
      <Testimonials />

      {/* 5. The Know-More: Community */}
      <Academy />

      {/* 6. Closing Invitation */}
      <WorkWithUs />
    </>
  );
};

export default Home;