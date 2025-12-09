import React from 'react';
import productsData from '../data/products';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';

const Checkout: React.FC = () => {
  const product = productsData[0];
  const navigate = useNavigate();

  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-container mx-auto px-6">
        <h1 className="text-3xl font-black text-brand-strong mb-8">Checkout Sicuro</h1>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-brand-strong mb-4">Indirizzo di Spedizione</h2>
              <form className="grid grid-cols-2 gap-4">
                 <input type="text" placeholder="Nome" className="col-span-1 p-3 border rounded" />
                 <input type="text" placeholder="Cognome" className="col-span-1 p-3 border rounded" />
                 <input type="text" placeholder="Indirizzo" className="col-span-2 p-3 border rounded" />
                 <input type="text" placeholder="Città" className="col-span-1 p-3 border rounded" />
                 <input type="text" placeholder="CAP" className="col-span-1 p-3 border rounded" />
              </form>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-brand-strong mb-4">Metodo di Pagamento</h2>
              <div className="space-y-3">
                <div className="flex items-center p-4 border rounded cursor-pointer hover:border-brand-strong">
                  <input type="radio" name="payment" className="mr-3" defaultChecked />
                  <span className="font-bold">Carta di Credito / Debito</span>
                </div>
                <div className="flex items-center p-4 border rounded cursor-pointer hover:border-brand-strong">
                  <input type="radio" name="payment" className="mr-3" />
                  <span className="font-bold">PayPal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Column */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
              <h2 className="text-xl font-bold text-brand-strong mb-4">Riepilogo Ordine</h2>
              <div className="flex gap-4 mb-6 pb-6 border-b border-gray-100">
                <img src={product.image_link} className="w-16 h-16 object-cover rounded" alt="Thumb" />
                <div>
                   <h4 className="font-bold text-brand-strong text-sm">{product.title}</h4>
                   <p className="text-gray-500 text-xs">Qty: 1</p>
                </div>
                <div className="ml-auto font-bold">{product.price.toFixed(2)}€</div>
              </div>
              
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div className="flex justify-between"><span>Subtotale</span><span>{product.price.toFixed(2)}€</span></div>
                <div className="flex justify-between"><span>Spedizione</span><span className="text-green-600 font-bold">Gratis</span></div>
              </div>

              <div className="flex justify-between text-xl font-black text-brand-strong mb-6 pt-4 border-t">
                <span>Totale</span>
                <span>{product.price.toFixed(2)}€</span>
              </div>

              <button 
                onClick={() => alert('Demo Order Placed!')}
                className="w-full bg-brand-strong text-white font-bold py-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all"
              >
                COMPLETA ORDINE
              </button>
              
              <button 
                 onClick={() => navigate(RoutePath.ORDER)}
                 className="w-full text-center mt-4 text-xs text-gray-400 underline"
              >
                Torna allo shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
