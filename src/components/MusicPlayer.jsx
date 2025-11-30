import React from 'react';

const MusicPlayer = () => {
  return (
    <section id="music" className="py-20 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Music <span className="text-neon-purple">Portfolio</span></h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Spotify Artist Embed */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-green-500 transition-colors duration-300">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-green-500">Spotify</span> Releases
            </h3>
            <iframe 
              style={{ borderRadius: '12px' }} 
              src="https://open.spotify.com/embed/artist/7E6mO0Lbza7jF6LvBwVG31?utm_source=generator" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Spotify Player"
            ></iframe>
          </div>

          {/* Spotify Playlist Embed */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-green-500 transition-colors duration-300">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-green-500">Spotify</span> Playlist
            </h3>
            <iframe 
              style={{ borderRadius: '12px' }} 
              src="https://open.spotify.com/embed/playlist/37i9dQZF1E4yVeJZkaTfBl?utm_source=generator" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Spotify Playlist"
            ></iframe>
          </div>

          {/* SoundCloud Embed */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-orange-500 transition-colors duration-300 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-orange-500">SoundCloud</span> Mixes
            </h3>
            <iframe 
              width="100%" 
              height="352" 
              scrolling="no" 
              frameBorder="no" 
              allow="autoplay" 
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/isabasiru&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              title="SoundCloud Player"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
