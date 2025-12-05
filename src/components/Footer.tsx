import React from 'react';
import { RoutePath } from '../types';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-brand-strong text-white pt-16 pb-4 font-lato">
      <div className="max-w-[1120px] mx-auto px-6">
        
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand & Hashtag */}
          <div className="md:col-span-5 flex flex-col items-start">
            <img 
              src="https://d1yei2z3i6k35z.cloudfront.net/5572744/654f9b66cb757_Logo_sito2.png" 
              alt="Leger Lab Logo White" 
              className="w-[200px] mb-6" 
            />
            <img 
              src="https://d1yei2z3i6k35z.cloudfront.net/5572744/654fa36a67712_bollini.png" 
              alt="Certifications" 
              className="w-[500px] max-w-full mb-4" 
            />
            <p className="text-white text-[16px] mt-2">#feelLéger</p>
          </div>

          {/* Navigation - Matches Sitemap Order */}
          <div className="md:col-span-3 flex flex-col gap-3">
            {[
              { label: 'About us', path: RoutePath.ABOUT },
              { label: 'Diventa rivenditore', path: RoutePath.RETAILERS },
              { label: 'FAQ', path: RoutePath.FAQ },
              { label: 'Spedizioni e Resi', path: RoutePath.SHIPPING },
              { label: 'Privacy policy', path: RoutePath.PRIVACY },
            ].map(link => (
              <button 
                key={link.label} 
                onClick={() => navigate(link.path)}
                className="text-left text-white text-[16px] hover:text-brand-fresh transition-colors font-normal"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Contacts */}
          <div className="md:col-span-4 text-white">
            <h4 className="text-[18px] font-bold mb-4">Contatti</h4>
            <div className="flex items-center gap-2 mb-2 text-[16px]">
              <span className="text-xl">✉</span>
              <span>info@legerlab.com</span>
            </div>
            <div className="flex items-start gap-2 text-[16px]">
              <span className="text-xl mt-1">📍</span>
              <div>
                <strong>Activea Srls</strong> - via Roma 72/D<br/>
                35010 Villafranca Padovana (PD)
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Social */}
        <div className="border-t border-white/20 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-[14px] text-white text-center md:text-left">
            © Léger LAB - marchio registrato di Activea Srls
          </p>
          
          <div className="flex gap-6">
            <a href="https://www.instagram.com/legerlab_official/" target="_blank" rel="noreferrer">
              <img src="https://d1yei2z3i6k35z.cloudfront.net/5572744/654f96ff521ce_Instagram_V2.png" alt="Instagram" className="w-[30px]" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61550876933299" target="_blank" rel="noreferrer">
              <img src="https://d1yei2z3i6k35z.cloudfront.net/5572744/654f96edae769_Facebook_V2.png" alt="Facebook" className="w-[30px]" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;