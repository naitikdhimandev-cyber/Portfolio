import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import { ViewModeProvider, useViewMode } from './components/ViewModeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AllProjects from './components/AllProjects';
import Hackathons from './components/Hackathons';
import Events from './components/Events';
import AllEvents from './components/AllEvents';
import Experience from './components/Experience';
import Academics from './components/Academics';
import Contact from './components/Contact';
import ItemDetails from './components/ItemDetails';
import ScrollToTop from './components/ScrollToTop';
import GridBackground from './components/GridBackground';
import SectionWrapper from './components/SectionWrapper';
import VisitorTracker from './components/VisitorTracker';
import HorizontalDeck from './components/HorizontalDeck';
import { AnimatePresence, motion } from 'framer-motion';

const VerticalHome = () => (
  <main>
    <Hero />
    <SectionWrapper id="about"><About /></SectionWrapper>
    <SectionWrapper id="skills"><Skills /></SectionWrapper>
    <SectionWrapper id="projects"><Projects /></SectionWrapper>
    <SectionWrapper id="hackathons"><Hackathons /></SectionWrapper>
    <SectionWrapper id="events"><Events /></SectionWrapper>
    <SectionWrapper id="experience"><Experience /></SectionWrapper>
    <SectionWrapper id="academics"><Academics /></SectionWrapper>
    <SectionWrapper id="contact"><Contact /></SectionWrapper>
  </main>
);

const Home = () => {
  const { viewMode } = useViewMode();

  return (
    <AnimatePresence mode="wait">
      {viewMode === 'horizontal' ? (
        <motion.div
          key="deck-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <HorizontalDeck />
        </motion.div>
      ) : (
        <motion.div
          key="stream-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <VerticalHome />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MainLayout = () => {
  const location = useLocation();
  const isDetailsRoute = location.pathname.startsWith('/details/');

  return (
    <div className="min-h-screen relative text-foreground selection:bg-primary selection:text-background transition-colors duration-300 overflow-x-hidden">
      <GridBackground />
      <Navbar />

      {/* Main Pages (Keeps Home, AllProjects, or AllEvents rendered in background) */}
      <main>
        <Routes>
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/events" element={<AllEvents />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Item Details Full Overlay Modal */}
      <AnimatePresence>
        {isDetailsRoute && (
          <motion.div
            key="details-modal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 overflow-y-auto overscroll-y-contain bg-background/98 backdrop-blur-3xl shadow-2xl"
          >
            <Routes>
              <Route path="/details/:type/:id" element={<ItemDetails />} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-12 border-t border-border/40 text-center relative overflow-hidden bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 flex flex-col items-center gap-4">
          <div className="text-2xl font-bold tracking-tighter text-primary">ND<span className="animate-pulse">_</span></div>
          <div className="text-foreground/20 text-[10px] font-mono">
            &copy; {new Date().getFullYear()} Naitik Dhiman // END OF TRANSMISSION
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <ViewModeProvider>
        <HashRouter>
          <VisitorTracker />
          <ScrollToTop />
          <MainLayout />
        </HashRouter>
      </ViewModeProvider>
    </ThemeProvider>
  );
}

export default App;

