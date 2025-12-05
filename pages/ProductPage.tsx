import React, { useEffect } from 'react';
import productsData from '../data/products';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';

const ProductPage: React.FC = () => {
  const product = productsData[0]; // Assuming single product for this demo
  const navigate = useNavigate();

  // JSON-LD Structure
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": [
      product.image_link
    ],
    "description": product.description,
    "sku": product.sku,
    "brand": {
      "@type": "Brand",
      "name": "Leger Lab"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://legerlab.com/shop-kit-drenante", 
      "priceCurrency": "EUR",
      "price": product.price.toString(),
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };

  useEffect(() => {
    // Dynamically update document title for SEO
    document.title = `${product.title} - Leger Lab Shop`;
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <main className="bg-white pb-20">
      {/* Inject JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-container mx-auto px-6 py-12">
        <article className="product-container grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Gallery Section */}
          <div className="space-y-4">
             <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-brand-soft shadow-inner">
               <img 
                 src={product.image_link} 
                 alt={product.title} 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
               />
             </div>
             <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden bg-brand-soft cursor-pointer opacity-70 hover:opacity-100">
                    <img src={`https://picsum.photos/200/200?random=${i}`} alt="Dettaglio" className="w-full h-full object-cover"/>
                  </div>
                ))}
             </div>
          </div>

          {/* Product Details - Google Shopping Ready Structure */}
          <div className="flex flex-col justify-center">
             <div className="mb-2 text-brand-text/60 font-bold uppercase tracking-widest text-xs">Trattamento Corpo</div>
             
             <h1 className="product-title text-3xl md:text-4xl font-black text-brand-strong mb-4">
               {product.title}
             </h1>

             <div className="product-price-box flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold text-brand-strong">{product.price.toFixed(2)}</span>
                <span className="currency text-xl text-brand-strong">€</span>
             </div>

             <div className="flex items-center gap-2 mb-8 text-green-700 font-medium bg-green-50 px-3 py-1 rounded-md w-fit">
                <span className="w-2 h-2 rounded-full bg-green-600"></span>
                <span className="availability">Disponibile</span>
             </div>

             <p className="text-brand-text text-lg leading-relaxed mb-8">
               {product.description}
             </p>

             {/* Size Selector Mockup */}
             <div className="mb-8">
               <label className="block text-sm font-bold text-brand-strong mb-2">SELEZIONA TAGLIA</label>
               <div className="flex gap-4">
                 {['S/M', 'L/XL'].map(size => (
                   <button key={size} className="border-2 border-brand-fresh rounded-lg px-6 py-2 font-bold text-brand-text hover:bg-brand-fresh hover:text-brand-strong transition-colors">
                     {size}
                   </button>
                 ))}
               </div>
             </div>

             <button 
               onClick={() => navigate(RoutePath.ORDER)}
               className="w-full bg-brand-strong text-white font-bold text-lg py-4 rounded-full shadow-xl hover:bg-brand-strong/90 transition-all mb-4"
             >
               AGGIUNGI AL CARRELLO
             </button>

             <p className="sku text-xs text-gray-400">SKU: {product.sku}</p>

             {/* Additional Info Tabs */}
             <div className="mt-12 border-t border-gray-100 pt-8 space-y-6">
                <details className="group cursor-pointer">
                  <summary className="flex justify-between items-center font-bold text-brand-strong list-none">
                    INCI / Ingredienti
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                    Aqua, Magnesium Sulfate (Sali di Epsom), Glycerin, Centella Asiatica Extract, Aesculus Hippocastanum Extract...
                  </p>
                </details>
                <details className="group cursor-pointer">
                  <summary className="flex justify-between items-center font-bold text-brand-strong list-none">
                    Spedizione
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                    Spedizione gratuita in tutta Italia. Consegna in 24/48 ore lavorative.
                  </p>
                </details>
             </div>
          </div>

        </article>
      </div>
    </main>
  );
};

export default ProductPage;