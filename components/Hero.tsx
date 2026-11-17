import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen min-h-[700px] overflow-hidden font-montserrat flex items-center justify-center md:justify-start">
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 animate-ken-burns"
        style={{ backgroundImage: "url('https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6982e7a22dd9855731ec8791.jpg')", imageRendering: 'auto' }} // auto is better for general photos than optimize-contrast in some browsers, but kept style intent
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/65 via-black/30 to-transparent z-[1]"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:pl-[8%] max-w-[800px] text-white text-center md:text-left">
        <h1 className="font-playfair text-[clamp(3.5rem,7vw,7rem)] font-medium leading-none mb-5 opacity-0 text-shadow-hero animate-[slideUpFade_1.2s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_forwards]">
          Carpe <span className="italic text-[#7a60f7]">Diem</span>
        </h1>
        
        <h2 className="text-[clamp(1.2rem,2vw,2rem)] font-normal tracking-[4px] uppercase mb-2.5 flex items-center justify-center md:justify-start gap-5 opacity-0 animate-[slideUpFade_1.2s_cubic-bezier(0.2,0.8,0.2,1)_0.5s_forwards]">
          <span className="hidden md:block w-[60px] h-[2px] bg-white"></span>
          Κέντρο Ψυχοθεραπείας
        </h2>

        <p className="text-[1.1rem] font-light mb-12 opacity-0 animate-[slideUpFade_1.2s_cubic-bezier(0.2,0.8,0.2,1)_0.8s_forwards]">
          Δανάη Μαρία Κανδηλιώτη & Συνεργάτες
        </p>

        <a 
          href="#section-xhiMnCY5Yd" // Linking to partners or locations as per intent, user link was #row-ekX6Y2dlvU
          className="relative inline-block py-5 px-12 border border-white/40 bg-white/10 backdrop-blur-md text-white uppercase tracking-[2px] text-[0.9rem] font-semibold no-underline overflow-hidden transition-all duration-500 opacity-0 animate-[slideUpFade_1.2s_cubic-bezier(0.2,0.8,0.2,1)_1.1s_forwards] hover:bg-white hover:text-[#7a60f7] hover:border-white hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(122,96,247,0.4)] group"
        >
          <span className="relative z-10">ΤΟΠΟΘΕΣΙΕΣ</span>
          <div className="absolute top-0 -left-[150%] w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-20deg] animate-[buttonShine_4s_infinite]"></div>
        </a>
      </div>
    </div>
  );
};

export default Hero;