import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { PersonaProvider } from './contexts/PersonaContext.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import SEO from './components/SEO.jsx';

import Home from './pages/Home.jsx';
import Resume from './pages/Resume.jsx';
import Projects from './pages/Projects.jsx';
import Leadership from './pages/Leadership.jsx';


export default function App() {
  return (
    <HelmetProvider>
      <PersonaProvider>
        <div className="min-h-full flex flex-col">
          <SEO />
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route index element={<Home />} />
              <Route path="resume" element={<Resume />} />
              <Route path="projects" element={<Projects />} />
              <Route path="leadership" element={<Leadership />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </PersonaProvider>
    </HelmetProvider>
  );
}


