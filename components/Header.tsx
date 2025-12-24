
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClass = isHomePage && !isScrolled 
    ? 'bg-transparent text-white' 
    : 'bg-white text-gray-800 shadow-md';
  
  const linkClass = isHomePage && !isScrolled
    ? 'hover:text-gray-300'
    : 'hover:text-brand-green';

  const activeLinkClass = isHomePage && !isScrolled
    ? 'text-white border-b-2 border-white'
    : 'text-brand-green border-b-2 border-brand-green';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <NavLink to="/">Nur Mutiara Riau</NavLink>
        </h1>
        <div className="flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-8">
               <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    isActive ? `${activeLinkClass} font-semibold pb-1` : `${linkClass} pb-1 transition-colors`
                  }
                >
                  {t('nav.about')}
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => 
                    isActive ? `${activeLinkClass} font-semibold pb-1` : `${linkClass} pb-1 transition-colors`
                  }
                >
                  {t('nav.services')}
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/partnership" 
                  className={({ isActive }) => 
                    isActive ? `${activeLinkClass} font-semibold pb-1` : `${linkClass} pb-1 transition-colors`
                  }
                >
                  {t('nav.partnership')}
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    isActive ? `${activeLinkClass} font-semibold pb-1` : `${linkClass} pb-1 transition-colors`
                  }
                >
                  {t('nav.contact')}
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/career" 
                  className={({ isActive }) => 
                    isActive ? `${activeLinkClass} font-semibold pb-1` : `${linkClass} pb-1 transition-colors`
                  }
                >
                  {t('nav.career')}
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* Language Switcher */}
          <div className={`flex items-center space-x-2 pl-6 ${isHomePage && !isScrolled ? 'border-l border-white border-opacity-30' : 'border-l border-gray-300'}`}>
            <button
              onClick={() => setLanguage('id')}
              className={`px-3 py-1 rounded font-semibold transition-all text-sm ${
                language === 'id'
                  ? 'bg-white text-brand-green shadow-md'
                  : (isHomePage && !isScrolled ? 'bg-gray-800 bg-opacity-60 text-white border border-white border-opacity-40 hover:bg-white hover:text-brand-green' : 'text-gray-600 border border-gray-300 hover:bg-gray-100')
              }`}
            >
              IDN
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded font-semibold transition-all text-sm ${
                language === 'en'
                  ? 'bg-white text-brand-green shadow-md'
                  : (isHomePage && !isScrolled ? 'bg-gray-800 bg-opacity-60 text-white border border-white border-opacity-40 hover:bg-white hover:text-brand-green' : 'text-gray-600 border border-gray-300 hover:bg-gray-100')
              }`}
            >
              ENG
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
