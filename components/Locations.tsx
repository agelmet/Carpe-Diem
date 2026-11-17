import React from 'react';
import { MapPin } from 'lucide-react';

const locations = [
    { area: "Αθήνα (Εξάρχεια)", address: "Χαλκοκονδύλη 5 (6ος όροφος)", color: "bg-[#a78bfa]" },
    { area: "Πειραιάς", address: "Γρηγορίου Λαμπράκη 144 (6ος όροφος)", color: "bg-[#f472b6]" },
    { area: "Περιστέρι", address: "Ερυθραίας 15 (1ος όροφος)", color: "bg-[#a78bfa]" },
];

const Locations: React.FC = () => {
    return (
        <div className="py-24 bg-[#f9f7ff] px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="font-playfair text-4xl font-bold text-[#2c243b] mb-4">Οι Τοποθεσίες μας</h2>
                <div className="w-20 h-1 bg-[#6a4c93] mx-auto mb-16"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {locations.map((loc, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100 group">
                            <div className={`w-16 h-16 ${loc.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                                <MapPin size={32} />
                            </div>
                            <h3 className="font-playfair text-2xl font-bold text-[#2c243b] mb-2">{loc.area}</h3>
                            <p className="text-gray-600">{loc.address}</p>
                            
                            {/* Placeholder Map Visual */}
                            <div className="mt-8 h-48 w-full bg-gray-100 rounded-xl overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center opacity-30 bg-[url('https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/696dfe884e42b9fe31d918a4.png')] bg-contain bg-no-repeat bg-center grayscale"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest border border-gray-300 px-3 py-1 rounded">Map View</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Locations;