import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';

const BlogDidYouKnow: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="overflow-x-hidden font-lato bg-white">
      
      {/* HERO SECTION */}
      <section className="bg-brand-soft pt-10 pb-12 px-4 md:px-10 rounded-b-[50px] md:rounded-b-[70px]">
        <div className="max-w-[1120px] mx-auto text-center mt-8">
          <h1 className="text-[40px] md:text-[50px] italic font-normal text-brand-strong mb-6">Lo sapevi che</h1>
          <p className="text-[18px] md:text-[20px] font-light italic text-brand-strong max-w-3xl mx-auto leading-relaxed">
            I consigli della nostra Naturopata Cristina Fabris, esperta nel benessere psico-fisico della persona
          </p>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <div className="max-w-[1120px] mx-auto px-4 md:px-10 py-16 space-y-24">

        {/* 1. SONNO (Sleep) */}
        <section className="grid md:grid-cols-12 gap-8 items-center">
           <div className="md:col-span-8 text-center md:text-left">
              <h2 className="text-[32px] italic text-brand-strong mb-6">
                Lo sapevi che meno si dorme più si ingrassa?
              </h2>
              <p className="text-[18px] font-light text-brand-text leading-relaxed">
                La carenza di sonno altera i recettori responsabili della sensazione di appetito e di sazietà comportando un maggior apporto calorico durante il giorno. Dormire in modo regolare, almeno 7 ore a notte, normalizza il ritmo sonno-veglia, regolarizza il metabolismo e riduce la sensazione di fame.
              </p>
           </div>
           <div className="md:col-span-4 flex justify-center">
              <img src="https://d1yei2z3i6k35z.cloudfront.net/5572744/67a8b86dce4d5_Sonno.png" alt="Sonno" className="w-[120px]" />
           </div>
        </section>

        {/* 2. ACQUA (Water) */}
        <section className="grid md:grid-cols-12 gap-8 items-center">
           <div className="md:col-span-4 order-2 md:order-1 flex justify-center">
              <img src="https://d1yei2z3i6k35z.cloudfront.net/5572744/67a8b90a55f86_Bere.png" alt="Bere" className="w-[120px]" />
           </div>
           <div className="md:col-span-8 order-1 md:order-2 text-center md:text-left">
              <h2 className="text-[32px] italic text-brand-strong mb-6">
                Lo sapevi che bere di più diminuisce i liquidi in eccesso?
              </h2>
              <p className="text-[18px] font-light text-brand-text leading-relaxed mb-4">
                Quando non beviamo a sufficienza il nostro corpo trattiene acqua per creare delle riserve in caso di bisogno, al contrario bere molto favorisce il corretto drenaggio dei liquidi e permette al nostro corpo di non doverli trattenere.
              </p>
              <p className="text-[18px] font-light text-brand-text leading-relaxed">
                Quanta acqua bere? Un’idratazione corretta prevede l’assunzione di 20ml x Kg corporeo al giorno. Durante l’estate o durante il trattamento con Léger Lab è bene assumere almeno 30ml x Kg corporeo al giorno.
              </p>
           </div>
        </section>

        {/* 3. AVOCADO & NUTRITION */}
        <section>
           <div className="grid md:grid-cols-12 gap-8 items-center mb-12">
              <div className="md:col-span-8 text-center md:text-left">
                  <h2 className="text-[32px] italic text-brand-strong mb-6">
                    Lo sapevi che un avocado contiene più potassio di una banana?
                  </h2>
                  <p className="text-[18px] font-light text-brand-text leading-relaxed">
                    Per contrastare la cellulite è importantissimo seguire una dieta sana ricca di frutta e verdura. Una corretta assunzione di magnesio e potassio favorisce il drenaggio dei liquidi e delle tossine in eccesso. Ecco alcuni cibi anticellulite (molto buoni!) ottimi perché ricchi di sali minerali, antiossidanti e vitamine.
                  </p>
              </div>
              <div className="md:col-span-4 flex justify-center">
                 <img src="https://d1yei2z3i6k35z.cloudfront.net/5572744/67a8bc27a145e_Avo-bana.png" alt="Avocado Banana" className="w-[120px]" />
              </div>
           </div>
           
           {/* Nutrition Cards */}
           <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-white border border-brand-fresh/30 rounded-[20px] p-6 flex flex-col items-center text-center shadow-sm">
                  <img src="https://d1yei2z3i6k35z.cloudfront.net/5572744/67a8b9df03c8d_Legumi.png" className="w-[80px] mb-4" alt="Legumi" />
                  <h4 className="text-[16px] font-normal text-brand-strong mb-2">Cereali integrali e legumi</h4>
                  <p className="text-[14px] font-light text-brand-text">Ricchi di fibre e antiossidanti ma poveri di zuccheri, non aumentano i livelli glicemici nel sangue e vengono metabolizzati più rapidamente.</p>
               </div>
               <div className="bg-white border border-brand-fresh/30 rounded-[20px] p-6 flex flex-col items-center text-center shadow-sm">
                  <img src="https://d1yei2z3i6k35z.cloudfront.net/5572744/67a8ba56b4ee7_Mirtilli.png" className="w-[80px] mb-4" alt="Mirtilli" />
                  <h4 className="text-[16px] font-normal text-brand-strong mb-2">Mirtilli</h4>
                  <p className="text-[14px] font-light text-brand-text">Ricchi di antiossidanti prevengono l’invecchiamento cellulare, la vitamina C rafforza la parete dei vasi sanguini.</p>
               </div>
               <div className="bg-white border border-brand-fresh/30 rounded-[20px] p-6 flex flex-col items-center text-center shadow-sm">
                  <img src="https://d1yei2z3i6k35z.cloudfront.net/5572744/67a8ba654ab14_Mandorle-noci.png" className="w-[80px] mb-4" alt="Mandorle" />
                  <h4 className="text-[16px] font-normal text-brand-strong mb-2">Mandorle e noci</h4>
                  <p className="text-[14px] font-light text-brand-text">Ricche di potassio-magnesio e povere di sodio, i loro grassi sani della famiglia degli Omega 3 li rendono un’ottima fonte di energia.</p>
               </div>
           </div>
        </section>

        {/* 4. SALE (Sodium) */}
        <section className="grid md:grid-cols-12 gap-8 items-center">
           <div className="md:col-span-4 order-2 md:order-1 flex justify-center">
              <img src="https://d1yei2z3i6k35z.cloudfront.net/5572744/67a8bb4f2cbe5_Sale.png" alt="Sale" className="w-[120px]" />
           </div>
           <div className="md:col-span-8 order-1 md:order-2 text-center md:text-left">
              <h2 className="text-[32px] italic text-brand-strong mb-6">
                Lo sapevi che assumere troppo sodio favorisce il ristagno dei liquidi?
              </h2>
              <p className="text-[18px] font-light text-brand-text leading-relaxed mb-4">
                Il sodio per effetto osmotico trattiene l’acqua. Un’assunzione eccessiva favorisce la formazione della cellulite e riduce l’efficacia del trattamento.
              </p>
              <p className="text-[18px] font-light text-brand-text leading-relaxed">
                Utilizza il sale (preferibilmente iodato) con moderazione ed evita cibi in scatola, snack salati, salumi e insaccati.
              </p>
           </div>
        </section>

        {/* 5. PASSI (Steps) */}
        <section className="grid md:grid-cols-12 gap-8 items-center">
           <div className="md:col-span-8 text-center md:text-left">
              <h2 className="text-[32px] italic text-brand-strong mb-6">
                Sai quanti passi fai al giorno?
              </h2>
              <p className="text-[18px] font-light text-brand-text leading-relaxed mb-4">
                Tranquilla non devi contarli tu, lo può fare il tuo telefono al posto tuo! Ti bastano 2 click per abilitare il contapassi o scaricare una app dedicata. Monitorare i tuoi passi è una semplice abitudine che ti permette di conoscere meglio il tuo stile di vita e di mantenerti attiva.
              </p>
              <p className="text-[18px] font-light text-brand-text leading-relaxed">
                Quanti passi fare? Una buona media sono 6000 passi al giorno. Ti sembrano tanti? Inizia a monitorarli e vedrai che sono facilmente raggiungibili. La prossima volta, invece di prendere l’ascensore, fai le scale!
              </p>
           </div>
           <div className="md:col-span-4 flex justify-center">
              <img src="https://d1yei2z3i6k35z.cloudfront.net/5572744/67a8bac5a9ec5_Steps.png" alt="Passi" className="w-[120px]" />
           </div>
        </section>

        {/* 6. PIEDI (Feet Care) */}
        <section className="grid md:grid-cols-12 gap-8 items-center">
           <div className="md:col-span-4 order-2 md:order-1 flex justify-center">
              <img src="https://d1yei2z3i6k35z.cloudfront.net/5572744/67a8bb984e3e5_Cavilgie.png" alt="Caviglie" className="w-[193px]" />
           </div>
           <div className="md:col-span-8 order-1 md:order-2 text-center md:text-left">
              <h2 className="text-[32px] italic text-brand-strong mb-6 leading-tight">
                Lo sapevi che prendersi cura dei tuoi piedi e delle tue caviglie è il primo passo per combattere gli inestetismi della cellulite?
              </h2>
              <p className="text-[18px] font-light text-brand-text leading-relaxed mb-4">
                Attivare il microcircolo e migliorare l’appoggio plantare sono essenziali per riattivare il sistema linfatico, migliorare la qualità della pelle e darti quella sensazione di leggerezza che tanto desideri. Scegli scarpe belle ma comode, evita di indossare tacchi oltre i 4 cm e a fine giornata esegui degli auto-massaggi su caviglie e piedi.
              </p>
              <p className="text-[18px] font-light text-brand-text leading-relaxed">
                Non sai come farli? Puoi trovare il video tutorial sul nostro profilo Instagram.
              </p>
           </div>
        </section>

      </div>

      {/* FOOTER CTA TO MAGAZINE */}
      <section className="py-20 bg-white border-t border-brand-soft">
        <div className="max-w-[1120px] mx-auto px-4 md:px-10">
            <div className="grid md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-3 flex justify-center">
                    <img src="https://d1yei2z3i6k35z.cloudfront.net/5572744/65b7d60cc54b5_STELLINEV.png" className="w-[87px]" alt="Stars" />
                </div>
                <div className="md:col-span-9 text-center md:text-left">
                    <h2 className="text-[32px] font-italic font-normal text-brand-strong mb-4">Léger Magazine</h2>
                    <p className="text-[18px] font-light text-brand-text mb-8">
                        Oltre i prodotti, Léger LAB è un'esperienza di benessere a 360 gradi. In questa sezione troverai gli articoli per coltivare la tua bellezza interiore ed esteriore.
                    </p>
                    <button 
                        onClick={() => navigate(RoutePath.BLOG_MAGAZINE)}
                        className="bg-white text-brand-strong border border-brand-strong px-10 py-3 rounded-full font-normal text-[16px] hover:bg-brand-soft transition-colors shadow-sm"
                    >
                        Scopri gli articoli
                    </button>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDidYouKnow;
