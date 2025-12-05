import React from 'react';

const About: React.FC = () => {
  return (
    <main className="bg-brand-soft/20 min-h-screen">
      <section className="max-w-container mx-auto px-6 py-20">
        <h1 className="text-4xl font-black text-brand-strong mb-12 text-center">Chi Siamo</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl shadow-sm">
          <div className="order-2 md:order-1 space-y-6 text-brand-text">
            <h2 className="text-2xl font-bold text-brand-strong">La Filosofia Leger Lab</h2>
            <p className="leading-relaxed">
              Leger Lab nasce dall'idea che il benessere debba essere accessibile, semplice ed efficace. 
              Crediamo nel potere degli elementi naturali combinati con la tecnologia tessile avanzata.
            </p>
            <p className="leading-relaxed">
              Ogni nostro prodotto è frutto di ricerca, passione e dedizione verso la cura del corpo femminile, 
              rispettando i ritmi naturali e l'equilibrio della pelle.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://picsum.photos/600/400?grayscale" 
              alt="Laboratorio Leger Lab" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;