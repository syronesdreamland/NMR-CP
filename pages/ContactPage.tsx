
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white pt-32 pb-16 min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('contact.title')}</h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mt-2 mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">{t('contact.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="brand-green p-3 rounded-full text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{t('contact.address')}</h3>
                <p className="text-gray-600">Kompleks Sudirman Point, Jl. Jend Sudirman, Simpang Tiga, Kec. Bukit Raya, Kota Pekanbaru, 28288</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="brand-green p-3 rounded-full text-white">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{t('contact.email')}</h3>
                <p className="text-gray-600">info@nmr.co.id</p>
              </div>
            </div>
             <div className="flex items-start space-x-4">
              <div className="brand-green p-3 rounded-full text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{t('contact.phone')}</h3>
                <p className="text-gray-600">+62 821 6465 1830</p>
              </div>
            </div>
             <div className="pt-6">
                <a href="https://wa.me/6282164651830" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-500 text-white font-semibold py-3 px-8 rounded-md hover:bg-green-600 transition-colors duration-300 w-full md:w-auto">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.956-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l-1.317 4.814 4.893-1.282z"/></svg>
                    {t('contact.whatsapp')}
                </a>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <form action="https://formsubmit.co/info@nmr.co.id" method="POST">
                  <input type="hidden" name="_subject" value="New Contact Form Submission from NMR Website" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={window.location.origin + "/contact?success=true"} />
                  
                  <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">{t('contact.form.name')}</label>
                      <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green" required />
                  </div>
                  <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">{t('contact.form.email')}</label>
                      <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green" required />
                  </div>
                  <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">{t('contact.form.message')}</label>
                      <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green" required></textarea>
                  </div>
                  <div className="text-center">
                      <button type="submit" className="bg-brand-green text-white font-semibold py-3 px-10 rounded-md hover:opacity-90 transition-opacity duration-300 w-full">
                          {t('contact.form.submit')}
                      </button>
                  </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
