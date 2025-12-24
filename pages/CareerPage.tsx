
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const JobOpening = ({ title, location, type }: { title: string, location: string, type: string }) => (
  <div className="p-6 border border-gray-200 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center hover:shadow-md transition-shadow duration-300">
      <div className="mb-4 sm:mb-0">
          <h4 className="text-xl font-medium text-brand-green">{title}</h4>
          <p className="text-gray-500">{location} | {type}</p>
      </div>
      <a href="#" className="text-white bg-brand-green font-semibold py-2 px-6 rounded-md hover:opacity-90 transition-opacity duration-300 whitespace-nowrap">Apply Now</a>
  </div>
);

const CareerPage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white pt-24 min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('career.title')}</h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mt-2 mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('career.subtitle')}</p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-700 mb-8 text-center">{t('career.openings')}</h3>
            <div className="space-y-6">
                <JobOpening title={t('career.jobs.1.title')} location={t('career.jobs.1.location')} type={t('career.jobs.1.type')} />
                <JobOpening title={t('career.jobs.2.title')} location={t('career.jobs.2.location')} type={t('career.jobs.2.type')} />
                <JobOpening title={t('career.jobs.3.title')} location={t('career.jobs.3.location')} type={t('career.jobs.3.type')} />
                <JobOpening title={t('career.jobs.4.title')} location={t('career.jobs.4.location')} type={t('career.jobs.4.type')} />
                <JobOpening title={t('career.jobs.5.title')} location={t('career.jobs.5.location')} type={t('career.jobs.5.type')} />
            </div>
            <div className="mt-12 text-center bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{t('career.notfound.title')}</h4>
              <p className="text-gray-600">{t('career.notfound.description')}</p>
               <p className="text-center mt-6">
                  <a href="mailto:careers@nmr.co.id" className="text-brand-green font-semibold text-lg hover:underline">careers@nmr.co.id</a>
              </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default CareerPage;
