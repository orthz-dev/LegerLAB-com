import React from 'react';

interface LegalProps {
  title: string;
}

const Legal: React.FC<LegalProps> = ({ title }) => {
  return (
    <main className="bg-white min-h-[60vh]">
      <section className="max-w-container mx-auto px-6 py-16">
        <h1 className="text-3xl font-black text-brand-strong mb-8 border-b border-brand-fresh pb-4">{title}</h1>
        <div className="prose text-brand-text max-w-3xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h3 className="text-xl font-bold text-brand-strong mt-6 mb-2">1. Disposizioni Generali</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3 className="text-xl font-bold text-brand-strong mt-6 mb-2">2. Trattamento Dati</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Legal;
