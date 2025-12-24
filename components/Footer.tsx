
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="brand-green text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Nur Mutiara Riau</h3>
            <p className="text-gray-300">
              {t('footer.about')}
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 tracking-wider uppercase">{t('footer.contact')}</h4>
            <div className="space-y-2 text-gray-300">
               <p><strong>{t('contact.address')}:</strong> Kompleks Sudirman Point, Jl. Jend Sudirman, Simpang Tiga, Kec. Bukit Raya, Kota Pekanbaru, 28288</p>
               <p><strong>{t('contact.email')}:</strong> info@nmr.co.id</p>
               <p><strong>{t('contact.phone')}:</strong> +62 821 6465 1830</p>
            </div>
          </div>

          {/* Our Commitment */}
          <div>
            <h4 className="text-lg font-semibold mb-4 tracking-wider uppercase">{t('footer.commitment')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>✓ {t('footer.commitment.1')}</li>
              <li>✓ {t('footer.commitment.2')}</li>
              <li>✓ {t('footer.commitment.3')}</li>
              <li>✓ {t('footer.commitment.4')}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 bg-opacity-50">
        <div className="container mx-auto px-6 py-4 text-center text-gray-400 text-sm">
          <p>{t('footer.copyright')} &copy; {new Date().getFullYear()} {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
