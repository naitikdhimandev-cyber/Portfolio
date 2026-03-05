import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Experience from './components/Experience';
import Academics from './components/Academics';
import Contact from './components/Contact';
import ItemDetails from './components/ItemDetails';
import ScrollToTop from './components/ScrollToTop';
import GridBackground from './components/GridBackground';
import SectionWrapper from './components/SectionWrapper';
import { AnimatePresence, motion } from 'framer-motion';

const Home = () => (
  <main>
    <Hero />
    <SectionWrapper id="about"><About /></SectionWrapper>
    <SectionWrapper id="skills"><Skills /></SectionWrapper>
    <SectionWrapper id="projects"><Projects /></SectionWrapper>
    <SectionWrapper id="hackathons"><Hackathons /></SectionWrapper>
    <SectionWrapper id="experience"><Experience /></SectionWrapper>
    <SectionWrapper id="academics"><Academics /></SectionWrapper>
    <SectionWrapper id="contact"><Contact /></SectionWrapper>
  </main>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/details/:type/:id"
          element={
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ItemDetails />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen relative text-foreground selection:bg-primary selection:text-background transition-colors duration-300 overflow-x-hidden">
          <GridBackground />
          <Navbar />

          <AnimatedRoutes />

          <footer className="py-12 border-t border-border/40 text-center relative overflow-hidden bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 flex flex-col items-center gap-4">
              <div className="text-2xl font-bold tracking-tighter text-primary">ND<span className="animate-pulse">_</span></div>
              <div className="text-foreground/20 text-[10px] font-mono">
                &copy; {new Date().getFullYear()} Naitik Dhiman // END OF TRANSMISSION
              </div>
            </div>
          </footer>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
