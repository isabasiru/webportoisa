import React from 'react';
import { Play, Youtube } from 'lucide-react';

const VideoGallery = () => {
  return (
    <section id="videos" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Videos & <span className="text-neon-blue">Mixes</span></h2>

        <div className="max-w-5xl mx-auto">
          {/* Featured Video Main Embed */}
          <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-[0_0_30px_rgba(0,243,255,0.1)] mb-12 group hover:border-neon-blue transition-colors duration-500">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/iLRrdsf-Q_8?list=PLcGK_sYVLy667LMNv8z9UZwlP8skEdy5o" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>

          {/* Link to Channel/Playlist */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="max-w-lg">
              <h3 className="text-2xl font-bold text-white mb-2">Latest Visuals</h3>
              <p className="text-gray-400 mb-6">Check out my latest performances, music videos, and studio sessions directly on YouTube.</p>
              
              <a 
                href="https://www.youtube.com/watch?v=iLRrdsf-Q_8&list=PLcGK_sYVLy667LMNv8z9UZwlP8skEdy5o" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 px-8 py-4 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300 rounded-full uppercase tracking-wider text-sm font-bold"
              >
                <Youtube size={20} />
                Watch Full Playlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
