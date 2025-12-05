
import React, { useRef, useState, useEffect } from 'react';
import productsData from '../data/products';
import { Product } from '../types';
import PageWrapper from '../components/PageWrapper';
import { ProductSchema } from '../components/product/ProductSchema';

interface CartItem extends Product {
   quantity: number;
}

const OrderPage: React.FC = () => {
   // Get featured product for schema
   const featuredProduct = productsData[0]; // Kit 6 trattamenti

   // Initialize cart with all products having 0 quantity
   const [items, setItems] = useState<CartItem[]>(
      productsData.map(p => ({ ...p, quantity: 0 }))
   );

   const checkoutSectionRef = useRef<HTMLDivElement>(null);

   // Initialize default selection (first product = 1) on mount only
   useEffect(() => {
      setItems(prev => {
         const newItems = [...prev];
         if (newItems[0]) newItems[0].quantity = 1;
         return newItems;
      });
   }, []);

   // --- CALCULATIONS ---
   const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
   const shippingCost = subtotal >= 45 || subtotal === 0 ? 0 : 5; // Free if > 45, or if cart is empty (0)
   const total = subtotal + shippingCost;
   const hasItems = subtotal > 0;

   // --- HANDLERS ---

   // Top Section: Selects one product (qty=1), resets others, scrolls down
   const handleMacroSelect = (productId: string) => {
      setItems(prev => prev.map(p => ({
         ...p,
         quantity: p.id === productId ? 1 : 0
      })));

      setTimeout(() => {
         checkoutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
   };

   // Checkout Section: Increment/Decrement
   const updateQuantity = (productId: string, delta: number) => {
      setItems(prev => prev.map(p => {
         if (p.id === productId) {
            const newQty = Math.max(0, p.quantity + delta);
            return { ...p, quantity: newQty };
         }
         return p;
      }));
   };

   return (
      <PageWrapper>
         <ProductSchema product={featuredProduct} />
         <main className="font-lato w-full overflow-x-hidden bg-[#FEEBEA]">

            {/* --- SECTION 1: MACRO PRODUCT SELECTION --- */}
            <section className="py-12 md:py-20">
               <div className="max-w-[1120px] mx-auto px-4">
                  <div className="text-center mb-12">
                     <h1 className="text-[32px] md:text-[40px] text-brand-strong font-light">
                        Scegli il tuo prodotto
                     </h1>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                     {items.map((product) => {
                        const isSelected = product.quantity > 0 && items.filter(i => i.quantity > 0).length === 1 && items.find(i => i.quantity > 0)?.id === product.id;

                        return (
                           <div
                              key={product.id}
                              onClick={() => handleMacroSelect(product.id)}
                              className={`
                        group relative bg-white rounded-[40px] p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 border-2 aspect-square
                        ${isSelected ? 'border-brand-strong shadow-2xl scale-[1.02]' : 'border-transparent shadow-lg hover:shadow-xl hover:-translate-y-2'}
                    `}
                           >
                              <div className="w-full h-[60%] mb-4 flex items-center justify-center overflow-hidden">
                                 <img
                                    src={product.image_link}
                                    alt={product.title}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                 />
                              </div>

                              <div className="mt-auto">
                                 <h3 className="text-[16px] font-bold text-brand-strong uppercase tracking-wide mb-2 leading-snug">
                                    {product.title.replace(' - ', '\n')}
                                 </h3>

                                 <p className="text-[24px] font-bold text-brand-strong">
                                    € {product.price.toFixed(2).replace('.', ',')}
                                 </p>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </section>

            {/* --- SECTION 2: CHECKOUT --- */}
            <section ref={checkoutSectionRef} className="py-12 md:py-20 pt-0">
               <div className="max-w-[1120px] mx-auto px-4">

                  <div className="text-center mb-10">
                     <div className="flex items-center justify-center gap-2 text-brand-strong mb-2">
                        <span className="text-2xl">✨</span>
                        <span className="text-[18px] font-light">Goditi un mese di Leggerezza</span>
                     </div>
                     <h2 className="text-[40px] md:text-[50px] leading-none font-normal text-brand-strong">
                        Completa il tuo ordine
                     </h2>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-8 items-start">

                     {/* --- LEFT COLUMN: USER DATA & BENEFITS --- */}
                     <div className="lg:col-span-7 space-y-6">

                        {/* 1. USER DATA FORM */}
                        <div className="bg-white rounded-[30px] p-6 md:p-8 shadow-sm border border-gray-100 text-brand-text">
                           <h3 className="text-[22px] font-normal mb-6 text-brand-strong">Inserisci i tuoi dati</h3>

                           <div className="flex items-center gap-6 mb-6 text-[14px]">
                              <label className="flex items-center gap-2 cursor-pointer">
                                 <input type="radio" name="type" defaultChecked className="accent-brand-strong w-4 h-4" />
                                 Persona fisica
                              </label>
                              <label className="flex items-center gap-2 cursor-pointer">
                                 <input type="radio" name="type" className="accent-brand-strong w-4 h-4" />
                                 Società
                              </label>
                           </div>

                           <form className="grid gap-4">
                              <input type="text" placeholder="Nome e Cognome" className="w-full p-3 border border-gray-200 rounded-lg focus:border-brand-strong outline-none transition-colors bg-white" />
                              <input type="text" placeholder="Indirizzo" className="w-full p-3 border border-gray-200 rounded-lg focus:border-brand-strong outline-none transition-colors bg-white" />
                              <div className="grid grid-cols-2 gap-4">
                                 <input type="text" placeholder="Codice postale" className="w-full p-3 border border-gray-200 rounded-lg focus:border-brand-strong outline-none transition-colors bg-white" />
                                 <input type="text" placeholder="Città" className="w-full p-3 border border-gray-200 rounded-lg focus:border-brand-strong outline-none transition-colors bg-white" />
                              </div>
                              <input type="email" placeholder="Indirizzo email" className="w-full p-3 border border-gray-200 rounded-lg focus:border-brand-strong outline-none transition-colors bg-white" />
                              <div className="flex">
                                 <div className="p-3 border border-r-0 border-gray-200 rounded-l-lg bg-gray-50 text-gray-500">🇮🇹 +39</div>
                                 <input type="tel" placeholder="Numero di Telefono" className="w-full p-3 border border-gray-200 rounded-r-lg focus:border-brand-strong outline-none transition-colors bg-white" />
                              </div>
                           </form>
                        </div>

                        {/* 2. BENEFITS BOX */}
                        <div className="bg-white rounded-[30px] p-6 md:p-8 shadow-sm border border-gray-100 text-brand-strong">
                           <h3 className="text-[22px] font-normal mb-6 text-center">Perché lo amerai?</h3>
                           <ul className="space-y-4">
                              {[
                                 "5 Trattamenti Drenanti Anticellulite",
                                 "Facili e Comodissimi",
                                 "Ricaricabili e meno sprechi",
                                 "Kit Completo con Gel Effetto Freddo",
                                 "98% di Ingredienti Naturali",
                                 "Made in Italy"
                              ].map((item, idx) => (
                                 <li key={idx} className="flex items-center gap-3 text-[15px]">
                                    <span className="flex-shrink-0 text-brand-text">✔</span>
                                    <span>{item}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>

                     </div>

                     {/* --- RIGHT COLUMN: PRODUCT SUMMARY & CHECKOUT --- */}
                     <div className="lg:col-span-5 space-y-6">

                        {/* 1. MINI PRODUCT SELECTOR (Quantity Control) */}
                        <div className="bg-white rounded-[30px] p-6 shadow-sm border border-gray-100 text-brand-strong">
                           <h3 className="text-[18px] font-bold mb-4">Il tuo ordine</h3>

                           <p className="text-xs text-gray-500 mb-4">Aggiungi prodotti al carrello:</p>

                           {/* Mini Product Buttons */}
                           <div className="grid grid-cols-3 gap-3 mb-6">
                              {items.map((p) => {
                                 const isActive = p.quantity > 0;
                                 return (
                                    <div
                                       key={p.id}
                                       className={`
                                    relative flex flex-col items-center p-2 rounded-xl border-2 transition-all
                                    ${isActive
                                             ? 'border-brand-strong bg-brand-soft/20'
                                             : 'border-gray-100 bg-white'}
                                 `}
                                    >
                                       <div className="w-full aspect-square mb-2 bg-white rounded-lg overflow-hidden p-1">
                                          <img src={p.image_link} alt={p.title} className="w-full h-full object-contain" />
                                       </div>
                                       <div className="text-[10px] leading-tight font-bold text-center h-8 overflow-hidden flex items-center justify-center mb-2">
                                          {p.title.split(' - ')[0]}
                                       </div>

                                       {/* Quantity Controls */}
                                       <div className="flex items-center justify-center gap-2 w-full">
                                          <button
                                             onClick={() => updateQuantity(p.id, -1)}
                                             className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${p.quantity === 0 ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300 text-brand-strong'}`}
                                             disabled={p.quantity === 0}
                                          >
                                             -
                                          </button>
                                          <span className="text-sm font-bold w-4 text-center">{p.quantity}</span>
                                          <button
                                             onClick={() => updateQuantity(p.id, 1)}
                                             className="w-6 h-6 rounded-full bg-brand-strong text-white flex items-center justify-center text-sm font-bold hover:bg-brand-text transition-colors"
                                          >
                                             +
                                          </button>
                                       </div>
                                    </div>
                                 );
                              })}
                           </div>

                           {/* Order Summary List */}
                           <div className="space-y-3 mb-6 border-t border-gray-100 pt-4">
                              {!hasItems && (
                                 <div className="text-center py-4 text-gray-400 text-sm">
                                    Il carrello è vuoto.
                                 </div>
                              )}
                              {items.filter(i => i.quantity > 0).map((item, index) => (
                                 <div key={`${item.id}-${index}`} className="flex gap-3 items-center animate-fadeIn">
                                    <div className="w-[40px] h-[40px] bg-white rounded-md border border-gray-100 flex-shrink-0 overflow-hidden">
                                       <img src={item.image_link} className="w-full h-full object-contain" alt="" />
                                    </div>
                                    <div className="flex-grow text-sm">
                                       <div className="font-bold leading-tight">{item.title}</div>
                                       <div className="text-xs text-gray-500">Qty: {item.quantity}</div>
                                    </div>
                                    <div className="font-bold text-sm whitespace-nowrap">
                                       € {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                                    </div>
                                 </div>
                              ))}
                           </div>

                           {/* Shipping & Total */}
                           {hasItems && (
                              <div className="space-y-2 pt-4 border-t border-gray-100 text-[14px]">
                                 <div className="flex justify-between text-gray-600">
                                    <span>Subtotale</span>
                                    <span>€ {subtotal.toFixed(2).replace('.', ',')}</span>
                                 </div>
                                 <div className="flex justify-between items-center text-gray-600">
                                    <div className="flex items-center gap-1 group relative cursor-help">
                                       <span>Spedizione</span>
                                       <span className="text-xs text-gray-400 border border-gray-400 rounded-full w-4 h-4 flex items-center justify-center">i</span>

                                       {/* Tooltip */}
                                       <div className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                                          Spedizione gratuita per ordini superiori a 45€. Altrimenti 5,00€.
                                          <div className="absolute top-full left-4 border-4 border-transparent border-t-gray-800"></div>
                                       </div>
                                    </div>

                                    {shippingCost === 0 ? (
                                       <span className="text-green-600 font-bold text-xs bg-green-50 px-2 py-1 rounded">GRATIS</span>
                                    ) : (
                                       <span>€ {shippingCost.toFixed(2).replace('.', ',')}</span>
                                    )}
                                 </div>
                              </div>
                           )}

                           {/* Grand Total */}
                           <div className="flex justify-between items-end border-t border-gray-100 pt-4 mb-4 mt-4">
                              <div className="flex flex-col">
                                 <span className="text-[16px] font-bold text-brand-strong">Totale</span>
                              </div>
                              <div className="text-[32px] font-bold text-brand-strong">
                                 € {total.toFixed(2).replace('.', ',')}
                              </div>
                           </div>

                           {/* Footer Actions */}
                           <div className="flex gap-2 mb-6">
                              <input type="text" placeholder="Gift card o codice sconto" className="flex-grow p-2 border border-gray-200 rounded-lg text-sm outline-none" />
                              <button className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors">Applica</button>
                           </div>

                           <label className="flex items-center gap-2 mb-6 cursor-pointer text-[12px] text-gray-500">
                              <input type="checkbox" className="w-4 h-4 accent-brand-strong rounded" />
                              <span>Accetto <a href="#" className="underline text-brand-strong">Termini e Condizioni</a></span>
                           </label>

                           <button
                              disabled={!hasItems}
                              className="w-full bg-brand-soft text-brand-strong border border-brand-strong font-bold text-[18px] py-4 rounded-full hover:bg-[#E8D6D5] transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                           >
                              Acquista ora
                           </button>
                        </div>

                        {/* 2. PAYMENT METHOD (Moved below total logic for flow) */}
                        <div className="bg-white rounded-[30px] p-6 shadow-sm border border-gray-100 text-brand-strong">
                           <h3 className="text-[18px] font-normal mb-4">Metodo di Pagamento</h3>

                           <div className="border border-gray-200 rounded-xl overflow-hidden mb-3">
                              <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
                                 <div className="flex items-center gap-3">
                                    <input type="radio" name="payment" defaultChecked className="w-4 h-4 accent-brand-strong" />
                                    <span className="font-bold text-sm">Carta di credito</span>
                                 </div>
                                 <div className="flex gap-1">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-4" alt="Visa" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-4" alt="Mastercard" />
                                 </div>
                              </div>
                              <div className="p-4 grid gap-3 bg-white">
                                 <div className="relative">
                                    <input type="text" placeholder="Numero di carta" className="w-full p-3 pl-10 border border-gray-200 rounded-lg text-sm outline-none focus:border-brand-strong" />
                                    <span className="absolute left-3 top-3 text-gray-400">💳</span>
                                 </div>
                                 <div className="grid grid-cols-2 gap-3">
                                    <input type="text" placeholder="MM / AA" className="w-full p-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-brand-strong" />
                                    <input type="text" placeholder="CVC" className="w-full p-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-brand-strong" />
                                 </div>
                              </div>
                           </div>

                           {/* Other payment options */}
                           <label className="border border-gray-200 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors mb-2">
                              <div className="flex items-center gap-3">
                                 <input type="radio" name="payment" className="w-4 h-4 accent-brand-strong" />
                                 <span className="font-bold text-sm">PayPal</span>
                              </div>
                              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="PayPal" />
                           </label>

                           <label className="border border-gray-200 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
                              <div className="flex items-center gap-3">
                                 <input type="radio" name="payment" className="w-4 h-4 accent-brand-strong" />
                                 <span className="font-bold text-sm">Contrassegno (+€4,00)</span>
                              </div>
                              <span>💵</span>
                           </label>
                        </div>

                     </div>
                  </div>
               </div>
            </section>

         </main>
      </PageWrapper>
   );
};

export default OrderPage;
