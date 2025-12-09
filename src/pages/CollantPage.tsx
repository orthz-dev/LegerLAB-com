import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';
import PageWrapper from '../components/PageWrapper';
import Breadcrumbs from '../components/product/Breadcrumbs';
import IMAGES from '../utils/image-paths';

const CollantPage: React.FC = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      q: "Cos'è il Collant Drenante Anticellulite Léger LAB?",
      a: "È il collant drenante anticellulite imbevuto di Sali naturali del Mar Morto ad alta concentrazione con azione drenante, detossinante e anticellulite."
    },
    {
      q: "Il collant drenante funziona?",
      a: "Sì funziona! Già dopo i primi trattamenti vedrai le tue gambe più lisce e leggere. Il Gel Attivo drena i liquidi e le tossine in eccesso grazie all'azione osmotica dei Sali del Mar Morto."
    },
    {
      q: "In cosa è diverso dalle bende?",
      a: "È semplicissimo da usare ma garantisce gli stessi benefici. È multiuso, copre piedi, caviglie, gambe, fianchi e glutei. Il Gel non cola."
    },
    {
      q: "Cosa trovo all'interno del Kit?",
      a: "1 Collant Drenante, 1 pantacartene effetto sauna, 1 slip monouso, 1 Gel Effetto Freddo, Guida al trattamento."
    },
    {
      q: "Che taglia devo prendere?",
      a: "È taglia unica! La sua super elasticità lo fa aderire perfettamente al tuo corpo e lo rende adatto a tutte le taglie, 52 compresa."
    }
  ];

  const breadcrumbItems = [
    { name: 'Prodotti', url: '/prodotti' },
    { name: 'Collant Drenante', url: '/collant' }
  ];

  return (
    <PageWrapper>
      <Breadcrumbs items={breadcrumbItems} className="max-w-[1120px] mx-auto px-4 md:px-10 py-4" />
      <main className="overflow-x-hidden font-lato">
        {/* SECTION 1: INTRO / HERO */}
        <section className="py-10 md:py-[60px] bg-white">
          <div className="max-w-[1120px] mx-auto px-4 md:px-10">
            <div className="flex flex-col items-center text-center mb-8">
              <img
                src={IMAGES.icons.collant}
                alt="Collant"
                className="w-[120px] mb-4"
              />
              <h1 className="text-[40px] md:text-[50px] leading-tight text-brand-strong font-normal">
                Il Collant Drenante Anticellulite Léger LAB
              </h1>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-8 text-brand-text text-[16px] leading-relaxed">
              <p className="italic mb-4">Cos'è?</p>
              <p className="mb-4">
                Il Kit Collant Drenante Anticellulite Léger LAB è un trattamento estetico intensivo a base di Sali Naturali del Mar Morto contro gli inestetismi epidermici della cellulite.
              </p>
              <p>
                È indicato a tutti coloro che vogliono combattere in maniera efficace e veloce la sensazione di pesantezza e gonfiore, agendo al tempo stesso sulla ritenzione idrica e sugli inestetismi della pelle correlati.
              </p>
            </div>

            <div className="flex flex-col items-center mb-12">
              <img src={IMAGES.features.benefitsBadges} alt="Bollini" className="w-[320px] mb-8" />
              <button
                onClick={() => navigate(RoutePath.ORDER)}
                className="bg-brand-soft border border-brand-strong text-brand-strong px-12 py-3 rounded-full font-normal text-[16px] hover:opacity-90"
              >
                ACQUISTA ORA
              </button>
            </div>

            {/* CAROUSEL 1 (Static grid for simplicity) */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <img className="rounded-[30px] w-full" src={IMAGES.products.collantSolo} alt="Solo" />
              <img className="rounded-[30px] w-full" src={IMAGES.products.kit6Box} alt="Box" />
              <img className="rounded-[30px] w-full" src={IMAGES.products.kit1Lifestyle} alt="Legs" />
            </div>
          </div>
        </section>

        {/* SECTION 2: FEATURES (Taglia Unica) */}
        <section className="py-10 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 md:px-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="grid grid-cols-1 gap-4">
                  <img src={IMAGES.products.collantWearing1} className="rounded-[30px] w-full" alt="Wear 1" />
                  <img src={IMAGES.products.collantWearing2} className="rounded-[30px] w-full" alt="Wear 2" />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center">
                <img src={IMAGES.icons.collant} className="w-[120px] mx-auto mb-6" alt="Icon" />
                <h2 className="text-[40px] md:text-[50px] text-brand-strong mb-6 font-normal">Taglia unica Superelastica</h2>
                <p className="text-[16px] text-brand-strong mb-8">
                  Tutti i benefici dei bendaggi drenanti anticellulite senza la complicazione dell'applicazione. Il collant drenante anticellulite Léger Lab è facile da indossare e copre anche piedi, pancia e fianchi. A differenza delle bende drenanti anticellulite sei libera di muoverti grazie alla praticità del collant e alla soluzione gel che non cola.<br /><br />
                  Vestibilità fino alla taglia 52.
                </p>
                <img src={IMAGES.features.benefitsBadges} className="w-[320px] mx-auto mb-8" alt="Bollini" />
                <button
                  onClick={() => navigate(RoutePath.ORDER)}
                  className="bg-brand-fresh border border-brand-strong text-brand-strong px-12 py-3 rounded-full font-normal text-[16px]"
                >
                  ACQUISTA ORA
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: GEL ATTIVO */}
        <section className="py-10 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 md:px-10">
            <div className="flex flex-col items-center text-center">
              <img src={IMAGES.icons.ice} className="w-[83px] mb-4" alt="Ice Icon" />
              <h2 className="text-[40px] md:text-[50px] text-brand-strong mb-4 font-normal">Gel Effetto Freddo</h2>
              <p className="text-[16px] text-brand-strong max-w-3xl mb-8">
                Aggiungi un tocco di freschezza con il Gel Effetto Freddo, incluso nei Kit Collant Drenante Anticellulite Léger Lab, e massimizza l'effetto #feelLéger.<br /><br />
                La sua formula unica rivitalizza, tonifica e migliora la circolazione linfatica. Applica il gel sulla pelle asciutta dopo la doccia e goditi la sensazione di leggerezza sulle tue gambe.
              </p>
              <img src={IMAGES.features.benefitsBadges} className="w-[320px] mx-auto mb-8" alt="Bollini" />
              <button
                onClick={() => navigate(RoutePath.ORDER)}
                className="bg-brand-fresh border border-brand-strong text-brand-strong px-12 py-3 rounded-full font-normal text-[16px] mb-12"
              >
                ACQUISTA ORA
              </button>

              <div className="grid md:grid-cols-2 gap-4 w-full">
                <img src={IMAGES.products.gelApplication1} className="w-full rounded-[30px]" alt="Gel 1" />
                <img src={IMAGES.products.gelApplication2} className="w-full rounded-[30px]" alt="Gel 2" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: SEA SALT */}
        <section className="py-10 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 md:px-10 text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
              <img src={IMAGES.features.saltProcessA} className="rounded-[40px]" alt="Step A" />
              <img src={IMAGES.features.saltProcessB} className="rounded-[40px]" alt="Step B" />
              <img src={IMAGES.features.saltProcessC} className="rounded-[40px]" alt="Step C" />
              <img src={IMAGES.features.saltProcessD} className="rounded-[40px]" alt="Step D" />
            </div>

            <img src={IMAGES.icons.stars} className="w-[71px] mx-auto mb-4" alt="Stars" />
            <h2 className="text-[40px] md:text-[50px] text-brand-strong mb-4 font-normal">Perché scegliere il Sale del Mar Morto?</h2>
            <p className="text-[16px] text-brand-strong max-w-3xl mx-auto mb-8">
              Grazie alle sue particelle, più piccole rispetto agli altri sali, il Sale del Mar Morto <strong>viene assorbito più facilmente</strong> dalla pelle e <strong>penetra più in profondità</strong>. Questo, insieme all’alta concentrazione di minerali come magnesio e potassio, favorisce l’azione osmotica.<br />
              La combinazione di queste proprietà assicura <strong>benefici più profondi e duraturi</strong>, contribuendo a migliorare la texture della pelle, a combattere la ritenzione idrica e a ridurre gli inestetismi causati dalla cellulite.<br /><br />
              Al contrario del sale dell’Himalaya, il Sale del Mar Morto è il migliore alleato in ambito cosmetico e dermatologico.<br />
              Provalo con i Collant Drenanti Anticellulite Léger LAB.
            </p>
            <img src={IMAGES.features.benefitsBadges} className="w-[320px] mx-auto mb-8" alt="Bollini" />
            <button
              onClick={() => navigate(RoutePath.ORDER)}
              className="bg-brand-soft border border-brand-strong text-brand-strong px-12 py-3 rounded-full font-normal text-[16px]"
            >
              ACQUISTA ORA
            </button>
          </div>
        </section>

        {/* SECTION 5: GEL ATTIVO DETAILS */}
        <section className="py-10 bg-brand-soft">
          <div className="max-w-[1120px] mx-auto px-4 md:px-10 text-center">
            <img src={IMAGES.features.gelDetails} className="w-full max-w-[1226px] mx-auto" alt="Gel Active Details" />
          </div>
        </section>

        {/* SECTION 6: REFILL */}
        <section className="py-10 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 md:px-10 text-center">
            <img src={IMAGES.features.refillInfo} className="w-full max-w-[1286px] mx-auto mb-4" alt="Ricarica" />
            <p className="text-brand-text text-[14px] mb-8">* Kit Ricarica Léger LAB acquistabile separatamente</p>
          </div>
        </section>

        {/* SECTION 7: COMPARISON */}
        <section className="py-10 bg-brand-soft">
          <div className="max-w-[1120px] mx-auto px-4 md:px-10">
            <p className="text-center text-[20px] text-brand-strong mb-8">
              Perché amerai i Collant Drenanti Anticellulite Léger Lab rispetto alle bende anticellulite tradizionali.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <img src={IMAGES.features.comparisonVs1} className="w-full" alt="Vs" />
              <img src={IMAGES.features.comparisonVs2} className="w-full" alt="Vs" />
            </div>
          </div>
        </section>

        {/* SECTION 8: PRESS */}
        <section className="py-10 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 md:px-10 text-center">
            <h3 className="text-[20px] text-brand-strong mb-8">Dicono di noi</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <img src={IMAGES.logos.press.elle} alt="Elle" className="h-8 md:h-10 object-contain" />
              <img src={IMAGES.logos.press.vogue} alt="Vogue" className="h-8 md:h-10 object-contain" />
              <img src={IMAGES.logos.press.myPersonalTrainer} alt="MyPersonalTrainer" className="h-8 md:h-10 object-contain" />
              <img src={IMAGES.logos.press.corriere} alt="Corriere" className="h-8 md:h-10 object-contain" />
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQ */}
        <section className="py-20 bg-[#F8F9F6]">
          <div className="max-w-[1120px] mx-auto px-4 md:px-10">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                {/* Sidebar menu placeholder */}
              </div>
              <div className="md:col-span-8">
                <h2 className="text-[32px] text-center text-brand-strong mb-12">FAQ</h2>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <details key={idx} className="group bg-brand-soft rounded-[20px] p-6 cursor-pointer open:bg-brand-soft/80 transition-colors">
                      <summary className="flex justify-between items-center font-normal text-[18px] md:text-[20px] text-brand-strong list-none">
                        {faq.q}
                        <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <p className="mt-4 text-[16px] text-brand-strong leading-relaxed">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <a href="/faq" className="text-[18px] text-brand-strong underline">Vedi tutte</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: RETAILERS BANNER */}
        <section className="py-12 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 md:px-10 text-center">
            <h3 className="text-[20px] text-brand-strong mb-8">Disponibile in farmacia e su</h3>
            <div className="flex justify-center">
              <a href="https://www.amazon.it/dp/B0CHB58SV3" target="_blank" rel="noreferrer">
                <img src={IMAGES.logos.partners.amazon} alt="Amazon" className="w-[167px]" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};

export default CollantPage;
