import React, { useState, useEffect, useCallback } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');
    if (hasSeenPreloader) {
      setIsLoading(false);
      setIsPreloaderDone(true);
    } else {
      // In case Preloader fails to call completion
      const timer = setTimeout(() => setIsLoading(false), 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
    sessionStorage.setItem('hasSeenPreloader', 'true');
    // Delay to ensure Preloader layoutId is removed before Navbar uses it
    setTimeout(() => setIsPreloaderDone(true), 200);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <AnimatePresence mode="wait">
          {!isPreloaderDone && (
            <Preloader key="main-preloader" onComplete={handlePreloaderComplete} />
          )}
        </AnimatePresence>

        <SmoothScroll>
          <motion.div
            className="min-h-screen bg-background text-foreground overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: isLoading ? 0 : 0.1 }}
          >
            <Navbar isPreloaderDone={isPreloaderDone} />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy-policy" element={<PrivacyPage />} />
              </Routes>
            </main>
            <Footer />
          </motion.div>
        </SmoothScroll>
      </Router>
    </HelmetProvider>
  );
}


export default App;
