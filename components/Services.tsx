import React, { useEffect, useRef } from 'react';

const services = [
    {
        id: "01",
        title: "Ατομική Ψυχοθεραπεία Ενηλίκων",
        subtitle: "Διαχείριση άγχους, διάθεσης & προσωπικότητας.",
        items: [
            "Αγχώδεις διαταραχές (γενικευμένο άγχος, κρίσεις πανικού, φοβίες)",
            "Ιδεοψυχαναγκαστική Διαταραχή (OCD)",
            "Διαταραχές διάθεσης (κατάθλιψη, διπολική διαταραχή)",
            "Διαταραχές προσωπικότητας",
            "Χαμηλή αυτοεκτίμηση & δυσκολίες αυτοεικόνας",
            "Διατροφικές Διαταραχές & Ψυχωσικά σύνδρομα",
            "Διαχείριση θυμού & Αντιμετώπιση εξαρτήσεων",
            "Σωματοδυσμορφικές διαταραχές"
        ]
    },
    {
        id: "02",
        title: "Γνωσιακή Συμπεριφορική Θεραπεία (CBT)",
        subtitle: "Αναδόμηση σκέψεων & τροποποίηση συμπεριφοράς.",
        items: [
            "Αναγνώριση και αναδόμηση δυσλειτουργικών σκέψεων",
            "Εκπαίδευση σε γνωσιακά λάθη & Ψυχοεκπαίδευση",
            "Αντιμετώπιση φαύλων κύκλων συντήρησης",
            "Κατανόηση αλληλεπίδρασης συμπεριφοράς, σκέψεων και συναισθημάτων",
            "Τροποποίηση δυσλειτουργικών προτύπων",
            "Σύνδεση παρελθόντος & τραύματος με το παρόν",
            "Εκπαίδευση σε πρακτικές ασκήσεις CBT"
        ]
    },
    {
        id: "03",
        title: "Θεραπεία Ζεύγους",
        subtitle: "Ενίσχυση επικοινωνίας και συναισθηματικής σύνδεσης.",
        items: [
            "Βελτίωση επικοινωνίας και συναισθηματικής σύνδεσης",
            "Διαχείριση συγκρούσεων",
            "Αντιμετώπιση κρίσεων στη σχέση",
            "Ενίσχυση εμπιστοσύνης και συνεργασίας",
            "Υποστήριξη σε μεταβατικές φάσεις (γονεϊκότητα, αλλαγές ζωής)"
        ]
    },
    {
        id: "04",
        title: "Συμβουλευτική Γονέων",
        subtitle: "Υποστήριξη στον γονεϊκό ρόλο & την οικογένεια.",
        items: [
            "Ενίσχυση γονεϊκών δεξιοτήτων",
            "Διαχείριση συμπεριφοράς παιδιών και εφήβων",
            "Κατανόηση συναισθηματικών αναγκών του παιδιού",
            "Όρια, επικοινωνία και ρόλοι στην οικογένεια",
            "Υποστήριξη γονέων σε απαιτητικές φάσεις ανάπτυξης"
        ]
    },
    {
        id: "05",
        title: "Συμβουλευτική & Ψυχοεκπαίδευση",
        subtitle: "Διαχείριση κρίσεων & επαγγελματική ενδυνάμωση.",
        items: [
            "Υποστήριξη σε δύσκολες αποφάσεις και αλλαγές ζωής",
            "Διαχείριση κρίσεων",
            "Συμβουλευτική Επιχειρήσεων (HR)",
            "Ενδυνάμωση και αυτογνωσία"
        ]
    },
    {
        id: "06",
        title: "Τρόποι Ψυχοθεραπείας",
        subtitle: "Ευέλικτες επιλογές συνεδριών για κάθε ανάγκη.",
        items: [
            "Δια ζώσης: Εξάρχεια, Πειραιάς, Περιστέρι",
            "Online Ψυχοθεραπεία (Zoom, Viber, Skype)",
            "Κατ’ οίκον ψυχοθεραπεία"
        ]
    }
];

const Services: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const cards = document.querySelectorAll('.service-card-anim');
        const header = document.querySelector('.service-header-anim');
        
        if (header) observer.observe(header);
        cards.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className="bg-[#e7ddff] py-[30px] px-5 pb-[100px] font-manrope relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute -top-[10%] -right-[10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_70%)] pointer-events-none"></div>

            <div className="max-w-[1280px] mx-auto relative z-10">
                <div className="service-header-anim text-center mb-[70px] opacity-0 translate-y-10 transition-all duration-1000">
                    <h2 className="font-playfair text-[2.5rem] md:text-[3.5rem] text-[#2D2438] mb-[15px] font-extrabold tracking-[-0.5px]">
                        Υπηρεσίες Ψυχοθεραπείας & Συμβουλευτικής
                    </h2>
                    <p className="text-[1.2rem] text-[#5e4b75] max-w-[700px] mx-auto">
                        Ολοκληρωμένες θεραπευτικές προσεγγίσεις για ενήλικες, ζευγάρια και οικογένειες.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full">
                    {services.map((service, index) => (
                        <div 
                            key={service.id} 
                            className="service-card-anim group bg-white/90 backdrop-blur-md border border-white/80 rounded-3xl p-[30px] md:p-[40px] relative transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] shadow-[0_20px_40px_rgba(94,75,117,0.1)] hover:-translate-y-[15px] hover:shadow-[0_30px_60px_rgba(94,75,117,0.25)] hover:bg-white hover:z-10 opacity-0 translate-y-10"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Glowing Bottom Border */}
                            <div className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#a78bfa] to-[#f472b6] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100"></div>

                            <div className="font-playfair text-[4rem] font-extrabold absolute top-5 right-6 opacity-10 text-[#2D2438] leading-none transition-all duration-400 group-hover:opacity-20 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:bg-gradient-to-r group-hover:from-[#a78bfa] group-hover:to-[#f472b6] group-hover:text-transparent group-hover:bg-clip-text">
                                {service.id}
                            </div>

                            <h3 className="font-playfair text-[1.6rem] font-bold text-[#2D2438] mt-5 mb-2.5 leading-[1.3] relative z-10">
                                {service.title}
                            </h3>
                            
                            <p className="text-[0.95rem] text-[#887a9e] italic mb-6 border-b border-black/5 pb-4 relative z-10">
                                {service.subtitle}
                            </p>

                            <ul className="list-none p-0 m-0 relative z-10">
                                {service.items.map((item, i) => (
                                    <li key={i} className="text-[0.95rem] text-[#4a4a4a] mb-2.5 pl-5 relative">
                                        <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-[#937ab4] rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;