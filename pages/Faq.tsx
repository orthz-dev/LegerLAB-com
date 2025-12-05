import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FaqItem[] = [
    {
      question: "Cos'è il Collant Léger LAB?",
      answer: <p>È un collant multiuso imbevuto di Sali naturali del Mar Morto ad alta concentrazione con azione drenante, detossinante e anticellulite.</p>
    },
    {
      question: "A cosa serve?",
      answer: <p>Serve a drenare i liquidi e le tossine in eccesso grazie all'azione osmotica dei Sali. Indicato a tutti coloro che vogliono combattere in maniera efficace e veloce la sensazione di pesantezza e gonfiore lavorando al tempo stesso sulla ritenzione idrica e sugli inestetismi della cellulite.</p>
    },
    {
      question: "In cosa è diverso dalle bende?",
      answer: (
        <ul style={{ listStyle: 'none', paddingLeft: '25px' }}>
          <li style={{ marginBottom: '10px' }}><i className="fas fa-check" style={{ marginRight: '10px' }}></i>È semplicissimo da usare ma garantisce gli stessi benefici di un trattamento estetico con bendaggi.</li>
          <li style={{ marginBottom: '10px' }}><i className="fas fa-check" style={{ marginRight: '10px' }}></i>È multiuso, conviene a te e al pianeta.</li>
          <li style={{ marginBottom: '10px' }}><i className="fas fa-check" style={{ marginRight: '10px' }}></i>Copre allo stesso tempo piedi, caviglie, gambe, fianchi e glutei garantendo un'aderenza perfetta per tutta la durata del trattamento.</li>
          <li style={{ marginBottom: '10px' }}><i className="fas fa-check" style={{ marginRight: '10px' }}></i>Il Gel Attivo non cola, sei libera di muoverti senza sporcare.</li>
          <li><i className="fas fa-check" style={{ marginRight: '10px' }}></i>La sua comodità d'uso ti aiuta a mantenere una routine più regolare e a vedere prima i risultati.</li>
        </ul>
      )
    },
    {
      question: "Cosa trovo all'interno del Kit Collant?",
      answer: (
        <ul style={{ listStyle: 'none', paddingLeft: '25px' }}>
          <li style={{ marginBottom: '10px' }}><i className="fas fa-check" style={{ marginRight: '10px' }}></i>1 collant Léger LAB</li>
          <li style={{ marginBottom: '10px' }}><i className="fas fa-check" style={{ marginRight: '10px' }}></i>1 pantacartene effetto sauna</li>
          <li style={{ marginBottom: '10px' }}><i className="fas fa-check" style={{ marginRight: '10px' }}></i>1 slip monouso</li>
          <li style={{ marginBottom: '10px' }}><i className="fas fa-check" style={{ marginRight: '10px' }}></i>1 Gel Effetto Freddo</li>
          <li><i className="fas fa-check" style={{ marginRight: '10px' }}></i>La Guida al trattamento.</li>
        </ul>
      )
    },
    {
      question: "Che taglia devo prendere?",
      answer: <p>È taglia unica! La sua super elasticità lo fa aderire perfettamente al tuo corpo e lo rende adatto a tutte le taglie, 52 compresa. Inoltre, rispetto ad altri collant, copre anche piedi, caviglie e fianchi aumentando l'area di azione.</p>
    },
    {
      question: "Cos'è il Pantacartene?",
      answer: <p>È un pantalone in cartene (materiale plastico speciale) che si indossa sopra il collant imbevuto. Serve a creare un 'effetto sauna' che favorisce la penetrazione dei principi attivi e ti permette di muoverti liberamente senza sporcare in giro.</p>
    },
    {
      question: "Quanti trattamenti posso fare con il Kit Collant?",
      answer: <p>Il Kit Collant include il necessario per 1 trattamento completo. Il collant però è lavabile e riutilizzabile! Per i trattamenti successivi ti basterà acquistare la Ricarica di Gel Attivo.</p>
    },
    {
      question: "Quanti trattamenti posso fare con il Kit Collant + Kit Ricarica?",
      answer: <p>Con il Kit iniziale fai 1 trattamento. Con il Kit Ricarica (500ml) puoi fare circa 4 trattamenti aggiuntivi. In totale con i due prodotti hai un ciclo completo di 5 trattamenti.</p>
    },
    {
      question: "Quanto tempo devo tenere in posa i collant?",
      answer: <p>Il tempo di posa consigliato è di almeno 45-50 minuti. Puoi tenerlo anche di più se lo desideri, non ci sono controindicazioni.</p>
    },
    {
      question: "Quante volte posso fare il trattamento?",
      answer: <p>Per un'azione d'urto consigliamo 2 trattamenti a settimana per le prime 2 settimane, poi 1 volta a settimana come mantenimento. Ascolta sempre il tuo corpo!</p>
    },
    {
      question: "Come si lava il collant?",
      answer: <p>Lavalo a mano in acqua tiepida con un sapone neutro delicato. Non usare la lavatrice e non strizzarlo troppo forte. Lascialo asciugare all'aria lontano da fonti di calore dirette.</p>
    },
    {
      question: "Come si ricarica il collant?",
      answer: <p>È semplicissimo: metti il collant asciutto e pulito nella sua busta originale (o in una ciotola), versa circa 100-120ml di Gel Attivo (dalla Ricarica), chiudi e agita bene per distribuire il liquido. Lascia riposare per un'ora prima di indossarlo.</p>
    },
    {
      question: "Va bene anche per pelli sensibili?",
      answer: <p>Sì, gli ingredienti sono naturali. Tuttavia, essendo un prodotto a base salina, su pelli molto sensibili o con lesioni potrebbe pizzicare leggermente. Consigliamo di non usarlo su pelle lesa o appena depilata.</p>
    },
    {
      question: "Si può usare in gravidanza e allattamento?",
      answer: <p>In gravidanza e allattamento consigliamo sempre di consultare il proprio medico prima di utilizzare qualsiasi trattamento estetico, anche se naturale.</p>
    },
    {
      question: "È dermatologicamente testato?",
      answer: <p>Sì, i nostri prodotti sono dermatologicamente testati e formulati per ridurre al minimo i rischi di allergie.</p>
    },
    {
      question: "Che differenza c'è tra Gel Attivo e il Gel Effetto Freddo?",
      answer: <p>Il Gel Attivo (quello nel flacone grande o già nel collant) è a base di Sali del Mar Morto e serve per il trattamento drenante vero e proprio. Il Gel Effetto Freddo (tubetto piccolo) è un post-trattamento defaticante e tonificante da applicare sulle gambe asciutte dopo aver tolto il collant.</p>
    },
    {
      question: "Contengono parabeni o siliconi?",
      answer: <p>No, le nostre formule sono prive di parabeni, siliconi e petrolati. Puntiamo su ingredienti naturali e funzionali.</p>
    }
  ];

  return (
    <PageWrapper>
      <section style={{ backgroundColor: 'rgba(248, 249, 246, 0)', padding: '40px' }}>
        <h1 style={{ fontSize: '32px', textAlign: 'center', color: 'rgba(60, 81, 76, 1)', marginBottom: '30px' }}>
          FAQ
        </h1>

        <div style={{ display: 'grid', gridGap: '24px', padding: '10px', maxWidth: '1120px', margin: 'auto' }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
              style={{ borderRadius: '20px', backgroundColor: 'rgba(254, 235, 234, 1)', padding: '15px 20px' }}
            >
              <div
                className="faq-header"
                onClick={() => toggleFaq(index)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontSize: '20px',
                  color: 'rgba(60, 81, 76, 1)'
                }}
              >
                <span>{faq.question}</span>
                <i
                  className="fas fa-chevron-circle-up"
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                ></i>
              </div>
              <div
                className="faq-content"
                style={{
                  height: openIndex === index ? 'auto' : '0',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ fontSize: '16px', color: 'rgba(32, 10, 25, 1)', marginTop: '10px' }}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default FAQ;
