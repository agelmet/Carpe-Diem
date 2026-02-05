import React from 'react';

const teamMembers = [
    {
        name: "Δανάη Οικονόμου",
        img: "https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/696df7d3e125ef476e2fe3c7.jpg",
        desc: "Η Δανάη Οικονόμου, απόφοιτη Ψυχολογίας ΕΚΠΑ με MSc στην Κλινική Νευροψυχολογία, έχει εκπαιδευτεί στη Γνωσιακή Ψυχοθεραπεία (EABCT) και στην Κλινική Ψυχοπαθολογία («Παναγιώτης Ουλής»)."
    },
    {
        name: "Αγγελική Αποστολοπούλου",
        img: "https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/696df7d3d403b73ddb1548cd.jpg",
        desc: "Η Αγγελική Αποστολοπούλου, απόφοιτη Ψυχολογίας ΕΚΠΑ και Ιατρικής Σχολής Αθηνών (MSc), είναι εκπαιδευμένη στη Γνωσιακή Συμπεριφοριστική Θεραπεία (EABCT) και τη Χοροθεραπεία."
    },
    {
        name: "Σοφία Μπουρελάκη",
        img: "https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/696df7d34e42b938c1d78d8f.jpg",
        desc: "Η Σοφία Μπουρελάκη, κάτοχος MSc Ψυχολογίας (Κρήτη) και Κοινωνικής Ψυχολογίας (Lancaster), έχει εκπαιδευτεί στη Γνωσιακή Ψυχοθεραπεία και διαθέτει εμπειρία στην υποστήριξη εφήβων και ενηλίκων."
    },
    {
        name: "Ραφαήλ Σίμωσης",
        img: "https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/696df819e125efdd822ff20f.jpg",
        desc: "Ο Ραφαήλ Σίμωσης, αριστούχος απόφοιτος Ψυχολογίας ΕΚΠΑ και κάτοχος MSc της Ιατρικής Σχολής ΑΠΘ, έχει εκπαιδευτεί στη Γνωσιακή Συμπεριφορική Θεραπεία (EABCT) με εστίαση στην αντιμετώπιση άγχους και φοβιών."
    },
    {
        name: "Σήλια Βενετσάνου",
        img: "https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/696e6251f84d072ee2ff94cb.jpg",
        desc: "Η Σήλια Βενετσάνου, απόφοιτη Ψυχολογίας ΕΚΠΑ και κάτοχος MSc στη Γνωσιακή Συμπεριφοριστική Ψυχοθεραπεία (UCLan), έχει πραγματοποιήσει πρακτική στη θεραπεία rTMS και πληθώρα σχετικών επιμορφώσεων."
    },
    {
        name: "Αναστασία Μεντζελίδη",
        img: "https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/696df7d3e125ef9bf52fe3c6.jpg",
        desc: "Η Αναστασία Μεντζελίδη, απόφοιτη Ψυχολογίας (Sheffield) και MSc στις Συναισθηματικές Διαταραχές (King’s College), είναι εκπαιδευμένη στη CBT (EABCT) με κλινική εμπειρία σε Ελλάδα και Βρετανία."
    },
    {
        name: "Ελένη Σινάνου",
        img: "https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/696df7d3439b6bc3b46cca80.jpg",
        desc: "Η Ελένη Σινάνου, απόφοιτη Ψυχολογίας ΕΚΠΑ και MSc Εφαρμοσμένης Κλινικής Ψυχολογίας (UCLan), έχει εκπαιδευτεί στη Γνωσιακή Συμπεριφορική Θεραπεία (EABCT)."
    },
    {
        name: "Βίκη Αφεντουλίδου",
        img: "https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/696e6251eecbfa1f11385511.jpg",
        desc: "Η Βίκη Αφεντουλίδου, απόφοιτη Ψυχολογίας ΑΠΘ και εκπαιδευμένη στη Γνωσιακή Συμπεριφορική Θεραπεία, παρέχει ψυχολογική υποστήριξη σε παιδιά, εφήβους και ενήλικες."
    }
];

const Team: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-[#f4f1fa] font-manrope">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-center font-playfair text-4xl md:text-5xl font-bold text-[#2c243b] mb-16">
                Οι συνεργάτες του Carpe Diem
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, idx) => (
                    <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="h-64 overflow-hidden">
                            <img 
                                src={member.img} 
                                alt={member.name} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="font-playfair text-xl font-bold text-[#2c243b] mb-3">{member.name}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{member.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Team;