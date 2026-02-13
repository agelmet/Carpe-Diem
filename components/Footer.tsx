import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#e7ddff] pt-20 pb-10 px-6 font-manrope">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
            
            {/* Logo & Brand */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                 <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg mb-6">
                    <img 
                        src="https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/696dfe884e42b9fe31d918a4.png" 
                        alt="Logo" 
                        className="w-full h-full object-cover rounded-full"
                    />
                 </div>
                 <h3 className="font-playfair text-2xl font-bold text-[#2c243b]">Carpe Diem</h3>
                 <p className="text-[#6a4c93] text-sm font-medium tracking-wide">ΚΕΝΤΡΟ ΨΥΧΟΘΕΡΑΠΕΙΑΣ</p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6 text-[#2c243b] items-center md:items-start">
                <h4 className="font-playfair text-xl font-bold mb-2">Επικοινωνία</h4>
                
                <a href="tel:6988250491" className="flex items-center gap-3 hover:text-[#6a4c93] transition-colors">
                    <Phone size={20} className="text-[#6a4c93]" />
                    <span className="font-semibold">698 825 0491</span>
                </a>
                 <a href="tel:6981421964" className="flex items-center gap-3 hover:text-[#6a4c93] transition-colors">
                    <Phone size={20} className="text-[#6a4c93]" />
                    <span className="font-semibold">698 142 1964</span>
                </a>
                
                <a href="mailto:carpediempsychotherapy24@gmail.com" className="flex items-center gap-3 hover:text-[#6a4c93] transition-colors">
                    <Mail size={20} className="text-[#6a4c93]" />
                    <span>carpediempsychotherapy24@gmail.com</span>
                </a>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-6 items-center md:items-start">
                 <h4 className="font-playfair text-xl font-bold mb-2">Social Media</h4>
                 <div className="flex gap-4">
                     <a href="https://www.instagram.com/carpe_diem_health" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#bc1888] hover:-translate-y-1 transition-transform">
                        <Instagram size={24} />
                     </a>
                     <a href="https://www.tiktok.com/@my_carpe_diem" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-black shadow-md flex items-center justify-center text-white hover:-translate-y-1 transition-transform">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                     </a>
                 </div>
            </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-[#2c243b]/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <p>© {new Date().getFullYear()} Carpe Diem. All rights reserved.</p>
            <p className="flex items-center gap-1">
                Designed by <a href="https://advonmedia.com" className="font-bold text-[#6a4c93] hover:underline">Advon Media</a>
            </p>
        </div>
    </footer>
  );
};

export default Footer;