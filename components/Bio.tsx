import React from 'react';

const Bio: React.FC = () => {
  return (
    <div className="relative pt-[100px] md:pt-[100px] px-5 pb-[30px] bg-[#e7ddff] bg-[radial-gradient(at_top_right,rgba(255,255,255,0.5)_0%,transparent_60%)] flex justify-center font-manrope overflow-hidden">
      <div className="max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center relative z-[2]">
        
        {/* Image Box */}
        <div className="relative rounded-3xl h-[400px] md:h-[550px] w-full shadow-[0_20px_50px_rgba(45,36,56,0.15)] bg-[#dcd0f5] transition-all duration-400 group">
            {/* Desktop Decorative Border */}
            <div className="hidden md:block absolute top-5 left-5 -right-5 -bottom-5 border-2 border-white/60 rounded-3xl -z-10 transition-transform duration-400 group-hover:translate-x-2.5 group-hover:translate-y-2.5"></div>
            
            <img 
                src="https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/696df352b34b644fefad7b3c.jpeg" 
                alt="Δανάη Μαρία Κανδηλιώτη" 
                className="block w-full h-full object-cover object-top rounded-3xl md:group-hover:-translate-y-2.5 md:group-hover:shadow-[0_30px_60px_rgba(45,36,56,0.25)] transition-all duration-400"
            />
        </div>

        {/* Text Box */}
        <div className="text-[#2D2438] opacity-0 animate-[simpleFadeIn_1s_ease-out_0.2s_forwards]">
            <span className="text-[0.85rem] uppercase tracking-[3px] text-[#937ab4] font-extrabold mb-5 inline-block border-b-2 border-[#937ab4]/30 pb-1">
                FOUNDERS OF CARPE DIEM <br/>
                <span className="text-[0.7em]">ΔΑΝΑΗ ΜΑΡΙΑ ΚΑΝΔΗΛΙΩΤΗ & ΑΡΙΣΤΟΤΕΛΗΣ ΖΩΓΚΟΣ</span>
            </span>
            
            <h2 className="font-playfair text-[2.2rem] md:text-[3rem] leading-[1.1] mb-[30px] text-[#2D2438]">
                Δανάη Μαρία Κανδηλιώτη
                <span className="block text-[1.6rem] font-normal text-[#5e4b75] italic mt-2.5">Ψυχολόγος – Γνωσιακή Συμπεριφορική Ψυχοθεραπεύτρια (MSc)</span>
            </h2>

            <div className="space-y-6 text-[1.1rem] leading-[1.8] text-[#554a63] border-l border-[#937ab4]/30 pl-5">
                <p>Η Δανάη Μαρία Κανδηλιώτη είναι Ψυχολόγος – Γνωσιακή Συμπεριφορική Ψυχοθεραπεύτρια (MSc) & ιδρύτρια του Κέντρου Ψυχοθεραπείας Carpe Diem, με παρουσία στο κέντρο της Αθήνας, στον Πειραιά & το Περιστερι.</p>
                <p>Διαθέτει πολυετή κλινική εμπειρία και έχει εκπαιδευτεί σε σύγχρονες, επιστημονικά τεκμηριωμένες θεραπευτικές προσεγγίσεις, με βασικό άξονα τη Γνωσιακή Συμπεριφορική Θεραπεία στην οποία και έχει πραγματοποιήσει μακροχρόνια εκπαίδευση. Στο έργο της εστιάζει ιδιαίτερα στις αγχώδεις διαταραχές, τις διατροφικές καθώς και τις διαταραχές διάθεσης και προσωπικότητας.</p>
                <p>Με γνώμονα την ενσυναίσθηση, τον σεβασμό και τη δημιουργία μιας ασφαλούς θεραπευτικής σχέσης, στόχος της είναι να βοηθά κάθε άνθρωπο να κατανοεί τον εαυτό του, να ενδυναμώνεται και να βελτιώνει ουσιαστικά την ποιότητα ζωής του.</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Bio;