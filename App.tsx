import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Services from './components/Services';
import Team from './components/Team';
import VideoSection from './components/VideoSection';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Locations from './components/Locations';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      
      {/* Sections with IDs for navigation scrolling */}
      <div id="section-vie21rBgE8"> 
        <Bio />
      </div>

      <div id="custom-code-FcRW2fuI3c">
        <Services />
      </div>

      <div id="section-xhiMnCY5Yd">
        <Team />
      </div>

      <div id="section-WfigpXzq9T">
        <VideoSection />
      </div>

      <Stats />
      
      <Gallery />
      
      <Locations />
      
      <Footer />
    </div>
  );
};

export default App;