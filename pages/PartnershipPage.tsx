
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const PartnershipCard = ({ title, description, iconPath }: { title: string, description: string, iconPath: string }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-center">
        <div className="flex justify-center mb-4">
             <div className="brand-green p-4 rounded-full text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath}></path></svg>
             </div>
        </div>
        <h3 className="text-2xl font-semibold text-brand-green mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const PartnershipPage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white">
       {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=30')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-white px-4">
          <h2 className="text-5xl md:text-6xl font-bold">{t('partnership.hero.title')}</h2>
          <p className="text-lg md:text-xl mt-4">{t('partnership.hero.subtitle')}</p>
        </div>
      </section>

      {/* Why Partner Section */}
       <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h3 className="text-4xl font-bold text-gray-800">{t('partnership.why.title')}</h3>
                <div className="w-24 h-1 bg-brand-green mx-auto mt-2"></div>
                 <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">{t('partnership.why.description')}</p>
            </div>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="text-center p-6">
                <h4 className="text-2xl font-bold text-brand-green mb-2">{t('partnership.benefits.1.title')}</h4>
                <p className="text-gray-600">{t('partnership.benefits.1.description')}</p>
            </div>
             <div className="text-center p-6">
                <h4 className="text-2xl font-bold text-brand-green mb-2">{t('partnership.benefits.2.title')}</h4>
                <p className="text-gray-600">{t('partnership.benefits.2.description')}</p>
            </div>
             <div className="text-center p-6">
                <h4 className="text-2xl font-bold text-brand-green mb-2">{t('partnership.benefits.3.title')}</h4>
                <p className="text-gray-600">{t('partnership.benefits.3.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Models Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h3 className="text-4xl font-bold text-gray-800">{t('partnership.models.title')}</h3>
                <div className="w-24 h-1 bg-brand-green mx-auto mt-2"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <PartnershipCard 
                    title={t('partnership.models.1.title')}
                    description={t('partnership.models.1.description')}
                    iconPath="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <PartnershipCard 
                    title={t('partnership.models.2.title')}
                    description={t('partnership.models.2.description')}
                    iconPath="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01"
                />
                 <PartnershipCard 
                    title={t('partnership.models.3.title')}
                    description={t('partnership.models.3.description')}
                    iconPath="M5 12h14M12 5l7 7-7 7"
                />
            </div>
        </div>
      </section>

       {/* CTA Section */}
      <section className="brand-green py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">{t('partnership.cta.title')}</h3>
           <div className="w-24 h-1 bg-white mx-auto mt-2 mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg mb-8">{t('partnership.cta.description')}</p>
          <NavLink to="/contact" className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-md hover:bg-gray-200 transition-colors duration-300">
            {t('partnership.cta.button')}
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default PartnershipPage;
