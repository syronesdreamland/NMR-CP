
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ServiceSection = ({ title, description, imageUrl, reverse = false }: { title: string, description: string, imageUrl: string, reverse?: boolean }) => {
  const image = <div className="md:w-1/2"><img src={imageUrl} alt={title} className="rounded-lg shadow-xl w-full h-full object-cover" /></div>;
  const text = (
    <div className="md:w-1/2 flex items-center">
      <div className="p-8">
        <h3 className="text-3xl font-bold text-brand-green mb-4">{title}</h3>
        <div className="w-20 h-1 bg-gray-300 mb-6"></div>
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );

  return (
    <div className={`flex flex-col md:flex-row gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      {image}
      {text}
    </div>
  );
};


const ServicesPage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white pt-24 min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('services.title')}</h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mt-2 mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('services.subtitle')}</p>
        </div>
        
        <div className="space-y-24">
          <ServiceSection
            title={t('services.carbon.title')}
            description={t('services.carbon.description')}
            imageUrl="https://picsum.photos/800/600?random=10"
          />
          <ServiceSection
            title={t('services.restoration.title')}
            description={t('services.restoration.description')}
            imageUrl="https://picsum.photos/800/600?random=11"
            reverse={true}
          />
          <ServiceSection
            title={t('services.community.title')}
            description={t('services.community.description')}
            imageUrl="https://picsum.photos/800/600?random=12"
          />
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
