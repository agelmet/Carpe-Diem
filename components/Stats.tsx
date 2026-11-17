import React from 'react';

const Stats: React.FC = () => {
  return (
    <div className="relative py-24 px-6 flex items-center justify-center font-manrope overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
            className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed bg-center z-0"
            style={{ backgroundImage: "url('https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/696e6251c7f17f7713c16a2c.jpg')" }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[#2c243b]/80 z-10"></div>

        <div className="relative z-20 max-w-6xl w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            
            <div className="p-4">
                <div className="font-playfair text-5xl md:text-6xl font-bold mb-2 text-[#a78bfa]">9+</div>
                <div className="text-sm md:text-base font-medium tracking-wide opacity-90">Διαφορετικοί<br/>Συνεργάτες</div>
            </div>

            <div className="p-4">
                <div className="font-playfair text-5xl md:text-6xl font-bold mb-2 text-[#f472b6]">6+</div>
                <div className="text-sm md:text-base font-medium tracking-wide opacity-90">Κλάδοι<br/>Υπηρεσιών</div>
            </div>

            <div className="p-4">
                <div className="font-playfair text-5xl md:text-6xl font-bold mb-2 text-[#a78bfa]">100%</div>
                <div className="text-sm md:text-base font-medium tracking-wide opacity-90">Εξατομικευμένη<br/>Φροντίδα</div>
            </div>

            <div className="p-4">
                <div className="font-playfair text-5xl md:text-6xl font-bold mb-2 text-[#f472b6]">500+</div>
                <div className="text-sm md:text-base font-medium tracking-wide opacity-90">Ευχαριστημένοι<br/>Πελάτες</div>
            </div>

        </div>

        {/* Floating schedule box */}
        <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 z-30 bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl text-white text-right hidden lg:block">
            <h4 className="font-bold text-lg mb-1">Ωράριο Λειτουργίας</h4>
            <p className="text-sm opacity-80">Δευτέρα με Παρασκευή</p>
            <p className="text-xs opacity-60">(κατόπιν ραντεβού)</p>
        </div>
    </div>
  );
};

export default Stats;