import React from 'react';
import { Mail, Instagram, Phone, Music } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black relative border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Get In <span className="text-neon-purple">Touch</span></h2>
            <p className="text-gray-400 text-lg">
              Join me on this musical odyssey! Follow me on social media for exclusive content, or reach out directly for bookings and collaborations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:isa.herdyanto@gmail.com" className="group flex flex-col items-center gap-3 p-6 bg-gray-900/50 border border-gray-800 rounded-2xl w-32 md:w-40 hover:bg-gray-800 hover:border-neon-blue hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-black transition-colors">
                <Mail size={24} />
              </div>
              <span className="text-sm font-bold text-gray-300 group-hover:text-white">Email</span>
            </a>

            <a href="https://www.instagram.com/isabasiru/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 p-6 bg-gray-900/50 border border-gray-800 rounded-2xl w-32 md:w-40 hover:bg-gray-800 hover:border-pink-600 hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                <Instagram size={24} />
              </div>
              <span className="text-sm font-bold text-gray-300 group-hover:text-white">Instagram</span>
            </a>

            <a href="https://wa.me/6282117071800" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 p-6 bg-gray-900/50 border border-gray-800 rounded-2xl w-32 md:w-40 hover:bg-gray-800 hover:border-green-500 hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                <Phone size={24} />
              </div>
              <span className="text-sm font-bold text-gray-300 group-hover:text-white">WhatsApp</span>
            </a>

            <a href="https://open.spotify.com/artist/7E6mO0Lbza7jF6LvBwVG31" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 p-6 bg-gray-900/50 border border-gray-800 rounded-2xl w-32 md:w-40 hover:bg-gray-800 hover:border-green-400 hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-green-400 group-hover:bg-green-400 group-hover:text-white transition-colors">
                <Music size={24} />
              </div>
              <span className="text-sm font-bold text-gray-300 group-hover:text-white">Spotify</span>
            </a>
          </div>

          <div className="mt-20 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
            <p>&copy; 2025 Isabasiru. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
