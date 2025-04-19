
import React, { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import DashboardPreview from '../components/DashboardPreview';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

// Import Map component with lazy loading
const Map = lazy(() => import('../components/Map'));

const Index = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
      
      {/* Conditionally render Map component only in browser environment */}
      {isBrowser && (
        <Suspense fallback={<div className="py-20 text-center">Loading map...</div>}>
          <Map />
        </Suspense>
      )}
      
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
