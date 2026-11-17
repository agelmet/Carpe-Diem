import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface VideoPlayerProps {
    src: string;
    poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(src);
            hls.attachMedia(video);
            return () => hls.destroy();
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = src;
        }
    }, [src]);

    return (
        <video 
            ref={videoRef} 
            controls 
            poster={poster}
            className="w-full rounded-2xl shadow-xl aspect-video bg-black"
        />
    );
};

const VideoSection: React.FC = () => {
    return (
        <div className="py-24 px-6 bg-[#e7ddff] font-manrope">
            <div className="max-w-7xl mx-auto space-y-20">
                
                {/* Video 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <span className="text-[#937ab4] tracking-widest text-sm font-bold mb-2 block">ΔΑΝΑΗ ΜΑΡΙΑ ΚΑΝΔΗΛΙΩΤΗ</span>
                        <h3 className="font-playfair text-3xl font-bold text-[#2c243b] mb-6">3 Κλειδιά για τη Διαχείριση μιας Δύσκολης Μέρας</h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Δεν είσαι ο μόνος/η που λυγίζει κάτω από την πίεση. Στο βίντεο αυτό αναλύουμε τρεις πυλώνες ψυχραιμίας:
                        </p>
                        <ul className="space-y-3 mb-6 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-[#6a4c93]">Αποδοχή:</span> Έχεις δικαίωμα να αισθάνεσαι άσχημα, χωρίς ενοχές.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-[#6a4c93]">Διαχείριση:</span> Ανακάλεσε μια μικρή "νίκη" ή συνήθεια που σε ηρεμεί.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-[#6a4c93]">Προοπτική:</span> Το αύριο είναι μια νέα μέρα.
                            </li>
                        </ul>
                        <p className="text-sm text-gray-600 bg-white/50 p-4 rounded-xl border-l-4 border-[#6a4c93]">
                            Χρειάζεστε περισσότερη στήριξη; Δείτε πώς το MindTime Pro σας προσφέρει πρόσβαση σε ειδικούς.
                        </p>
                    </div>
                    <div className="order-1 lg:order-2">
                        <VideoPlayer src="https://stream.mux.com/LSZGOFT3Kqyeaq01X0101xrahMQwocFa00V00ZcJpB00cujq00.m3u8" />
                    </div>
                </div>

                {/* Video 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                     <div className="order-1">
                        <VideoPlayer src="https://stream.mux.com/CtYau6mQ9C00GDxLjCmwhE5FONba00YZimPHNcdGPV5nY.m3u8" />
                    </div>
                    <div className="order-2">
                        <span className="text-[#937ab4] tracking-widest text-sm font-bold mb-2 block">ΔΑΝΑΗ ΜΑΡΙΑ ΚΑΝΔΗΛΙΩΤΗ</span>
                        <h3 className="font-playfair text-3xl font-bold text-[#2c243b] mb-6">6 Βήματα για την Επίλυση Προβλημάτων</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Νιώθετε ότι έχετε πελαγώσει; Ακολουθήστε αυτά τα 6 απλά βήματα:
                        </p>
                         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                            {[
                                "Ορισμός του προβλήματος",
                                "Λίστα Λύσεων",
                                "Επιλογή εύκολης λύσης",
                                "Σχεδιασμός Δράσης",
                                "Εφαρμογή Σχεδίου",
                                "Αξιολόγηση Αποτελέσματος"
                            ].map((step, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6a4c93] text-white flex items-center justify-center text-xs font-bold">{i+1}</span>
                                    {step}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VideoSection;