import React from 'react';

const Schedule = () => {
  const events = [
    { date: "OCT 15", year: "2025", name: "Neon Nights Festival", location: "Tokyo, Japan", status: "Tickets Available" },
    { date: "NOV 02", year: "2025", name: "Underground Bass", location: "Berlin, Germany", status: "Sold Out" },
    { date: "DEC 31", year: "2025", name: "NYE Countdown", location: "New York, USA", status: "Selling Fast" },
    { date: "JAN 12", year: "2026", name: "Club Residency Launch", location: "London, UK", status: "RSVP" },
  ];

  return (
    <section id="schedule" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Tour <span className="text-neon-purple">Dates</span></h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {events.map((event, index) => (
            <div key={index} className="group flex flex-col md:flex-row items-center justify-between bg-gray-900/50 border border-gray-800 p-6 rounded-xl hover:border-neon-purple hover:bg-gray-900 transition-all duration-300">
              
              <div className="flex items-center gap-6 w-full md:w-auto mb-4 md:mb-0">
                <div className="flex flex-col items-center justify-center w-16 h-16 bg-gray-800 rounded-lg group-hover:bg-neon-purple group-hover:text-black transition-colors">
                  <span className="text-xs font-bold uppercase">{event.date.split(' ')[0]}</span>
                  <span className="text-xl font-bold">{event.date.split(' ')[1]}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{event.name}</h3>
                  <p className="text-gray-400 flex items-center gap-2 text-sm">
                    {event.location}
                  </p>
                </div>
              </div>

              <div className="w-full md:w-auto text-center md:text-right">
                 {event.status === "Sold Out" ? (
                   <span className="inline-block px-6 py-2 rounded-full bg-gray-800 text-gray-500 text-sm font-bold uppercase cursor-not-allowed">
                     Sold Out
                   </span>
                 ) : (
                   <button className="w-full md:w-auto px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors text-sm font-bold uppercase">
                     {event.status}
                   </button>
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
