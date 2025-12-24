
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TeamMember = ({ name, title }: { name: string, title: string }) => (
    <div className="text-center flex flex-col items-center">
        <div className="w-40 h-40 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4 shadow-lg text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
        </div>
        <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
        <p className="text-brand-green">{title}</p>
    </div>
);

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=20')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-white px-4">
          <h2 className="text-5xl md:text-6xl font-bold">{t('about.hero.title')}</h2>
          <p className="text-lg md:text-xl mt-4">{t('about.hero.subtitle')}</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-4">{t('about.story.title')}</h3>
              <div className="w-24 h-1 bg-brand-green mb-6"></div>
              <div className="text-gray-600 text-lg space-y-4 leading-relaxed">
                  <p>{t('about.story.p1')}</p>
                  <p>{t('about.story.p2')}</p>
              </div>
            </div>
            <div>
              <img src="https://picsum.photos/800/600?random=21" alt="Company team" className="rounded-lg shadow-2xl"/>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision, Goals, Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="brand-green p-8 text-white rounded-lg shadow-lg">
              <h4 className="text-4xl font-bold mb-4">{t('about.vision.title')}</h4>
              <div className="w-16 h-0.5 bg-white mb-6"></div>
              <p className="text-lg leading-relaxed">{t('about.vision.content')}</p>
            </div>
            {/* Goals */}
            <div className="brand-green p-8 text-white rounded-lg shadow-lg md:col-span-2">
              <h4 className="text-4xl font-bold mb-4">{t('about.goals.title')}</h4>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <div className="w-16 h-0.5 bg-white mb-2"></div>
                  <p className="text-lg">{t('about.goals.1')}</p>
                </div>
                <div>
                  <div className="w-16 h-0.5 bg-white mb-2"></div>
                  <p className="text-lg">{t('about.goals.2')}</p>
                </div>
                <div>
                  <div className="w-16 h-0.5 bg-white mb-2"></div>
                  <p className="text-lg">{t('about.goals.3')}</p>
                </div>
              </div>
            </div>
            {/* Mission - on new row for this layout */}
            <div className="brand-green p-8 text-white rounded-lg shadow-lg md:col-span-3">
              <h4 className="text-4xl font-bold mb-4">{t('about.mission.title')}</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
                <div>
                    <div className="w-16 h-0.5 bg-white mb-2"></div>
                    <p className="text-lg">{t('about.mission.1')}</p>
                </div>
                <div>
                    <div className="w-16 h-0.5 bg-white mb-2"></div>
                    <p className="text-lg">{t('about.mission.2')}</p>
                </div>
                <div>
                    <div className="w-16 h-0.5 bg-white mb-2"></div>
                    <p className="text-lg">{t('about.mission.3')}</p>
                </div>
                <div>
                    <div className="w-16 h-0.5 bg-white mb-2"></div>
                    <p className="text-lg">{t('about.mission.4')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800">{t('about.team.title')}</h3>
            <div className="w-24 h-1 bg-brand-green mx-auto mt-2"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            <TeamMember name="Nurlia" title="Komisaris" />
            <TeamMember name="Nurul Aulia" title="Direktur Utama" />
            <TeamMember name="Ivan Heriansyah" title="Direktur" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
