import React from 'react';
import { useNavigate } from 'react-router-dom';

const Retailers: React.FC = () => {
  // Mock Data for Store List based on the provided HTML script
  const stores = [
      { name: "Farmacia Perani", address: "Via XXIV Maggio, 49, 25030 Paratico BS", phone: "+39 035 910479" },
      { name: "Argilla Aromatica", address: "Via Plinio, 7/A, 20129 Milano MI", phone: "+39 02 3952 0984" },
      { name: "Argilla Naturopatia", address: "Via Del Taglio, 29/B, 41121 Modena MO", phone: "+39 059 396 6238" },
      { name: "PARAFARMACIA HÉTIC", address: "Via XXV Aprile, 12 B, 52048 Monte San Savino AR", phone: "+39 351 526 8549" },
      { name: "Farmacia S. Agostino", address: "Piazzale degli Erri, 18, 41121 Modena MO", phone: "+39 059 216297" },
      { name: "Giulius (Roma)", address: "Circonvallazione Orientale, 4692, 00178 Roma RM", phone: "+39 06 4179 05301" },
      { name: "Giulius (Roma)", address: "Via Carlo Emery, 135, 00188 Roma RM", phone: "+39 06 4179 05455" },
      { name: "PARAFARMACIA SCIENTIA NATURAE", address: "Via Umberto I, 12, 35122 Padova PD", phone: "+39 049 227 0746" },
      { name: "Farmacia Vitali Solaro", address: "Via Milano, 10, 27015 Landriano PV", phone: "+39 0382 64367" },
      { name: "Erboristeria Campo Dei Fiori", address: "Viale Premuda, 24, 20129 Milano MI", phone: "+39 02 7600 5279" }
  ];

  return (
    <main className="bg-white font-lato overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="py-12 md:py-20 px-4 md:px-10">
         <div className="max-w-[1120px] mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
               <img src="/react-assets/images/icons/store-icon.webp" className="w-[120px] mb-6" alt="Store Icon" />
               <h1 className="text-[40px] md:text-[50px] font-normal text-brand-strong leading-tight mb-6">
                 Porta Léger LAB nel Tuo Punto Vendita
               </h1>
               <p className="text-[16px] text-brand-text mb-8 leading-relaxed">
                 Se sei un negozio, una farmacia, un rivenditore specializzato in benessere o un commerciale, Léger LAB ti offre un prodotto <strong>Made in Italy</strong> e ad alto potenziale di vendita. Il Kit Collant risponde direttamente alle esigenze di chi vuole combattere la pesantezza, il gonfiore e la cellulite in modo efficace e veloce.
               </p>
               <button className="bg-brand-soft text-brand-strong border border-brand-strong px-12 py-4 rounded-full font-normal text-[16px] hover:bg-white transition-colors">
                 DIVENTA RIVENDITORE
               </button>
            </div>
            <div className="flex justify-center">
               <img src="/react-assets/images/banners/store-image.webp" className="w-full max-w-[540px]" alt="Store" />
            </div>
         </div>
      </section>

      {/* OFFERTA PARTNER SECTION */}
      <section className="py-12 md:py-20 bg-white">
         <div className="max-w-[1120px] mx-auto px-4 md:px-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="order-2 md:order-1">
                  <img src="/react-assets/images/banners/partner-offer.webp" className="w-full max-w-[540px]" alt="Partner Offer" />
               </div>
               <div className="order-1 md:order-2">
                  <img src="/react-assets/images/icons/hands-icon.webp" className="w-[120px] mb-6" alt="Hands" />
                  <h2 className="text-[40px] md:text-[50px] text-brand-strong mb-6 font-normal">Cosa offriamo</h2>
                  <ul className="space-y-4 mb-8">
                     {[
                        { title: "Linea completa:", desc: "Una soluzione anticellulite innovativa e pronta all'uso che si differenzia nettamente dalle opzioni tradizionali." },
                        { title: "Target Vasto:", desc: "Il collant è taglia unica, superelastico, vestendo perfettamente fino alla taglia 52." },
                        { title: "Margini Competitivi:", desc: "Offriamo condizioni commerciali vantaggiose e supportiamo il sell-out nel tuo punto vendita." },
                        { title: "Supporto del brand:", desc: "Avrai accesso a materiali informativi e formativi, espositori, per arricchire l'esperienza dei tuoi clienti." }
                     ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                           <span className="text-brand-strong mt-1">✔</span>
                           <p className="text-brand-text text-[16px]">
                              <strong>{item.title}</strong> {item.desc}
                           </p>
                        </li>
                     ))}
                  </ul>
                  <a href="https://d1yei2z3i6k35z.cloudfront.net/5572744/68f95699977a9_LégerLAB-RETAILpartnership2025sito.pdf" target="_blank" rel="noreferrer">
                     <button className="bg-brand-soft text-brand-strong border border-brand-strong px-12 py-4 rounded-full font-normal text-[16px] hover:bg-white transition-colors">
                        SCARICA OFFERTA
                     </button>
                  </a>
               </div>
            </div>
         </div>
      </section>

      {/* WHO CHOSE US (Store Locator Placeholder) */}
      <section className="py-12 md:py-20 bg-white">
         <div className="max-w-[1120px] mx-auto px-4 md:px-10 text-center">
             <img src="/react-assets/images/icons/stars-decoration.webp" className="w-[71px] mx-auto mb-4" alt="Stars" />
             <h2 className="text-[40px] md:text-[50px] text-brand-strong mb-4 font-normal">Chi ci ha scelto</h2>
             <p className="text-[16px] text-brand-text max-w-3xl mx-auto mb-12">
               Siamo orgogliosi della rete di professionisti e rivenditori che hanno già scelto Léger LAB per l'innovazione e l'efficacia dei nostri trattamenti.
             </p>
             
             {/* Clean Code Map Placeholder - Visual List */}
             <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 max-h-[400px] overflow-y-auto text-left grid md:grid-cols-2 gap-4">
                {stores.map((store, i) => (
                   <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="font-bold text-brand-strong">{store.name}</h3>
                      <p className="text-sm text-gray-600">{store.address}</p>
                      <p className="text-sm text-gray-500">{store.phone}</p>
                   </div>
                ))}
             </div>
         </div>
      </section>

      {/* INFLUENCER / CREATOR SECTION */}
      <section className="py-12 md:py-20 bg-white">
         <div className="max-w-[1120px] mx-auto px-4 md:px-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div>
                  <img src="/react-assets/images/banners/influencer-promo.webp" className="w-full max-w-[564px]" alt="Influencer" />
               </div>
               <div>
                  <img src="/react-assets/images/icons/influencer-icon.webp" className="w-[120px] mb-6" alt="Icon" />
                  <h2 className="text-[40px] md:text-[50px] text-brand-strong mb-6 font-normal">Sei un creator?</h2>
                  <p className="text-[16px] text-brand-text mb-8 leading-relaxed">
                     Siamo sempre aperti a collaborazioni con chi condivide i nostri valori. La nostra filosofia va "oltre il prodotto": promuoviamo un vero stile di vita.<br/><br/>
                     Se sei un influencer, un beauty blogger o un content creator focalizzato sul benessere olistico, l'autocura (<strong>#selflove</strong>, <strong>#myritual</strong>) e la bellezza naturale, puoi diventare la voce di Léger LAB.
                  </p>
                  <button className="bg-brand-soft text-brand-strong border border-brand-strong px-12 py-4 rounded-full font-normal text-[16px] hover:bg-white transition-colors">
                     CONTATTACI
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 md:py-20 bg-brand-soft/30">
         <div className="max-w-[1120px] mx-auto px-4 md:px-10 text-center">
             <img src="/react-assets/images/icons/stars-decoration.webp" className="w-[71px] mx-auto mb-6" alt="Stars" />
             <h2 className="text-[40px] md:text-[50px] text-brand-strong mb-6 font-normal">Pronti a partire insieme?</h2>
             <p className="text-[16px] text-brand-text max-w-3xl mx-auto mb-8">
               Hai la giusta energia e sei pronto a trasformare la cura del corpo in un rituale di leggerezza? Non vediamo l’ora di sentirti per costruire un percorso di successo.
             </p>
             <a href="https://d1yei2z3i6k35z.cloudfront.net/5572744/68f95699977a9_LégerLAB-RETAILpartnership2025sito.pdf" target="_blank" rel="noreferrer">
                <button className="bg-white text-brand-strong px-12 py-4 rounded-full font-normal text-[16px] hover:opacity-90 shadow-sm">
                   SCARICA OFFERTA
                </button>
             </a>

             <div className="mt-12 p-8 bg-white rounded-2xl max-w-2xl mx-auto shadow-sm">
                <img src="/react-assets/images/icons/stars-decoration.webp" className="w-[50px] mx-auto mb-4" alt="Icon" />
                <h3 className="text-[16px] font-bold text-brand-strong mb-4 uppercase">Contatti diretti</h3>
                <div className="text-brand-text">
                   <p><a href="mailto:commerciale@legerlab.com" className="hover:underline">commerciale@legerlab.com</a></p>
                   <p>creator@legerlab.com</p>
                </div>
             </div>
         </div>
      </section>

    </main>
  );
};

export default Retailers;
