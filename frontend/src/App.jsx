import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import IndustryCases from './components/IndustryCases';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SEO from './components/SEO';
import SmoothScroll from './components/SmoothScroll';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');
    if (hasSeenPreloader) {
      setIsLoading(false);
      setIsPreloaderDone(true);
    } else {
      const timer = setTimeout(() => setIsLoading(false), 2700);
      return () => clearTimeout(timer);
    }
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('hasSeenPreloader', 'true');
    // Delay to ensure Preloader layoutId is removed before Navbar uses it
    setTimeout(() => setIsPreloaderDone(true), 200);
  };

  return (
    <HelmetProvider>
      <Preloader onComplete={handlePreloaderComplete} />
      <SmoothScroll>
        <motion.div
          className="min-h-screen bg-background text-foreground overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: isLoading ? 0 : 0.1 }}
        >
          <SEO
            title="Home"
            description="Powering IT, Manufacturing, Processing & Agriculture with Talent and Technology. Specialized IT and engineering solutions."
            keywords="IT manpower solutions India, Mechanical staffing services, Processing industry manpower support, Food processing technical staffing, Digital marketing for industrial companies, Agricultural machinery innovation"
          />
          <Navbar isPreloaderDone={isPreloaderDone} />
          <main>
            <Hero />
            <About />
            <Services />
            <WhyUs />
            <IndustryCases />
            <ContactForm />
          </main>
          <Footer />
        </motion.div>
      </SmoothScroll>
    </HelmetProvider>
  );
}

export default App;
