import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';
import products from '../data/products';
import PageWrapper from '../components/PageWrapper';
import IMAGES from '../utils/image-paths';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper
      includeOrganizationSchema={true}
      includeWebSiteSchema={true}
    >
      <main className="overflow-x-hidden font-lato">
        {/* HERO SECTION */}
        <section
          className="relative pt-10 pb-[150px] bg-[#FBFBFB]"
          style={{
            backgroundImage: `url('${IMAGES.banners.heroBackground}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="max-w-[1120px] mx-auto px-4 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-[100px] md:mt-[150px]">
              <div className="flex flex-col items-start">
                <h1 className="text-[40px] md:text-[78px] leading-[50px] md:leading-[80px] font-normal text-brand-strong mb-6 font-lato">
                  LISCIA<br />SNELLA<br />LEGGERA
                </h1>
                <p className="text-[16px] md:text-[20px] text-brand-strong mb-8">
                  Il Collant Drenante Anticellulite<br />Made in Italy
                </p>
                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                  <button
                    onClick={() => navigate(RoutePath.ORDER)}
                    className="text-center bg-white text-brand-strong border border-brand-strong px-8 py-3 rounded-full font-normal text-[16px] hover:opacity-80 transition-opacity w-full md:w-auto"
                  >
                    ACQUISTA ORA
                  </button>
                  <button
                    onClick={() => navigate(RoutePath.COLLANT)}
                    className="text-center bg-white text-brand-strong border border-brand-strong px-8 py-3 rounded-full font-normal text-[16px] hover:opacity-80 transition-opacity w-full md:w-auto"
                  >
                    SCOPRI IL COLLANT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WELCOME / NEWSLETTER SECTION */}
        <section className="bg-brand-soft py-10 md:py-[45px] px-4 md:px-10">
          <div className="max-w-[1120px] mx-auto text-center">
            <h2 className="text-[24px] font-normal text-brand-strong mb-6 font-lato">Welcome in Léger LAB</h2>
            <p className="text-[16px] md:text-[20px] text-brand-strong mb-8 max-w-3xl mx-auto">
              Per te subito il <strong>10% DI SCONTO</strong> su tutti i nostri Kit Collant Drenanti Anticellulite su Amazon.it
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
              <button className="bg-brand-strong text-white border border-brand-strong px-8 py-3 rounded-full font-normal w-full md:w-auto">
                ISCRIVITI
              </button>
            </div>
          </div>
        </section>

        {/* PRESS / SOCIAL PROOF */}
        <section className="py-10 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 md:px-10 text-center">
            <h3 className="text-[20px] md:text-[24px] text-brand-strong mb-10">Dicono di noi</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <img src={IMAGES.logos.press.elle} alt="Elle" className="h-8 md:h-10 object-contain" />
              <img src={IMAGES.logos.press.vogue} alt="Vogue" className="h-8 md:h-10 object-contain" />
              <img src={IMAGES.logos.press.myPersonalTrainer} alt="MyPersonalTrainer" className="h-8 md:h-10 object-contain" />
              <img src={IMAGES.logos.press.corriere} alt="Corriere" className="h-8 md:h-10 object-contain" />
            </div>
          </div>
        </section>

        {/* STORE LOCATOR TEASER */}
        <section className="py-20 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 md:px-10">
            <div className="flex flex-col items-center text-center mb-12">
              <img src={IMAGES.icons.stars} alt="Stars" className="w-[70px] mb-6" />
              <h2 className="text-[30px] md:text-[50px] text-brand-strong mb-6">Dove trovarci</h2>
              <p className="text-[16px] text-brand-strong max-w-3xl">
                Siamo orgogliosi della rete di professionisti e rivenditori che hanno già scelto Léger LAB per l'innovazione e l'efficacia dei nostri trattamenti.
              </p>
            </div>
            <div className="w-full h-[400px] bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
              <p className="text-brand-text">Mappa Punti Vendita</p>
            </div>
          </div>
        </section>

        {/* PRODUCT EXPERIENCE */}
        <section className="py-10 md:py-20 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src={IMAGES.features.benefitsBadges} alt="Benefits" className="w-[320px] mx-auto md:mx-0 mb-8" />
              <h2 className="text-[30px] md:text-[50px] leading-tight text-brand-strong mb-4">
                Più semplice,<br />più efficace.<br />Ricaricabile.
              </h2>
              <p className="text-[16px] text-brand-strong mb-8">Da € 24,99</p>
              <button
                onClick={() => navigate(RoutePath.COLLANT)}
                className="bg-brand-soft text-brand-strong px-10 py-3 rounded-full font-normal text-[16px]"
              >
                SCOPRI IL COLLANT
              </button>
            </div>
            <div className="order-1 md:order-2">
              <img src={IMAGES.banners.legerExperience} alt="Leger Experience" className="w-full max-w-[800px]" />
            </div>
          </div>
        </section>

        {/* SOCIAL #feelLéger */}
        <section className="py-20 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[40px] md:text-[70px] text-brand-strong mb-4 font-lato">#feelLéger</h2>
              <p className="text-[16px] text-brand-strong mb-8">
                Seguici e scopri come in Léger LAB crediamo che la bellezza passi prima di tutto dal benessere della mente, del corpo e dello spirito.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/legerlab_official/" target="_blank" rel="noreferrer">
                  <img src={IMAGES.logos.social.instagram} alt="Instagram" className="w-10" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61550876933299" target="_blank" rel="noreferrer">
                  <img src={IMAGES.logos.social.facebook} alt="Facebook" className="w-10" />
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={IMAGES.logos.social.instagram3d} alt="Instagram 3D" className="w-full max-w-[500px]" />
            </div>
          </div>
        </section>

        {/* LEGS ON TOP */}
        <section className="py-10 bg-brand-soft relative overflow-hidden">
          <div className="max-w-[1120px] mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 relative z-10">
              <img src={IMAGES.banners.legsPromo} alt="Legs" className="w-full max-w-[600px]" />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left z-10 md:pl-10">
              <h2 className="text-[60px] md:text-[130px] leading-none font-normal text-brand-strong mb-4 font-lato">
                LEGS<br />ON<br />TOP
              </h2>
              <h3 className="text-[24px] md:text-[32px] text-brand-strong mb-4">10% DI SCONTO</h3>
              <p className="text-[16px] text-brand-strong">iscrivendoti alla newsletter. Valida su Amazon.it</p>
            </div>
          </div>
        </section>

        {/* BESTSELLERS */}
        <section className="py-20 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 md:px-10">
            <h2 className="text-[32px] text-brand-strong text-center mb-12">BESTSELLER</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col items-center text-center group">
                  <div className="overflow-hidden rounded-3xl mb-6 border border-gray-100 w-full max-w-[236px]">
                    <img src={product.image_link} alt={product.title} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-[16px] text-brand-strong font-normal mb-2 px-4">
                    {product.title.replace('LÉGER LAB', '')}
                  </h3>
                  <p className="text-[16px] font-bold text-brand-strong mb-4">€ {product.price.toFixed(2).replace('.', ',')}</p>
                  <p className="text-[14px] text-brand-strong mb-6 px-4 h-[80px] overflow-hidden">
                    {product.description}
                  </p>
                  <button
                    onClick={() => navigate(RoutePath.ORDER)}
                    className="bg-white text-brand-strong border border-brand-strong px-10 py-2 rounded-full font-normal text-[16px] hover:bg-brand-soft transition-colors"
                  >
                    ACQUISTA ORA
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SHIPPING ICONS */}
        <section className="py-12 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 md:px-10 grid grid-cols-2 gap-8 justify-items-center">
            <div className="flex flex-col items-center">
              <img src={IMAGES.icons.shippingFree} alt="Spedizione Gratuita" className="w-[100px] mb-4" />
              <p className="text-[16px] text-brand-strong">Spedizione gratuita</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={IMAGES.icons.shippingFast} alt="Spedizione Veloce" className="w-[100px] mb-4" />
              <p className="text-[16px] text-brand-strong">Spedizione veloce</p>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};

export default Home;
