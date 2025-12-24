
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-60"></div>
        <div className="relative z-10 text-white px-4 max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            {t('home.hero.title')}
          </h2>
          <p className="max-w-4xl mx-auto text-lg md:text-2xl mb-10 leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink to="/about" className="bg-brand-green text-white font-semibold py-4 px-10 rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-lg">
              {t('home.hero.cta')}
            </NavLink>
            <NavLink to="/contact" className="bg-white text-brand-green font-semibold py-4 px-10 rounded-md hover:bg-gray-100 transition-all duration-300 shadow-lg">
              {t('home.hero.contact')}
            </NavLink>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-brand-green text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-2">{t('home.stats.title')}</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">38,564</div>
              <div className="text-lg md:text-xl opacity-90">{t('home.stats.forest')}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">1.2M+</div>
              <div className="text-lg md:text-xl opacity-90">{t('home.stats.carbon')}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">15+</div>
              <div className="text-lg md:text-xl opacity-90">{t('home.stats.community')}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">25+</div>
              <div className="text-lg md:text-xl opacity-90">{t('home.stats.partners')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80" alt="Mission" className="rounded-lg shadow-2xl w-full h-auto object-cover"/>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">{t('home.mission.title')}</h3>
              <div className="w-24 h-1 bg-brand-green mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t('home.mission.content')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-4">{t('home.vision.title')}</h3>
              <div className="w-24 h-1 bg-brand-green mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t('home.vision.content')}
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80" alt="Vision" className="rounded-lg shadow-2xl w-full h-auto object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800">{t('home.services.title')}</h3>
            <div className="w-24 h-1 bg-brand-green mx-auto mt-2"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-brand-green">
              <div className="text-brand-green mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">{t('home.services.carbon.title')}</h4>
              <p className="text-gray-600 leading-relaxed">{t('home.services.carbon.desc')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-brand-green">
              <div className="text-brand-green mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">{t('home.services.forest.title')}</h4>
              <p className="text-gray-600 leading-relaxed">{t('home.services.forest.desc')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-brand-green">
              <div className="text-brand-green mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">{t('home.services.community.title')}</h4>
              <p className="text-gray-600 leading-relaxed">{t('home.services.community.desc')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-brand-green">
              <div className="text-brand-green mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">{t('home.services.research.title')}</h4>
              <p className="text-gray-600 leading-relaxed">{t('home.services.research.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="brand-green py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-4">{t('partnership.cta')}</h3>
           <div className="w-24 h-1 bg-white mx-auto mt-2 mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-10">
            {t('partnership.intro')}
          </p>
          <NavLink to="/partnership" className="bg-white text-brand-green font-semibold py-4 px-10 rounded-md hover:bg-gray-100 transition-all duration-300 shadow-lg inline-block">
            {t('partnership.contact')}
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
