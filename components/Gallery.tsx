import React from 'react';

const images = [
    "https://storage.googleapis.com/msgsndr/61icdoMiJ2pHklO6mmKW/media/696e62514fade4a8593418f3.jpg",
    "https://storage.googleapis.com/msgsndr/61icdoMiJ2pHklO6mmKW/media/696e62519b21f0538d3fe256.jpg",
    "https://storage.googleapis.com/msgsndr/61icdoMiJ2pHklO6mmKW/media/696e6251df5fa55c217e5436.jpg",
    "https://storage.googleapis.com/msgsndr/61icdoMiJ2pHklO6mmKW/media/696e6251eecbfaa78b385513.png",
    "https://storage.googleapis.com/msgsndr/61icdoMiJ2pHklO6mmKW/media/696e5da815885e3ff0bda765.jpeg",
    "https://storage.googleapis.com/msgsndr/61icdoMiJ2pHklO6mmKW/media/696e6251c7f17f7713c16a2c.jpg"
];

const Gallery: React.FC = () => {
  return (
    <div className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-5">
            <h2 className="text-center font-playfair text-3xl text-[#2c243b] mb-12 font-bold">Χώρος & Στιγμές</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                {images.map((src, idx) => (
                    <div key={idx} className="relative aspect-square overflow-hidden group cursor-pointer">
                        <img 
                            src={src} 
                            alt={`Gallery ${idx + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-[#6a4c93]/0 group-hover:bg-[#6a4c93]/20 transition-colors duration-300"></div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Gallery;