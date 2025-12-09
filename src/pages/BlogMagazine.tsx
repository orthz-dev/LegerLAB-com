import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';

const BlogMagazine: React.FC = () => {
  const navigate = useNavigate();

  const articles = [
    {
      title: "Léger LAB: Leggerezza interiore ed esteriore",
      content: (
        <>
          <p>Benvenuta nel mondo di Léger LAB, dove crediamo che la vera bellezza nasca da un equilibrio tra corpo, mente e spirito. Il nostro nome, ispirato alla parola francese "Léger" (leggera), incarna la nostra essenza e il nostro desiderio di offrirti un'esperienza di benessere a 360 gradi.</p>
          <p className="mt-4 text-lg"><strong>Sentirsi Léger significa sentirsi bene.</strong></p>
          
          <h4 className="font-bold text-brand-strong mt-6 mb-2 text-lg">Perché Léger? Perché crediamo nella leggerezza come stile di vita</h4>
          <p>In Léger LAB, interpretiamo la leggerezza come una sensazione di <strong>benessere totale</strong>: un corpo sano e tonico, una mente serena e uno spirito libero. Questa filosofia guida ogni nostra scelta, dalla selezione di ingredienti naturali e performanti alla creazione di rituali di bellezza semplici ed efficaci.</p>
          
          <h4 className="font-bold text-brand-strong mt-6 mb-2 text-lg">La cura di sé come punto di partenza</h4>
          <p>"La gioia è meta e destino", recita un articolo che abbiamo letto. Questa frase racchiude la nostra filosofia: <strong>la cura di sé è il primo passo</strong> per vivere una vita piena e appagante. Non si tratta di ossessionarsi con la cura del corpo, ma di dedicare del tempo a se stessi, per ascoltarsi e rigenerarsi.</p>
          <p className="mt-2"><strong>Perché la cura?</strong> Perché, come esseri umani, la cura è essenziale, e non possiamo prenderci cura degli altri se prima non ci prendiamo cura di noi stessi. Prendersi cura di sé significa dare valore al tempo, riappropriarsene e dargli una forma.</p>
          
          <h4 className="font-bold text-brand-strong mt-6 mb-2 text-lg">Léger LAB diventa così un rituale di bellezza olistico</h4>
          <p>I prodotti Léger LAB sono pensati per essere un <strong>momento di coccola e benessere</strong>, un'occasione per riconnettersi con te stessa, riscoprire la tua bellezza autentica.</p>

          <h4 className="font-bold text-brand-strong mt-6 mb-2 text-lg">Il nostro Collant Drenante Anticellulite diventa così il tuo alleato:</h4>
          <ul className="list-disc pl-5 mt-2 space-y-2">
             <li><strong>Facile da usare:</strong> basta indossare il collant e rilassarsi per 45 minuti, o se vuoi puoi anche muoverti liberamente!</li>
             <li><strong>Ingredienti efficaci e naturali:</strong> la formula ai Sali del Mar Morto drena, tonifica e leviga la pelle. Il gel attivo è una soluzione salina satura e contiene oltre il 98% di ingredienti naturali.</li>
             <li><strong>Ricaricabile e riutilizzabile:</strong> facile da ricaricare, perfetto per un trattamento continuativo e senza sprechi.</li>
          </ul>
          
          <p className="mt-8 font-medium text-brand-strong">Léger LAB è il tuo partner per un percorso verso la bellezza e il benessere. <em>#feelLéger e goditi ogni istante!</em></p>
        </>
      )
    },
    {
      title: "Indie beauty, Benessere e Collant Drenante Anticellulite",
      content: (
        <>
           <p>Nel vivace mondo dell'<strong>Indie Beauty</strong>, dove i <strong>marchi indipendenti</strong> stanno rivoluzionando il settore cosmetico, <strong>Léger LAB</strong> emerge come un'oasi di <strong>benessere olistico</strong> e <strong>bellezza naturale</strong>.</p>
           <p className="mt-2">Ispirato dalla parola francese "Léger" (leggera), il brand incarna i valori di questa rivoluzione: amore per la pelle, rispetto per l'ambiente e una connessione autentica con la community.</p>
           
           <p className="mt-4">Il <strong>valore aggiunto</strong> di Léger LAB risiede nella <strong>praticità e nell'efficacia</strong> dei suoi prodotti, a partire dal <strong>Kit Collant Drenante Anticellulite</strong>. Questo trattamento intensivo, a base di <strong>Sali Naturali del Mar Morto</strong>, è pensato per chi desidera <strong>gambe al top</strong> senza complicazioni.</p>
           
           <h4 className="font-bold text-brand-strong mt-6 mb-2 text-lg">Cosa rende il nostro collant così speciale?</h4>
           <ul className="list-disc pl-5 mt-2 space-y-2">
             <li><strong>Facilità d'uso:</strong> dimentica le bende scomode! Il collant è facile da indossare, basta infilarlo e rilassarsi.</li>
             <li><strong>Praticità:</strong> a differenza delle bende tradizionali, il collant <strong>non cola</strong> e ti permette di muoverti liberamente.</li>
             <li><strong>Comodità:</strong> il collant copre <strong>piedi, caviglie, gambe, fianchi e glutei</strong>, garantendo un'aderenza perfetta.</li>
             <li><strong>Meno sprechi:</strong> il collant è <strong>ricaricabile e riutilizzabile</strong>, una scelta vantaggiosa per te e per l'ambiente.</li>
             <li><strong>Efficacia:</strong> la formula ai Sali del Mar Morto <strong>drena, tonifica e leviga la pelle</strong>, combattendo la ritenzione idrica e gli inestetismi della cellulite.</li>
           </ul>
           
           <p className="mt-6">Con Léger LAB, la tua beauty routine diventa un rituale di leggerezza e armonia.</p>
        </>
      )
    },
    {
      title: "Body Care: non solo Skincare!",
      content: (
        <>
          <p>Siamo abituate a dedicare tempo e attenzione alla cura del viso, ma spesso dimentichiamo che <strong>la bellezza è un concetto olistico</strong> che coinvolge tutto il corpo.</p>
          <p className="mt-2">La <strong>body care</strong> è fondamentale per prenderci cura della nostra pelle, delle nostre gambe e dei nostri piedi, regalandoci una sensazione di <strong>benessere totale</strong> e <strong>leggerezza</strong>.</p>
          
          <ul className="list-disc pl-5 mt-6 space-y-3">
             <li><strong>Gambe Leggere per una vita leggera:</strong> prenditi cura delle tue gambe con massaggi drenanti e trattamenti specifici.</li>
             <li><strong>Piedi curati per gambe al top:</strong> scegli scarpe comode, esegui auto-massaggi e non trascurare la pedicure. I piedi ti ringrazieranno!</li>
             <li><strong>Esfoliazione delicata per gambe radiose:</strong> esfolia la pelle una o due volte a settimana per rimuovere le cellule morte e favorire il rinnovamento cellulare.</li>
             <li><strong>Idratazione profonda e gambe da brivido:</strong> applica quotidianamente una crema idratante su tutto il corpo, per una pelle morbida, elastica e luminosa.</li>
          </ul>
          <p className="mt-6 font-medium">Con Léger LAB, <strong>trasforma la tua routine di body care in un rituale di bellezza</strong> che ti farà sentire <strong>#feelLéger</strong> dalla testa ai piedi!</p>
        </>
      )
    },
    {
      title: "Rivoluziona il concetto di cellulite (e ama anche le tue imperfezioni!)",
      content: (
        <>
           <p>La cellulite <strong>non è una malattia, ma un'imperfezione che puoi amare (e trattare).</strong></p>
           <p className="mt-2">La cellulite è un inestetismo che affligge molte donne, spesso vissuto con disagio e frustrazione. Ma se cambiassimo prospettiva? La cellulite non è una malattia, ma una caratteristica comune a molte donne, <strong>un'imperfezione che può essere accettata, amata</strong> (e migliorata).</p>
           
           <p className="mt-4">Certo, la cellulite può farti sentire a disagio, ma non deve definire la tua autostima. Impara ad <strong>amare il tuo corpo e la tua anima,</strong> le tue imperfezioni, a prenderti cura di te con dolcezza e consapevolezza.</p>
           
           <ul className="list-disc pl-5 mt-6 space-y-3">
              <li><strong>Accettazione:</strong> non paragonarti agli standard irrealistici dei social media. Ogni corpo è unico e meraviglioso.</li>
              <li><strong>Consapevolezza:</strong> informati sulle cause della cellulite, affidati ad un esperto e adotta uno stile di vita sano per trattarla e migliorarla.</li>
              <li><strong>Amore e tempo per Sé:</strong> dedica del tempo a te stessa, per coccolarti e rigenerarti, come atto di cura e amore per te.</li>
              <li><strong>Trattamenti efficaci:</strong> scegli trattamenti specifici che ti aiutino a migliorare l'aspetto della tua pelle e a sentirti meglio con te stessa, come il nostro Kit Collant Drenante Anticellulite Léger LAB.</li>
           </ul>
           
           <p className="mt-6">Ricorda: <strong>la bellezza è sentirsi bene nella propria pelle</strong>. Noi di Léger LAB vogliamo aiutarti a trasformare <strong>la tua cellulite in un punto di forza, prenderti cura di te stessa</strong> e riscoprire la tua <strong>bellezza autentica</strong>!</p>
        </>
      )
    }
  ];

  return (
    <main className="overflow-x-hidden font-lato bg-white">
      {/* HERO */}
      <section className="bg-brand-soft pt-20 pb-24 px-4 md:px-10 rounded-b-[70px]">
        <div className="max-w-[1120px] mx-auto text-center">
          <h1 className="text-[50px] font-italic font-normal text-brand-strong mb-6">Léger Magazine</h1>
          <p className="text-[20px] font-light italic text-brand-strong max-w-3xl mx-auto">
            Benessere a 360° firmato Léger LAB: articoli e approfondimenti per nutrire corpo, mente e spirito, e prenderti cura di te.
            <br/>Scopri i benefici del collant drenante anticellulite e molto altro.
          </p>
        </div>
      </section>

      {/* ARTICLES LIST (Accordion Style) */}
      <section className="py-16 px-4 md:px-10">
         <div className="max-w-[1120px] mx-auto">
            <h2 className="text-[20px] font-light italic text-brand-strong mb-8 border-b border-gray-100 pb-2 inline-block">I nostri articoli:</h2>
            
            <div className="space-y-6">
               {articles.map((article, index) => (
                  <details key={index} className="group bg-white rounded-[20px] border border-brand-soft/50 p-6 md:p-8 cursor-pointer shadow-sm hover:shadow-md open:shadow-lg open:bg-brand-soft/10 transition-all">
                     <summary className="flex justify-between items-center font-italic text-[20px] md:text-[24px] text-brand-strong list-none select-none">
                        {article.title}
                        <span className="text-2xl text-brand-text/50 group-open:rotate-180 transition-transform ml-4">▼</span>
                     </summary>
                     <div className="mt-8 text-[16px] md:text-[18px] font-light text-brand-text leading-relaxed space-y-4 animate-fadeIn">
                        {article.content}
                     </div>
                  </details>
               ))}
            </div>
         </div>
      </section>

      {/* FOOTER CTA TO "LO SAPEVI CHE" */}
      <section className="py-20 bg-brand-soft/30 border-t border-brand-soft">
         <div className="max-w-[1120px] mx-auto px-4 md:px-10">
            <div className="grid md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-3 flex justify-center">
                   <img src="https://d1yei2z3i6k35z.cloudfront.net/5572744/65b7d60cc54b5_STELLINEV.png" className="w-[87px]" alt="Stars" />
                </div>
                <div className="md:col-span-9 text-center md:text-left">
                    <h2 className="text-[32px] font-italic font-normal text-brand-strong mb-4">Lo sapevi che</h2>
                    <p className="text-[18px] font-light text-brand-text mb-8 max-w-2xl">
                       I consigli della nostra Naturopata Cristina Fabris, esperta nel benessere psico-fisico della persona.
                    </p>
                    <button 
                       onClick={() => navigate(RoutePath.BLOG_DID_YOU_KNOW)}
                       className="bg-white text-brand-strong border border-brand-strong px-10 py-3 rounded-full font-normal text-[16px] hover:bg-brand-soft transition-colors shadow-sm"
                    >
                       Scopri i consigli
                    </button>
                </div>
            </div>
         </div>
      </section>
    </main>
  );
};

export default BlogMagazine;
