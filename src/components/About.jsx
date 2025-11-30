import React from 'react';
import { motion } from 'framer-motion';
import { Disc, Headphones, Radio, Mic2, Heart, Zap, Sparkles, Music } from 'lucide-react';

const About = () => {
  const whyListen = [
    { icon: <Sparkles size={24} />, title: "Soulful Melodies", desc: "Vibes dripping with emotion." },
    { icon: <Zap size={24} />, title: "Fresh Beats", desc: "Killer sampling & mind-blowing sound." },
    { icon: <Radio size={24} />, title: "Captivating Rhythms", desc: "Beats that keep you movin'." },
    { icon: <Heart size={24} />, title: "Authenticity", desc: "Realness in every note." },
  ];

  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-neon-blue/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Interactive Image / Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              {/* Abstract Shape Container */}
              <div className="absolute inset-0 border-2 border-gray-800 rounded-[2rem] transform -rotate-6 hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gray-900 rounded-[2rem] transform rotate-3 overflow-hidden hover:rotate-0 transition-transform duration-500 shadow-2xl border border-gray-800 group">
                 {/* Placeholder for DJ Photo */}
                 <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center flex-col gap-4 p-6 text-center">
                    <Headphones size={80} className="text-gray-700 group-hover:text-neon-blue transition-colors duration-500" />
                    <p className="text-gray-500 text-sm italic">"Where creativity knows no bounds"</p>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content Side */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-none tracking-tighter">
                ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">ME</span>
              </h2>

              <div className="space-y-6 mb-8">
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  I’m <span className="text-white font-bold">Isa Herdyanto</span> known as <span className="text-neon-blue font-bold">isabasiru</span>, a passionate musician dedicated to crafting beats that linger in your mind long after the music fades.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  With a blend of <span className="text-neon-purple">trap</span>, <span className="text-neon-purple">rnb</span>, and <span className="text-neon-purple">soul</span>, I strive to create an immersive experience that transcends boundaries.
                </p>
                <div className="p-4 bg-gray-900/50 border-l-4 border-neon-blue rounded-r-lg">
                  <h4 className="text-white font-bold mb-1 flex items-center gap-2"><Music size={16}/> Infinite Creativity</h4>
                  <p className="text-sm text-gray-400">Dive into a world where creativity knows no bounds, where every track is a journey of sonic exploration.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Why Listen?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyListen.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-900 transition-colors">
                    <div className="text-neon-purple mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wide">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
