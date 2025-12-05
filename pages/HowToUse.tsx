import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';

const HowToUse: React.FC = () => {
  const navigate = useNavigate();
  
  // Using placeholders for the specific image assets derived from the HTML ID analysis
  // Note: In a real scenario, we'd map all 27 images. For this clean code, we mock the carousel.
  const steps = [
    "/assets/images/how-to/step-01-prepare.webp",
    "/assets/images/how-to/step-02-apply.webp",
    "/assets/images/how-to/step-03-wear.webp",
    "/assets/images/how-to/step-04-relax.webp",
    "/assets/images/how-to/step-05-remove.webp",
    "/assets/images/how-to/step-06-finish.webp"
  ];

  return (
    <main className="bg-white font-lato">
      
      {/* HEADER SECTION */}
      <section className="py-12 px-4 md:px-10">
         <div className="max-w-[1120px] mx-auto text-center">
            
            {/* Video Placeholder (Main) */}
            <div className="w-full max-w-[800px] mx-auto aspect-video bg-gray-100 rounded-xl flex items-center justify-center mb-8 overflow-hidden shadow-sm border border-gray-200">
               {/* In real implementation, use <video> or iframe with the source provided in JSON state */}
               <span className="text-brand-text/50 font-bold">Video Tutorial: Come si usa</span>
            </div>

            <h1 className="text-[20px] text-brand-strong font-normal mb-12">
               Scopri come si usa il Kit Collant Drenante Ricaricabile Léger LAB
            </h1>
         </div>
      </section>

      {/* CAROUSEL SECTION */}
      <section className="pb-20 px-4 md:px-10">
         <div className="max-w-[1120px] mx-auto">
             <div className="relative">
                {/* Simple Horizontal Scroll Container for Steps */}
                <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory scrollbar-hide">
                   {steps.map((src, index) => (
                      <div key={index} className="snap-center flex-shrink-0 w-[300px] md:w-[333px]">
                         <img 
                            src={src} 
                            alt={`Step ${index + 1}`} 
                            className="w-full rounded-[30px] shadow-sm border border-gray-100" 
                         />
                      </div>
                   ))}
                   {/* Placeholder for remaining steps */}
                   <div className="snap-center flex-shrink-0 w-[300px] md:w-[333px] bg-brand-soft/30 rounded-[30px] flex items-center justify-center text-brand-strong">
                      + Altri passaggi...
                   </div>
                </div>
             </div>
         </div>
      </section>
      
      {/* SECOND VIDEO SECTION */}
      <section className="py-12 px-4 md:px-10 bg-white">
         <div className="max-w-[1120px] mx-auto">
             <div className="grid md:grid-cols-2 gap-8">
                 <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-brand-text border border-gray-200">
                    <span>Video: Applicazione</span>
                 </div>
                 <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-brand-text border border-gray-200">
                    <span>Video: Risultati</span>
                 </div>
             </div>
         </div>
      </section>

      {/* FOOTER BANNER */}
      <section className="py-12 px-4 md:px-10 bg-white text-center">
         <div className="max-w-[1120px] mx-auto">
             <img src="/assets/images/icons/shipping-free.webp" className="w-[100px] mx-auto mb-4" alt="Box" />
             <p className="text-[16px] text-brand-strong mb-8">Spedizione gratuita</p>
             
             <img src="/assets/images/icons/shipping-fast.webp" className="w-[100px] mx-auto mb-4" alt="Box 2" />
             <p className="text-[16px] text-brand-strong">Spedizione veloce entro 2 giorni</p>
         </div>
      </section>

      <section className="py-12 bg-white text-center">
         <h3 className="text-[20px] text-brand-strong mb-8">Disponibile in farmacia e su</h3>
         <div className="flex justify-center">
             <a href="https://www.amazon.it/dp/B0CHB58SV3" target="_blank" rel="noreferrer">
               <img src="/assets/images/logos/partners/amazon-logo.webp" alt="Amazon" className="w-[167px]" />
             </a>
          </div>
      </section>

    </main>
  );
};

export default HowToUse;