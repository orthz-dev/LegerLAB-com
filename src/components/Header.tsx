import React, { useState } from 'react';
import { NavItem, RoutePath } from '../types';
import { useNavigate, useLocation } from 'react-router-dom';

const NAV_ITEMS: NavItem[] = [
  { label: 'Collant drenante anticellulite', path: RoutePath.COLLANT },
  { label: 'Come funziona il collant', path: RoutePath.HOW_TO },
  { label: 'Lavora con noi', path: RoutePath.RETAILERS },
  { 
    label: 'Blog', 
    path: '#',
    children: [
      { label: 'Lo sapevi che', path: RoutePath.BLOG_DID_YOU_KNOW },
      { label: 'Magazine', path: RoutePath.BLOG_MAGAZINE },
    ]
  },
  { label: 'Domande frequenti', path: RoutePath.FAQ },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    if (path !== '#') {
      navigate(path);
      setIsOpen(false);
      setDropdownOpen(false);
    }
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm font-lato">
      <div className="max-w-[1120px] mx-auto px-4 md:px-10 py-2 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleNav(RoutePath.HOME)} 
          className="cursor-pointer flex-shrink-0"
        >
          <img 
            src="https://d1yei2z3i6k35z.cloudfront.net/5572744/654f9b33dfaf4_Logo_sito.png" 
            alt="Léger LAB" 
            className="w-[80px] object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative group">
              <button
                onClick={() => item.children ? setDropdownOpen(!dropdownOpen) : handleNav(item.path)}
                onMouseEnter={() => item.children && setDropdownOpen(true)}
                className="flex items-center gap-1 text-[14px] font-normal text-brand-strong hover:text-brand-text transition-all"
              >
                {item.label}
                {item.children && <span className="text-[10px]">▼</span>}
              </button>
              
              {/* Dropdown */}
              {item.children && (
                <div 
                  className={`absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[150px] transition-all duration-200 ${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {item.children.map(child => (
                    <button
                      key={child.label}
                      onClick={() => handleNav(child.path)}
                      className="block w-full text-left px-4 py-2 text-[14px] text-brand-strong hover:bg-brand-soft"
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span className="block w-[33px] h-[4px] bg-brand-strong rounded-[3px]"></span>
          <span className="block w-[33px] h-[4px] bg-brand-strong rounded-[3px]"></span>
          <span className="block w-[33px] h-[4px] bg-brand-strong rounded-[3px]"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-screen bg-white w-[300px] shadow-2xl transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
           <button onClick={() => setIsOpen(false)} className="text-2xl text-brand-strong">&times;</button>
        </div>
        <nav className="flex flex-col gap-4 p-6">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="border-b border-gray-100 pb-2">
              <button
                onClick={() => item.children ? setDropdownOpen(!dropdownOpen) : handleNav(item.path)}
                className="flex w-full justify-between items-center text-left text-[16px] text-brand-strong font-normal"
              >
                {item.label}
                {item.children && <span>{dropdownOpen ? '▲' : '▼'}</span>}
              </button>
              {item.children && dropdownOpen && (
                <div className="pl-4 mt-2 flex flex-col gap-2">
                  {item.children.map(child => (
                    <button
                      key={child.label}
                      onClick={() => handleNav(child.path)}
                      className="text-left text-[14px] text-brand-text"
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
      {isOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setIsOpen(false)} />}
    </header>
  );
};

export default Header;