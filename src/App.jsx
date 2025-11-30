import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MusicPlayer from './components/MusicPlayer';
import VideoGallery from './components/VideoGallery';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans bg-black text-white overflow-x-hidden selection:bg-neon-blue selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <MusicPlayer />
      <VideoGallery />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
