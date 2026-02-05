import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full h-[90px] z-[1000] flex justify-between items-center px-5 md:px-10 transition-all duration-300 ${scrolled ? 'glass-nav' : 'bg-transparent'}`}>
        {/* Logo */}
        <div className="relative z-10 flex items-center">
          <div className="relative w-[60px] h-[60px] rounded-full bg-white border-2 border-white cursor-pointer opacity-0 animate-[fadeEntrance_1s_ease-out_forwards] hover:scale-105 transition-transform" onClick={() => window.scrollTo(0,0)}>
            <img 
              src="https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/696dfe884e42b9fe31d918a4.png" 
              alt="Carpe Diem Logo" 
              className="w-full h-full object-cover rounded-full block"
            />
            {/* Pulse Effect Pseudo-element replacement */}
            <div className="absolute top-0 left-0 w-full h-full rounded-full -z-10 animate-pulse-premium"></div>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center list-none">
          {['ΥΠΗΡΕΣΙΕΣ', 'ΣΥΝΕΡΓΑΤΕΣ', 'ΒΙΝΤΕΟ', 'ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ'].map((item, index) => {
            const hrefs = [
              '#custom-code-FcRW2fuI3c', 
              '#section-xhiMnCY5Yd', 
              '#section-WfigpXzq9T', 
              '#section-vie21rBgE8'
            ];
            return (
              <li key={index}>
                <a 
                  href={hrefs[index]} 
                  className="text-[#2c243b] font-semibold text-[0.95rem] tracking-[0.5px] px-3 py-2 rounded-xl transition-all hover:text-[#6a4c93] hover:bg-white/50"
                >
                  {item}
                </a>
              </li>
            );
          })}
          
          <li className="ml-2">
            <a 
              href="https://www.instagram.com/carpe_diem_health?igsh=ZDV4YzlpZzV6YmRk&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-white font-bold text-xs uppercase tracking-wide transition-all hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(106,76,147,0.2)] hover:shadow-[0_6px_15px_rgba(106,76,147,0.3)] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]"
            >
              Instagram
            </a>
          </li>
          <li>
            <a 
              href="https://www.tiktok.com/@my_carpe_diem?_r=1&_t=ZN-93Q8n0fuQZa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-white font-bold text-xs uppercase tracking-wide transition-all hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(106,76,147,0.2)] hover:shadow-[0_6px_15px_rgba(106,76,147,0.3)] bg-black border border-white/10 hover:bg-[#1a1a1a]"
            >
              TikTok
            </a>
          </li>
        </ul>

        {/* Mobile Toggle (3 Dots) */}
        <button 
          className={`flex md:hidden flex-col justify-between items-center w-[30px] h-[30px] bg-transparent border-none cursor-pointer z-[1002] transition-all duration-300 ${isOpen ? 'gap-0' : 'gap-1'}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={`bg-[#2c243b] transition-all duration-300 ${isOpen ? 'w-6 h-0.5 rounded-none rotate-45 translate-y-[2px]' : 'w-1.5 h-1.5 rounded-full'}`}></span>
          <span className={`bg-[#2c243b] transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-1.5 h-1.5 rounded-full'}`}></span>
          <span className={`bg-[#2c243b] transition-all duration-300 ${isOpen ? 'w-6 h-0.5 rounded-none -rotate-45 -translate-y-[2px] -mt-1' : 'w-1.5 h-1.5 rounded-full'}`}></span>
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-[#f4f1fa]/95 backdrop-blur-xl z-[1001] flex flex-col justify-center items-center transition-opacity duration-400 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {['ΥΠΗΡΕΣΙΕΣ', 'ΣΥΝΕΡΓΑΤΕΣ', 'ΒΙΝΤΕΟ', 'ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ'].map((item, index) => {
           const hrefs = [
            '#custom-code-FcRW2fuI3c', 
            '#section-xhiMnCY5Yd', 
            '#section-WfigpXzq9T', 
            '#section-vie21rBgE8'
          ];
          return (
            <a 
              key={index}
              href={hrefs[index]}
              onClick={toggleMenu}
              className={`text-[#2c243b] text-2xl font-semibold my-4 transition-all duration-400 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            >
              {item}
            </a>
          );
        })}
        
        <div className="mt-8 flex flex-col gap-4 items-center">
          <span className="text-sm tracking-widest text-gray-400 mb-2">ΕΠΙΚΟΙΝΩΝΙΑ</span>
           <a 
              href="https://www.instagram.com/carpe_diem_health?igsh=ZDV4YzlpZzV6YmRk&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={toggleMenu}
              className="px-6 py-2 rounded-full text-white font-bold text-sm uppercase tracking-wide bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]"
            >
              Instagram
            </a>
            <a 
              href="https://www.tiktok.com/@my_carpe_diem?_r=1&_t=ZN-93Q8n0fuQZa" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={toggleMenu}
              className="px-6 py-2 rounded-full text-white font-bold text-sm uppercase tracking-wide bg-black"
            >
              TikTok
            </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;